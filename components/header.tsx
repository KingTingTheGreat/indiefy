'use client';
import Link from 'next/link';
import ProfileLink from '@/components/profileLink';
import { useUserContext } from '@/context/userContext';

const Header = () => {
  const userContext = useUserContext();
  const { loggedIn } = userContext.state;

  const NavLink = ({
    children,
    path,
  }: {
    children: React.ReactNode;
    path: string;
  }) => {
    return (
      <Link
        href={path}
        className="m-1 p-2 text-lg max-sm:text-md rounded hover:bg-[#222] hover:text-customGreen max-sm:p-1 transition-all"
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="flex flex-row max-sm:flex-col justify-between max-sm:justify-around items-center w-screen max-w-screen bg-nullGray h-[6vh] max-sm:h-[15vh]">
      <Link href="/" className="font-superindie hover:text-customGreen">
        <h2 className="text-6xl">Indiefy</h2>
      </Link>
      <nav className="flex justify-between items-center">
        {loggedIn && <ProfileLink />}
        <NavLink path="/rankings">Rankings</NavLink>
        <NavLink path="/distribution">Distribution</NavLink>
        <NavLink path="/about">About</NavLink>
      </nav>
    </header>
  );
};

export default Header;
