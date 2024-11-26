import React, { useState, useEffect, useContext, useRef } from 'react';
import styles from './Search.module.css';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchCategoryGrid from '../../components/SearchCategoryGrid/SearchCategoryGrid';
import { useAuth } from '../../hooks/useAuth';
import { Several_Category } from '../../constants/constant';
import { DataContext } from '../../context/DataCacheContext';

function Search() {
  const [nextEndpoint, setNextEndpoint] = useState(null);
  const { fetchData } = useAuth();
  let { searchCategory, setSearchCategory } = useContext(DataContext);
  const lastItemRef = useRef(null);

  const repeatedApiCAll = () => {
    if (!nextEndpoint) return;
    fetchData(nextEndpoint)
      .then((res) => {
        setSearchCategory([...searchCategory, ...res.categories.items]);
        setNextEndpoint(res.categories.next);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(searchCategory);
  }, [searchCategory]);

  useEffect(() => {
    if (!searchCategory) {
      fetchData(`${Several_Category}?limit=50`)
        .then((res) => {
          setSearchCategory(res.categories.items);
          setNextEndpoint(res.categories.next);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchCategory]);

  useEffect(() => {
    if (!nextEndpoint) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          repeatedApiCAll();
        }
      },
      { threshold: 1.0 }
    );
    if (lastItemRef.current) observer.observe(lastItemRef.current);
    return () => {
      if (lastItemRef.current) {
        observer.unobserve(lastItemRef.current);
        observer.disconnect();
      }
    };
  }, [repeatedApiCAll, nextEndpoint]);

  return (
    <div className={styles.SearchSection}>
      <NavBar />
      <SearchBar />
      <SearchCategoryGrid category={searchCategory} lastItemRef={lastItemRef} />
    </div>
  );
}

export default Search;
