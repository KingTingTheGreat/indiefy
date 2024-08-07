'use client';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/context/userContext';

const Footer = () => {
  const router = useRouter();
  const userContext = useUserContext();
  const { loggedIn } = userContext.state;

  return (
    <footer className="flex flex-col justify-center items-center w-full h-[20%] bg-[#555]">
      <p className="text-white text-2xl">Made with ❤️</p>
      {loggedIn ? (
        <button
          onClick={() => {
            localStorage.removeItem('indiefy-token');
            router.push('/');
          }}
        >
          Sign out
        </button>
      ) : (
        <></>
      )}
    </footer>
  );
};

export default Footer;
