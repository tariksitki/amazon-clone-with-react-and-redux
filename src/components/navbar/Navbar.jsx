
import AmazonImage from "../../assets/images/amazon-logo.png";
import "./Navbar.scss";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const Navbar = () => {
  return (
    <nav className="navbar-container">
        <section className="navbar-up-section">
            <div className="navbar-up-logo-div">
                <img className="navbar-logo-image" src={AmazonImage} alt="" />
            </div>
            
            <div className="navbar-up-location-div">
                <div className="navbar-up-location-left">
                    <FmdGoodOutlinedIcon style={{color : "white"}} />
                </div>

                <div className="navbar-up-location-right">
                    <p>Hello</p>
                    <h4>Select your address</h4>
                </div>
            </div>

            <div className="navbar-up-input-div">

            </div>

            <div className="navbar-up-language-div">

            </div>

            <div className="navbar-up-account-div">

            </div>

            <div className="navbar-up-orders-div">

            </div>

            <div className="navbar-up-shoppingbasket-div">

            </div>


        </section>

        <section className="navbar-down-section">

        </section>
    </nav>
  )
}

export default Navbar