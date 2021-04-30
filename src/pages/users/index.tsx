import { 
  Box, 
  Button, 
  Flex, 
  Heading, 
  Icon, 
  Table, 
  Th, 
  Thead, 
  Tr, 
  Checkbox, 
  Tbody,
  Td,
  Link as ChakraLink,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import Link from 'next/link';
import { Spinner } from "@chakra-ui/spinner";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              <Spinner size="sm" color="gray.500" ml="4" />
            </Heading>

            <Link href="/users/create" passHref>
              <Button 
                  as="a" 
                  size="sm" 
                  fontSize="sm" 
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <ChakraLink color="purple.400">
                      <Text fontWeight="bold">Thiago Almeida</Text>
                    </ChakraLink>
                    <Text fontSize="sm" color="gray.300">email@email.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>12 de Abril de 2021</Td>}
                <Td>
                  <Button 
                    as="a" 
                    size="sm" 
                    fontSize="sm" 
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                    variant="unstyled"
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}