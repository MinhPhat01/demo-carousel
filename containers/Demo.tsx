import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { styled, Box, Stack } from "@mui/material";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useMeasure } from "react-use";
import ImageRatio from "@/components/ImageRatio";

const settings = {
  speed: 500,
  infinite: true,

  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  centerMode: true,
  centerPadding: "0",

  dots: false,
  arrows: false,
};

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
    name: "4",
    bgColor: "pink",
    src: "/images/image4.avif",
  },
];

const RATIO = "20 / 20";

export default function Demo() {
  // const sliderRef = useRef<any>(null);
  // const [slickRef, setSlickRef] = useState<any | null>();
  const slickRef = useRef<any>(null);
  const [indexSlide, setIndexSlide] = useState(0);
  console.log("🚀 ~ file: Demo.tsx:65 ~ Demo ~ indexSlide:", indexSlide);

  const renderCard = useMemo(() => {
    return LIST_CARD.map((item, index) => {
      return (
        <StyledWrapperImage
          key={item.id}
          currentIndex={index + 1}
          activeIndex={indexSlide}
        >
          <ImageRatio
            ratio={RATIO}
            boxProps={{ sx: { cursor: "pointer" } }}
            imageProps={{
              src: item.src,
              alt: "alt",
              style: { objectFit: "cover" },
            }}
          />
        </StyledWrapperImage>
      );
    });
  }, [indexSlide]);

  const handleSlideChange = () => {};

  return (
    <Box margin="40px" sx={{ perspective: "100%" }}>
      <StyledWrapper>
        <Slider
          ref={slickRef}
          // ref={(ref) => setSlickRef(ref)}
          afterChange={(curr) => {
            setIndexSlide(curr);
          }}
          {...settings}
        >
          {renderCard}
        </Slider>
      </StyledWrapper>

      {/* <StyledContainer>
        <StyledCard />

        <Box sx={{ width: 240, height: 195, bgcolor: "yellow" }} />

        <StyledCard2 />
      </StyledContainer> */}
    </Box>
  );
}

const StyledContainer = styled(Box)(() => {
  return {
    perspective: "2000px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  };
});

const StyledCard = styled(Box)(() => {
  return {
    width: 200,
    height: 200,
    background: "pink",
    position: "relative",
    transformStyle: "preserve-3d",
    transform: "rotateY(50deg)",
    borderLeft: "4px solid black",
    borderRight: "4px solid red",
    // transform: "translateX(11.9926px) translateZ(-166.887px) rotateY(25deg)",
  };
});

const StyledCard2 = styled(Box)(() => {
  return {
    width: 200,
    height: 200,
    background: "red",
    position: "relative",
    transformStyle: "preserve-3d",
    transform: "rotateY(-36deg)",
    borderLeft: "4px solid black",
    borderRight: "4px solid red",
    // transform: "translateX(11.9926px) translateZ(-166.887px) rotateY(25deg)",
  };
});

const StyledWrapper = styled(Box)(() => {
  return {
    ["&  .slick-list"]: {
      // margin: "0 -10px",
    },

    ["& .slick-slide > div"]: {
      perspective: 2000,

      // margin: "0 10px",
    },

    ["& .slick-next"]: {
      display: "none !important",
    },

    ["& .slick-prev"]: {
      display: "none !important",
    },

    ["& .slick-center .card"]: {
      // border: "1px solid black",
    },
  };
});

const StyledWrapperImage = styled(Box)<{
  currentIndex: number;
  activeIndex: number;
}>(({ currentIndex, activeIndex }) => {
  const left = activeIndex - currentIndex;

  const right = activeIndex + currentIndex;

  return {
    transition: "1s",
    transformStyle: "preserve-3d",
    position: "relative",

    padding: "0 20px",

    transform: "rotateY(10deg)",

    ...(left === currentIndex && {
      transform: "rotateY(50deg)",
    }),

    ...(right === currentIndex && {}),

    // transformStyle: "preserve-3d",
    // position: "relative",
    // transform: "translateX(11.9926px) translateZ(-166.887px) rotateY(25deg)",
  };
});
