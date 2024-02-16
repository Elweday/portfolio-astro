  
  export type Show = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: { Source: string; Value: string }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  };
  


  const omdbHandler = (omdbApiKey: string) => {
    return async (showName: string) => {
        const res = await fetch(
          `https://www.omdbapi.com/?t=${showName}&apikey=${omdbApiKey}`,
          { cache: "force-cache" }
        );
        const data = await res.json();
        return data as Show;
      };

} 

export default async (apikey: string, showsList: string[]) =>  {
    const getShow = omdbHandler(apikey);
    return await Promise.all(showsList.map(async showName => await getShow(showName)))
};
