let numberOfFilms;
numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
let lastFilm, rateFilm;
for (let i = 0; i < numberOfFilms; i++) {
	
	lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
	rateFilm = +prompt("На сколько оцените его?", "");
	if (lastFilm != "" && rateFilm != "" && lastFilm !=null && rateFilm != null && lastFilm.length < 10 && rateFilm <5) {
		personalMovieDB.movies[lastFilm] = rateFilm;
	}
	else {
		i--; }
}
if (personalMovieDB.count < 10) {
	alert("Просмотрено довольно мало фильмов");
} 
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30)
{
	alert("Вы классический зритель.");
}
else if (personalMovieDB.count >= 30)
{
	alert("Вы киноман");
}
else {
	alert("Произошла ошибка");
}
console.log(personalMovieDB);

