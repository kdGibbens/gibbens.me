import NavBar from "./NavBar";

const SideBar = () => {
  return (
    <aside className="md:h-screen md:basis-1/3 flex flex-col md:justify-between">
      <div className="lg:pt-20">
        <h1 className="text-2xl md:text-5xl text-slate-50">Kelly Gibbens</h1>
        <h2 className="text-lg text-slate-50 mt-4">
          Front-end Software Engineer
        </h2>
        <p className="text-slate-50 mt-4 md:mb-10">
          I have a passion for creating outstanding user interface experiences.
        </p>
        <NavBar />
      </div>
    </aside>
  );
};

export default SideBar;
