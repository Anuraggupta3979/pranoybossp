import React from "react";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../../../assets/css/ProductCard.css";
import { useMediaQuery } from "react-responsive";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  main: {
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "1000px",
    height: "720px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    // p: 4,
  },
  image: {
    width: "500px",
    height: "717px",
    objectFit: "cover",
  },
  content: {
    marginTop: "50px",
    display: "grid",
    justifyContent: "center",
    // alignItems: "space-between",
    width: "500px",
    textAlign: "center",
  },
  title: {
    fontSize: "30px",
    letterSpacing: "4px",
  },
  description: {
    position: "absolute",
    top: "170px",
    fontSize: "20px",
    color: "rgb(135,134,136)",
    marginLeft: "10px",
    marginRight: "10px",
  },
  extraInfo: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "400px",
    textAlign: "center",
  },
  tag: {
    color: "rgb(135,134,136)",
    padding: "10px",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  close: {
    fontSize: "35px",
    position: "absolute",
    right: "10px",
    top: "20px",
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

  // console.log(data.name )

  console.log({ hot, material, weight, dimensions, description });

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

        <div style={{ display: "grid" }}>
          <a className="product-anchor" href={`/product/${id}`}>
            {name}
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
              <hr />
              <div style={style.extraInfo}>
                <div style={style.tag}>
                  Category:{" "}
                  <a style={style.link} href={`/category/${categoryId}`}>
                    {categoryId}
                  </a>
                </div>
                {material ? (
                  <div style={style.tag}>
                    Material:{" "}
                    <a style={style.link} href="#!">
                      {material}
                    </a>
                  </div>
                ) : (
                  <></>
                )}
                {weight ? (
                  <div style={style.tag}>
                    weight:{" "}
                    <a style={style.link} href="#!">
                      {weight}
                    </a>
                  </div>
                ) : (
                  <></>
                )}
                {dimensions ? (
                  <div style={style.tag}>
                    dimensions:{" "}
                    <a style={style.link} href="#!">
                      {dimensions}
                    </a>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <a style={style.link} href={`/product/${id}`}>
                For more info visit here
              </a>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default ProductCard;
