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
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="work">Work</TabsTrigger>
					<TabsTrigger value="education">Education</TabsTrigger>
				</TabsList>

				<TabsContent value="work">
					<Card>
						<CardContent>
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
					<Card>
						<CardContent>
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

function EduTimelineItem({
	logo,
	startDate,
	endDate,
	level,
	institution,
	qualification,
}: EduTimelineEntry) {
	return (
		<div className="flex gap-3 p-3 relative">
			<div className="shrink-0">
				<div className="border border-slate-700 rounded-full bg-slate-900 size-16 overflow-hidden">
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

			<div className="space-y-1">
				<div className="text-sm text-slate-400">
					{startDate} – {endDate}
				</div>
				<p className="text-slate-400 text-sm">{level}</p>
				<h2 className="text-slate-200 font-semibold">{institution}</h2>
				<p className="text-slate-400 text-sm">{qualification}</p>
			</div>
		</div>
	);
}

function WorkTimelineItem({ logo, startDate, endDate, employer, role }: WorkTimelineEntry) {
	return (
		<div className="flex gap-3 p-3 relative">
			<div className="shrink-0">
				<div className="border border-slate-700 rounded-full bg-slate-900 size-16 overflow-hidden">
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

			<div className="space-y-1">
				<div className="text-sm text-slate-400">
					{startDate} – {endDate}
				</div>
				<h2 className="text-slate-200 font-semibold">{employer}</h2>
				<p className="text-sm text-slate-400">{role}</p>
			</div>
		</div>
	);
}

export default Experience;
