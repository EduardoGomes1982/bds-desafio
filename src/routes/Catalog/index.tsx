import CardCatalog from 'components/CardCatalog';
import CardSearch from 'components/CardSearch';
import './styles.css';

const Catalog = () => {
    return (
        <div className='card-gap'>
            <CardSearch />
            <section id='section-catalog'>
                <div className='card-catalog-gap'>
                    <CardCatalog />
                    <CardCatalog />
                    <CardCatalog />
                    <CardCatalog />
                    <CardCatalog />
                    <CardCatalog />
                    <CardCatalog />
                    <CardCatalog />
                    <CardCatalog />
                </div>
            </section>
        </div>
    );
};

export default Catalog;