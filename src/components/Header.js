import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import Greek from './greeksoft.png'
import Cube from './baseCubePurple.png'
import Trade from './autotrade.png'
import Candlesticks from './candlesticks.png'
import '/Users/arihanvaranasi/WebsiteProject/website/src/index.css'
import Up from '/Users/arihanvaranasi/WebsiteProject/website/src/components/chartUp.png'
import {FcCandleSticks} from "react-icons/fc";
import { NavLink } from "react-router-dom";
import './Header.css'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack className='test'>
            <Flex className="completeContainer" direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                >
                    <span class="dot"></span>
                    <span style={{marginLeft: 500, marginTop: 150, top: 0, width: 225, height: 225}}class="dot"></span>
                    <span class="dot" id="lastDot"></span>
                <Box className='titleContainer' mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text className='title'>lnvestWick</Text>
                    <Text style={{marginBottom: 10, fontStyle: 'italic', fontWeight: 700, fontSize: 20}}>Trade Without Trading </Text>
                    <NavLink to="/Auth">
                    <Button colorScheme='green'>Get Started</Button>
                    </NavLink>
                    <ul></ul>
                    {/* <Text >GDE - Flutter, Firebase. Founder of https://codepur.dev & https://velocityx.dev.
              Building @frontierdotxyz, YouTuber & Entrepreneur 🗣</Text> */}
                    {/* <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://pawan.live")
                    }>Hire Me</Button> */}

                </Box>
                {/* <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://avatars.githubusercontent.com/u/12619420?v=4' /> */}
                {isDark ? <img width={500} height={200} src={Trade} className='tradeImage'></img>: <img width={300} height={200} src={Cube} className='tradeImage'></img>}
                 {/* width={200} */}

            </Flex>

        </Stack>
    )
}

export default Header