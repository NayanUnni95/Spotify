import React, { useState, createContext } from 'react';

export const DataContext = createContext();
function DataCacheContext({ children }) {
  const [libraryData, setLibraryData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [homeData, setHomeData] = useState(null);
  const [searchCategory, setSearchCategory] = useState(null);

  return (
    <DataContext.Provider
      value={{
        libraryData,
        profileData,
        homeData,
        searchCategory,
        setLibraryData,
        setProfileData,
        setHomeData,
        setSearchCategory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataCacheContext;
