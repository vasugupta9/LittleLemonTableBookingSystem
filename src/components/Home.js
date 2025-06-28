import './styles.css';
import PromoBanner from './PromoBanner';

function Home() {
  return (
    <main>
      <PromoBanner
        heading="30% Off This Weekend"
        subheading="Order online and get 30% off on all items"
        imageURL={require("../assets/images/banner_dish_img.png")}
      />
      <section class="content">
          <article class="item">
              <h2>Our New Menu</h2>
              <img src={require("../assets/images/menu_img.png")} alt="Menu" />
              <p>Check out our new menu items</p>
          </article>
          <article class="item">
              <h2>Book a table</h2>
              <img src={require("../assets/images/book_img.png")} alt="Booking" />
              <p>Easily book a table online</p>
          </article>
          <article class="item">
              <h2>Opening Hours</h2>
              <img src={require("../assets/images/timings_img.png")} alt="Timings" />
              <p>We are open 24/7 !</p>
          </article>
      </section>
    </main>
  );
}

export default Home;