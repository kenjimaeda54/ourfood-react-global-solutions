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
        const userFind = user.find((user) => user.email === emailStorage);
        if (emailStorage.length > 3 && userFind) {
          return setUserProfile({
            id: userFind.id,
            photo: userFind.photo,
            punctuation: userFind.punctuation,
            donation: userFind.donation,
            name: userFind.name,
            email: userFind.email,
            password: userFind.password,
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
  }, [userProfile]);

  return (
    <ContextUser.Provider
      value={{
        userProfile,
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
