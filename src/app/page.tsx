import Image from 'next/image';
const Home = () => {
  return (
    <div className="md:basis-2/3 lg:pt-1">
      <p className="md:px-8 text-slate-50">
        A decade ago I decided to change directions in my life and I began
        learning to code. Flash forward to today and I have worked for a variety
        of companies big and small including Nike, Toms of Maine, Hills Petfood,
        NWEA, Cloudbolt Software and Driveway.com. I take pride in my attention
        to detail and my drive to succeed in all my projects.
      </p>
      <p className="md:px-8 py-2 text-slate-50">
        When I am not working/coding and learning, I enjoy the simple things in
        life like KU basketball. I am loving cat dad to the Archduke Franz
        Furdinand and an avid bedroom guitarist, bassist, and more recently
        synthesizers. I currently live in the Portland Metro and enjoy the life
        out on the west coast.
      </p>
      <p className="md:px-8 py-2 text-slate-50">
        <a
          target="_blank"
          href="https://github.com/kdGibbens"
          className="text-slate-400 hover:text-slate-200"
        >
          Check out my GitHub
        </a>
        .
      </p>
    </div>
  );
};

export default Home;
