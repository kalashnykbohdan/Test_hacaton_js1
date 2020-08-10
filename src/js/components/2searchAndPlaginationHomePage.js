
import cardFilmsList from '../../templates/cardFilmsList.hbs'
import fetchRequest from './../fetchRequest.js'

const refs = {
    jsInput: document.querySelector('#search-form'),
    jsListResponse: document.querySelector('#js-list'),
    loadMoreBth: document.querySelector('button[data-action="load-more"]')
};
console.log('2searchAndPlaginationHomePage');


// refs.jsInput.addEventListener('submit',searchFormImg);
// refs.loadMoreBth.addEventListener('click',loadMoreBtnHandler);


// function searchFormImg(e){
//     e.preventDefault();

//     const inputValue = e.currentTarget.elements.query.value;
//     console.log(inputValue);
//     clearList();
//     fetchRequest.resetPage();
//     fetchRequest.searchQuery = inputValue;

//     fetchRequest.fetchFilms().then(insertListIteams)
    

// }


// function loadMoreBtnHandler(){
//     fetchRequest.fetchFilms().then(insertListIteams)
// }

// function insertListIteams(items){
//     const markup = cardFilmsList(items) 
//     refs.jsListResponse.insertAdjacentHTML('beforeend', markup);

// }

// function clearList(){
//     refs.jsListResponse.innerHTML = '';
// }

        