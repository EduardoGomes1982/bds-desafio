import './styles.css';

const CardSearch = () => {
    return (
        <div className='card-search'>
            <form className='container'>
                <div className='input-group container'>
                    <div className='input-group-prepend col'>
                        <input type='text' name='txt-filter' id='txt-filter' className='form-control' placeholder='Digite sua busca' />
                    </div>
                    <div className='input-group-text'>BUSCAR</div>
                </div>
            </form>
        </div>
    );
};

export default CardSearch;
