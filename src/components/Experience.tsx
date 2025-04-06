import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EduTimelineEntry {
  logo: string;
  startDate: string;
  endDate: string;
  level: string;
  institution: string;
  qualification: string;
}

interface WorkTimelineEntry {
  logo: string;
  startDate: string;
  endDate: string;
  employer: string;
  role: string;
}

const education: EduTimelineEntry[] = [
  {
    logo: "wmsu.jpg",
    startDate: "2021",
    endDate: "2024",
    institution: "Western Mindanao State University",
    level: "Postgraduate",
    qualification: "Master of Public Administration Major in Personnel Administration",
  },
  {
    logo: "pczc.png",
    startDate: "2016",
    endDate: "2019",
    level: "Undergraduate",
    institution: "Pilar College",
    qualification: "Bachelor of Science in Information Technology",
  },
];

const work: WorkTimelineEntry[] = [
  {
    logo: "aka.jpg",
    startDate: "2022",
    endDate: "Present",
    employer: "AKA Software Inc.",
    role: "Quality Assurance Tester",
  },
  {
    logo: "psa.png",
    startDate: " August 2021",
    endDate: "October 2021",
    employer: "Philippine Statistics Authority RFO 9",
    role: "Data Map Screener ",
  },
  {
    logo: "da.png",
    startDate: "January 2020",
    endDate: "December 2020",
    employer: "Department of Agriculture RFO 9",
    role: "Administrative Aide III ",
  },
  {
    logo: "dict.png",
    startDate: "November 2018",
    endDate: "January 2019",
    employer: "Department of Information and Communications Technology RFO 9",
    role: "Internship",
  },
];

function Experience() {
  return (
    <>
      <h1
        id="experiences"
        className="inter text-2xl font-bold tracking-wide dark:text-gray-100">
        Experience
      </h1>

      <Tabs
        defaultValue="work"
        className="h-full w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger
            value="work"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Work History
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Education
          </TabsTrigger>
        </TabsList>

        <TabsContent value="work">
          <Card className="border-slate-700/30 bg-slate-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div>
                {work.map((entry) => (
                  <WorkTimelineItem
                    key={entry.employer}
                    {...entry}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="education">
          <Card className="border-slate-700/30 bg-slate-900/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div>
                {education.map((entry) => (
                  <EduTimelineItem
                    key={entry.institution}
                    {...entry}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

function EduTimelineItem({ logo, startDate, endDate, level, institution, qualification }: EduTimelineEntry) {
  return (
    <div className="flex gap-3 p-3 relative transition-all duration-300 hover:bg-slate-800/50 rounded-lg cursor-pointer group">
      <div className="shrink-0 transition-transform group-hover:scale-105">
        <div className="border border-slate-700/50 rounded-full bg-slate-900/90 size-16 overflow-hidden shadow-lg">
          <img
            src={logo || "/placeholder.svg"}
            alt={`${institution} logo`}
            className="object-cover size-full"
            loading="lazy"
            width={64}
            height={64}
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium text-primary">
          {startDate} – {endDate}
        </div>
        <h2 className="text-slate-200 font-semibold text-lg">{qualification}</h2>
        <p className="text-sm text-slate-400/70">{level}</p>
        <p className="text-sm text-slate-400/70">{institution}</p>
      </div>
    </div>
  );
}

function WorkTimelineItem({ logo, startDate, endDate, employer, role }: WorkTimelineEntry) {
  return (
    <div className="flex gap-3 p-3 relative transition-all duration-300 hover:bg-slate-800/50 rounded-lg cursor-pointer group">
      <div className="shrink-0 transition-transform group-hover:scale-105">
        <div className="border border-slate-700/50 rounded-full bg-slate-900/90 size-16 overflow-hidden shadow-lg">
          <img
            src={logo || "/placeholder.svg"}
            alt={`${employer} logo`}
            className="object-cover size-full"
            loading="lazy"
            width={64}
            height={64}
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium text-primary">
          {startDate} – {endDate}
        </div>
        <h2 className="text-slate-200 font-semibold text-lg">{role}</h2>
        <p className="text-sm text-slate-400/70">{employer}</p>
      </div>
      {endDate === "Present" && (
        <span className="absolute right-4 top-4 px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
          Current
        </span>
      )}
    </div>
  );
}

export default Experience;
