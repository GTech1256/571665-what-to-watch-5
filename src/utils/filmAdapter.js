/* eslint-disable camelcase */

export const adaptFilmToServer = ({
  id,
  name,
  posterImage,
  previewImage,
  backgroundImage,
  backgroundColor,
  videoLink,
  previewVideoLink,
  description,
  rating,
  scoresCount,
  director,
  starring,
  runTime,
  genre,
  released,
  isFavorite
}) => ({
  id,
  name,
  poster_image: posterImage,
  preview_image: previewImage,
  background_image: backgroundImage,
  background_color: backgroundColor,
  description,
  rating,
  scores_count: scoresCount,
  director,
  starring,
  run_time: runTime,
  genre,
  released,
  is_favorite: isFavorite,
  video_link: videoLink,
  preview_video_link: previewVideoLink
});


export const adaptFilmFromServer = ({
  id,
  name,
  poster_image,
  preview_image,
  background_image,
  background_color,
  description,
  rating,
  scores_count,
  director,
  starring,
  run_time,
  genre,
  released,
  is_favorite,
  video_link,
  preview_video_link
}) => ({
  id,
  name,
  posterImage: poster_image,
  previewImage: preview_image,
  backgroundImage: background_image,
  backgroundColor: background_color,
  videoLink: video_link,
  previewVideoLink: preview_video_link,
  description,
  rating,
  scoresCount: scores_count,
  director,
  starring,
  runTime: run_time,
  genre,
  released,
  isFavorite: is_favorite
});

