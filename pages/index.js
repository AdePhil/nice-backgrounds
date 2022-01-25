import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Flex, Heading, Text } from "rebass";
import { Box } from "rebass";
import { AnimateSharedLayout, motion } from "framer-motion";

const colors = [
  {
    id: 1,
    name: "Bg1",
    background: "rgb(17, 24, 39)",
  },
  {
    id: 2,
    name: "Bg2",
    background: "linear-gradient(180deg, #181823, #181823)",
  },
  {
    id: 3,
    name: "Bg3",
    background: "#000",
  },
  {
    id: 4,
    name: "Bg3",
    background: "#1f2028",
  },
];

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

export default function Home() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const updateColor = (color) => {
    setSelectedColor(color);
  };
  return (
    <Box
      minHeight={"100vh"}
      style={{
        background: selectedColor.background,
      }}
      px="20px"
    >
      <Flex justifyContent="center" pt="40px">
        <Heading
          color="white"
          textAlign="center"
          fontSize={["30px", "40px", "60px"]}
        >
          Nice Backgrounds 🎨
        </Heading>
      </Flex>
      <Box
        maxWidth="1000px"
        width="100%"
        py="60px"
        m="0 auto"
        sx={{
          display: "grid",
          gridGap: 3,
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        <AnimateSharedLayout>
          {colors.map((color) => (
            <MotionFlex
              layout
              key={color.id}
              height={"200px"}
              p="20px"
              bg={color.background}
              justifyContent="center"
              alignItems="center"
              color="white"
              style={{
                boxShadow: "0 0px 50px 0px rgba(0, 0, 0, 0.25)",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={() => updateColor(color)}
            >
              <Text>{color.background}</Text>
              {selectedColor.id === color.id && (
                <MotionBox
                  layoutId="underline"
                  left="0"
                  bottom="0"
                  right="0"
                  zIndex="2"
                  width="100%"
                  height="100%"
                  p="20px"
                  transition={{ duration: 0.4 }}
                  style={{
                    zIndex: 3,
                    position: "absolute",
                    border: "10px solid transparent",
                    borderColor:
                      selectedColor.id === color.id ? " #fff" : "transparent",
                    borderRadius: selectedColor.id === color.id ? "5px" : "0px",
                  }}
                ></MotionBox>
              )}
            </MotionFlex>
          ))}
        </AnimateSharedLayout>
      </Box>
    </Box>
  );
}
