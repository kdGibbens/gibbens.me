import Footer from "./Footer";
import NavBar from "./NavBar";

const SideBar = () => {
  return (
    <aside className="h-screen basis-1/3 flex flex-col  flex-center">
      <h1 className="text-5xl text-slate-50">Kelly Gibbens</h1>
      <h2 className="text-lg text-slate-50 mt-4">
        Front-end Software Engineer
      </h2>
      <p className="text-slate-50 mt-4">
        I have a passion for creating outstanding user interface experiences.
      </p>
      <NavBar />
      <Footer />
    </aside>
  );
};

export default SideBar;