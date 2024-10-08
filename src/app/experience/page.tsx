import Card from '@/components/Card';
import Image from 'next/image';
type WorkType = {
  company: string;
  description: string;
  title: string;
  skills: string[];
};

const ResumePage = () => {
  const work: WorkType[] = [
    {
      company: 'Nike',
      description:
        'Front-end Engineer for the new Digital Marketing Technology team,  building web experiments and integrating them with Adobe Target to load custom Javascript onto the e-commerce site.',
      title: 'Font-end Engineer',
      skills: ['typescript', 'adobe target', 'react'],
    },
    {
      company: 'Driveway.com',
      description:
        'Front-end Engineer for the online dealership web application Driveway.com. In my position, I worked across a variety of teams, but primarily my home team was for the Shopping Cart experience.',
      title: 'Font-end Engineer',
      skills: ['react', 'typescript', 'TSS', 'MUI', 'Next'],
    },
    {
      company: 'CloudBolt Software',
      description:
        'Front-end Engineer for the cloud management company CloudBolt. In my position, I was the only Front-end Engineer on the main CloudBolt application. ',
      title: 'Front-end Engineer',
      skills: [
        'Vue',
        'jQuery',
        'Django',
        'Bootstrap',
        'Sass',
        'Less',
        'Gulp',
        'Webpack',
      ],
    },
  ];
  return (
    <div className="md:basis-2/3 lg:pt-1">
      {work.map((job, id) => (
        <Card
          key={id}
          title={job.company}
          description={job.description}
          subtitle={job.title}
          skills={job.skills}
        />
      ))}
      <p className="pt-4">
        <a
          target="_blank"
          href="/assets/Kelly_Gibbens_Resume.pdf"
          className="text-slate-50 hover:text-slate-50-400"
        >
          Full Resume
        </a>
      </p>
    </div>
  );
};

export default ResumePage;
