class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
\
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  

  const movies = [
    new Movie("Casino Royale", "Eon Productions", "PG-13"),
    new Movie("The Lion King", "Walt Disney", "PG"),
    new Movie("Avengers: Endgame", "Marvel Studios", "PG-13"),
    new Movie("Frozen", "Walt Disney", "PG")
  ];
  
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);
  