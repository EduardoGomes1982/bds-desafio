import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/dist/collapse';

const NavBar = () => {
    return (
        <nav className='bg-primary navbar navbar-expand-md navbar-dark main-nav'>
            <div><h4>Carros Top</h4></div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ct-button" aria-controls="ct-button"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id='ct-button' className=' collapse'>
                <ul className='navbar-nav offset-md-2 main-menu'>
                    <li>Home</li>
                    <li>Catálogo</li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
