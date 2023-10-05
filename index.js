let numberOfFilms;
numberOfFilms = +prompt("Скільки фільмів ви вже передивились?", "");

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
let lastFilm, rateFilm;
//for (let i = 0; i < numberOfFilms; i++) {
let i=0;
do {
		
	
	lastFilm = prompt("Один із останніх переглянутих фільмів?", ""),
	rateFilm = +prompt("На скільки оціните його?", "");
	if (lastFilm != "" && rateFilm != "" && lastFilm !=null && rateFilm != null && lastFilm.length < 10 && rateFilm <5) {
		personalMovieDB.movies[lastFilm] = rateFilm;
	}
	else {
		i--; }
	i++;
}
while (i<numberOfFilms);
if (personalMovieDB.count < 10) {
	alert("Переглянуто доволі мало фільмів!");
} 
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30)
{
	alert("Ви класичний глядач.");
}
else if (personalMovieDB.count >= 30)
{
	alert("Ви кіноман!!!");
}
else {
	alert("Виникла помилка!");
}
console.log(personalMovieDB);

