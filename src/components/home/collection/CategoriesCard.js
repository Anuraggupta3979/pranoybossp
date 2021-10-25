import React from "react";
import "../../../assets/css/Categories.css";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Heading from "../../Heading";
const useStyles = makeStyles((theme) => ({
  centerImage: {},
}));
function CategoriesCard() {
  const classes = useStyles({});
  return (
    <Grid>
      <Heading title="Categories"></Heading>

      <Grid style={{ display: "flex" }} className="card-container">
        <Grid
          item
          xl={4}
          lg={4}
          sm={4}
          // xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "70%",

            alignItems: "center",
          }}
        >
          <Grid className="categoriesCard">
            <img
              alt="Wooden Crafts"
              src="https://firebasestorage.googleapis.com/v0/b/craftjet-a6e1b.appspot.com/o/categories%2FWooden%20crafts%20(1).jpg?alt=media&token=b202a897-f83a-4855-b30b-76836dcc24f4"
            />
            <Grid class="centered">
              <Typography
                variant="h5"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                Wooden Crafts
              </Typography>
              <Link className="category-card-link" to="/category/wooden-crafts">
                Explore
              </Link>
            </Grid>
          </Grid>
          <Grid className="categoriesCard">
            <img
              alt="Home Accessory-Splash"
              src="https://firebasestorage.googleapis.com/v0/b/craftjet-a6e1b.appspot.com/o/categories%2Fhome%20accessory-splash.jpg?alt=media&token=5c88b28a-3fa7-40cc-95a7-82c2b85a6008"
            />
            <Grid class="centered">
              <Typography
                variant="h5"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                Home Accessory-Splash
              </Typography>
              <Link
                className="category-card-link"
                to="/category/home-accessory-splash"
              >
                Explore
              </Link>
            </Grid>
          </Grid>
          <Grid className="categoriesCard">
            <img
              alt=" Metallic Marvels"
              src="https://firebasestorage.googleapis.com/v0/b/craftjet-a6e1b.appspot.com/o/categories%2Fmetallic%20marvels1.jpg?alt=media&token=83dca97d-129e-4c3d-8a21-58ac700e7fa6"
            />
            <Grid class="centered">
              <Typography
                variant="h5"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                Metallic Marvels
              </Typography>
              <Link
                className="category-card-link"
                to="/category/metallic-marvels"
              >
                Explore
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          sm={4}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid className="categoriesCard">
            <img
              alt="Cane and Bamboo Crafts"
              className={classes.centerImage}
              src="https://firebasestorage.googleapis.com/v0/b/craftjet-a6e1b.appspot.com/o/categories%2Fcane-bamboo%20(1).jpg?alt=media&token=844825df-2e24-456a-9ed5-dc5e2d5c303e"
            />
            <Grid class="centered">
              <Typography
                variant="h5"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                Cane and Bamboo Crafts
              </Typography>
              <Link
                className="category-card-link"
                to="/category/cane-bamboo-crafts"
              >
                Explore
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          sm={4}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid className="categoriesCard">
            <img
              alt=" Festive Decor-Mania"
              src="https://firebasestorage.googleapis.com/v0/b/craftjet-a6e1b.appspot.com/o/categories%2Ffestive%20decor%20mania.jpg?alt=media&token=31095094-85a6-4b8a-beaf-b47de4613101"
            />
            <Grid class="centered">
              <Typography
                variant="h5"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                Festive Decor-Mania
              </Typography>
              <Link
                className="category-card-link"
                to="/category/festive-decor-mania"
              >
                Explore
              </Link>
            </Grid>
          </Grid>
          <Grid className="categoriesCard">
            <img
              alt="Textile Treasure"
              src="https://firebasestorage.googleapis.com/v0/b/craftjet-a6e1b.appspot.com/o/categories%2FTextile%20treasure.jpg?alt=media&token=c61ea941-a25d-4399-a74d-776d2f2ec83a"
            />
            <Grid class="centered">
              <Typography
                variant="h5"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                Textile Treasure
              </Typography>
              <Link
                className="category-card-link"
                to="/category/textile-treasure"
              >
                Explore
              </Link>
            </Grid>
          </Grid>
          <Grid className="categoriesCard">
            <img
              alt="Terracotta Art"
              src="https://firebasestorage.googleapis.com/v0/b/craftjet-a6e1b.appspot.com/o/categories%2FTeracotta%20Art%20New.jpg?alt=media&token=219c9661-4c7d-41d5-b563-5d8fe598ccb4"
            />
            <Grid class="centered">
              <Typography
                variant="h5"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                Terracotta Art
              </Typography>
              <Link
                className="category-card-link"
                to="/category/terracotta-art"
              >
                Explore
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CategoriesCard;
