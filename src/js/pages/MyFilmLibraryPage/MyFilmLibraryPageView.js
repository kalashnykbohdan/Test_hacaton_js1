export default function (props) {
  return `
    <div class="libraryBox">
    <nav class="libnav">
      <div class="libnav__list">
        <button type="button" id="watched-button" data-action="watched-button" class="libnav__button">
          Watched
        </button>
        <button type="button" id="queue-button" data-action="queue-button" class="libnav__button">
          Queue
        </button>
      </div>
    </nav>
    <ul id="mylib-home" class="home__list"></ul>
    <ul id="mylib-home" class="home__list"></ul>
  </div>
    `;
}

{/* <ul id="mylib-home" class="home__list"></ul> */}
