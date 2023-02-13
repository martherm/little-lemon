
import Logo from './Logo .svg';

function Header() {
  return (
    <>
    <article className='header-container'>
    <img src={Logo} alt="Logo" className='header'/>
    </article>
    </>
  );
}

export default Header;