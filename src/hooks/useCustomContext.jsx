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
        const userResponse = await fetch(
          `${baseUrl}/users/email=${emailStorage}`,
          { signal: controller.signal },
        );
        const user = await userResponse.json();
        if (emailStorage.length > 3 && user.length > 0) {
          const { id, photo, punctuation, donation, name, email, password } =
            user.find((user) => user.email === emailStorage);
          return setUserProfile({
            id,
            photo,
            punctuation,
            donation,
            name,
            email,
            password,
          });
        } else {
          const userEmail = await fetch(
            `${baseUrl}/companies/${emailStorage}`,
            { signal: controller.signal },
          );
          const company = await userEmail.json();
          const {
            id,
            photo,
            punctuation,
            donation,
            name,
            email,
            show,
            userId,
          } = company.find((user) => user.email === emailStorage);
          return setUserProfile({
            id,
            photo,
            punctuation,
            donation,
            name,
            email,
            show,
            userId,
          });
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
