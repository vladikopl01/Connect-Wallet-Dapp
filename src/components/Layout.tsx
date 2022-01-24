import React from "react"
import { ReactNode } from "react"
import { Flex } from "@chakra-ui/react"

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      bgGradient="linear(to-tr, gray.900, pink.900)"
    >
      {children}
    </Flex>
  )
}
