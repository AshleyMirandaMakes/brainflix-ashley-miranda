import UploadIcon from '../../assets/icons/Icon-upload.svg';
import './Button.scss'

const Button = (props) => {
  console.log(UploadIcon);
  return (
    <button className="button"><img className="button__icon" src={UploadIcon} alt={props.name}/>{props.name}</button>
  );
}

export default Button;