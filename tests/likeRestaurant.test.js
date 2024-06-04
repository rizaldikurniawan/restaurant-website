import RestaurantFavorite from '../src/scripts/data/favorite-restaurant';
// eslint-disable-next-line import/no-unresolved, import/extensions
import * as TestFactories from './helpers/testFactories';

// eslint-disable-next-line no-undef
describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    addLikeButtonContainer();
  });

  // eslint-disable-next-line no-undef
  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    const restaurant = await RestaurantFavorite.getRestaurant(1);
    // eslint-disable-next-line no-undef
    expect(restaurant).toEqual({ id: 1 });
    await RestaurantFavorite.deleteRestaurant(1);
  });

  // eslint-disable-next-line no-undef
  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await RestaurantFavorite.putRestaurant({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada film yang ganda
    // eslint-disable-next-line no-undef
    expect(await RestaurantFavorite.getAllRestaurants()).toEqual([{ id: 1 }]);
    await RestaurantFavorite.deleteRestaurant(1);
  });

  // eslint-disable-next-line no-undef
  // Menggunakan metode xit, bukan it, untuk menonaktifkan sebuah test case
  // eslint-disable-next-line no-undef
  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef
    expect(await RestaurantFavorite.getAllRestaurants()).toEqual([]);
  });
});
