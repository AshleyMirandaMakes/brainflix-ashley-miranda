//import React from 'react';
import './Nav.scss';
import Logo from '../assets/logos/Logo-brainflix.svg';
import UserIcon from '../assets/images/Mohan-muruge.jpg'
// import UploadIcon from '../assets/icons/Icon-upload.svg';
// import SearchIcon from '../assets/icons/Icon-search.svg';


const Button = (props) => {
  // console.log(props.icon);
    return (
      <button className="nav__button">{props.icon}{props.name}</button>
    );
}



const SearchBar = (props) => {
  return (
    <input 
    className="nav__searchbar"
    type="text" 
    src={props.i}
    value={props.value}
    onChange="defaultValue"
    />
  );
}

const UserImage = (props) => {
  return (
    <div className="nav__image">
      <img className="nav__image" src={props.image} alt="user's image"></img>
    </div>
  );
}

// class Button extends React.Component {
//   render() {
//     return (
//       <button>{this.props.icon}{this.props.name}</button>
//     );
//   }
// }


function Nav() {
  return (
    <nav className="nav">
      <img className="nav__logo" src={Logo} alt="Brainflix Logo"/>
      <SearchBar value="Search"/>
      <div className="nav__bottom">
        <Button name="UPLOAD"/>
        <UserImage src={UserIcon} image={UserIcon} />
      </div>
    </nav>
  );
}

export default Nav;