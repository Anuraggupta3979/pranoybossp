import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../../../assets/css/ProductCard.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProductCard = ({ image, name, category, description }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // console.log(data.name )
  return (
    <div className="mb-3">
      <button onClick={handleOpen} className="product-modal-button">
        <figure className="box">
          <img src={image} alt="sample36" />
          <figcaption>
            <div>{/* <i className="ion-ios-home-outline"></i> */}</div>
          </figcaption>
          {/* <a href="#"></a> */}
        </figure>
        <div>
          <p className="text-center">{name}</p>
          <p className="text-center">{category}</p>
        </div>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductCard;
