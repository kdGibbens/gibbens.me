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
        "Front-end Engineer for the online dealership web application Driveway.com. In my position, I worked across a variety of teams, but primarily my home team was for the Shopping Cart experience. We used a mix of technologies including React.js with Typescript interacting with Restful API services providing GET, PATCH, and POST endpoints. The cart experience consisted of complex paths that included being able to add trade-in vehicles, add dealership incentives, and calculate vehicle costs and taxes and fees for all 50 states and US territories. We provided buying options with Cash, Financing, and Leasing for all vehicle types for a variety of makes and models (New and Used). For Finance and Leasing, we collected information that would provide real-time predictions if the applicant would be approved. All of these features were being updated into a new cart experience that was building new components and services from start to finish.",
      title: "Font-end Engineer",
      skills: ["react", "typescript", "TSS", "MUI", "Next"],
    },
    {
      company: "CloudBolt Software",
      description:
        "Front-end Engineer for the cloud management company CloudBolt. In my position, I was the only Front-end Engineer on the main CloudBolt application. My responsibilities included UI development with Sass, Less, HTML5, Django templating, JavaScript (ES6+ and vanilla/jQuery), Vue.js, and leading the Front-end for the team as they moved to a more modern approach. I introduced Jest testing, WebPack bundling, and VueJS micro front-ends and continued to enhance and maintain the current UI.",
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
        "Develop, refactor and customize Front-end UI for Educational testing on boarding and Admin dashboard for related application. Utilize a variety of company API’s as well as third party API’s such as SalesForce, Using Vue.js, Vue-router, axios.js, laravel blade templates, ES6, Less, CSS, VueBootstrap, moment.js and HTML5 to develop and improve on current application.",
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
