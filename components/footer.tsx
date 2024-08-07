'use client';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/context/userContext';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import getLoginLink from '@/lib/spotify/getLoginLink';
import Link from 'next/link';

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const userContext = useUserContext();
  const { loggedIn } = userContext.state;
  const [loginLink, setLoginLink] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const link = await getLoginLink();
      setLoginLink(link);
    };
    fetchData();
  }, []);

  return (
    <footer className="flex flex-col justify-center items-center w-screen max-w-screen h-[5vh] bg-nullGray text-2xl">
      {loggedIn ? (
        <button
          onClick={() => {
            userContext.clear();
            router.push('/');
          }}
        >
          Sign out
        </button>
      ) : pathname === '/' ? (
        <p>Made with ❤️</p>
      ) : (
        <Link
          href={loginLink || pathname}
          className="hover:text-customGreen hover:underline"
        >
          Login with Spotify
        </Link>
      )}
    </footer>
  );
};

export default Footer;
