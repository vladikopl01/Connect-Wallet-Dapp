import React from "react"

import { ChakraProvider, useDisclosure } from "@chakra-ui/react"
import Layout from "./components/Layout"
import ConnectButton from "./components/ConnectButton"
import AccountModal from "./components/AccountModal"
import SelectWalletModal from "./components/SelectWalletModal"

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ChakraProvider>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        {/* <AccountModal isOpen={isOpen} onClose={onClose} /> */}
        <SelectWalletModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  )
}
