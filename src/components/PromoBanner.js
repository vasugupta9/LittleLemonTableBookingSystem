import './styles.css';

function PromoBanner({heading, subheading, imageURL}) {

const backgroundImg = { backgroundImage: `url(${imageURL})` };
  return (
    <section className="promo-banner" style={backgroundImg}>
        <article>
            <h2>{heading}</h2>
            <p>{subheading}</p>
        </article>
    </section>
  );
}

export default PromoBanner;
