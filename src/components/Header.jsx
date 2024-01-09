import logo from "../../public/logo.svg"
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="app-logo" width={130} />
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about us</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
          <li>
            <a href="https://main--monumental-choux-4ab945.netlify.app/">
              team
            </a>
          </li>
          <li>
            <a href="#">others</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header