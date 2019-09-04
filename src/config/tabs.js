import { FiFilm, FiClock, FiMapPin } from "react-icons/fi";
import React from "react";

export const tabs = [
  {
    label: "Filmes",
    path: "/",
    icon: <FiFilm />
  },
  {
    label: "Horários",
    path: "/horarios",
    icon: <FiClock />
  },
  {
    label: "Cinemas",
    path: "/cinemas",
    icon: <FiMapPin />
  }
];
