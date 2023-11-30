import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: (props) => ({
    body: {
      bg: props.colorMode === "dark" ? "#000" : "#fff",
    },
  }),
};

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles });

export default theme;
