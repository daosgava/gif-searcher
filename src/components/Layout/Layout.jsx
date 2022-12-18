import { Flex } from '@chakra-ui/react';

const Layout = ({ children }) => (
  <Flex p="40px" gap="20px" flexDir="column">
    {children}
  </Flex>
);

export default Layout;
