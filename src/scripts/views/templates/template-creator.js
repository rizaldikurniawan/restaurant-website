import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__picture" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <p><strong>City:</strong> ${restaurant.city}</p>
    <p><strong>Address:</strong> ${restaurant.address}</p>
    <p><strong>Rating:</strong> ${restaurant.rating}</p>
  </div>
  <div class="restaurant__categories">
    <h3>Categories</h3>
    <ul>
      ${restaurant.categories.map((category) => `<li>${category.name}</li>`).join('')}
    </ul>
  </div>
  <div class="restaurant__menus">
    <h3>Menus</h3>
    <div class="restaurant__menus__foods">
      <h4>Foods</h4>
      <ul>
        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
      </ul>
    </div>
    <div class="restaurant__menus__drinks">
      <h4>Drinks</h4>
      <ul>
        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
      </ul>
    </div>
  </div>
  <div class="restaurant__reviews">
    <h3>Customer Reviews</h3>
    <ul>
      ${restaurant.customerReviews
    .map(
      (review) => `
        <li>
          <p><strong>${review.name}</strong></p>
          <p>${review.review}</p>
          <p>${review.date}</p>
        </li>
      `,
    )
    .join('')}
    </ul>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>

  `;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="artikel restaurant-item">
    <h2 class="judul" tabindex="0"><a id="linkdetail" href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
    <figure>
      <img class="gambar lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" tabindex="0"/>
      <figcaption class="deskripsi" tabindex="0">${restaurant.description}</figcaption>
    </figure>
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikerestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikerestaurantButtonTemplate,
};
