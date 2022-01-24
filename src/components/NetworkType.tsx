import { Box, Text } from "@chakra-ui/layout"
import React from "react"

type Props = {
  chainId: string
}

const networks: { [key: string]: { name: string; color: string } } = {
  "1": { name: "Mainnet", color: "teal" },
  "3": { name: "Ropsten", color: "pink" },
  "4": { name: "Rinkeby", color: "orange" },
  "5": { name: "Goerli", color: "blue" },
  "42": { name: "Kovan", color: "purple" },
  undefined: { name: "Unknown", color: "white" },
}

export default function NetworkId({ chainId }: Props) {
  return (
    <Box
      px="3"
      bg={networks[chainId].color + ".900"}
      border="1px"
      borderStyle="solid"
      borderRadius="xl"
      borderColor={networks[chainId].color + ".800"}
      height="38px"
      _hover={{
        border: "1px",
        borderStyle: "solid",
        borderColor: networks[chainId].color + ".700",
      }}
      display="flex"
      alignItems="center"
    >
      <Text
        color={networks[chainId].color + ".400"}
        fontSize="md"
        fontWeight="medium"
      >
        {networks[chainId].name}
      </Text>
    </Box>
  )
}
