import { Flex, Box, Image, Text} from '@chakra-ui/react'

import { ICity } from '../types'

interface CityProps {
    data: ICity
}

export function City({ data }: CityProps) {
    return (
        <Flex maxWidth={256} direction="column">
            <Image src={data.image.url} alt={data.image.alt ?? ''} width="full" height={173} />
            <Flex p="6">
                <Box flex={2}>
                    <Text fontSize="lg" mb="3" fontWeight="semibold">{data.name}</Text>
                    <Text fontSize="small" color="gray.500">{data.country}</Text>
                </Box>
                <Image 
                    src={data.flag.url} 
                    width={30} 
                    height={30} 
                    borderRadius="full"
                />
            </Flex>
        </Flex>
    )
}