const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className="text-slate-50">&copy; {year}</footer>;
};

export default Footer;
