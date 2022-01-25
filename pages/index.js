import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Flex, Heading, Text } from "rebass";
import { Box } from "rebass";

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
    >
      <Box
        width="1000px"
        py="60px"
        m="0 auto"
        sx={{
          display: "grid",
          gridGap: 3, // theme.space[3]
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        }}
      >
        {colors.map((color) => (
          <Flex
            key={color.name}
            height={"200px"}
            p="20px"
            bg={color.background}
            justifyContent="center"
            alignItems="center"
            color="white"
            boxShadow="0 0 0 10px rgba(0, 0, 0, 0.25)"
            style={{
              cursor: "pointer",
              border: "10px solid transparent",
              border:
                selectedColor.id === color.id ? "10px solid #fff" : "none",
              borderRadius: selectedColor.id === color.id ? "5px" : "0px",
            }}
            onClick={() => updateColor(color)}
          >
            <Text>{color.background}</Text>
          </Flex>
        ))}
      </Box>
    </Box>
  );
}
