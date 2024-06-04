import { createRestaurantItemTemplate } from '../../templates/template-creator';

/* eslint-disable class-methods-use-this */
class FavoriteRestaurantView {
  // eslint-disable-next-line class-methods-use-this
  getTemplate() {
    return `
    <div class="content">
    <input id="query" type="text">
    <h2 class="content__heading">Your Liked Restaurant</h2>

    <div id="restaurant-search-container">
      <div id="restaurants" class="restaurants">
      </div>
    </div>
  </div>
    `;
  }

  // eslint-disable-next-line no-unused-vars
  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)),
        '',
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurants').innerHTML = html;
    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  // eslint-disable-next-line class-methods-use-this
  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  showRestaurants(restaurants) {
    let html;
    if (restaurants.length > 0) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(`
          <li class="restaurant">
            <span class="restaurant__title">${restaurant.title || '-'}</span>
          </li>
        `),
        '',
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.querySelector('.restaurants').innerHTML = html;

    document
      .getElementById('restaurant-search-container')
      .dispatchEvent(new Event('restaurants:searched:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `
      <div class="restaurant-item__not__found">
        Tidak ada restaurant untuk ditampilkan
      </div>
    `;
  }
}
export default FavoriteRestaurantView;
