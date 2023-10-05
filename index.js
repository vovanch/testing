let numberOfFilms;
function start() {
	numberOfFilms = +prompt("Скільки фільмів ви вже передивились?", "");
	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Скільки фільмів ви вже передивились?", "");
	}
}
start();
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
let lastFilm, rateFilm;

function showMyDB (hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);
function rememberMyFilms() {
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
}
rememberMyFilms();

const detectPersonalLevel = () => {
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
};
writeYourGenres();
detectPersonalLevel();
function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {	 
		personalMovieDB.genres[i-1] = prompt(`Який ваш улюблений жанр фільмів під номером ${i}?`, "");
	}
}

console.log(personalMovieDB);

