import classes from './HeroSVG.module.css';
import svgIcon from '../../../assets/svg/Vector-Muffin.png';
import svgIcon1 from '../../../assets/svg/Cookie-Transparent.png';
//import svgIcon2 from '../../../assets/svg/Chocolate-Milkshake.png';
import svgIcon3 from '../../../assets/svg/Pink-Donut-PNG-HD-Image.png';
import About from '../About/About';
import {BiCookie, BiCake} from 'react-icons/bi';
import Recipe from '../../Products/Recipe';


function HeroSVG() {
    
const svgStyles = {color: 'brown', fontSize: '5rem', marginLeft: '5.8rem', marginTop: '1.2rem'};

return (
    <div className={classes.svg}>
          <div className={classes['site-icon1']}><p className={classes.para}>Cookies</p><BiCookie style={svgStyles}/></div>
          <div className={classes['site-icon2']}><p className={classes.para}>Cake</p><BiCake style={svgStyles} /></div>
          <div className={classes['site-icon3']}><p className={classes.para}>Pie</p></div>
          <div className={classes['site-icon4']}><p className={classes.para}>Drink</p> </div>
       <About><Recipe /></About>
    
    </div>
)

}
export default HeroSVG;
