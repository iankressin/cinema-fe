import React from "react";

import MovieList from "../../components/MovieList";
import Box from "../../components/Box";
import Input from "../../components/Input";

const MoviesListView = ({}) => {
  return (
    <Box bg="#1d1d1d">
      <Box>
        <Input placeholder="Search" />
      </Box>
      <MovieList
        style={{ marginLeft: "auto", marginRight: "auto" }}
        movieList={[
          {
            title: "O Rei Leão",
            description: "um teste de descrição",
            img: "o_rei_leao.jpg"
          },
          {
            title: "Uma Vez em Hollywood",
            description: "um teste de descrição",
            img: "once_upon_a_time_in_hollywood_ver7.jpg"
          },
          {
            title: "Brinquedo Assassino",
            description: "um teste de descrição",
            img: "chucky1.jpeg"
          },
          {
            title: "Yesterday",
            description: "um teste de descrição",
            img: "yesterday_ver2.jpg"
          },
          {
            title: "Bacurau",
            description: "um teste de descrição",
            img: "bacurau.jpg"
          },
          {
            title: "Meu Amigo Enzo",
            description: "um teste de descrição",
            img: "art_of_racing_in_the_rain.jpg"
          },
          {
            title: "O Rei Leão",
            description: "um teste de descrição",
            img: "o_rei_leao.jpg"
          },
          {
            title: "Uma Vez em Hollywood hdhdhd djdjd",
            description: "um teste de descrição",
            img: "once_upon_a_time_in_hollywood_ver7.jpg"
          },
          {
            title: "Brinquedo Assassino",
            description: "um teste de descrição",
            img: "chucky1.jpeg"
          },
          {
            title: "Yesterday",
            description: "um teste de descrição",
            img: "yesterday_ver2.jpg"
          },
          {
            title: "Bacurau",
            description: "um teste de descrição",
            img: "bacurau.jpg"
          },
          {
            title: "Meu Amigo Enzo",
            description: "um teste de descrição",
            img: "art_of_racing_in_the_rain.jpg"
          }
        ]}
      />
    </Box>
  );
};

export default MoviesListView;
