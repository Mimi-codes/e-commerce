import classes from './ProgressBar.module.css';

function ProgressBar() {
return (
    <>
    <div className={classes['progress-bar']}>
    <label htmlFor='file'>1<subscript>/10</subscript></label>
    <progress id='file' value= '20' max='100'>1</progress>
</div>
</>
)
}

export default ProgressBar;