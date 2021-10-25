import React from "react";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../../../assets/css/ProductCard.css";
import { useMediaQuery } from "react-responsive";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
const style = {
  main: {
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "1000px",
    height: "650px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    // p: 4,
  },
  image: {
    width: "100%",
    height: "647px",
    objectFit: "cover",
  },
  content: {
    marginTop: "30px",
    display: "grid",
    justifyContent: "center",
    // alignItems: "space-between",
    width: "1000px",
    textAlign: "center",
  },
  title: {
    fontSize: "20px",
    letterSpacing: "1px",
    fontFamily: "맑은 고딕",
    marginTop: "1px",
  },
  description: {
    fontSize: "18px",
    color: "rgb(135,134,136)",
    marginLeft: "10px",
    marginRight: "10px",
    fontFamily: "맑은 고딕",
  },
  extraInfo: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  },
  tag: {
    color: "rgb(135,134,136)",
    padding: "10px",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  close: {
    fontSize: "35px",
    position: "absolute",
    right: "10px",
    top: "2px",
  },
};

const ProductCard = ({
  image,
  name,
  categoryId,
  description,
  id,
  hot,
  material,
  weight,
  dimensions,
}) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log({ hot, material, weight, dimensions, description });

  return (
    <div className="mb-3" style={{ position: "relative" }}>
      <button onClick={handleOpen} className="product-modal-button">
        <figure
          className="box"
          style={{
            background: `rgba(0,0,0,0.3) url({image})`,
            backgroundBlendMode: "darken",
            opacity: "-moz-initial.8",
          }}
        >
          <img src={image} alt="sample36" className="product-card-image" />
        </figure>

        <div
          style={{
            position: "absolute",
            top: "22px",
            left: "16px",
            backgroundColor: "red",
            width: "50px",
            height: "25px",
            alignContent: "center",
            justifyContent: "center",
            opacity: ".8",
          }}
        >
          <p style={{ color: "white", fontSize: "small" }}>HOT</p>
        </div>

        <div style={{ display: "grid", justifyContent: "center" }}>
          <a className="product-anchor" href={`/product/${id}`}>
            <p
              style={{
                width: "250px",
                fontFamily: "맑은 고딕",
                fontSize: "14px",
              }}
            >
              {name}
            </p>
          </a>
          <p>{hot}</p>
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
              <p style={style.title}>{name}</p>
              <p style={style.description}>{description}</p>
              <hr style={{ width: "50%", margin: "auto" }} />
              <div style={style.extraInfo}>
                <div style={style.tag}>
                  Category:
                  <Link style={style.link} href={`/category/${categoryId}`}>
                    {categoryId}
                  </Link>
                </div>
                {material ? (
                  <div style={style.tag}>Material: {material}</div>
                ) : (
                  <></>
                )}
                {weight ? <div style={style.tag}>weight: {weight}</div> : <></>}
                {dimensions ? (
                  <div style={style.tag}>dimensions: {dimensions}</div>
                ) : (
                  <></>
                )}
              </div>
              <Link style={style.link} href={`/product/${id}`}>
                For more info visit here
              </Link>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default ProductCard;
