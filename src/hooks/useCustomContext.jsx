import React, { useState, useContext, createContext, useEffect } from 'react';
import { baseUrl, keyStorageEmail } from '../util';

const ContextUser = createContext({});

// eslint-disable-next-line react/prop-types
function UserProvider({ children }) {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const fetchStorage = localStorage.getItem(keyStorageEmail);
        const emailStorage = fetchStorage ? JSON.parse(fetchStorage) : ' ';
        if (emailStorage.length > 3) {
          const userResponse = await fetch(
            `${baseUrl}/users/email=${emailStorage}`,
            { signal: controller.signal },
          );
          const user = await userResponse.json();
          const { id, photo, punctuation, donation, name, email, password } =
            user.find((user) => user.email === emailStorage);
          const userProfile = {
            id,
            photo,
            punctuation,
            donation,
            name,
            email,
            password,
          };
          return setUserProfile(userProfile);
        }
      } catch (error) {
        console.log(error);
      }
    })();

    return () => controller.abort();
  }, []);

  const handleUserProfile = (userProfile) => setUserProfile(userProfile);

  return (
    <ContextUser.Provider
      value={{
        userProfile,
        handleUserProfile,
      }}
    >
      {children}
    </ContextUser.Provider>
  );
}

function useCustomContext() {
  const context = useContext(ContextUser);
  return context;
}

export { UserProvider, useCustomContext };
