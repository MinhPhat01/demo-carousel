import React, { useEffect, useMemo, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import ImageRatio from "@/components/ImageRatio";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  styled,
} from "@mui/material";

const LIST_CARD = [
  {
    id: 1,
    name: "1",
    bgColor: "yellow",
    src: "/images/image1.avif",
  },
  {
    id: 2,
    name: "2",
    bgColor: "red",
    src: "/images/image2.avif",
  },
  {
    id: 3,
    name: "3",
    bgColor: "pink",
    src: "/images/image3.avif",
  },
  {
    id: 4,
    name: "3",
    bgColor: "pink",
    src: "/images/image3.avif",
  },
  {
    id: 5,
    name: "3",
    bgColor: "pink",
    src: "/images/image2.avif",
  },
];

const LIST_TEXT = [
  {
    id: 1,
    name: "BLACK-RED",
  },
  {
    id: 2,
    name: "THE-HILL",
  },
  {
    id: 3,
    name: "FNB",
  },
  {
    id: 4,
    name: "MIC",
  },
  {
    id: 5,
    name: "CADERA",
  },
];

const RATIO = "20 / 20";

export default function DemoSwiper() {
  const swiperRef = useRef<SwiperRef>(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [textRef, setTextRef] = useState<any>();

  const renderSlide = useMemo(() => {
    return LIST_CARD.map((item, index) => {
      return (
        <SwiperSlide key={index} style={{ position: "relative" }}>
          <StyledOverLay className="overlay" />
          <ImageRatio
            ratio={RATIO}
            boxProps={{ sx: { cursor: "pointer" } }}
            imageProps={{
              src: item.src,
              alt: "alt",
              style: { objectFit: "cover" },
            }}
          />
        </SwiperSlide>
      );
    });
  }, []);

  const renderText = useMemo(() => {
    return LIST_TEXT.map((item, index) => {
      return (
        <StyledWrapperText
          key={index}
          className="text"
          sx={{
            transform: `rotate(${index + 1 * 16.5}deg)`,
          }}
        >
          <Typography>{item.name}</Typography>
        </StyledWrapperText>
      );
    });
  }, []);

  useEffect(() => {
    if (textRef == undefined) return;
    textRef.innerHTML = textRef.innerText
      .split("")
      .map((char: any, index: number) => {
        return `<span class="text" style="transform:rotate(${
          index * 8
        }deg)">${char}</span>`;
      })
      .join("");

    // text.innerHTML = text.textContent
    //   ?.split("")
    //   .map((char: any, index: number) => {
    //     `<span style="transform:rotate(${index * 5}deg)">${char}</span>`;
    //   })
    //   .join("");
  }, [textRef]);

  return (
    <Container sx={{ mt: 20 }}>
      <StyledWrapper marginTop="40px">
        <Swiper
          ref={swiperRef}
          onSlideChange={(swiper) => {}}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            scale: 0.8,
          }}
          modules={[EffectCoverflow, Navigation, Pagination]}
          pagination={true}
          className="mySwiper"
          loop={true}
          speed={500}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
        >
          {renderSlide}
        </Swiper>

        <StyledWrapperBtn className="swiper-button-prev">
          <Button variant="contained">Prev</Button>
        </StyledWrapperBtn>

        <StyledWrapperBtn className="swiper-button-next">
          <Button variant="contained">Next</Button>
        </StyledWrapperBtn>
      </StyledWrapper>

      {/* <StyledCircle>
        <StyledWrapperText className="wrapper-text">
          <StyledText ref={(ref) => setTextRef(ref)}>
            Carousel 3D - HELLO WORLD - DEV FE - HI - HI -
          </StyledText>
        </StyledWrapperText>
      </StyledCircle> */}
    </Container>
  );
}

const StyledCircle = styled(Box)(() => {
  return {
    width: 300,
    height: 300,
    background: "pink",
    borderRadius: "999px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const StyledWrapperText = styled(Box)(() => {
  return {
    position: "absolute",
    width: "100%",
    height: "100%",
  };
});

const StyledText = styled(Typography)(() => {
  return {
    ["& .text"]: {
      position: "absolute",
      left: "50%",
      fontSize: 16,
      transformOrigin: "0 150px",
    },
  };
});

const StyledWrapper = styled(Box)(() => {
  return {
    position: "relative",

    ["& .swiper-button-prev"]: {
      position: "absolute",
      top: "50%",
      left: "-20px",
      transform: "translateY(-50%)",
      zIndex: 2,
    },

    ["& .swiper-button-next"]: {
      position: "absolute",

      top: "50%",
      right: "-20px",
      transform: "translateY(-50%)",
      zIndex: 2,
    },

    ["& .swiper-slide-active"]: {
      transform: "scale(0.65) !important",
    },

    ["& .swiper-slide-prev .overlay"]: {
      display: "block",
    },

    ["& .swiper-slide-next .overlay"]: {
      display: "block",
    },

    userSelect: "none",
  };
});

const StyledWrapperBtn = styled(Box)(() => {
  return {};
});

const StyledOverLay = styled(Box)(() => {
  return {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    display: "none",
    background: "rgba(0,0,0, 0.4)",
  };
});
