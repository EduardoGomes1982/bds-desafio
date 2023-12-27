import './styles.css';

import carHeader from '../../assets/car-header.png';

const CardHeader = () => {
    return (
        <div className='card-header'>
            <img src={carHeader} alt='O carro Perfeito' className='img-header' />
            <div>
                <h5>O carro perfeito para você</h5>
                <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
            </div>
        </div>
    );
};

export default CardHeader;
