import './Nav.scss';
import Logo from '../../assets/logos/Logo-brainflix.svg';
import UserIcon from '../../assets/images/Mohan-muruge.jpg';
import SearchIcon from '../../assets/icons/Icon-search.svg';
import UploadIcon from '../../assets/icons/Icon-upload.svg';

import './Nav.scss';

function Nav() {
  console.log(Logo)
  return (
    <nav className="nav">
      <img className="nav__logo" src={Logo} alt="Brainflix Logo"/>
      <SearchBar src={SearchIcon} img={SearchIcon} value="Search"/>
      <div className="nav__bottom">
        <Button name="UPLOAD" src={UploadIcon} img={UploadIcon}/>
        <UserImage src={UserIcon} image={UserIcon} />
      </div>
    </nav>
  );
}

console.log({SearchIcon})

const SearchBar = (props) => {
  console.log(props.SearchIcon)
  return (
    <input 
    className="nav__searchbar"
    type="text" 
    src={props.SearchIcon}
    onChange="defaultValue"
    value={props.value}>
      {/* <img className="nav__searchbar--icon" src={props.SearchIcon}/> */}
    </input>
  );
}
//hmmm no icon


console.log({UploadIcon})
const Button = (props) => {
  return (
    <button className="nav__button"><img src={props.UploadIcon}/>{props.name}</button>
  );
}

const UserImage = (props) => {
  return (
    <div className="nav__image">
      <img className="nav__image" src={props.image} alt="user's image"></img>
    </div>
  );
}
export default Nav;