import classes from './HeroSection.module.css';
import HeroImage from './HeroImage';
import HeroButton from './HeroButton';
import NavBar from './NavBar';
import HeroSVG from './HeroSVG';
import {FaUser} from 'react-icons/fa';
import {BsBag} from 'react-icons/bs';

function HeroSection() {
return (
  <>
    <div className={classes['hero-section']}>
    <NavBar />
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
</>

)
}

export default HeroSection;