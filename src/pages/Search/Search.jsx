import React, { useEffect, useContext } from 'react';
import styles from './Search.module.css';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchCategoryGrid from '../../components/SearchCategoryGrid/SearchCategoryGrid';
import { useAuth } from '../../hooks/useAuth';
import { Several_Category } from '../../constants/constant';
import { DataContext } from '../../context/DataCacheContext';

function Search() {
  const { fetchData } = useAuth();
  const { searchCategory, setSearchCategory } = useContext(DataContext);

  useEffect(() => {
    if (!searchCategory) {
      fetchData(`${Several_Category}?limit=50`)
        .then((res) => {
          setSearchCategory(res.categories.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchCategory]);
  return (
    <div className={styles.SearchSection}>
      <NavBar />
      <SearchBar />
      <SearchCategoryGrid category={searchCategory} />
    </div>
  );
}

export default Search;
