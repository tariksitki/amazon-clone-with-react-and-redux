import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap/";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        style={{
          backgroundColor: "rgb(35, 47, 62)",
          border: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <MenuOutlinedIcon />
        <span style={{ fontWeight: "600" }}>All</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;