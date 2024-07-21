import React from 'react';
import styles from './Search.module.css';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchCategoryGrid from '../../components/SearchCategoryGrid/SearchCategoryGrid';

function Search() {
  // Reference data
  const categoryData = [
    {
      icons: [
        {
          url: 'https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg',
        },
      ],
      name: 'Made For You',
    },
    {
      icons: [
        {
          url: 'https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg',
        },
      ],
      name: 'New Releases',
    },
    {
      icons: [
        {
          url: 'https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg',
        },
      ],
      name: 'Malayalam',
    },
    {
      icons: [
        {
          url: 'https://t.scdn.co/images/8a0fabf4d537486e9b5a4623c921f77e.jpeg',
        },
      ],
      name: 'Hindi',
    },
    {
      icons: [
        {
          url: 'https://t.scdn.co/images/11e89d14d7844b7eb3d26619cb662a9b.jpeg',
        },
      ],
      name: 'Punjabi',
    },
    {
      icons: [
        {
          url: 'https://t.scdn.co/images/2117dadfdd254825b3fbc52e3652ed56.jpeg',
        },
      ],
      name: 'Tamil',
    },
    {
      icons: [
        {
          url: 'https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg',
        },
      ],

      name: 'Discover',
    },
    {
      icons: [
        {
          url: 'https://t.scdn.co/images/ac75ec857b714a118c73218bb58664e5.jpeg',
        },
      ],
      name: 'Trending',
    },
  ];
  return (
    <div className={styles.SearchSection}>
      <NavBar />
      <SearchBar />
      <SearchCategoryGrid category={categoryData} />
    </div>
  );
}

export default Search;
