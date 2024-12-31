import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Icon } from '../../assets/icons/Icons';
import { FaArrowLeft } from 'react-icons/fa6';
import { RiMore2Line } from 'react-icons/ri';
import { LuClock3 } from 'react-icons/lu';
import { IoPlay } from 'react-icons/io5';
import { ThreeDots } from 'react-loader-spinner';
import { useAuth } from '../../hooks/useAuth';
import equ from '../../assets/images/equaliser-animated-green.gif';
import NavBar from '../../components/NavBar/NavBar';
import { Search_Item } from '../../constants/constant';
import RowLoading from '../../components/RowLoadingSkeleton/RowLoading';
import styles from './Genre.module.css';
import { GenreDataCleanUp } from '../../constants/cleanUpData';
import HorizontalCard from '../../components/HorizontalScrollCard/HorizontalCard';

function Genre() {
  const navigate = useNavigate();
  const [cardHover, setCardHover] = useState(false);
  const [relativeData, setRelativeData] = useState(null);
  const [genre, setGenre] = useState(null);
  const [nextEndpoint, setNextEndpoint] = useState(true);
  const [visibleRows, setVisibleRows] = useState({});
  const [bgColor, setBgColor] = useState('#090909');
  const { fetchData, DateConverter, msToTime, predictColor } = useAuth();
  const { genreId } = useParams();

  const handleClick = (index) => {
    setVisibleRows((prevState) => ({
      [index]: !prevState[index],
    }));
  };

  const repeatedApiCAll = () => {
    if (!nextEndpoint) return;
    fetchData(nextEndpoint)
      .then((res) => {
        relativeData.tracks.items = [
          ...relativeData.tracks.items,
          ...res.items,
        ];
        setNextEndpoint(res.next);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData(`/browse/categories/${genreId}`)
      .then((res) => {
        if (res) {
          setGenre(res);
          predictColor(res.icons[0].url, (result) => setBgColor(result.rgba));
          const query = encodeURIComponent(res.name);
          fetchData(
            `${Search_Item}?q=${query}&limit=50&type=playlist%2Calbum%2Ctrack%2Cartist`
          )
            .then((res) => {
              setRelativeData(GenreDataCleanUp(res));
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [genreId]);

  if (!relativeData) {
    return (
      <div className={styles.collectionSection}>
        <div className={styles.loaderSection}>
          <ThreeDots visible={true} height="50" width="50" color="gray" />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.collectionSection}>
      <div
        className={styles.innerSection}
        style={{ backgroundColor: `${bgColor}` }}
      >
        <div className={styles.navigationBar}>
          <NavBar />
        </div>
        <nav>
          <div className={styles.navigationBtn}>
            <button onClick={() => navigate(-1)}>
              <FaArrowLeft
                size={20}
                style={{ color: 'var(--primary-background)' }}
              />
            </button>
          </div>
          <div className={styles.songManageSection}>
            <div className={styles.searchBar}>
              <button>
                <Icon name="search" size={15} />
              </button>
              <input type="text" placeholder="Find in liked songs" />
            </div>
            <div className={styles.sortBtn}>
              <button>sort</button>
            </div>
          </div>
        </nav>
        <header className={styles.header}>
          <div className={styles.imgSection}>
            <div>
              {/* <img
                src={relativeData && relativeData.images[0].url}
                alt={relativeData && relativeData.name}
                // onChange={() => predictColor(relativeData.images[0].url)}
              /> */}
              {/* <img src={genre && genre.icons[0].url} /> */}
            </div>
          </div>
          <div className={styles.detailsSection}>
            <div className={styles.title}>
              <h1>{genre && genre.name}</h1>
            </div>
          </div>
        </header>
        <hr />
        <div className={styles.tableContainer}>
          <HorizontalCard data={relativeData[3]} />
          <HorizontalCard data={relativeData[1]} />
          <HorizontalCard data={relativeData[2]} />
          {/* <HorizontalCard data={relativeData[0]} /> */}
        </div>
      </div>
    </div>
  );
}

export default Genre;
