import Logo from '../../assets/logos/Logo-brainflix.svg';
import UserIcon from '../../assets/images/Mohan-muruge.jpg';
import Button from '../../components/Button';
import SearchBar from '../../components/SearchBar';


import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <img className="nav__logo" src={Logo} alt="Brainflix Logo"/>
          <SearchBar value="Search"/>
          <div className="nav__bottom">
            <Button name="UPLOAD"/>
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