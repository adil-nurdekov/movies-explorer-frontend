import React from "react";
import Header from "../Header";
import SearchForm from "./SearchForm";
import MoviesCard from "./MoviesCard";
import Footer from "../Footer";

import { AllMovies } from "../../context/AllMovies";
import Preloader from "../Preloader";
import "./Movies.css";

function Movies(props) {
  const movies = React.useContext(AllMovies);

  const onSubmit = (input) => {
    props.findMovies(input);
  };

  const saveMovie = (card) => {
    props.saveMovie(card);
  };
  const deleteMovie = (card) => {
    props.deleteMovie(card);
  };

  // const [input, setInput] = useState([]);

  // useEffect(() => {
  //   MovieApi.getAllMovies().then((movies) => {
  //     setMovie(movies);
  //   });
  // }, []);

  const duration = (num) => {
    const hours = Math.floor(num / 60);
    const minutes = Math.floor(num - hours * 60);
    return `${
      hours > 0 ? hours + " ч : " + minutes + " мин" : minutes + " мин"
    }`;
  };
  return (
    <>
      <Header isMain={false} burgerMenu={props.handleBurgerMenu} />
      <SearchForm onSubmit={onSubmit}></SearchForm>

      <div className="movies">
        <Preloader loading={props.loading}></Preloader>
        {movies.slice(0, 7).map((card) => {
          return (
            <MoviesCard
              card={card}
              name={card.nameRU}
              duration={duration(card.duration)}
              image={card.image}
              key={card.movieId}
              saveMovie={saveMovie}
              deleteMovie={deleteMovie}
              loading={props.loading}
            ></MoviesCard>
          );
        })}

        <button className="movies__else">Еще</button>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Movies;
