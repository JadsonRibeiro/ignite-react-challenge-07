import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard, Virtual, Controller } from 'swiper/core'
import { useState } from "react";
import Link from "next/link";

import { IContinent } from "../types";

SwiperCore.use([ Navigation, Pagination, Mousewheel, Keyboard, Virtual, Controller ]);

interface ContinentProps {
    data: IContinent
}

export function Continent({ data: { id, name, shortDescription, images } }: ContinentProps) {
    const [controllerSwiper, setControllerSwiper] = useState(null);
    return (
        <Box px="25" position="relative">
            <Swiper
                cssMode
                navigation
                pagination
                mousewheel
                keyboard
                virtual
                controller={{ control: controllerSwiper }}
                onSwiper={setControllerSwiper}
            >
                <Flex 
                    position="absolute" 
                    zIndex="tooltip" 
                    direction="column" 
                    top="50%" 
                    w="100%" 
                    textAlign="center"
                >
                    <Link href={`/${id}`}><a>
                        <Heading color="white" mb="4" fontWeight="bold">{name}</Heading>
                    </a></Link>
                    { shortDescription && <Text color="white" fontWeight="semibold">{shortDescription}</Text> }
                </Flex>
                {images.map((image, index) => (
                    <SwiperSlide key={index} virtualIndex={index} >
                        <Image src={image.url} alt={image.alt ?? ''} h={450} w="full" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}