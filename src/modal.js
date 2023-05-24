export { createModal, closeModal };

function createModal(movie) {
  const main = document.querySelector('.movie-container');
  const backDrop = document.createElement('div');
  backDrop.classList.add('backdrop');

  const fullDate = movie.release_date;
  const year = fullDate ? fullDate.slice(0, 4) : 'Brak danych';

  backDrop.innerHTML = ` 
  <div id="modal" class="modal">
  <button id="close-modal-btn" type="button" class="modal__close">&times;</button>
  <img
    src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
    alt="${movie.title || movie.name} Poster"
    class="modal__image"
  />
  <div id="modal-text" class="modal__text">
    <h3 id="modal-title" class="modal__title"></h3>
    <div class="modal__info">
      <p class="modal__info__category">Vote / Votes</p>
      <p class="modal__info__details">
        <span class="modal__info__details__ranking">${movie.vote_average.toFixed(
          1,
        )}</span><span class="modal__info__category" >  /  </span>
        <span> ${movie.vote_count}</span>
      </p>
    </div>
    <div class="modal__info">
      <p class="modal__info__category">Popularity</p>
      <p class="modal__info__details">${Math.floor(movie.popularity)}</p>
    </div>
    <div class="modal__info">
      <p class="modal__info__category">Original Title</p>
      <p class="modal__info__details">
      <span>${movie.original_title}<span></p>
    </div>
    <div class="modal__info">
      <p class="modal__info__category">Genre</p>
      <p class="modal__info__details">
        ${document.getElementsByClassName('movie-container__genre').innerHTML}
      </p>
    </div>
    <article class="modal__description">
      <p id="modal-description__modal">ABOUT</p>
      <p id="modal-decription">${movie.overview}</p>
    </article>
    <div class="modal__buttons">
      <button id="watched-btn" class="button button--modal">ADD TO WATCHED</button>
      <button id="queue-btn" class="button button--modal">ADD TO QUEUE</button>
    </div>
  </div>
</div>
       `;

  main.appendChild(backDrop);

  const closeModal = document.getElementById('close-modal-btn');
  closeModal.addEventListener('click', function () {
    main.removeChild(backDrop);
  });
}
