import { Flex, Box, Image, Heading, Text, Tooltip, Grid } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

import { City } from "../components/City";
import { Header } from '../components/Header'
import { api } from '../services/api'

import { IContinent } from '../types'

interface ContinentProps {
    continent: IContinent
}

export default function Continent({ continent: {
    name,
    images,
    longDescription,
    countriesQuantity,
    languagesQuantity,
    biggestsCities
} }: ContinentProps) {
    return (
        <Flex direction="column">
            <Header />
            <Box position="relative">
                <Image 
                    src={images[0].url} 
                    alt={images[0].alt} 
                    w="full" 
                    height={500}
                    zIndex="hide"
                />
                <Heading color="white" position="absolute" top="75%" left="17%">{name}</Heading>
            </Box>

            <Box maxW={1160} marginX="auto">
                <Flex my="20">
                    <Text flex={1}>
                        {longDescription}
                    </Text>
                    <Flex flex={1} justify="space-around">
                        <Box textAlign="center">
                            <Heading color="yellow.300">{countriesQuantity}</Heading>
                            <Text fontWeight="semibold">países</Text>
                        </Box>
                        <Box textAlign="center">
                            <Heading color="yellow.300">{languagesQuantity}</Heading>
                            <Text fontWeight="semibold">línguas</Text>
                        </Box>
                        <Box textAlign="center">
                            <Heading color="yellow.300">{biggestsCities.length}</Heading>
                            <Flex>
                                <Text fontWeight="semibold" mr="1">
                                    cidades +100
                                </Text>
                                <Tooltip label="Cidades com mais de 100k habitantes" aria-label="Outro">
                                    <Image src="./info.svg" />
                                </Tooltip>
                            </Flex>
                        </Box>
                    </Flex>
                </Flex>

                <Box>
                    <Heading fontWeight="medium" mb="10">Cidades +100</Heading>

                    <Grid gridTemplateColumns="repeat(auto-fit, 256px)" gap="8">
                        {biggestsCities.map(city => <City key={city.id} data={city} /> )}
                    </Grid>
                </Box>
            </Box>
        </Flex>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { continentID } = params;

    const response = await api.get(`/${String(continentID)}`);
    
    return {
        props: {
            continent: response.data ?? null
        }
    }
}