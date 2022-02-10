import classes from './NavBar.module.css';

function NavBar() {
<div>
 <h1 className={classes.logo}>Brand Name</h1>
   <a href="#about">About</a>
   <a href="#menu">Menu</a>
   <a href="#reservations">Reservations</a>
   <a href="#order">Order</a>
   <a href="#contact">Contact</a>
   <a href="#my_account">My Account</a>
   <a href="#cart">Cart</a>
</div>
}

export default NavBar;