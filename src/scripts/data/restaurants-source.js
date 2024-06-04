import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listRestorants() {
    const response = await fetch(API_ENDPOINT.DAFTAR_RESTORANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantSource;
