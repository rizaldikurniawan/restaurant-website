import RestorantsSource from '../../data/restaurants-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const DaftarRestorants = {
  async render() {
    return `
      <div class="content">
          <p class="loading-message"></p>
          <div class="hero" role="banner" aria-labelledby="hero__title" tabindex="0">
          <div class="hero__inner">
                <h1 class="hero__title" tabindex="0">Temukan Artikel yang Anda Cari Bersama Kami</h1>
                <p class="hero__tagline" tabindex="0">"Jangan asal berkunjung ke Restoran, ada Rasa Terbaik yang menunggu di Restoran Terbaik"</p>
              </div>
          </div>
      <section>
        <article class="artikel">
          <h2 class="judul" tabindex="0">Bring Your Phone Cafe</h2>
          <figure>
            <img class="gambar lazyload" data-src="https://restaurant-api.dicoding.dev/images/medium/41" alt="gambar restoran artikel pertama" tabindex="0" />
            <figcaption class="deskripsi" tabindex="0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
              pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
              viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            </figcaption>
          </figure>
        </article>

        <article class="artikel">
          <h2 class="judul" tabindex="0">Run The Gun</h2>
          <figure>
            <img class="gambar lazyload" data-src="https://restaurant-api.dicoding.dev/images/medium/07" alt="gambar restoran artikel kedua" tabindex="0" />
            <figcaption class="deskripsi" tabindex="0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
              pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
              viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            </figcaption>
          </figure>
        </article>

        <article class="artikel">
          <h2 class="judul" tabindex="0">Pangsit Express</h2>
          <figure>
            <img class="gambar lazyload" data-src="https://restaurant-api.dicoding.dev/images/medium/29" alt="gambar restoran artikel ketiga" tabindex="0" />
            <figcaption class="deskripsi" tabindex="0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo lig
              ula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
              pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
              viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
            </figcaption>
          </figure>
        </article>

        <article class="artikel">
          <h2 class="judul" tabindex="0">Ducky Duck</h2>
          <figure>
            <img class="gambar lazyload" data-src="https://restaurant-api.dicoding.dev/images/medium/38" alt="gambar restoran artikel keempat" tabindex="0" />
            <figcaption class="deskripsi" tabindex="0">
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
              the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely
              painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
            </figcaption>
          </figure>
        </article>

        <article class="artikel">
          <h2 class="judul" tabindex="0">Tips 1 Memilih Restoran Enak</h2>
          <figure>
            <img class="gambar lazyload" data-src="./images/heros/parkir.jpg" alt="gambar restoran artikel keempat" tabindex="0" />
            <h2 class="judul2" tabindex="0">Perhatikan tempat parkirnya</h2>
            <figcaption class="deskripsi" tabindex="0">
              Sebelum memilih restoran, perhatikan terlebih dahulu tempat parkirnya. Bila tempat parkirnya kotor dipenuhi sampah, bekas rokok, bahkan berhadapan langsung dengan bak sampah sebaiknya jangan menepi. Tempat parkir, jendela, dan
              pintu yang kotor menandakan bahwa restoran tersebut tidak fokus pada kebersihan. Tak menutup kemungkinan, bila area tempat makan dan dapur tempat menyiapkan makanan juga tak dijaga kebersihannya.
            </figcaption>
            <cite class="sumber">Sumber: <a href="https://kumparan.com/" class="anchor" tabindex="0">https://kumparan.com/</a></cite>
          </figure>
        </article>

        <article class="artikel">
          <h2 class="judul" tabindex="0">Tips 2 Memilih Restoran Enak</h2>
          <figure>
            <img class="gambar lazyload" data-src="./images/heros/ekpresi.jpg" alt="gambar restoran artikel keempat" tabindex="0" />
            <h2 class="judul2" tabindex="0">Perhatikan ekspresi para pelayan</h2>
            <figcaption class="deskripsi" tabindex="0">
              Baik buruknya manajemen sebuah restoran juga bisa dilihat dari ekspresi para pegawainya. Bila hampir semua pelayannya berwajah murung dan bersikap tak acuh, bisa jadi restoran yang kita kunjungi punya kualitas yang buruk. Jika
              tampak depan-nya saja sudah tidak memperlihatkan ketidakpedulian, bisa saja hidangan yang kita pesan juga dimasak dengan asal-asalan.
            </figcaption>
            <cite class="sumber">Sumber: <a href="https://kumparan.com/" class="anchor" tabindex="0">https://kumparan.com/</a></cite>
          </figure>
        </article>

        <article class="artikel">
          <h2 class="judul" tabindex="0">Tips 3 Memilih Restoran Enak</h2>
          <figure>
            <img class="gambar lazyload" data-src="./images/heros/ulasan.jpg" alt="gambar restoran artikel keempat" tabindex="0" />
            <h2 class="judul2" tabindex="0">Lihat ulasan dari para pengunjung lainnya</h2>
            <figcaption class="deskripsi" tabindex="0">
              Saat ini, sudah banyak restoran yang punya profil internet. Bahkan, aplikasi yang memungkinkan para pengunjung untuk menuliskan ulasannya juga sudah ada. Nah, kita bisa menggunakannya sebagai acuan sebelum berkunjung ke
              restoran tersebut. Hanya saja, perhatikan apakah kebanyakan ulasan yang ditulis berasal dari influencer atau pengunjung asli. Bila banyak influencer yang menulis ulasan positif di media sosial tapi ulasan dari pengunjung
              berkata sebaliknya, kemungkinan besar kualitas dari restoran itu tak begitu baik.
            </figcaption>
            <cite class="sumber">Sumber: <a href="https://kumparan.com/" class="anchor" tabindex="0">https://kumparan.com/</a></cite>
          </figure>
        </article>

        <article class="artikel">
          <h2 class="judul" tabindex="0">Tips 4 Memilih Restoran Enak</h2>
          <figure>
            <img class="gambar lazyload" data-src="./images/heros/aroma.jpg" alt="gambar restoran artikel keempat" tabindex="0" />
            <h2 class="judul2" tabindex="0">Cium aroma restoran</h2>
            <figcaption class="deskripsi" tabindex="0">
              Bau yang menguar dari ruangan restoran juga bisa menentukan tingkat kebersihannya. Bila mencium bau kurang sedap minyak basi, makanan gosong, atau bau lain yang menyengat hidung sebaiknya putar balik dan cari restoran
              lain.Dapur dan restoran yang mengutamakan kebersihan, pasti akan membersihkan kulkas dan kompor secara rutin sehingga mencegah timbulnya bau tak sedap.
            </figcaption>
            <cite class="sumber">Sumber: <a href="https://kumparan.com/" class="anchor" tabindex="0">https://kumparan.com/</a></cite>
          </figure>
        </article>
      </section>
        <div id="restaurants" class="restaurants">
        </div>
      `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const loadingMessage = document.querySelector('.loading-message');
    try {
      loadingMessage.innerHTML = 'Tunggu data sedang dimuat...';
      await new Promise((resolve) => { setTimeout(resolve, 4000); });
      const restaurants = await RestorantsSource.listRestorants();
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      loadingMessage.remove();
    } catch (error) {
      loadingMessage.innerHTML = 'Yahh, gagal memuat data.';
    }
  },
};

export default DaftarRestorants;
