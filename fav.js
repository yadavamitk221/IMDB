// selectors
const movielist = document.querySelector(".favmovie-list");
const movieArr = JSON.parse(localStorage.getItem('movie'));

const removebtn = document.getElementsByClassName("remove");


    for(let i = 0; i < movieArr.length; i++){
        let currentObj =movieArr[i];
        console.log(currentObj.movietitle);
    
        const movieContainer = document.createElement("div");
        movieContainer.classList.add("movie-container");
    
        const movieImage = document.createElement("div");
        const imgurl = document.createElement("img");
        imgurl.src = currentObj.ImageSrc;
        movieImage.classList.add("movie-image");
        movieImage.appendChild(imgurl);
        movieContainer.appendChild(movieImage);

        const movieDiscriptions = document.createElement("div");
        movieDiscriptions.innerHTML = `

        <h3 class = "movie-title">${currentObj.movietitle}</h3>
        <ul class = "movie-misc-info">
            <li class = "year">Year: ${currentObj.year}</li>
            <li class = "rated">Ratings: ${currentObj.rated}</li>
            <li class = "released">Released: ${currentObj.released}</li>
        </ul>
        <p class = "genre"><b>Genre:</b> ${currentObj.Genre}</p>
        <p class = "writer"><b>Writer:</b> ${currentObj.Writer}</p>
        <p class = "actors"><b>Actors: </b>${currentObj.actors}</p>
        <p class = "plot"><b>Plot:</b> ${currentObj.plot}</p>
        <p class = "language"><b>Language:</b> ${currentObj.language}</p>
        <p class = "awards"><b><i class = "fas fa-award"></i></b> ${currentObj.awards}</p>
        `

        
        movieDiscriptions.classList.add("movie-description")

        movieContainer.appendChild(movieDiscriptions);

        movielist.appendChild(movieContainer);
    
    }




