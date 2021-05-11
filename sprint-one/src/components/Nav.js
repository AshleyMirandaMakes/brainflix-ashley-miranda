import Logo from '../assets/logos/Logo-brainflix';


function Nav() {
  return (
    <nav className="nav">
      Hello world
      <List />
      <ListUsingMap />
      <DisplayGrades />
      <img src={Logo} alt="A demonstration of Promises" height="150"/>
    </nav>
  );
}

export default Nav;