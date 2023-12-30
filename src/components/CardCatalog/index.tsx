import './styles.css';

import carCatalog from '../../assets/car-catalog.png';

const CardCatalog = () => {
    return (
        <div className='card-catalog'>
            <img src={carCatalog} alt='O carro Perfeito' className='img-catalog' />
            <div>
                <h5>Audi Supra TT</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            </div>
        </div>
    );
};

export default CardCatalog;
