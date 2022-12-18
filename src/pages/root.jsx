import { Flex } from '@chakra-ui/react';
import { Outlet } from "react-router-dom";

const Root = () => (
  <Flex p="40px" gap="30px" flexDir="column">
    <Outlet />
  </Flex>
);

export default Root;
