import classes from './RecipeImage.module.css';
import glazedDonut from '../../assets/cupcake.jpg';
import cakeLoaf from '../../assets/cakeloaf.jpg';
import Card from 'react-bootstrap/Card';

function RecipeImage() {
    return (
    <Card style={{width: '10rem'}}>
    <Card.Img variant='top' src={glazedDonut}  alt='glazed donut' />
    <Card.Body>
        <Card.Title>price</Card.Title>
        <Card.Text>Cupcake</Card.Text>
    </Card.Body>
    </Card>
    
   )
}

export default RecipeImage;