import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfilerProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfilerProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Thiago Almeida</Text>
          <Text color="gray.300" fontSize="small">
            thiagofalmd@gmail.com
          </Text>
        </Box>
      )}
     
      <Avatar
        size="md" 
        name="Thiago Almeida" 
        src="https://github.com/thiagofalmeida.png" 
      />
    </Flex>
  )
}