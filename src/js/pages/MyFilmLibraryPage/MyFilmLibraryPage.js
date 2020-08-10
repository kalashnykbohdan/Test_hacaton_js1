import View from './MyFilmLibraryPageView';

export default function (root) {
    const template = View();
    root.insertAdjacentHTML('beforeend', template);
}
