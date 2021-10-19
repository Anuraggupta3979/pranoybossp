import React from "react";
import { Grid } from "@mui/material";
import AboutCategoriesCard from "./AboutCategoriesCard";
import festivedecormania from "../../assets/categoryImages/festive-decor-mania.jpg";
import TeracottaArtNew from "../../assets/categoryImages/Teracotta-Art-New.jpg";
import Textiletreasure from "../../assets/categoryImages/Textile-treasure.jpg";
import Woodencrafts from "../../assets/categoryImages/Wooden crafts.jpg";
import metallicmarvels1 from "../../assets/categoryImages/metallic-marvels1.jpg";
import Heading from "../Heading";
function Categories() {
  return (
    <Grid>
      <Heading title="Categories" />
      <AboutCategoriesCard
        title="Metallic Marvels"
        description="Metal crafts of India date back to the time of Indus Valley Civilization as evident from the discovery of the beautiful figurine of the dancing girl- a prehistoric bronze sculpture. And till date, the legacy of metal works can be witnessed in the form of various metalworking Sculptures.
Engraving, embossing, and lacquering various metals in the form of idols of deities, wall decor, human figurines, and much more, this art form has been kept alive by our adept artisans.
"
        image={metallicmarvels1}
        imageorder={1}
        textorder={3}
      ></AboutCategoriesCard>
      <AboutCategoriesCard
        title="Cane and Bamboo Crafts"
        description="Twisting the bundles of cane grass, weaving the finely processed Jute and bamboo, are created the awe-inspiring artifacts and handicrafts that have the power to embellish every nook and corner of your surroundings, also exhibiting the rich and glorious spiritual heritage of India, especially the eastern side. The artistic creation of bamboo, cane, and jute articles is a perfect example of how there is a seamless blend of traditional creativity with modernism. The demand for these natural fiber-based crafts has escalated over time, with India being one of the sole producers of such beautiful products."
        image={Woodencrafts} /////change
        imageorder={3}
        textorder={1}
      ></AboutCategoriesCard>
      <AboutCategoriesCard
        title="Wooden Realm  "
        description="Comes from a land of exotic art and traditions, the breathtaking and mesmerizing woodcrafts. Royal -Rajasthan is known exclusively for wooden handicrafts. And probably no other state can match the aesthetic and cultural aspect of Rajasthan when it comes to creative woodwork. The perfection with which our skilled craftsman chisels away a piece of wood to transform it into something incredible adds to our factor of delicacy and vintage touch. The fact that India is a tropical country with deciduous and evergreen forests is ice on the cake for the production of these marvels using a variety of different woods."
        image={Woodencrafts}
        imageorder={1}
        textorder={3}
      ></AboutCategoriesCard>
      <AboutCategoriesCard
        title="Textile Treasures"
        description="Textile industries have been booming over the ages, holding a special place in the heart of Indian heritage. Apart from the machine-made products, the handmade products have a quiddity of their own, being perfect in their ways. Sheets, cushions, quilts, etc. not only provide a special personalized touch but also contribute to cultural wealth. The artisans creating these handloom fabrics are like diamonds hidden in the depths of this country. These dazzling handmade fabrics, reflecting the beautiful Indian folklore should be highlighted not only nationwide but also globally."
        image={Textiletreasure}
        imageorder={3}
        textorder={1}
      ></AboutCategoriesCard>
      <AboutCategoriesCard
        title="Terracotta Art"
        description="Right from the earth, straight to your soul.
Terracotta items are made with a fairly coarse and porous type of clay and then are baked until hard, gaining a tinge of colors ranging from earthy ochre to auburn. What makes the end product distinctive from region to region in India, is its different clay type and color as well as the sensibilities of the artist and varied cultural practices of the region. In a more contemporary setting, the ethnic tint can be used to break up and add warmth to the modern, monochromatic themes. The most iconic terracotta items include earthenwares, pots, figurines, and tons of other decorative items.
"
        image={TeracottaArtNew}
        imageorder={1}
        textorder={3}
      ></AboutCategoriesCard>
      <AboutCategoriesCard
        title="Home Accessory-Splash"
        description="
“Home is where the heart is”, be it our house or any restaurant. The outlook of the items plays a substantial role in influencing one’s frame of mind as these have always been a place of gathering and sanctuary providing an escape from the busyness and intrusiveness of the world. So, the utilities need to be selected with the utmost care; be it the beautiful planters, eye-catchy coasters, creative tissue box holders, or the decorative trays, to bestow the space with an abstract modern look yet with a tinge of rustic and traditional look.
"
        image={Woodencrafts} /////change
        imageorder={3}
        textorder={1}
      ></AboutCategoriesCard>
      <AboutCategoriesCard
        title="Festive Decor-Mania"
        description="India- The land of festivals, is mostly characterized by the vivid hues, devotion, rituals, loads of fun and most importantly bedecking the houses with adorning cultural stuff. The arrival of these festivals defines an extraordinary manner of living, where everyone tends to attempt their limit to form their home and workplaces top-notch and exquisite by the means of all the beautiful decor. All the sprinkling efforts to decorate their abodes with ultimate traditional beauty is what makes a festival more interesting."
        image={festivedecormania}
        imageorder={1}
        textorder={3}
      ></AboutCategoriesCard>
    </Grid>
  );
}

export default Categories;
