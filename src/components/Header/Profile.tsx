import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>André Luiz</Text>
          <Text color="gray.300" fontSize="small">
            andreovski.f@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="André Luiz"
        src="http://github.com/whyandree.png"
      />
    </Flex>
  );
}
