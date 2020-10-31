const PLAYER_SCREEN_BASE_PATH = `/player`;
export const PLAYER_SCREEN_ROUTE_PATH = `/player/:id`;

export const getPlayerScreenFullPath = (filmId) => `${PLAYER_SCREEN_BASE_PATH}/${filmId}`;
