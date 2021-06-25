import { Flex, Image, Box } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from 'next/link'

export function Header() {
    const { asPath } = useRouter();
    return (
        <Flex h={100} w="100%" justify="center">
            <Flex 
                maxW={1160} 
                justify="center" 
                align="center" 
                justifyContent="space-between" 
                flex="1"
                px="2"
            >
                <Box>
                    {asPath !== "/" && (
                        <Link href="/"><a>
                            <Image src="./arrow.svg" />
                        </a></Link>
                    )}
                </Box>
                <Link href="/"><a>
                    <Image src="./logo.svg" />
                </a></Link>
                <div />
            </Flex>
        </Flex>
    )
}