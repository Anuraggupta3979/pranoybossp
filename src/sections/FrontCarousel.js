import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const fadeAnimationHandler = (props, state) => {
  const transitionTime = props.transitionTime + "ms";
  const transitionTimingFunction = "ease-in-out";

  let slideStyle = {
    position: "absolute",
    display: "block",
    zIndex: -2,
    minHeight: "100%",
    opacity: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    transitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction,
  };

  if (!state.swiping) {
    slideStyle = {
      ...slideStyle,
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime,
    };
  }

  return {
    slideStyle,
    selectedStyle: { ...slideStyle, opacity: 1, position: "relative" },
    prevStyle: { ...slideStyle },
  };
};

function FrontCarousel() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        dynamicHeight={true}
        showStatus={false}
        onClickItem={fadeAnimationHandler}
      >
        <div>
          <img
            src="https://akkaara.co.in/wp-content/uploads/2019/01/banner_slider-1.jpg"
            alt="carousel"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            src="https://akkaara.co.in/wp-content/uploads/2019/01/banner_slidertimeless.jpg"
            alt="carousel"
          />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
    </div>
  );
}

export default FrontCarousel;
