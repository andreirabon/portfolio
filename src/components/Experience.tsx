import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
						<CardHeader></CardHeader>
						<CardContent className="space-y-2"></CardContent>
						<CardFooter></CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="education">
					<Card>
						<CardHeader></CardHeader>
						<CardContent className="space-y-2"></CardContent>
						<CardFooter></CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</>
	);
}

export default Experience;
