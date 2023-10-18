const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className="text-slate-50 py-4">&copy; {year}</footer>;
};

export default Footer;
