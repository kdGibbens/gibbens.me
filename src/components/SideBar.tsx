import NavBar from './NavBar';

const SideBar = () => {
  return (
    <aside className="md:basis-1/3 flex flex-col md:justify-between relative">
      <div className="lg:pt-20 text-center md:text-left md:fixed">
        <h1 className="text-2xl md:text-3xl text-slate-50">Kelly Gibbens</h1>
        <h2 className="text-md text-slate-50">Front-end Software Engineer</h2>
        <NavBar />
      </div>
    </aside>
  );
};

export default SideBar;
