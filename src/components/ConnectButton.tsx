import React from "react"
import { useEthers, useEtherBalance } from "@usedapp/core"
import { formatEther } from "@ethersproject/units"

import { Button, Box, Text } from "@chakra-ui/react"
import Identicon from "./Identicon"
import NetworkType from "./NetworkType"

type Props = {
  handleOpenModal: any
}

export default function ConnectButton({ handleOpenModal }: Props) {
  const { activateBrowserWallet, account, chainId } = useEthers()
  const etherBalance = useEtherBalance(account)

  const handleConnectWallet = () => {
    activateBrowserWallet()
  }

  return account ? (
    <Box display="flex" alignItems="center" borderRadius="xl" py="0">
      <NetworkType chainId={chainId as any} />
      <Box
        display="flex"
        alignItems="center"
        background="gray.800"
        borderRadius="xl"
        py="0"
        mx="5"
      >
        <Box px="3">
          <Text color="white" fontSize="md" fontWeight="medium">
            {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)}{" "}
            ETH
          </Text>
        </Box>
        <Button
          bg="gray.900"
          border="1px"
          borderStyle="solid"
          borderRadius="xl"
          borderColor="transperent"
          px={3}
          height="38px"
          _hover={{
            border: "1px",
            borderStyle: "solid",
            borderColor: "gray.700",
          }}
          onClick={handleOpenModal}
        >
          <Text color="white" fontSize="md" fontWeight="medium" mr="3">
            {account &&
              `${account.slice(0, 6)}...${account.slice(
                account.length - 4,
                account.length
              )}`}
          </Text>
          <Identicon />
        </Button>
      </Box>
    </Box>
  ) : (
    <Button
      onClick={handleConnectWallet}
      bg="blue.800"
      color="blue.400"
      fontSize="lg"
      fontWeight="medium"
      borderRadius="xl"
      border="1px solid transperent"
      _hover={{
        borderColor: "blue.700",
        color: "blue.500",
        backgroundColor: "blue.900",
      }}
      _active={{
        backgroundColor: "blue.800",
        borderColor: "blue.700",
      }}
    >
      Connect wallet
    </Button>
  )
}
