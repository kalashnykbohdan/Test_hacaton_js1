    import fetchRequest from '../fetchRequest.js'
    import markupTemplate from '../../templates/4filmDetailsPage.hbs';
    import filmDetailsPage from '../components/4filmDetailsPage.js';


    export default function (moveId){
        
        setSelectFilm(moveId);
        
        // maketView();
        
    }

    function setSelectFilm(moveId){
        // fetchRequest.fetchMovieDetails(moveId).then(filmDetailsPage);
        fetchRequest.fetchMovieDetails(moveId).then(data => Object.assign(selectFilm, data));
        fetchRequest.fetchGenres(data => data.map(console.log));
        console.log(selectFilm);

        // gen => genres.push(gen)
        // console.log(genres);


        function activeDetailsPage (movieId, itsLibraryFilm ){
            
        }
    }

 


      
      