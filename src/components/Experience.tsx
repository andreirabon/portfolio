import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { EduTimelineEntry, TimelineItemProps, WithId, WorkTimelineEntry } from "@/lib/types";
import { memo, useMemo } from "react";

// ==========================================
// Timeline Data
// ==========================================

const EDUCATION_DATA: readonly EduTimelineEntry[] = [
  {
    id: 1,
    logo: "wmsu.jpg",
    startDate: "2021",
    endDate: "2024",
    institution: "Western Mindanao State University",
    level: "Postgraduate",
    qualification: "Master of Public Administration Major in Personnel Administration",
  },
  {
    id: 2,
    logo: "pczc.png",
    startDate: "2016",
    endDate: "2019",
    level: "Undergraduate",
    institution: "Pilar College",
    qualification: "Bachelor of Science in Information Technology",
  },
] as const;

const WORK_DATA: readonly WorkTimelineEntry[] = [
  {
    id: 1,
    logo: "aka.jpg",
    startDate: "January 2022",
    endDate: "May 2025",
    employer: "AKA Software Inc.",
    role: "Quality Assurance Tester",
  },
  {
    id: 2,
    logo: "psa.png",
    startDate: "August 2021",
    endDate: "October 2021",
    employer: "Philippine Statistics Authority RFO 9",
    role: "Data Map Screener",
  },
  {
    id: 3,
    logo: "da.png",
    startDate: "January 2020",
    endDate: "December 2020",
    employer: "Department of Agriculture RFO 9",
    role: "Administrative Aide III",
  },
  {
    id: 4,
    logo: "dict.png",
    startDate: "November 2018",
    endDate: "January 2019",
    employer: "Department of Information and Communications Technology RFO 9",
    role: "Internship",
  },
] as const;

// ==========================================
// Helper Functions
// ==========================================

/**
 * Determines if a work entry is current
 * @param endDate - The end date string
 * @returns Boolean indicating if the position is current
 */
const isCurrentPosition = (endDate: string): boolean =>
  endDate.toLowerCase() === "present" || endDate.toLowerCase() === "current";

/**
 * Formats date range for display
 * @param startDate - Start date string
 * @param endDate - End date string
 * @returns Formatted date range string
 */
const formatDateRange = (startDate: string, endDate: string): string => `${startDate} – ${endDate}`;

// ==========================================
// Education Timeline Item Component
// ==========================================

const EduTimelineItem = memo<TimelineItemProps<EduTimelineEntry>>(({ entry }) => {
  const { logo, startDate, endDate, level, institution, qualification } = entry;

  const dateRange = useMemo(() => formatDateRange(startDate, endDate), [startDate, endDate]);

  return (
    <article className="flex gap-3 p-3 relative transition-all duration-300 hover:bg-slate-800/50 rounded-lg cursor-pointer group">
      <div className="shrink-0 transition-transform group-hover:scale-105">
        <div className="border border-slate-700/50 rounded-full bg-slate-900/90 size-16 overflow-hidden shadow-lg">
          <img
            src={logo}
            alt={`${institution} logo`}
            className="object-cover size-full"
            loading="lazy"
            width={64}
            height={64}
          />
        </div>
      </div>

      <div className="space-y-2 min-w-0 flex-1">
        <time
          className="text-sm font-medium text-primary"
          dateTime={`${startDate}/${endDate}`}>
          {dateRange}
        </time>
        <h3 className="text-slate-200 font-semibold text-lg leading-tight">{qualification}</h3>
        <p className="text-sm text-slate-400/70">{level}</p>
        <p className="text-sm text-slate-400/70">{institution}</p>
      </div>
    </article>
  );
});

EduTimelineItem.displayName = "EduTimelineItem";

// ==========================================
// Work Timeline Item Component
// ==========================================

const WorkTimelineItem = memo<TimelineItemProps<WorkTimelineEntry>>(({ entry }) => {
  const { logo, startDate, endDate, employer, role } = entry;

  const dateRange = useMemo(() => formatDateRange(startDate, endDate), [startDate, endDate]);

  const isCurrent = useMemo(() => isCurrentPosition(endDate), [endDate]);

  return (
    <article className="flex gap-3 p-3 relative transition-all duration-300 hover:bg-slate-800/50 rounded-lg cursor-pointer group">
      <div className="shrink-0 transition-transform group-hover:scale-105">
        <div className="border border-slate-700/50 rounded-full bg-slate-900/90 size-16 overflow-hidden shadow-lg">
          <img
            src={logo}
            alt={`${employer} logo`}
            className="object-cover size-full"
            loading="lazy"
            width={64}
            height={64}
          />
        </div>
      </div>

      <div className="space-y-2 min-w-0 flex-1">
        <time
          className="text-sm font-medium text-primary"
          dateTime={`${startDate}/${endDate}`}>
          {dateRange}
        </time>
        <h3 className="text-slate-200 font-semibold text-lg leading-tight">{role}</h3>
        <p className="text-sm text-slate-400/70">{employer}</p>
      </div>

      {isCurrent && (
        <span
          className="absolute right-4 top-4 px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full"
          aria-label="Current position">
          Current
        </span>
      )}
    </article>
  );
});

WorkTimelineItem.displayName = "WorkTimelineItem";

// ==========================================
// Timeline Section Component
// ==========================================

interface TimelineSectionProps<T extends WithId> {
  readonly title: string;
  readonly data: readonly T[];
  readonly renderItem: (entry: T) => React.ReactNode;
  readonly emptyMessage?: string;
}

function TimelineSection<T extends WithId>({
  title,
  data,
  renderItem,
  emptyMessage = "No entries to display",
}: TimelineSectionProps<T>): React.ReactElement {
  const timelineItems = useMemo(() => data.map(renderItem), [data, renderItem]);

  return (
    <Card className="border-slate-700/30 bg-slate-900/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div
          className="space-y-2"
          role="list"
          aria-label={title}>
          {timelineItems.length > 0 ? (
            timelineItems
          ) : (
            <p className="text-slate-400/70 text-center py-8 italic">{emptyMessage}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// ==========================================
// Main Experience Component
// ==========================================

interface ExperienceProps {
  readonly className?: string;
}

const Experience = memo<ExperienceProps>(({ className }) => {
  const containerClassName = useMemo(() => {
    const baseClasses = "space-y-6";
    return className ? `${baseClasses} ${className}` : baseClasses;
  }, [className]);

  const renderWorkItem = useMemo(
    () => (entry: WorkTimelineEntry) =>
      (
        <WorkTimelineItem
          key={entry.id}
          entry={entry}
        />
      ),
    [],
  );

  const renderEducationItem = useMemo(
    () => (entry: EduTimelineEntry) =>
      (
        <EduTimelineItem
          key={entry.id}
          entry={entry}
        />
      ),
    [],
  );

  return (
    <section
      className={containerClassName}
      aria-labelledby="experiences-heading">
      <header>
        <h2
          id="experiences"
          className="inter text-2xl font-bold tracking-wide dark:text-gray-100 mb-6">
          Experience
        </h2>
      </header>

      <Tabs
        defaultValue="work"
        className="h-full w-full">
        <TabsList
          className="grid w-full grid-cols-2 mb-6"
          role="tablist">
          <TabsTrigger
            value="work"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            role="tab"
            aria-controls="work-panel">
            Work History ({WORK_DATA.length})
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            role="tab"
            aria-controls="education-panel">
            Education ({EDUCATION_DATA.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="work"
          id="work-panel"
          role="tabpanel"
          aria-labelledby="work-tab">
          <TimelineSection
            title="Work History"
            data={WORK_DATA}
            renderItem={renderWorkItem}
            emptyMessage="No work experience to display"
          />
        </TabsContent>

        <TabsContent
          value="education"
          id="education-panel"
          role="tabpanel"
          aria-labelledby="education-tab">
          <TimelineSection
            title="Education"
            data={EDUCATION_DATA}
            renderItem={renderEducationItem}
            emptyMessage="No education entries to display"
          />
        </TabsContent>
      </Tabs>
    </section>
  );
});

Experience.displayName = "Experience";

export default Experience;
