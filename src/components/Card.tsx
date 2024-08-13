type CardType = {
  title: string;
  subtitle?: string;
  description: string;
  skills: string[];
};
const Card = ({ title, subtitle, description, skills }: CardType) => {
  return (
    <div className="block max-w-full rounded-lg bg-slate-50 text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mb-2">
      <div className="p-6">
        <h5 className="mb-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <h6 className="mb-2 text-base font-medium leading-tight text-neutral-500 dark:text-neutral-50">
          {subtitle}
        </h6>
        <p className="mb-4 text-base  leading-normal text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
        <div>
          Skills:
          {skills.map((skill) => {
            return ` ${skill} `;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
