export default function (props) {
    console.log(`view`);
    return `
        <div>HomePage page</div>

            <article class="intro">

      <h1>goit-js-hw-13-image-finder</h1>
  
      <form id="search-form" class="form_search">
        <input
          type="text"
          name="query"
          autocomplete="off"
          placeholder="Write movie name and click Enter"
          class="input_search"
        />
        <button type="submit" class="button_search"><i class="material-icons">search</i></button>
      </form>

      <ul class="gallery" id="js-list"></ul>
      <button tupe="button" data-action="load-more" class="load-more-Btn">Load more</button> 
      
    </article>
    `;
}

