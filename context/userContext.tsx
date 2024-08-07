import { readCookie, updateCookie } from '@/lib/cookie';
import { User } from '@/types';
import { createContext, useContext, useState } from 'react';

const getCurrentState = (): UserContextState | null => {
  try {
    const storedState = readCookie();
    if (!storedState) {
      return null;
    }
    return {
      ...storedState,
      loggedIn: false,
    };
  } catch {
    return null;
  }
};

const defaultState: UserContextState = {
  sessionId: '',
  csrfToken: '',
  user: {},
  loggedIn: false,
};

const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState(getCurrentState() || defaultState);

  const set = (newChanges: Partial<UserContextState>) => {
    const newState = {
      ...state,
      ...newChanges,
    };
    setState(newState);
  };

  const save = (newChanges: Partial<UserContextState>) => {
    // could also use cookies
    try {
      console.log('saving', newChanges);
      const newState = {
        ...state,
        ...newChanges,
      };
      updateCookie(newState);
      setState(newState);
    } catch {
      return;
    }
  };

  return (
    <UserContext.Provider value={{ state, set, save }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used with a UserContextProvider');
  }
  return context;
};

export type UserContextType = {
  state: UserContextState;
  set: (newChanges: Partial<UserContextState>) => void;
  save: (state: Partial<UserContextState>) => void;
};

export type UserContextState = {
  sessionId: string;
  csrfToken: string;
  user: User;
  loggedIn: boolean;
};
