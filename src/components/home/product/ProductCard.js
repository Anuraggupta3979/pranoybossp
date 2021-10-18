import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../../../assets/css/ProductCard.css";
import { useMediaQuery } from "react-responsive";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  main: {
    display: "flex",
    justifyContent: "space-between",
    align: "space-around",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    // p: 4,
  },

  image: {
    //     width: 320px; /* width of container */
    width: "320px",
    height: "400px",
    objectFit: "cover",
    // height: 400px; /* height of container */
    // object-fit: cover;
    marginLeft: "10px",
    objectFit: "cover",
  },

  content: {
    marginTop: "60px",
    marginRight: "40px",
    alignItems: "center",
    justifyContent: "center",
  },
  close: {
    fontSize: "35px",
    position: "absolute",
    right: "10px",
    top: "20px",
  },
};

const ProductCard = ({ image, name, category, description, id }) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // console.log(data.name )
  return (
    <div className="mb-3">
      <button onClick={handleOpen} className="product-modal-button">
        <figure className="box">
          <img src={image} alt="sample36" className="product-card-image" />
        </figure>
        <div style={{ display: "grid" }}>
          <a className="product-anchor" href={`/product/${id}`}>
            {name}
          </a>
        </div>
      </button>
      {isTabletOrMobileDevice ? (
        <></>
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style.main}>
            <img src={image} alt="sample36" style={style.image} />

            <CloseIcon sx={style.close} onClick={handleClose} />
            <div style={style.content}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {name}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {name}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {name}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {name}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {name}
              </Typography>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {description}
              </Typography>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default ProductCard;
