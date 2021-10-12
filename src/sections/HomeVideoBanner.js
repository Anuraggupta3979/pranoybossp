import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function HomeVideoBanner() {
  return (
    <div style={{display:"grid", placeItems: "center"}}>
      <iframe
        // style={{width: "100vw"}}
        title="Home Video Banner"
        src="https://player.vimeo.com/video/308575647?h=04defe5ef6"
        width="1000"
        height="360"
        frameborder="0"
        allow="autoplay;
fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      {/* <p>
        <a href="https://vimeo.com/308575647">Akkara_Website</a> from
        <a href="https://vimeo.com/user36062141">Zahoor Sultan</a>
        on <a href="https://vimeo.com">Vimeo</a>.
      </p> */}
    </div>
  );
}

export default HomeVideoBanner;
