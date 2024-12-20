import React, { useEffect, useContext } from 'react';
import styles from './Home.module.css';
import NavBar from '../../components/NavBar/NavBar';
import TopPlaylist from '../../components/TopPlaylist/TopPlaylist';
import HorizontalCard from '../../components/HorizontalScrollCard/HorizontalCard';
import { useAuth } from '../../hooks/useAuth';
import {
  Several_Category,
  Several_Albums,
  New_Release,
  Top_Items,
  Single_Artists,
  Featured_Playlist,
  Several_Tracks,
  Artists_TopTracks,
} from '../../constants/constant';
import { DataContext } from '../../context/DataCacheContext';

function HomeSection() {
  const { fetchData } = useAuth();
  const { homeData, setHomeData } = useContext(DataContext);
  useEffect(() => {
    if (!homeData) {
      Promise.all([
        fetchData(`${Several_Category}`),
        // fetchData(`${Several_Albums}{id}`),
        // // fetchData(`${Top_Items}`),
        // fetchData(`${Single_Artists}{id}`),
        // fetchData(`${Featured_Playlist}`),
        // fetchData(`${Several_Tracks}{id}`),
        // // fetchData(`${Artists_TopTracks}`),
        fetchData(`${New_Release}`),
      ])
        .then((res) => {
          setHomeData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  // Reference data
  const data = {
    title: 'Trending Now Malayalam',
    items: [
      {
        name: 'Illuminati (From "Aavesham")',
        type: 'track',
        artists: 'Sushin Shyam, Dabzee, Vinayak Sasikumar',
        image:
          'https://i.scdn.co/image/ab67616d00001e02b54cdfbfaa828674ffecd12c',
      },
      {
        name: 'Alif',
        artists: 'Dabzee, Sa',
        image:
          'https://i.scdn.co/image/ab67616d00001e02b5a434e7ff471bcea5a529d1',
      },
      {
        name: 'Ballaatha Jaathi',
        artists: 'NJ, Dabzee, BABY JEAN, Rzee',
        image:
          'https://i.scdn.co/image/ab67616d00001e02a1c8b0a00fb2c7bf6cfe95b4',
      },
      {
        name: 'Mathapithakkale (From "Aavesham")',
        image:
          'https://i.scdn.co/image/ab67616d00001e02c16053888313fbdc759a5b50',
        artists: 'Sushin Shyam, Malayali Monkeys, MC Couper',
      },
      {
        name: 'NISHANI',
        artists: 'Rishi Roy, Dabzee',
        image:
          'https://i.scdn.co/image/ab67616d00001e027c7d9b3969192c34a90c509a',
      },
      {
        name: 'Mini Maharani (From "Premalu")',
        image:
          'https://i.scdn.co/image/ab67616d00001e0205eee59ff31cafb305dd419a',

        artists: 'Vishnu Vijay Suhail Koya Kapil Kapilan Vagu Mazan',
      },
      {
        image:
          'https://i.scdn.co/image/ab67616d00001e0223ef3415278d67110b3d7b04',

        name: 'Aadharanjali (From "Romancham")',
        artists: 'Sushin Shyam, Madhuvanthi Narayan, Vinayak Sasikumar',
      },
      {
        name: 'Nebulakal - Travel Song (From "Manjummel Boys")',
        image:
          'https://i.scdn.co/image/ab67616d00001e024ae2265bbf33c50e7ae7b0e5',

        artists: 'Sushin Shyam, Pradeep Kumar, Anwar Ali',
      },
    ],
  };
  // Reference data for multiple copies of the same data to simulate horizontal scroll effect
  let arr = [data, data, data, data, data];

  return (
    <div className={styles.homeSection}>
      <NavBar />
      <TopPlaylist />
      {arr.map((item, index) => (
        <HorizontalCard data={data} key={index} />
      ))}
    </div>
  );
}

export default HomeSection;
