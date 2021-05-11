//import React from 'react';
import Logo from '../assets/logos/Logo-brainflix.svg';
import UserIcon from '../assets/images/Mohan-muruge.jpg'
import UploadIcon from '../assets/icons/Icon-upload.svg';
import SearchIcon from '../assets/icons/Icon-search.svg';

const Button = (props) => {
    return (
      <button>{props.icon}{props.name}</button>
    );
}

const SearchBar = (props) => {
  return (
    <input 
    type="text" 
    placeholder={props.icon} 
    value={props.value}
    />
  );
}

const UserImage = (props) => {
  return (
    <div className="nav__image">
      <img src={props.image} alt="user's image"></img>
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
      <img src={Logo} alt="Brainflix Logo"/>
      <SearchBar placeholder={SearchIcon} value="Search"/>
      <Button icon={UploadIcon} name="UPLOAD"/>
      <UserImage image={UserIcon} />
    </nav>
  );
}

export default Nav;