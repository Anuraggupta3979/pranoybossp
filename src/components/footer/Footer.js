import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Newsletter from "../newsletter/Newsletter";
import footerleft from "../../assets/image/footer-left.png";
import footerright from "../../assets/image/footer-right.png";
import fb from "../../assets/image/fb.svg";
import call from "../../assets/image/mobile-footer.png";
import mail from "../../assets/image/mail-footer.png";
import address from "../../assets/image/location-footer.png";
import insta from "../../assets/image/instagram.svg";
import NavImage from "../../assets/nav.png";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "0 60px 0 110px",
    position: "relative",
    marginTop: "20px",

    [theme.breakpoints.down("sm")]: {
      padding: "30px",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-70px",
      // textAlign: "center",
    },
  },
  footernews: {
    backgroundImage:
      "linear-gradient(to right, rgba(255, 255, 255, 1) , rgba(252, 240, 239, 1));",
    marginTop: "50px",
  },
  findGrid: {
    order: 1,
    [theme.breakpoints.down("sm")]: {
      order: 3,
      marginTop: "15px",
    },
  },
  addressGrid: {
    order: 2,
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
  followGrid: {
    order: 3,
    [theme.breakpoints.down("sm")]: {
      order: 1,
      marginTop: "15px",
    },
  },
  leftImg: {
    position: "absolute",
    top: 3,
    left: 0,
    [theme.breakpoints.down("sm")]: {
      visibility: "hidden",
    },
  },
  rightImg: {
    position: "absolute",
    right: 0,
    bottom: 3,
    [theme.breakpoints.down("sm")]: {
      visibility: "hidden",
    },
  },

  socialMediaimages: {
    width: "2vw",
    [theme.breakpoints.down("sm")]: {
      width: "3vw",
      minWidth: "20px",
    },
  },
  footerLink: {
    color: "black",
    textDecoration: "none",
  },
  contactImages: {
    width: "1vw",
    [theme.breakpoints.down("sm")]: {
      width: "2vw",
      minWidth: "10px",
    },
  },
  imageGridSocialMediaIcons: {
    margin: "0.3vw 0 0 0",
  },
  footerHead: {
    padding: "0 60px 0 110px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: "30px",
    },
  },
  icon: {
    cursor: "pointer",
    marginRight: "20px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: "0px",
    },
  },
  iconBox: {
    display: "flex",
    marginTop: "20px",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
      marginTop: "10px",
    },
  },
}));

const Footer = () => {
  const classes = useStyles({});
  return (
    <Grid className={classes.footernews} id="footer">
      <Grid item>
        <Grid
          container
          item
          className={classes.footerHead}
          style={{ display: "flex" }}
        >
          <Grid item xs={6}>
            <img
              src={NavImage}
              alt="Logo"
              style={{ width: "150px", height: "50px", marginTop: "20px" }}
            />
          </Grid>
          <Grid className={classes.iconBox} sm={6} xs={12}>
            <Grid item>
              <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                onClick={() =>
                  window.open("https://www.facebook.com", "_blank")
                }
                className={classes.icon}
              >
                <Grid item className={classes.imageGridSocialMediaIcons}>
                  <img
                    src={fb}
                    className={classes.socialMediaimages}
                    alt="fb"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                onClick={() => window.open("https://instagram.com/", "_blank")}
                className={classes.icon}
              >
                <Grid item className={classes.imageGridSocialMediaIcons}>
                  <img
                    src={insta}
                    className={classes.socialMediaimages}
                    alt="twitter"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr />
      <Grid className={classes.footernews}>
        <Grid
          className={classes.footer}
          container
          direction="row"
          justifyContent="center"
        >
          <img src={footerleft} className={classes.leftImg} alt="footer-left" />
          <img
            src={footerright}
            className={classes.rightImg}
            alt="footer-right"
          />

          <Grid item className={classes.findGrid} xs={12} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item>
                <Typography variant="h6" style={{ fontFamily: "맑은 고딕" }}>
                  Find More
                </Typography>
              </Grid>
              <Grid item>
                <Link to="#" className={classes.footerLink}>
                  <Typography
                    variant="subtitle2"
                    style={{ fontFamily: "맑은 고딕" }}
                  >
                    Terms & Condition
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/categories" className={classes.footerLink}>
                  <Typography
                    variant="subtitle2"
                    style={{ fontFamily: "맑은 고딕" }}
                  >
                    Categories
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/about" className={classes.footerLink}>
                  <Typography
                    variant="subtitle2"
                    style={{ fontFamily: "맑은 고딕" }}
                  >
                    About
                  </Typography>
                </Link>
              </Grid>

              <Grid item>
                <Link to="#" className={classes.footerLink}>
                  <Typography
                    variant="subtitle2"
                    style={{ fontFamily: "맑은 고딕" }}
                  >
                    FAQ
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.followGrid} xs={12} md={4}>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item>
                <Typography variant="h6" style={{ fontFamily: "맑은 고딕" }}>
                  Newsletter
                </Typography>
              </Grid>
              <Newsletter></Newsletter>
            </Grid>
          </Grid>
          <Grid item className={classes.addressGrid} xs={12} md={5}>
            <Grid
              container
              item
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={2}
              md={11}
            >
              <Grid item>
                <Typography variant="h6" style={{ fontFamily: "맑은 고딕" }}>
                  Address
                </Typography>
              </Grid>

              <Grid item>
                <Typography
                  variant="subtitle2"
                  style={{ fontFamily: "맑은 고딕" }}
                >
                  We are always available to address the needs of our customers.
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={1}>
                  <Grid item>
                    <img
                      src={call}
                      className={classes.contactImages}
                      alt="mobile-footer"
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      style={{ fontFamily: "맑은 고딕" }}
                    >
                      +91-9414131148
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={1}>
                  <Grid item>
                    <img
                      src={address}
                      className={classes.contactImages}
                      alt="location"
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      variant="subtitle2"
                      style={{ fontFamily: "맑은 고딕" }}
                    >
                      Jodhpur, Rajasthan, India
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={1}>
                  <Grid item>
                    <img
                      src={mail}
                      className={classes.contactImages}
                      alt="mail"
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="subtitle2"
                      style={{ fontFamily: "맑은 고딕" }}
                    >
                      decor@thecraftjet.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
