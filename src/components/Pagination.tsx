import { Box, Button, Stack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      spacing="6"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          sm="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ bgColor: 'pink.500', cursor: 'default' }}
        >
          1
        </Button>
        <Button
          sm="sm"
          fontSize="xs"
          width="4"
          bg="gray.700"
          _hover={{ bgColor: 'gray.500' }}
        >
          2
        </Button>
      </Stack>
    </Stack>
  )
}