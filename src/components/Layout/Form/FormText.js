import classes from './FormText.module.css';
import ReservationForm from './ReservationForm';


function FormText() {
    return (
        <>
         <div className={classes['form-section']}>
       <div className={classes.form}>
        <div className={classes.booking}>
        <div className={classes.hr}><h4>booking</h4> </div>
        <h2 className={classes.book}>book a reservation</h2>
        <p className={classes['booking-para']}>We are a company dedicated to the preparation 
        of snack of different varieties, providing our customers with a product
        always fresh and fresh from the oven and giving your taste buds a tasty treat.</p> 
      </div>
      </div>
      </div>
      <ReservationForm />
          </>
    )
    }
    export default FormText;
    