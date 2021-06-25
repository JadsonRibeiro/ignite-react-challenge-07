import { Box, Divider, Flex, Heading, Image, SimpleGrid, VStack, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";

import { Header } from "../components/Header";
import { Continent } from "../components/Continent";
import { api } from "../services/api";
import { IContinent } from "../types";

interface HomeProps {
  continents: IContinent[]
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex direction="column" pb="20">
      <Header />

      <Box position="relative" mb="20">
        <Image src="./background.png" w="auto" position="absolute" zIndex="hide" />
        <Flex align="center" justify="center">
          <Box px="6">
            <Heading color="white" lineHeight="tall" fontSize="xx-large" fontWeight="medium" mb="5">
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>
            <Text color="lightInfo" maxW={524}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          <Image src="./airplane.svg" mt="16" />
        </Flex>
      </Box>
      
      <SimpleGrid minChildWidth={158} alignContent="center" justifyContent="center" mx="30">
        <Flex direction="column" align="center">
          <Image src="cocktail.svg" alt="cocktail" width={85} />
          <Text fontWeight="semibold">vida noturna</Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="surf.svg" alt="surf" width={85} />
          <Text fontWeight="semibold">praia</Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="building.svg" alt="building" width={85} />
          <Text fontWeight="semibold">moderno</Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="museum.svg" alt="museum" width={85} />
          <Text fontWeight="semibold">clássico</Text>
        </Flex>
        <Flex direction="column" align="center">
          <Image src="earth.svg" alt="earth" width={85} />
          <Text fontWeight="semibold">e mais...</Text>
        </Flex>
      </SimpleGrid>

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