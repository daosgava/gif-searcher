import { Flex } from '@chakra-ui/react';
import { Outlet } from "react-router-dom";

const Root = () => (
  <Flex p="40px" gap="20px" flexDir="column">
    <Outlet />
  </Flex>
);

export default Root;
