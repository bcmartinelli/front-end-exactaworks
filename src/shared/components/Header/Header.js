import { slide as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Header.scss';
import { useState } from 'react';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state) => {
    console.log(state)
    setIsOpen(state.isOpen)
  };

  return (
    <header>
      <div className='container'>
        <img src="/images/exacta-logo.svg" alt="Logo Exacta" />
        <nav id='nav-header'>
          <Menu
            isOpen={isOpen}
            right
            className="header-menu"
            customBurgerIcon={ <FontAwesomeIcon icon={faBars} />}
            onStateChange={(state) => handleStateChange(state)}
          >
            <button className='close-menu' onClick={() => handleStateChange({isOpen: !isOpen})}>
              <FontAwesomeIcon icon={faXmark} /> Fechar
            </button>
            <hr />
            <a id="list" href="/profile/list">Dados Cadastrados</a>
            <hr />
            <a id="add" href="/profile/new">Adicionar</a>
            <hr />
          </Menu>
        </nav>
      </div>
    </header>   
  );
}

export default Header;
