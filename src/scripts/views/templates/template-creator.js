/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createRestaurantCard = (restaurant) => `
<div class="card" tabindex="0" id="maincontent">
<div class="card-image">
  <img src="${CONFIG.BASE_IMAGE_URL_S + restaurant.pictureId}" alt="Gambar Restaurant ${restaurant.name}" width="100%">
</div>
<div class="card-content">
  <div class="card-title"><h1>
    <a class="card-name" aria-label="${restaurant.name}" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
  </h1></div>
  <div class="card-sub"><h2>${restaurant.city}</h2></div>
  <div class="card-sub">
    <img src="./images/heros/Star.png" alt="Rating" width="18">
    | ${restaurant.rating}
  </div>
</div>
</div>`;

const createRestaurantDetail = (rest) => `
<div class="container-detail" tabindex="0">
  <div class="widht-break">
    <div class="detail-main-img">
        <img src="${CONFIG.BASE_IMAGE_URL_S + rest.pictureId}" alt="${rest.name}">
    </div>
    <div class="detail-main-text">
        <h1>${rest.name}</h1>
        <h2>${rest.city}</h2>
        <h3>${rest.address}</h3> <br>
        </div>
    </div>
    <div class="detail-main-text">
      <h3>${rest.description}</h3>
    </div>
      <br>
    <div class="detail-main-text">
      <h1>Daftar Menu</h1><br>
      <div class="container-detail-menu">
          <div class="detail-makanan flip">
              <h2 class="menu-type">Makanan</h2>
              <ul>${rest.menus.foods.map((food) => `<li class="menu-rest">${food.name}</li>`).join('')}</ul>
          </div>
          <div class="detail-minuman flip">
              <h2 class="menu-type">Minuman</h2>
              <ul>${rest.menus.drinks.map((drinks) => `<li class="menu-rest">${drinks.name}</li>`).join('')}</ul>
          </div>
      </div>
      <br> 
      <h1>Review</h1> <br>
      <div class="container-detail-review">
          <ul>${rest.customerReviews.map((custReview) => `</li>
            <div class="review-card">
              <div class="reviewer-name">
                  ${custReview.name}
              </div>
              <div class="reviewer-date">
                  ${custReview.date}
              </div>
              <div class="review">
                  ${custReview.review}
              </div>
            </div></li>`).join('')} </ul>
      </div>
  </div>
  <div class="wrapper-menu">
      <div class="menu-card"></div>
  </div>
</div>`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantCard,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createRestaurantDetail,
};
