import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Newsletter from "../newsletter/Newsletter";
const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "0 60px 0 250px",
    position: "relative",
    marginTop: "20px",

    [theme.breakpoints.down("sm")]: {
      padding: "30px",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-40px",
      // textAlign: "center",
    },
  },
  footernews: {
    backgroundImage:
      "linear-gradient(to right, rgba(255, 255, 255, 1) , rgba(252, 240, 239, 1));",
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
    padding: "0 60px 0 250px",
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

}));

const Footer = () => {
  const classes = useStyles({});
  return (
    <Grid className={classes.footernews}>
      <Grid item>
        <Grid
          container
          item
          className={classes.footerHead}
          style={{ display: "flex" }}
        >
          <Grid item xs={12} >
            <img
              src="https://th.bing.com/th/id/R.b90e6a70729f5ef2b99b006fec52feff?rik=xkHeTSKG2xHd2g&riu=http%3a%2f%2fwww.transparentpng.com%2fthumb%2fhandicraft%2fgold-handicraft-png-15.png&ehk=IOLDqtT0WYdSNK72mMxrjUd2Lm2wTZZT6fyoStsyX0I%3d&risl=&pid=ImgRaw&r=0"
              alt="Logo"
              style={{ width: "150px", height: "50px", marginTop: "20px" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid className={classes.footernews}>
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

          <Grid item className={classes.findGrid} xs={12} md={3}>
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
                <Typography variant="subtitle2">FAQ</Typography>
              </Grid>
              <Grid item>
                {/* <Link
                href="https://khatabook.com/blog/"
                className={classes.footerLink}
              >
                <Typography variant="subtitle2">Blog</Typography>
              </Link> */}
                <Typography variant="subtitle2">Tearms & condition</Typography>
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
          <Grid item className={classes.followGrid} xs={12} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid
                style={{
                  display: "flex",
                  marginTop: "-48px",
                  marginBottom: "20px",
                }}
              >
                <Grid item>
                  <Grid
                    container
                    spacing={1}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/khatabook",
                        "_blank"
                      )
                    }
                    className={classes.icon}
                  >
                    <Grid item className={classes.imageGridSocialMediaIcons}>
                      <img
                        src="./fb.svg"
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
                    onClick={() =>
                      window.open("https://twitter.com/Khatabook", "_blank")
                    }
                    className={classes.icon}
                  >
                    <Grid item className={classes.imageGridSocialMediaIcons}>
                      <img
                        src="./twitter.svg"
                        className={classes.socialMediaimages}
                        alt="twitter"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item style={{ marginTop: "-20px" }}>
                <Typography variant="h6">Newsletter</Typography>
              </Grid>
              <Newsletter></Newsletter>
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
                      Senapati Bhawan Ratanada , Jodhpur,Rajasthan 560102 GST
                      Number - 29AAPCA8770K1ZT
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
