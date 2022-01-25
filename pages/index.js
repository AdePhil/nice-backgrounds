import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Flex, Heading, Text } from "rebass";
import { Box } from "rebass";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { colors } from "../data";
import CopyIcon from "../components/icons/copy";
import CheckIcon from "../components/icons/check";
import { useIsCopied } from "../hooks/useIsCopied";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);
const MotionButton = motion(Button);

export default function Home() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [isCopied, setIsCopied] = useIsCopied(false);

  const updateColor = (color) => {
    setSelectedColor(color);
  };

  const copyColor = (color) => {
    navigator.clipboard.writeText(color.background);
    setIsCopied(true);
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
              p="25px"
              justifyContent="center"
              alignItems="center"
              color="white"
              style={{
                boxShadow: "0 0px 50px 0px rgba(0, 0, 0, 0.25)",
                position: "relative",
                cursor: "pointer",
                background: color.background,
              }}
              onClick={() => updateColor(color)}
            >
              <Text>{color.background}</Text>
              <AnimatePresence>
                {isCopied && selectedColor.id === color.id && (
                  <MotionButton
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                    }}
                    bg="transparent"
                    style={{
                      position: "absolute",
                      right: "20px",
                      top: "20px",
                      cursor: "pointer",
                      zIndex: 4,
                    }}
                  >
                    <CheckIcon />
                  </MotionButton>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {!isCopied && (
                  <MotionButton
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                    }}
                    bg="transparent"
                    onClick={() => copyColor(color)}
                    style={{
                      position: "absolute",
                      right: "20px",
                      top: "20px",
                      cursor: "pointer",
                      zIndex: 4,
                    }}
                  >
                    <CopyIcon />
                  </MotionButton>
                )}
              </AnimatePresence>

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
