import {getGenresByFilms} from "../bl/film";
import reviews from "./reviews";
import {extend} from "../utils/extend";

const filmsMock = [
  {
    id: 1,
    name: `The Grand Budapest Hotel`,
    posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
    previewImage: `img/the-grand-budapest-hotel.jpg`,
    backgroundImage: `img/the-grand-budapest-hotel-bg.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    rating: 8.9,
    scoresCount: 240,
    director: `Wes Andreson`,
    starring: [
      `Bill Murray`,
      `Edward Norton`,
      `Jude Law`,
      `Willem Dafoe`,
      `Saoirse Ronan`,
      `Tony Revoloru`,
      `Tilda Swinton`,
      `Tom Wilkinson`,
      `Owen Wilkinson`,
      `Adrien Brody`,
      `Ralph Fiennes`,
      `Jeff Goldblum`
    ],
    runTime: 99,
    genre: `Comedy`,
    released: 2014,
    isFavorite: false,
    reviews: reviews.slice(0, 2)
  },
  {
    id: 2,
    name: `Fantastic Beasts`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `#ffffff`,
    videoLink: `https://some-link`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    description: `Fantastic Beasts purports to be a reproduction of a textbook owned by Harry Potter and written by magizoologist Newt Scamander, a character in the fictional Harry Potter series. In the series, magizoology is the study of magical creatures`,
    rating: 7.3,
    scoresCount: 338,
    director: `David Yates`,
    starring: [`Eddie Redmayne`, `Katherine Waterston`, `Alison Sudol`],
    runTime: 132,
    genre: `Fantasy`,
    released: 2016,
    isFavorite: true,
    reviews: reviews.slice(2)
  },
];

export const films = [
  ...filmsMock,
  ...filmsMock,
  ...filmsMock,
  ...filmsMock,
  ...filmsMock,
  ...filmsMock,
  ...filmsMock,
  ...filmsMock,
  ...filmsMock,
  ...filmsMock,
].map((film, index) => extend(film, {id: index}));

export const genres = getGenresByFilms(films);
