import classes from './HeroSection.module.css';
import HeroImage from './HeroImage';
import HeroButton from './HeroButton';
import NavBar from './NavBar';
import HeroSVG from './HeroSVG';
import {FaUser} from 'react-icons/fa';
import {BsBag} from 'react-icons/bs';

function HeroSection() {
return (
    
    <div className={classes['hero-section']}>
<div className={classes.nav}>
 <h1 className={classes.logo}>Brand Name</h1>
   <a href="#about">About</a>
   <a href="#menu">Menu</a>
   <a href="#reservations">Reservations</a>
   <a href="#order">Order</a>
   <a href="#contact">Contact</a>
   <a href="#my_account"><FaUser />My Account</a>
   <a href="#cart"><BsBag /> Cart</a>
</div>

<div className={classes.discover}>
    <div className={classes.perfect}>
    <h2 className={classes['main-discover']} >The perfect cake every time!</h2>
    <p className={classes['main-discover-para']}>We are a company dedicated to the preparation 
    of snack of different varieties, providing our customers with a product
    always fresh and fresh from the oven and giving your taste buds a tasty treat.</p>
    <HeroButton />
    </div>
    <HeroImage />
  </div>
</div>
)
}

export default HeroSection;