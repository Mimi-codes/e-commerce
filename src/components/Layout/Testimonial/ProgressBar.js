import classes from './ProgressBar.module.css';

function ProgressBar() {
return (
    <>
    <label for='file'>1<subscript>/10</subscript></label>
    <progress id='file' value= '1' max='100'>1</progress>
</>
)
}

export default ProgressBar;