import { REST_LOGO } from "../utils/constants"

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src= {REST_LOGO}>
                </img>
            </div>
            <div className="nav-Items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header