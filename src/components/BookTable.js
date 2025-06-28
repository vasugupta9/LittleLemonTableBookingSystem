import './styles.css';
import PromoBanner from './PromoBanner';

function Home() {
  return (
    <main>
      <PromoBanner
        heading="Special Weekend Offer"
        subheading="Book now and get complimentary desserts"
        imageURL={require("../assets/images/banner_dessert_img.jpg")}
      />
      <p>Table Booking</p>
    </main>
  );
}

export default Home;