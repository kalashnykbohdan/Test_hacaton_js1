import View from './TopView';

export default function (root) {
    const template = View();
    root.insertAdjacentHTML('beforeend', template);
}
