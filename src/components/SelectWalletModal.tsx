import React from "react"
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Icon,
} from "@chakra-ui/react"

import { useEthers } from "@usedapp/core"

import ETHIcon from "../icons/ethereum-eth-logo.svg"
import SOLIcon from "../icons/solana-sol-logo.svg"

type Props = {
  isOpen: any
  onClose: any
}

type Wallet = "Metamask" | "Phantom"

export default function SelectWalletModal({ isOpen, onClose }: Props) {
  const { account, deactivate } = useEthers()

  const handleDeactivateAccount = () => {
    deactivate()
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent
        background="gray.900"
        border="1px"
        borderStyle="solid"
        borderColor="gray.700"
        borderRadius="3xl"
      >
        <ModalHeader color="white" px={4} fontSize="lg" fontWeight="medium">
          Select wallet connection
        </ModalHeader>
        <ModalCloseButton
          color="white"
          fontSize="sm"
          _hover={{
            color: "whiteAlpha.700",
          }}
        />
        <ModalBody pt={0} px={4}>
          <Box
            borderRadius="3xl"
            border="1px"
            borderStyle="solid"
            borderColor="gray.700"
            px={5}
            py={2}
            mb={3}
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
          >
            <Flex
              alignItems="center"
              my={4}
              lineHeight={1}
              justifyContent="space-between"
            >
              <div style={{ height: "26px", width: "26px", margin: "5px" }}>
                <img src={ETHIcon} alt="Ethereum" />
              </div>
              <Button
                color="white"
                fontSize="xl"
                fontWeight="semibold"
                ml="2"
                lineHeight="1.1"
                onClick={() => {}}
              >
                Connect via MetaMask
              </Button>
            </Flex>
            <Flex
              alignItems="center"
              my={4}
              lineHeight={1}
              height={26}
              justifyContent="space-between"
            >
              <div style={{ height: "26px", width: "26px" }}>
                <img src={SOLIcon} alt="Solana" />
              </div>

              <Button
                color="white"
                fontSize="xl"
                fontWeight="semibold"
                ml="2"
                lineHeight="1.1"
                onClick={() => {}}
              >
                Connect via MetaMask
              </Button>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
