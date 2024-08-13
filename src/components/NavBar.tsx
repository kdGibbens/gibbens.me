'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

type LinkType = {
  url: string;
  label: string;
  id: number;
};

const NavBar = () => {
  const segment = useSelectedLayoutSegment();
  const links: LinkType[] = [
    { url: '/', label: 'About', id: 0 },
    { url: '/experience', label: 'Experience', id: 1 },
  ];

  return (
    <nav>
      <ul className="flex md:flex-col justify-evenly">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={`text-slate-50  text-xl md:text-3xl ${
              link.url === segment ? 'text-slate-500' : 'text-slate-50'
            } hover:text-slate-300 pt-2 pb-2`}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
