import HeroButton from '../Header/HeroButton';
import classes from './About.module.css'
import AboutImage from '../About/AboutImage';
import HeroSVG from '../Header/HeroSVG';
import Recipe from '../../Products/Recipe';
function About() {
return (     
    <>  
     <div className={classes.discover} id='#about'>
<AboutImage />

    <div className={classes.perfect}>   
    {/* <h4>WELCOME</h4> */}
     <div className={classes.hr}><h4>WELCOME</h4> </div>
    <h2 className={classes['main-discover']}>About Brand Name</h2>
    <p className={classes['main-discover-para']}>We are a company dedicated to the preparation 
    of snack of different varieties, providing our customers with a product
    always fresh and fresh from the oven and giving your taste buds a tasty treat.</p>
    <HeroButton>props.children</HeroButton>
    </div>
</div>
</>
)
}

export default About;