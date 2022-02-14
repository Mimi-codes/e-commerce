import classes from './ReservationForm.module.css';
import {Form, Button, TextArea} from 'semantic-ui-react';
import {useForm} from 'react-hook-form';
import {BiUser } from 'react-icons/bi';
import {BsTelephoneFill } from 'react-icons/bs';
import {MdOutlineEmail, MdDateRange   } from 'react-icons/md';
import {IoMdTime } from 'react-icons/io';
import { HiUserGroup } from 'react-icons/hi';

function ReservationForm() {
    const {register, handleSubmit, 
        formState: {
        errors}} = useForm();

        const onSubmit = (data) => {
            console.log(data);
        }
    
    return (
<>
<div>
<Form onSubmit={handleSubmit(onSubmit)}>
    <div className={classes['row-one']}>
    <Form.Field>
       <BiUser /> <input placeholder='Name' type='text' {...register('name', {required: true, maxLength: 10})} />
        {errors.name && <p>Please check the name.</p>}
    </Form.Field>

    <Form.Field>
   <MdOutlineEmail /><input placeholder='Email' type='text' {...register('email', {required: true})} />
    {errors.email && <p>Please enter a valid email address.</p>}
    </Form.Field>
    <Form.Field>
     <BsTelephoneFill /><input placeholder='Phone Number' type='number' {...register('phoneNumber', {required: true, maxLength: 11})} />
   {errors.phoneNumber && <p>Please enter a valid phone number.</p>}
    </Form.Field>
</div>

<div className={classes['row-two']}>
    <Form.Field>
    <MdDateRange /><input placeholder='Date' type='date' {...register('date', {required: true})} />
  {errors.date && <p>Please enter a valid date.</p>}
    </Form.Field>

    <Form.Field>
    <IoMdTime /><input placeholder='Time' type='time' {...register('time', {required: true})} />
    {errors.time && <p>Please enter a valid time.</p>}
    </Form.Field>
    
    <Form.Field>
    <HiUserGroup /><input placeholder='Guests' type='number' {...register('guests', {required: true})} />
    {errors.guests && <p>Please enter a valid number of guests.</p>}
    </Form.Field>
    </div>

    <Form.Field>
        {/* <TextArea>Message</TextArea> */}
<input placeholder='Message' type='text' {...register('message')} /> 
    {errors.message && <p>Please check the message.</p>}
    </Form.Field>

    <Button type='submit'>CHECK AVAILABILITY</Button>
</Form>
</div>
</>
)
}
export default ReservationForm;

/*
// {/* MdOutlineEmail */
// {/* BsTelephoneFill */}
// {/* MdDateRange */}
// {/* IoMdTime */}
// {/* BiMessageRoundedDots */}
// {/* HiUserGroup */}
// {/* AiOutlineArrowRight */}
// {/* AiOutlineCopyright */}
// {/* IoIosArrowDroprightCircle */}
// {/* HiOutlineMinus */}
// 