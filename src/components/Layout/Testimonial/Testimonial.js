import classes from './Testimonial.module.css';
import TestimonialCard from './TestimonialCard';
import cakeLoaf from '../../../assets/cakeloaf.jpg';
import ProgressBar from './ProgressBar';

function Testimonial() {
return (
    <div className={classes['testimonial-section']}>
   <div className={classes.testimonial}>
    <div className={classes.customers}>
    <div className={classes.hr}><h4>TESTIMONIAL</h4> </div>
    <h2 className={classes.hear}>hear from our customers</h2>
    <p className={classes['hear-para']}>We are a company dedicated to the preparation 
    of snack of different varieties, providing our customers with a product
    always fresh and fresh from the oven and giving your taste buds a tasty treat.</p> 
    <img src={cakeLoaf} alt ='cake loaf'/>
    {/* <HeroButton /> */}
    </div>
    <div className={classes['pro-card']}>
    <TestimonialCard />
   <ProgressBar /> 
    </div>
  </div>
</div>
)
}

export default Testimonial;