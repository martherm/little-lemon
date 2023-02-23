function Footer() {
    const handleFacebookClick = () => {
        window.open('https://www.facebook.com', '_blank');
      };
    
      const handleInstagramClick = () => {
        window.open('https://www.instagram.com', '_blank');
      };
  return (
  <>
  <footer className="footer">
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
    <a href="#" onClick={handleFacebookClick}>Facebook</a>
    <br />
    <br />
    <a href="#" onClick={handleInstagramClick}>Instagram</a>
   </article>
   </footer>
  </>
  );
}

export default Footer;