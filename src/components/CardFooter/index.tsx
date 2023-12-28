import ButtonCard from 'components/ButtonCard';
import './styles.css';
import { Link } from 'react-router-dom';

const CardFooter = () => {
    return (
        <div className='card-footer'>
            <Link to='/products'><ButtonCard btLabel='VER CATÁLOGO' /></Link>
            <p>Comece agora a navegar</p>
        </div>
    );
};

export default CardFooter;
