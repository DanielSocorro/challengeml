import React from "react";
import {Container, Text, Stack, Icon, Box, Image, Input, StackDivider} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {FiPrinter} from "react-icons/fi";
import {GoLocation} from "react-icons/go";

import logo from "../assets/logo.png";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" paddingY={4}>
        <Container maxWidth="container.xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" flex={1} spacing={12}>
                <Image objectFit="contain" src={logo} />
                <Stack
                  alignItems="center"
                  backgroundColor="white"
                  borderRadius="sm"
                  boxShadow="sm"
                  direction="row"
                  divider={<StackDivider />}
                  maxWidth={600}
                  padding={2}
                  width="100%"
                >
                  <Input paddingX={2} variant="unstyled" />
                  <Icon as={AiOutlineSearch} color="gray.400" height={5} width={5} />
                </Stack>
              </Stack>
              <Stack alignItems="center" color="blackAlpha.700" direction="row" spacing={3}>
                <Icon as={FiPrinter} height={9} width={9} />
                <Text fontSize="lg" fontWeight={500}>
                  Compra tu Point y QR a $1590
                </Text>
              </Stack>
            </Stack>
            <Stack direction="row">
              <Stack direction="row">
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Icon as={GoLocation} height={6} width={6} />
                  <Stack spacing={0}>
                    <Text color="blackAlpha.700" fontSize="xs" lineHeight="normal">
                      Enviar a
                    </Text>
                    <Text fontSize="sm" lineHeight="normal">
                      Santiago
                    </Text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Text>Crea tu cuenta</Text>
          </Stack>
        </Container>
      </Box>
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Routes />
      </Container>
    </Stack>
  );
};

export default App;
