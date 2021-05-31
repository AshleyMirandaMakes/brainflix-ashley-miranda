import { Link } from 'react-router-dom';

import Logo from '../../assets/logos/Logo-brainflix.svg';
import UserIcon from '../../assets/images/Mohan-muruge.jpg';
import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';


import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__container">
      <Link className="nav__link" to="/"><img className="nav__logo" src={Logo} alt="BrainflixLogo"/></Link>
          <SearchBar value="Search"/>
          <div className="nav__bottom">
          <Link to="/upload"><Button name="UPLOAD"/></Link>
            <UserImage className="nav__image" src={UserIcon} image={UserIcon} />
          </div>
        </div>
    </nav>
  );
}

const UserImage = (props) => {
  return (
    <div className="nav__image">
      <img className="nav__image" src={props.image} alt="user's face"></img>
    </div>
  );
}
export default Nav;