import { Box, Divider, Flex, Heading, Image, SimpleGrid, VStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import { Header } from "../components/Header";
import { Continent } from "../components/Continent";
import { api } from "../services/api";
import { IContinent } from "../types";

interface HomeProps {
  continents: IContinent[]
}

export default function Home({ continents }: HomeProps) {
  const isBiggerThenMobileWide = useBreakpointValue({ base: false, md: true });

  return (
    <Flex direction="column" pb="20">
      <Header />

      <Box position="relative" mb="20" backgroundImage="./background.png" backgroundSize="cover">
        <Flex align="center" justify="center">
          <Box p="6">
            <Heading color="white" lineHeight="tall" fontSize="xx-large" fontWeight="medium" mb="5">
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>
            <Text color="white" maxW={524}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          { isBiggerThenMobileWide && <Image src="./airplane.svg" mt="16" /> }
        </Flex>
      </Box>
      
      <Flex alignContent="center" justifyContent="space-around" wrap="wrap" mx="30">
        <Flex direction={["row", "column"]} align="center" mx="6">
          {isBiggerThenMobileWide 
            ? <Image src="cocktail.svg" alt="cocktail" width={85} />
            : <Box width={2} height={2} m="3" borderRadius="full" backgroundColor="yellow.500"></Box>
          }
          <Text fontWeight="semibold">vida noturna</Text>
        </Flex>
        <Flex direction={["row", "column"]} align="center" mx="6">
          {isBiggerThenMobileWide 
            ? <Image src="surf.svg" alt="surf" width={85} />
            : <Box width={2} height={2} m="3" borderRadius="full" backgroundColor="yellow.500"></Box>
          }
          <Text fontWeight="semibold">praia</Text>
        </Flex>
        <Flex direction={["row", "column"]} align="center" mx="6">
          {isBiggerThenMobileWide 
            ? <Image src="building.svg" alt="building" width={85} />
            : <Box width={2} height={2} m="3" borderRadius="full" backgroundColor="yellow.500"></Box>
          }
          <Text fontWeight="semibold">moderno</Text>
        </Flex>
        <Flex direction={["row", "column"]} align="center" mx="6">
          {isBiggerThenMobileWide 
            ? <Image src="museum.svg" alt="museum" width={85} />
            : <Box width={2} height={2} m="3" borderRadius="full" backgroundColor="yellow.500"></Box>
          }
          <Text fontWeight="semibold">clássico</Text>
        </Flex>
        <Flex direction={["row", "column"]} align="center" mx="6">
          {isBiggerThenMobileWide 
            ? <Image src="earth.svg" alt="earth" width={85} />
            : <Box width={2} height={2} m="3" borderRadius="full" backgroundColor="yellow.500"></Box>
          }
          <Text fontWeight="semibold">e mais...</Text>
        </Flex>
      </Flex>

      <Divider width={90} mt="20" mb="12" mx="auto" borderColor="gray.600" border={1} />

      <Box textAlign="center" mb="12">
        <Text fontSize="2xl" fontWeight="semibold">Vamos nessa? <br /> Então escolha seu continente</Text>
      </Box>

      <VStack spacing="10">
        {continents.map(continent => (
          <Continent
            key={continent.id}
            data={continent}
          />
        ))}
      </VStack>

    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('');

  return {
      props: {
        continents: response.data ?? []
      }
  }
}