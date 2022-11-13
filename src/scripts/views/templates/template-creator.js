/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createRestaurantCard = (restaurant) => `
<div class="card" tabindex="0" id="maincontent">
<div class="card-image">
  <img data-src="${CONFIG.BASE_IMAGE_URL_S + restaurant.pictureId}" class="lazyload" alt="Restaurant ${restaurant.name}" width="100%">
</div>
<div class="card-content">
  <div class="card-title">
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
        <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL_S + rest.pictureId}" alt="${rest.name}">
    </div>
    <div tabindex="0" class="detail-main-text">
        <h1>${rest.name}</h1>
        <h2>${rest.city}</h2>
        <h3>${rest.address}</h3> <br>
        </div>
    </div>
    <div tabindex="0" class="detail-main-text">
      <h3>${rest.description}</h3>
    </div>
      <br>
    <div class="detail-main-text">
      <h1>Daftar Menu</h1><br>
      <div class="container-detail-menu">
          <div class="detail-makanan flip">
              <h2 class="menu-type">Makanan</h2>
              <ul>${rest.menus.foods.map((food) => `<li tabindex="0" class="menu-rest">${food.name}</li>`).join('')}</ul>
          </div>
          <div class="detail-minuman flip">
              <h2 class="menu-type">Minuman</h2>
              <ul>${rest.menus.drinks.map((drinks) => `<li tabindex="0" class="menu-rest">${drinks.name}</li>`).join('')}</ul>
          </div>
      </div>
      <br> 
      <h1>Review</h1> <br>
      <div class="container-detail-review">
          <ul>${rest.customerReviews.map((custReview) => `</li>
            <div class="review-card" tabindex="0">
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

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantCard,
  createLikeRestaurantButtonTemplate as createLikeButtonTemplate,
  createUnlikeRestaurantButtonTemplate as createLikedButtonTemplate,
  createRestaurantDetail,
};
