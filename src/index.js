'use strict';

import './sass/styles.css';
import './sass/styles.scss';

// import './js/view/homePage.js';
// import './js/view/myFilmLibraryPage.js';
// import './js/view/detailsPage.js';

// import './js/components/1InitialHomePage.js';
// import './js/components/2searchAndPlaginationHomePage.js';
// import './js/components/3navigation.js';
// import './js/components/4filmDetailsPage.js';
// import './js/components/5libraryPage.js';

// import HomePage from './html/homePage.html';
// import My_library from './html/my_library.html';

//=================================================
// WORK
//=================================================

import HomePage from './js/pages/HomePage/HomePage.js';
import DetailsPage from './js/pages/DetailsPage/DetailsPage.js';
import MyFilmLibraryPage from './js/pages/MyFilmLibraryPage/MyFilmLibraryPage.js';

import searchAndPlaginationHome from './js/components/2searchAndPlaginationHomePage.js'; 

function getCurrentPath() {
  return location.pathname;
}

function init() {
  const root = document.getElementById('root');
  const path = getCurrentPath();
  switch (path) {
    case '/': {
        console.log(`init`);
        
        HomePage(root);
        break;
    }
    case '/details': {
        DetailsPage(root);
        break;
    }
    case '/myFilmLibraryPage': {
        MyFilmLibraryPage(root);
        break;
    }
    default: {
      break;
    }
  }
}

init();
