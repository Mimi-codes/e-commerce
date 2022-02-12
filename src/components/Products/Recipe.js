import Menu from '../Products/Menu';
import classes from './Recipe.module.css';
import RecipeCard from './RecipeCard';


function Recipe() {
    return (
   <div className={classes.recipes}>
 <div className={classes['recipe-content']}>
<div className={classes.hr}><h4>EXPLORE</h4> </div>
<h2 className={classes['hot-selling-recipe']}>Hot Selling Recipe</h2>     
<p className={classes.para}>Brand name opened its first location at home.</p>


</div>
<RecipeCard />
<Menu />
</div>

    )
}

export default Recipe;