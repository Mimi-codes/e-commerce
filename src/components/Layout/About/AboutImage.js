
import perfectSnack from '../../../assets/svg/choc.png';
import classes from './AboutImage.module.css';

function AboutImage() {
    return (
        <div className={classes.image}>
        <img src={perfectSnack} alt='hero img' />
        </div>
    )
}

export default AboutImage;