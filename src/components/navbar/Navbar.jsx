import AmazonImage from "../../assets/images/amazon-logo.png";
import "./Navbar.scss";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import OffCanvas from "../offcanvas/OffCanvas";
import { Dropdown } from "react-bootstrap/";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <section className="navbar-up-section">
        <div className="navbar-up-logo-div">
          <img className="navbar-logo-image" src={AmazonImage} alt="" />
        </div>

        <div className="navbar-up-location-div">
          <div className="navbar-up-location-left">
            <FmdGoodOutlinedIcon style={{ color: "white" }} />
          </div>

          <div className="navbar-up-location-right">
            <span>Hello</span>
            <h6>Select your address</h6>
          </div>
        </div>

        <Dropdown
          className="navbar-up-all-button-div"
          style={{ marginLeft: "1.5rem" }}
        >
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{
              background: "#f7f7f7",
              color: "rgb(153, 153, 153)",
              border: "none",
              height: "2.5rem",
              borderRadius: "0.3rem 0 0 0.3rem",
              fontSize: "0.9rem",
              fontWeight: "normal",
              outline: "none",
            }}
          >
            All
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">All Departments</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Alexa Skills</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Amazon Devices</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Amazon Global Store</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Amazon Warehouse</Dropdown.Item>
            <Dropdown.Item href="#/action-6">Apparel</Dropdown.Item>
            <Dropdown.Item href="#/action-7">Apps & Games</Dropdown.Item>
            <Dropdown.Item href="#/action-8">Audible Audiobooks</Dropdown.Item>
            <Dropdown.Item href="#/action-9">Automotive</Dropdown.Item>
            <Dropdown.Item href="#/action-10">Baby</Dropdown.Item>
            <Dropdown.Item href="#/action-10">Books</Dropdown.Item>
            <Dropdown.Item href="#/action-10">Camera-Foto</Dropdown.Item>
            <Dropdown.Item href="#/action-10">Cds & Vinyl</Dropdown.Item>
            <Dropdown.Item href="#/action-10">Classical Music</Dropdown.Item>
            <Dropdown.Item href="#/action-10">
              Computer & Accessories
            </Dropdown.Item>
            <Dropdown.Item href="#/action-10">Digital Music</Dropdown.Item>
            <Dropdown.Item href="#/action-10">DVD & Blu-ray</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="navbar-up-input-container">
          <input type="text" />

          <button>
            <SearchOutlinedIcon style={{ fontSize: "1.7rem" }} />
          </button>
        </div>

        <div className=""></div>

        <div className=""></div>

        <div className="navbar-up-orders-div">
            <span>Returns<br /><span style={{fontWeight : "600"}} >& Orders</span>  </span>
        </div>

        <div className="navbar-up-shopping-div">
          <div className="navbar-up-shopping-div-inner">
            <span className="shopping-count" >0</span>
            <ShoppingCartOutlinedIcon
              className="navbar-up-shopping-icon"
              style={{ color: "white", fontSize : "1.8rem" }}
            />
          </div>

          <span className="shopping-title">Shopping-<br /><span style={{fontWeight : "600"}} >Basket</span>  </span> 
    
        </div>
      </section>

      <section className="navbar-down-section">
        <div className="navbar-down-section-left">
          <div className="navbar-down-div">
            <OffCanvas />
          </div>

          <div className="navbar-down-div">
            <span>Prime Video</span>{" "}
          </div>
          <div className="navbar-down-div">
            <span>Amazon Basics</span>{" "}
          </div>
          <div className="navbar-down-div">
            <span>Buy Again</span>{" "}
          </div>
          <div className="navbar-down-div">
            <span>Today's Deals</span>{" "}
          </div>
          <div className="navbar-down-div">
            <span>Prime</span>{" "}
          </div>
          <div className="navbar-down-div">
            <span>Best Sellers</span>{" "}
          </div>
          <div className="navbar-down-div">
            <span>Customer Service</span>{" "}
          </div>
          <div className="navbar-down-div">
            <span>Gift Cards</span>{" "}
          </div>
        </div>

        <div className="navbar-down-section-right">
          <div>Mother's Day Gift Guide </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
