'use client'

// Components
import Header from "../../../components/Header"
import ProfilePageContent from "../../../components/ProfilePageContent";

// Chakra UI
import { Box, Text, Flex } from "@chakra-ui/react"

// React & context
import { useContext } from 'react'
import { StateContext } from "../../layout"

export default function Home({ params: { handle }}) {

  // Retrieve context
  const { isConnected, setIsConnected } = useContext(StateContext);

  return (
    <Box minHeight="100vh" bgGradient="linear(to-br, rgba(255,255,255,1), rgba(255,255,255,1) 20%, rgba(236,227,241,1))">
      <Header />
      {isConnected ? <ProfilePageContent handle={handle}/> : 
        <Flex minHeight="100%" alignItems="center" justifyContent="center" flexDirection="column">
          <Text fontSize="2xl" fontWeight="bold" color="red.500" textAlign="center">
            Welcome ! Please sign in with a wallet to use the app.
          </Text>
        </Flex>
      }
    </Box>
  )
}
