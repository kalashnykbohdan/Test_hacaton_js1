import View from './HomePageView';
// import searchAndPlaginationHomePage from '../../components/2searchAndPlaginationHomePage'; 

export default function (root) {
    console.log(`insertAdjacentHTML`);
    const template = View();
    root.insertAdjacentHTML('beforeend', template);

    
    // searchAndPlaginationHomePage();
}


