import classes from './HeroButton.module.css';
import {AiOutlineArrowRight} from 'react-icons/ai';

const HeroButton = (props) => {
    return (
    <>    <button className={classes.btn}>Discover Menu</button>
    <AiOutlineArrowRight  className={classes['arrow-icon']}/>
    </>
)
}

export default HeroButton;