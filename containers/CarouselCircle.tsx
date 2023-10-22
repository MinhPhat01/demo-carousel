import React from "react";
import "react-fancy-circular-carousel/FancyCarousel.css";
import FancyCarousel from "react-fancy-circular-carousel";
import { Box, Container } from "@mui/material";

import images1 from "../public/images/image1.avif";
import images2 from "../public/images/image2.avif";
import images3 from "../public/images/image.avif";

export default function CarouselCircle() {
  const text = ["a", "b", "c", "d"];

  return (
    <Container sx={{ marginTop: 20 }}>
      <FancyCarousel images={text} />
    </Container>
  );
}
