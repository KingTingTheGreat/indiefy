'use client';
import LoginButton from '@/components/loginButton';
import { useUserContext } from '@/context/userContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const HomePage = () => {
  const userContext = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (userContext.state.loggedIn) {
      router.push('/profile');
    }
  });

  return (
    <div className="flex flex-col w-full items-center">
      <h2 className="m-5 text-6xl text-center">Find your rank</h2>
      <div className="flex flex-col w-full flex-wrap items-center justify-between p-24">
        <LoginButton />
      </div>
    </div>
  );
};

export default HomePage;
