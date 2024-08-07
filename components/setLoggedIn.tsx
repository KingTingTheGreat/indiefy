'use client';
import { useEffect } from 'react';
import { useUserContext } from '@/context/userContext';
import { SUCCESS_MESSAGE } from '@/constants';

const SetLoggedIn = ({ children }: { children: React.ReactNode }) => {
  const userContext = useUserContext();

  useEffect(() => {
    if (!userContext.state.sessionId) {
      userContext.save({
        loggedIn: false,
        sessionId: '',
        user: {},
      });
      return;
    }
    const verifySession = async () => {
      const res = await fetch('/api/verify');
      const data = await res.json();
      if (data.message === SUCCESS_MESSAGE) {
        userContext.set({
          loggedIn: true,
        });
      } else {
        userContext.save({
          loggedIn: false,
          sessionId: '',
          user: {},
        });
      }
    };
    verifySession();
  }, [userContext.state.sessionId]);

  return <>{children}</>;
};

export default SetLoggedIn;
