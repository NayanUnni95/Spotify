import React, { useState, useEffect } from 'react';
import styles from './Search.module.css';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchCategoryGrid from '../../components/SearchCategoryGrid/SearchCategoryGrid';
import { useAuth } from '../../hooks/useAuth';
import { Several_BrowserCategory } from '../../constants/constant';

function Search() {
  const { fetchData } = useAuth();
  const [category, setCategory] = useState();
  useEffect(() => {
    if (!category) {
      fetchData(`${Several_BrowserCategory}?limit=50`)
        .then((res) => {
          setCategory(res.categories.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [category]);
  return (
    <div className={styles.SearchSection}>
      <NavBar />
      <SearchBar />
      <SearchCategoryGrid category={category} />
    </div>
  );
}

export default Search;
