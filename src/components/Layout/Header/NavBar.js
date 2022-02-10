import classes from './NavBar.module.css';
import {BiUser, BiShoppingBag } from 'react-icons/bi';

function NavBar() {
  return(
<div className={classes.nav}>
 <h1 className={classes.logo}>Brand Name</h1>
   <a href="#about">About</a>
   <a href="#menu">Menu</a>
   <a href="#reservations">Reservations</a>
   <a href="#order">Order</a>
   <a href="#contact">Contact</a>
   <a href="#my_account"><BiUser /> My Account</a>
   <a href="#cart"><BiShoppingBag /> Cart</a>
</div>
  )
}

export default NavBar;