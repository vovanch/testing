let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
let lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
	rateFilm = +prompt("На сколько оцените его?", "");

personalMovieDB.movies["lastFilm"] = rateFilm;
console.log(personalMovieDB);