const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTBkODdkMWE5MmZmZDQ4OWFkYWU2ODJhYzUxNjc0ZSIsIm5iZiI6MTczMjA5OTY5NC41MTI4MTE3LCJzdWIiOiI2NzNkYmIwYThlMzU3YTJkZWQ5NThiNDYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.r4JnoN7yLmv5-qC-jrhuAiccXLHM6YKoW8r6QbXS6YI",
  },
};
const getData = document.getElementById("getData");
getData.onclick = async function () {
  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {
        console.log(data.results)
        data.results.forEach((movie) => {
            const Title = document.createElement("p");
            const poster = document.createElement("img");
            const Description = document.createElement("p");
            const release_date = document.createElement("p");

        const moviecontainer = document.createElement("div")

              Title.className = "Title"
              poster.className = "poster"
              Description.className = "Description"
        
            Title.style.fontSize = "45px"
            poster.style.width = "200px"
            poster.style.height = "300px"
            Description.style.fontSize = "20px"
            poster.style.display = "flex"
            poster.style.justifyContent = "center"
            poster.style.alignItems = "center"
            poster.style.borderRadius = "10px"
            poster.style.margin = "10px"
            Description.style.fontSize = "18px"
            Description.style.margin = "10px"
            moviecontainer.style.backgroundColor = "#15253e"
            moviecontainer.style.borderRadius = "20px"
            Title.style.textAlign = "center"
            poster.style.margin = "0 auto"
            poster.style.alignItems = "center"
            poster.style.marginTop = "10px"
            release_date.style.fontSize = "30px"
            Description.style.textAlign = "center"
            release_date.style.textAlign = "center"
         
            

            Title.innerHTML = ` ${movie.title}`;
            poster.src = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
            Description.innerHTML = ` ${movie.overview}`;
            release_date.innerHTML = ` ${movie.release_date}`;

            
            moviecontainer.appendChild(poster);
            moviecontainer.appendChild(Title);
            moviecontainer.appendChild(Description);
            moviecontainer.appendChild(release_date);

            apiDiv.appendChild(moviecontainer)
          });
    })
};
const apiDiv = document.getElementById("apiDiv");
