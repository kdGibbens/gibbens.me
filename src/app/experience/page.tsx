import Card from "@/components/Card";
import Image from "next/image";
type WorkType = {
  company: string;
  description: string;
  title: string;
  skills: string[];
};

const ResumePage = () => {
  const work: WorkType[] = [
    {
      company: "Driveway.com",
      description:
        "Front-end Engineer for the online dealership web application Driveway.com. In my position, I worked across a variety of teams, but primarily my home team was for the Shopping Cart experience.",
      title: "Font-end Engineer",
      skills: ["react", "typescript", "TSS", "MUI", "Next"],
    },
    {
      company: "CloudBolt Software",
      description:
        "Front-end Engineer for the cloud management company CloudBolt. In my position, I was the only Front-end Engineer on the main CloudBolt application. ",
      title: "Front-end Engineer",
      skills: [
        "Vue",
        "jQuery",
        "Django",
        "Bootstrap",
        "Sass",
        "Less",
        'Gulp", "Webpack',
      ],
    },
    {
      company: "NWEA",
      description:
        "Develop, refactor and customize Front-end UI for Educational testing on boarding and Admin dashboard for related application.",
      title: "Front-end Developer",
      skills: ["Vue", "Vue-Bootstrap", "Laravel", "SalesForce API"],
    },
  ];
  return (
    <section className="basis-2/3 p-8 max-h-full overflow-hidden">
      {work.map((job, id) => (
        <Card
          key={id}
          title={job.company}
          description={job.description}
          subtitle={job.title}
        />
      ))}
      <p className="pt-4">
        <a
          href="/assets/Kelly_Gibbens_Resume (1).pdf"
          className="text-slate-50 hover:text-slate-50-400"
        >
          Full Resume
        </a>
      </p>
    </section>
  );
};

export default ResumePage;
