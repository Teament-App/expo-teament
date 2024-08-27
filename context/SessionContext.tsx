import React, { useEffect } from "react";

import { useStorageState } from "@/hooks/userStorageState";
import { GET_INFO_USER } from "@/services/User.endpoints";
import { useReactQuery } from "@/hooks/useReactQuery";

const AuthContext = React.createContext<{
  signIn: (a: any) => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
  user?: any;
}>({
  signIn: (a: any) => null,
  signOut: () => null,
  session: null,
  isLoading: false,
  user: null,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const signIn = (userSession: any) => {
    setSession(JSON.stringify(userSession));
  };
  const [[, user], setUser] = useStorageState("user");
  const { response: userInfo, refetch } = useReactQuery(
    ["user-info"],
    GET_INFO_USER,
    {
      enabled: false,
    }
  );
  const getUserInformation = async () => {
    try {
      await refetch();
    } catch (e: any) {
      if (e.status === 401) {
        setSession(null);
        setUser(null);
      }
    }
  };
  useEffect(() => {
    if (session) {
      getUserInformation();
    }
  }, [session]);

  useEffect(() => {
    if (userInfo) {
      setUser(JSON.stringify(userInfo));
    }
  }, [userInfo]);
  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
        user: JSON.parse(user as string),
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
