import {extend} from "../utils/extend";
import film from "./film";

export default [film, film, film, film].map((filmMock, i) => extend(filmMock, {id: `${i}`}));
