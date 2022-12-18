import { Flex, Heading, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <Flex
      flexDirection="column"
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>Oops!</Heading>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Text>{error.statusText || error.message}</Text>
    </Flex>
  );
};

export default Error;
