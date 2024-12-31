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
  // Artists_TopTracks,
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
        id: '1kFNFsAZ4iZy4vjBEtT12I',
        type: 'track',
        artists: [
          { name: 'Sushin Shyam', id: '1qFp8zDvsXyCsC5dqz8X4S' },
          { name: 'Dabzee', id: '2JJKoRrK7Eec7jlcjFB7sc' },
          { name: 'Vinayak Sasikumar', id: '51jfCC7m2rTGPDz06E2nvS' },
        ],
        image: [
          {
            url: 'https://i.scdn.co/image/ab67616d00001e02b54cdfbfaa828674ffecd12c',
          },
        ],
      },
      {
        name: 'Alif',
        id: '0BdsMf23c1amsuZxqqFLI0',
        type: 'track',
        artists: [
          { name: 'Dabzee', id: '2JJKoRrK7Eec7jlcjFB7sc' },
          { name: 'Sa', id: '3eaS0SB97IZ1TVFv4XiTdm' },
        ],
        image: [
          {
            url: 'https://i.scdn.co/image/ab67616d00001e02b5a434e7ff471bcea5a529d1',
          },
        ],
      },
      {
        name: 'Ballaatha Jaathi',
        id: '4tYxGORIOZSPLnZmrSpva7',
        type: 'track',
        artists: [
          { name: 'NJ', id: '3CWoPzCX85ikTyt8nPrWJp' },
          { name: 'Dabzee', id: '2JJKoRrK7Eec7jlcjFB7sc' },
          { name: 'BABY JEAN', id: '3vhYECLQUeZVovqKwA5E0b' },
          { name: 'Rzee', id: '0JDjRH8br9CkytJV93g1Et' },
        ],
        image: [
          {
            url: 'https://i.scdn.co/image/ab67616d00001e02a1c8b0a00fb2c7bf6cfe95b4',
          },
        ],
      },
      {
        name: 'Mathapithakkale (From "Aavesham")',
        id: '4WaCnPpbycUQQiXBDxH7zx',
        type: 'track',
        artists: [
          { name: 'Sushin Shyam', id: '1qFp8zDvsXyCsC5dqz8X4S' },
          { name: ' Malayali Monkeys', id: '6d3qaRXhI6yFy5MgYQ56qI' },
          { name: 'MC Couper', id: '4AJoyMa0S1kgtcde6gtKBB' },
        ],
        image: [
          {
            url: 'https://i.scdn.co/image/ab67616d00001e02c16053888313fbdc759a5b50',
          },
        ],
      },
      {
        name: 'NISHANI',
        id: '7ku3rPm8SXmRRaI6x3GGBa',
        type: 'track',
        artists: [
          { name: 'Rishi Roy', id: '1CPC6yBRVnK1WxibuqwNNH' },
          { name: 'Dabzee', id: '2JJKoRrK7Eec7jlcjFB7sc' },
        ],
        image: [
          {
            url: 'https://i.scdn.co/image/ab67616d00001e027c7d9b3969192c34a90c509a',
          },
        ],
      },
      {
        name: 'Mini Maharani (From "Premalu")',
        id: '2CPjVH7irjP1H9Na7VbhrN',
        type: 'track',
        artists: [
          { name: 'Vishnu Vijay', id: '2einniD11Dbvrwy5nWmn4p' },
          { name: 'Suhail Koya', id: '1d3zWx1pD19ZF60KcVUPYv' },
          { name: 'Kapil Kapilan', id: '0nMjhemqRwrboQGcs92fh2' },
          { name: 'Vagu Mazan', id: '2HrVY7Ev6LS8I38EfJvMtV' },
        ],
        image: [
          {
            url: 'https://i.scdn.co/image/ab67616d00001e0205eee59ff31cafb305dd419a',
          },
        ],
      },
      {
        name: 'Aadharanjali (From "Romancham")',
        id: '3pVxyBO8MlMdmfOTM9i4yx',
        type: 'track',
        artists: [
          { name: 'Sushin Shyam', id: '1qFp8zDvsXyCsC5dqz8X4S' },
          { name: 'Madhuvanthi Narayan', id: '2uKITbMInpFKYeI9ll9fv8' },
          { name: 'Vinayak Sasikumar', id: null },
        ],
        image: [
          {
            url: 'https://i.scdn.co/image/ab67616d00001e0223ef3415278d67110b3d7b04',
          },
        ],
      },
      {
        name: 'Nebulakal - Travel Song (From "Manjummel Boys")',
        id: '1jxFfazgOVIJeYbhBm2ENV',
        type: 'track',
        artists: [
          { name: 'Sushin Shyam', id: '1qFp8zDvsXyCsC5dqz8X4S' },
          { name: 'Pradeep Kumar', id: '15ClyGUe5g2vllncIC4tp6' },
          { name: 'Anwar Ali', id: '6ccDjsU6h03TcrKOvBeiu2' },
        ],
        image: [
          {
            url: 'https://i.scdn.co/image/ab67616d00001e024ae2265bbf33c50e7ae7b0e5',
          },
        ],
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
