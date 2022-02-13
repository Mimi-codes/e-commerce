import classes from './Menu.module.css';
import MenuCard from './MenuCard';


function Menu() {
    return(
       <div className={classes.menu}>
           <div className={classes.hr}><h4>SEE</h4> </div>
<h2 className={classes['our-menu']}>our menu</h2>  
<div className={classes.links}>
    <a href=''>cakes</a>
    <a href=''>donuts</a>
    <a href=''>pies</a>
    <a href=''>small chops</a>
    <a href=''>chinchin</a>
    <a href=''>drinks</a>
</div>
<MenuCard />
<MenuCard />
       </div>
    )
}

export default Menu;