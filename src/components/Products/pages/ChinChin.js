import classes from './ChinChin.module.css';
import glazedDonut from '../../assets/glazed doughnut.jpg';
import cakeLoaf from '../../assets/cakeloaf3.jpg';
import meatPie from '../../assets/meatpie1.jpg';
import smallChops from '../../assets/bb-small-chops-2.jpg';
import {AiFillStar} from 'react-icons/ai';
 

function ChinChin() {
    return(      
<div className={classes.card}>
<img src={cakeLoaf} alt ='cake loaf' />
<div className={classes.container}>
    <p>$price</p>
    <p>small chops</p>
    <p><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
</div>
    </div>
    )
}

export default ChinChin;