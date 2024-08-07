'use client';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/context/userContext';

const Footer = () => {
  const router = useRouter();
  const userContext = useUserContext();
  const { loggedIn } = userContext.state;

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
      ) : (
        <p>Made with ❤️</p>
      )}
    </footer>
  );
};

export default Footer;
