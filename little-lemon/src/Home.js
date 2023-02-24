import restauranfood from './restauranfood.jpg';
import MarioandAdrianA from './MarioandAdrianA.jpg';
import specialsData from './SpecialsData';
import TestimonialsData from './TestimonialsData';
import { useNavigate} from "react-router-dom";


const HeroSection = () => {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/reservation');
  };

  return (
    <section className="hero">
      <article className="hero-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum purus sapien, nec fermentum quam
          condimentum ac. Nullam semper dolor nec quam cursus, eu dictum quam mattis. Maecenas eu condimentum est,
          in porta leo. Sed rutrum porttitor auctor.
        </p>
        <button onClick={handleReservationClick}>Reserve a table</button>
      </article>
      <img src={restauranfood} alt="" className="hero-image" />
    </section>
  );
};

const SpecialsPreview = ({ specialsData }) => {
    return(
    <section className="specials-preview">
      <h2>Today's Specials</h2>
      <ul>
      {specialsData.map(special => (
            <li key={special.name}>
                <img src={special.image} alt={special.name}/>
              <h3>{special.name}</h3>
              <p>{special.description}</p>
              <p>{special.price}</p>
          </li>
        ))}
      </ul>
      <button>View our Menu</button>
    </section>
  );
 };

 const Testimonials = ({ testimonialsData }) => {
    return(
    <section className="testimonials">
      <h2>Customers Say</h2>
      <ul className="testimonials-grid">
        {TestimonialsData.map(testimonial => (
          <li key={testimonial.author} className="testimonial-card">
              <h3>{testimonial.author}</h3>
              <p>{testimonial.review}</p>
              <p>{testimonial.starRating}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

  const About = () => {
    return(
    <section className="about">
        <article>
      <h2>About Little Lemon</h2>
      <p>
        Little Lemon is a Mediterranean restaurant that offers a taste of the
        sun-drenched regions of the Mediterranean with a focus on fresh,
        authentic ingredients and recipes. Our warm ambiance and friendly staff
        make Little Lemon the perfect place to gather with friends, family, and
        coworkers.
      </p>
      </article>
    <img src={MarioandAdrianA} alt="" className='about-image'/>
    </section>
    );
};
  {/*const BottomNavBar = () => (
    <nav className="bottom-nav-bar">
      <a href="#about">About</a>
      <a href="#specials">Specials</a>
      <a href="#testimonials">Testimonials</a>
    </nav>
  );*/}

const Home = () => {
    return(
    <div className="home">
      <HeroSection />
      <SpecialsPreview specialsData={specialsData} />
      <Testimonials testimonialsData={TestimonialsData} />
      <About />
    </div>
  );
 }; 
export default Home;