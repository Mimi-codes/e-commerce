import classes from './HeroSVG.module.css';
import svgIcon from '../../../assets/svg/Vector-Muffin.png';
import svgIcon1 from '../../../assets/svg/Cookie-Transparent.png';
//import svgIcon2 from '../../../assets/svg/Chocolate-Milkshake.png';
import svgIcon3 from '../../../assets/svg/Pink-Donut-PNG-HD-Image.png';
import About from '../About/About';
import {BiCookie, BiCake} from 'react-icons/bi';


function HeroSVG() {
    
const svgStyles = {color: 'brown', fontSize: '8rem', 'margin-left': '4rem', 'margin-top': '1rem'};

return (
    <div className={classes.svg}>
          <div className={classes['site-icon1']}><BiCookie style={svgStyles}/> </div>
          <div className={classes['site-icon2']}><BiCake style={svgStyles}/> </div>
          <div className={classes['site-icon3']}></div>
          <div className={classes['site-icon4']}> </div>
       <About />
    </div>
)

}
export default HeroSVG;
