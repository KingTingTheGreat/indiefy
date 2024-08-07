'use client';
import getLoginLink from '@/lib/spotify/getLoginLink';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const LoginButton = () => {
  const [loginLink, setLoginLink] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const link = await getLoginLink();
      setLoginLink(link);
    };
    fetchData();
  }, []);

  const LoginLink = (href: string) => (
    <Link
      className="m-4 px-5 py-2 w-fit max-sm:w-52 text-2xl rounded-2xl bg-customGreen text-center"
      href={href}
    >
      Login with Spotify
    </Link>
  );

  return LoginLink(loginLink || '/');
};

export default LoginButton;
