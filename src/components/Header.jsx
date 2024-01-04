import logo from "../../public/logo.svg"
const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="app-logo" width={130} />
        </div>
    </header>
  )
}

export default Header