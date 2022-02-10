
import perfectSnack from '../../../assets/choc-cake.png'
import classes from './HeroImage.module.css';

function HeroImage() {
    return (
        <div className={classes.image}>
        <img src={perfectSnack} alt='hero img' />
        </div>
    )
}

export default HeroImage;