import { Flex, Link, Text } from "rebass";

const Footer = () => {
  return (
    <Flex justifyContent={"center"} py="20px">
      <Text textAlign={"center"} color="white">
        Made with ❤️ by{" "}
        <Link href={"https://adebisiahmed.dev/"} style={{ color: "white" }}>
          Adephil
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
