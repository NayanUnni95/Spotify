import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LikedSongs = (data) => {
  return {
    title: 'liked songs',
    image: 'https://misc.scdn.co/liked-songs/liked-songs-64.png',
    type: 'playlist',
    songs: data.total,
    id: null,
    href: data.href,
    items: data.items,
  };
};
const album = (data) => {
  return data.items.map((obj) => {
    return {
      title: obj.album.name,
      image: obj.album.images,
      type: obj.album.type,
      songs: obj.album.tracks.total,
      id: obj.album.id,
      href: obj.album.href,
      items: null,
    };
  });
};
const playlist = (data) => {
  return data.items.map((obj) => {
    return {
      name: obj.name,
      image: obj.images,
      type: obj.type,
      songs: obj.tracks.total,
      id: obj.id,
      href: obj.href,
      items: null,
    };
  });
};
const artists = (data) => {
  return data.artists.items.map((obj) => {
    return {
      name: obj.name,
      image: obj.images,
      type: obj.type,
      songs: null,
      id: obj.id,
      href: obj.href,
      items: null,
    };
  });
};

(async () => {
  const filePath = path.join(__dirname, 'reference.json');
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(fileContent);
    console.log(
      [
        LikedSongs(jsonData[0]),
        album(jsonData[1]),
        playlist(jsonData[2]),
        artists(jsonData[3]),
      ].flat(1)
    );
  } catch (err) {
    console.error('Error reading the JSON file:', err);
  }
})();
