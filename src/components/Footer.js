import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
// import Link from "components/Link";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "60px 250px",
    position: "relative",
    backgroundImage:
      "linear-gradient(to right, rgba(255, 255, 255, 1) , rgba(252, 240, 239, 1));",
    [theme.breakpoints.down("sm")]: {
      padding: "30px",
    },
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
      order: 1,
    },
  },
  followGrid: {
    order: 3,
    [theme.breakpoints.down("sm")]: {
      order: 2,
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
}));

const Footer = () => {
  const classes = useStyles({});
  return (
    <>
      <Grid
        className={classes.footer}
        container
        direction="row"
        justifyContent="center"
      >
        <img
          src="./footer-left.png"
          className={classes.leftImg}
          alt="footer-left"
        />
        <img
          src="./footer-right.png"
          className={classes.rightImg}
          alt="footer-right"
        />
        <Grid item className={classes.findGrid} xs={6} md={3}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h6">Find More</Typography>
            </Grid>
            <Grid item>
              {/* <Link
                href="https://khatabook.com/"
                className={classes.footerLink}
              >
                <Typography variant="subtitle2">Home</Typography>
              </Link> */}
              <Typography variant="subtitle2">HOME</Typography>
            </Grid>
            <Grid item>
              {/* <Link
                href="https://khatabook.com/blog/"
                className={classes.footerLink}
              >
                <Typography variant="subtitle2">Blog</Typography>
              </Link> */}
              <Typography variant="subtitle2">ABOUT US</Typography>
            </Grid>
            <Grid item>
              {/* <Link
                href="https://khatabook.com/hiring"
                className={classes.footerLink}
              >
                <Typography variant="subtitle2">We&apos;re hiring</Typography>
              </Link> */}
              <Typography variant="subtitle2">COLLECTIONS</Typography>
            </Grid>
            
            <Grid item>
              {/* <Link
                href="https://khatabook.com/contact/"
                className={classes.footerLink}
              >
                <Typography variant="subtitle2">Contact Us</Typography>
              </Link> */}
              <Typography variant="subtitle2">Blog</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.addressGrid} xs={12} md={6}>
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
              <Typography variant="h6">Address</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">
                We’d Love to hear from you
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">
                We are always available to address the needs of our users
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <img
                    src="./mobile-footer.png"
                    className={classes.contactImages}
                    alt="mobile-footer"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">+91-7232013979</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <img
                    src="./location-footer.png"
                    className={classes.contactImages}
                    alt="location"
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="subtitle2">
                    ADJ Utility Apps Pvt Ltd 1203,22nd Cross Rd,Sector 3,HSR
                    layout, Bengaluru,Karnataka 560102 GST Number -
                    29AAPCA8770K1ZT
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <img
                    src="./mail-footer.png"
                    className={classes.contactImages}
                    alt="mail"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">abcd@gmail.com</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.followGrid} xs={6} md={3}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h6">Follow us on</Typography>
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                onClick={() =>
                  window.open("https://www.facebook.com/khatabook", "_blank")
                }
                style={{ cursor: "pointer" }}
              >
                <Grid item className={classes.imageGridSocialMediaIcons}>
                  <img
                    src="./fb.svg"
                    className={classes.socialMediaimages}
                    alt="fb"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">Facebook</Typography>
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
                onClick={() =>
                  window.open("https://twitter.com/Khatabook", "_blank")
                }
                style={{ cursor: "pointer" }}
              >
                <Grid item className={classes.imageGridSocialMediaIcons}>
                  <img
                    src="./twitter.svg"
                    className={classes.socialMediaimages}
                    alt="twitter"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">Twitter</Typography>
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
                onClick={() =>
                  window.open("https://www.instagram.com/khata.book/", "_blank")
                }
                style={{ cursor: "pointer" }}
              >
                <Grid item className={classes.imageGridSocialMediaIcons}>
                  <img
                    src="./instagram.svg"
                    className={classes.socialMediaimages}
                    alt="insta"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">Instagram</Typography>
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
                onClick={() =>
                  window.open("https://t.me/Khatabook_official", "_blank")
                }
                style={{ cursor: "pointer" }}
              >
                <Grid item className={classes.imageGridSocialMediaIcons}>
                  <img
                    src="./telegram.svg"
                    className={classes.socialMediaimages}
                    alt="telegram"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">Telegram</Typography>
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
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/khatabook/?originalSubdomain=in",
                    "_blank"
                  )
                }
                style={{ cursor: "pointer" }}
              >
                <Grid item className={classes.imageGridSocialMediaIcons}>
                  <img
                    src="./linkedin.svg"
                    className={classes.socialMediaimages}
                    alt="linkedin"
                  />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">LinkedIn</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
