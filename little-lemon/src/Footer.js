import './App.css';

function Footer() {
  return (<>
  <h1>Footer</h1>
  <article>
  <h3>Doormat Navigation</h3>
  <ul>
        <li>
            <a href="Home">Home</a>
        </li>
        <li>
            <a href="About">About</a>
        </li>
        <li>
            <a href="Menu">Menu</a>
        </li>
        <li>
            <a href="Reservation">Reservation</a>
        </li>
        <li>
            <a href="Order Online">Order Online</a>
        </li>
        <li>
            <a href="Login">Login</a>
        </li>
    </ul>
    </article>
    <article>
    <h3>Contact</h3>
   <p>Adress</p>
   <p>Phone number</p>
   <p>Email</p>
   </article>
   <article>
    <h3>Social Media</h3>
    <p>Facebook</p>
    <p>Instagram</p>
   </article>
  </>
  );
}

export default Footer;