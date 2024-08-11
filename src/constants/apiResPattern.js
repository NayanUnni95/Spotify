function pattern() {
  const pattern = [
    ``,
    `items[${0}].album`,
    `items[${0}]`,
    `artists.items[${0}]`,
  ];
  const name = [`liked songs`, `name`, `name`, `name`];
  const type = [`playlist`, `type`, `type`, `type`];
  const images = [
    `https://misc.scdn.co/liked-songs/liked-songs-64.png`,
    `images[${2}].url`,
    `items[${0}].images[${0}].url`,
    `images[${2}].url`,
  ];
  const href = [`href`, `href`, `href`, `artists.href`];
  const id = [null, `id`, `id`, `id`];
  const songs = [`total`, null, `tracks.total`, null];
  const items = [`items`, `tracks`, `tracks.href`, null];
  const keyEndPoint = [
    {
      title: `liked songs`,
      type: `playlist`,
      image: `https://misc.scdn.co/liked-songs/liked-songs-64.png`,
      href: `href`,
      id: null,
      songs: `total`,
      items: `items`,
    },
    {
      title: `name`,
      type: `type`,
      image: `images[${2}].url`,
      href: `href`,
      id: `id`,
      songs: null,
      items: `tracks`,
    },
    {
      title: `name`,
      type: `type`,
      image: `items[${0}].images[${0}].url`,
      href: `href`,
      id: `id`,
      songs: `tracks.total`,
      items: `tracks.href`,
    },
    {
      title: `name`,
      type: `type`,
      image: `images[${2}].url`,
      href: `artists.href`,
      id: `id`,
      songs: null,
      items: null,
    },
  ];
  pattern.map((obj) => {
    console.log(obj);
  });
  // setData([
  //   {
  // title: 'liked songs',
  // image: 'https://misc.scdn.co/liked-songs/liked-songs-64.png',
  // type: 'playlist',
  // href: 'res[0].href',
  // id: null,
  // songs: res[0].total,
  // items: res[0].items
  // },
  //   {
  // title: 'res[0].items[0].album.name',
  // image: 'res[0].items[0].album.images[2].url',
  // type: 'res[0].items[0].album.type',
  // href: 'res[0].items[0].album.href',
  // id: 'res[0].items[0].album.id',
  // items: 'res[0].items[0].album.tracks',
  // songs: false,
  // },
  //   {
  // title: 'res[0].items[0].name',
  // type: 'res[0].items[0].type',
  // href: 'res[0].items[0].href',
  // id: 'res[0].items[0].id',
  // image: 'res[0].items[0].items[0].images[0].url',
  // items: 'res[0].items[0].tracks.href',
  // songs: res[0].items[0].tracks.total,
  // },
  //   {
  // title: 'res[0].artists.items[0].name',
  // type: 'res[0].artists.items[0].type',
  // href: 'res[0].artists.href',
  // id: 'res[0].artists.items[0].id',
  // image: 'res[0].artists.items[0].images[2].url',
  // items: null,
  // songs: null,
  // },
  // ]);
}
pattern();
export default pattern;
