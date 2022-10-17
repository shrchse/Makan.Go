/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createRestaurantCard = (restaurant) => `
<div class="card" tabindex="0" id="maincontent">
<div class="card-image">
  <img src="${CONFIG.BASE_IMAGE_URL_S + restaurant.pictureId}" alt="Gambar Restaurant ${restaurant.name}" width="100%">
</div>
<div class="card-content">
  <div class="card-title"><h1>${restaurant.name}</h1></div>
  <div class="card-sub"><h2>${restaurant.city}</h2></div>
  <div class="card-sub">
    <img src="./images/heros/Star.png" alt="Rating" width="18">
    | ${restaurant.rating}
  </div>
</div>
</div>`;

// const createLikeButtonTemplate = () => `
//   <button aria-label="like this movie" id="likeButton" class="like">
//      <i class="fa fa-heart-o" aria-hidden="true"></i>
//   </button>
// `;

// const createLikedButtonTemplate = () => `
//   <button aria-label="unlike this movie" id="likeButton" class="like">
//     <i class="fa fa-heart" aria-hidden="true"></i>
//   </button>
// `;

export { createRestaurantCard };
