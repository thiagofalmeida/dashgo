import { Flex, HStack, Icon, Box, Text, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Thiago Almeida</Text>
        <Text color="gray.300" fontSize="small">
          thiagofalmd@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md" 
        name="Thiago Almeida" 
        src="https://github.com/thiagofalmeida.png" 
      />
    </Flex>
  )
}