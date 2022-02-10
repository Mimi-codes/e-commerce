
import classes from './RecipeImage.module.css';
import RecipeImage from './RecipeImage';

function Recipe() {
    return (
   <div className={classes.recipes}>
<div className={classes.hr}><h4>EXPLORE</h4> </div>
<h2 className={classes['hot-selling-recipe']}>Hot Selling Recipe</h2>
<p className={classes.para}>Brand name opened its first location at home.</p>

<RecipeImage />
</div>
    )
}

export default Recipe;