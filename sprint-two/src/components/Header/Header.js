import Nav from '../Nav';

import './Header.scss';

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
        <Nav /> 
      </div>
    </header>
  );
}

export default Header;