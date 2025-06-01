import { useCallback, useEffect, useRef, useState } from "react";

interface UseImageOptimizationOptions {
  src: string;
  preload?: boolean;
  placeholderSrc?: string;
  onLoad?: () => void;
  onError?: (error: string | Event) => void;
}

interface ImageState {
  loaded: boolean;
  error: boolean;
  loading: boolean;
  src: string;
}

export const useImageOptimization = ({
  src,
  preload = false,
  placeholderSrc,
  onLoad,
  onError,
}: UseImageOptimizationOptions) => {
  const [state, setState] = useState<ImageState>({
    loaded: false,
    error: false,
    loading: false,
    src: placeholderSrc || "",
  });

  const imgRef = useRef<HTMLImageElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleLoad = useCallback(() => {
    setState((prev) => ({
      ...prev,
      loaded: true,
      loading: false,
      src,
    }));
    onLoad?.();
  }, [src, onLoad]);

  const handleError = useCallback(
    (event: string | Event) => {
      setState((prev) => ({
        ...prev,
        error: true,
        loading: false,
      }));
      onError?.(event);
    },
    [onError],
  );

  const handleReactError = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      handleError(event.nativeEvent);
    },
    [handleError],
  );

  const loadImage = useCallback(() => {
    if (state.loading || state.loaded) return;

    setState((prev) => ({ ...prev, loading: true }));

    const img = new Image();
    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = src;
    imgRef.current = img;
  }, [src, state.loading, state.loaded, handleLoad, handleError]);

  // Intersection Observer for lazy loading
  const setupIntersectionObserver = useCallback(
    (element: HTMLElement | null) => {
      if (!element || preload) return;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            loadImage();
            observerRef.current?.disconnect();
          }
        },
        {
          rootMargin: "50px",
          threshold: 0.1,
        },
      );

      observerRef.current.observe(element);
    },
    [loadImage, preload],
  );

  // Preload image immediately if requested
  useEffect(() => {
    if (preload) {
      loadImage();
    }
  }, [preload, loadImage]);

  // Cleanup observer
  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const imgProps = {
    src: state.src,
    onLoad: state.loaded ? undefined : handleLoad,
    onError: handleReactError,
    loading: preload ? ("eager" as const) : ("lazy" as const),
    style: {
      opacity: state.loaded ? 1 : 0,
      transition: "opacity 0.3s ease-in-out",
    },
  };

  return {
    ...state,
    imgProps,
    setupIntersectionObserver,
    retryLoad: loadImage,
  };
};

// Hook for progressive image loading (placeholder -> low-res -> high-res)
export const useProgressiveImage = (lowResSrc: string, highResSrc: string, placeholderSrc?: string) => {
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc || lowResSrc);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    const loadLowRes = () => {
      const img = new Image();
      img.onload = () => {
        if (!isCancelled) {
          setCurrentSrc(lowResSrc);
          loadHighRes();
        }
      };
      img.src = lowResSrc;
    };

    const loadHighRes = () => {
      const img = new Image();
      img.onload = () => {
        if (!isCancelled) {
          setCurrentSrc(highResSrc);
          setIsLoading(false);
        }
      };
      img.src = highResSrc;
    };

    if (placeholderSrc) {
      loadLowRes();
    } else {
      loadHighRes();
    }

    return () => {
      isCancelled = true;
    };
  }, [lowResSrc, highResSrc, placeholderSrc]);

  return { src: currentSrc, isLoading };
};

// Hook for image preloading
export const useImagePreloader = (imageSources: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = imageSources.length;

    if (totalImages === 0) {
      setIsLoading(false);
      return;
    }

    imageSources.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        setLoadedImages((prev) => new Set(prev).add(src));

        if (loadedCount === totalImages) {
          setIsLoading(false);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setIsLoading(false);
        }
      };
      img.src = src;
    });
  }, [imageSources]);

  return { loadedImages, isLoading };
};
