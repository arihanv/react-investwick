import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform } from 'react-icons/di'
import {IoIosFlash} from 'react-icons/io'
import {GiButtonFinger} from 'react-icons/gi'
import {IoIosArrowDown} from 'react-icons/io'
import '/Users/arihanvaranasi/WebsiteProject/website/src/cards.css'
import Robot from '/Users/arihanvaranasi/WebsiteProject/website/src/components/robotRegular.png'
import Candlestick from '/Users/arihanvaranasi/WebsiteProject/website/src/components/candlesticks.png'
import Lightning from '/Users/arihanvaranasi/WebsiteProject/website/src/components/lightningBlenderGreen.png'


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
<div>
        <Flex className="card" direction={isNotSmallerScreen ? "row" : "column"} w="100%" style={{paddingLeft: 60}}>
            <img width={400} height={50} src={Lightning}></img>
            <Box alignSelf="center"  px="32" py="16">
                <div className="cardContainer" style={{width: 600}}>
                <Heading>Trade profitably and fast ⚡️ without lifting a finger ☝️ </Heading>
                <br></br>
                <Text fontSize="2xl" color="gray.400">Let Investwick do all the work for you. Our extensively trained and tested bot while ensure that
                you gain returns in any market condition. Using machine learning and neural networks, investwick's advanced software can be tailored to fit your needs </Text>
                </div>
            </Box>
            
        </Flex>
        
        <Box className="cardIcon" alignSelf="center" px="32" py="16">  <IoIosArrowDown size={80}></IoIosArrowDown></Box>
        <Flex className="card" direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            >
            <Box alignSelf="center" px="32" py="16">
                <div className="cardContainer" style={{width: 600}}>
                <Heading>Advanced charting and trading performance</Heading>
                <br></br>
                <Text fontSize="2xl" color="gray.400"> Feel unsure about your portfolio? Don't worry, users can
                view trades done on their account in realtime and view bot performance. Premium users also have the option to view rationales
                behind trades in order to see how the bot makes its decisions</Text>
                </div>
            </Box>
            <img width={400} height={50} src={Candlestick}></img>
        </Flex>
        <Box className="cardIcon" alignSelf="center" px="32" py="16">  <IoIosArrowDown size={80}></IoIosArrowDown></Box>
        <Flex className="card" direction={isNotSmallerScreen ? "row" : "column"} w="100%" style={{paddingLeft: 60}}
            >
            <img width={400} height={50} src={Robot}></img>
            <Box alignSelf="center"  px="32" py="16">
                <div className="cardContainer" style={{width: 600}}>
                <Heading>Customized Robots to fit your needs</Heading>
                <br></br>
                <Text fontSize="2xl" color="gray.400">Use a variety of robots to trade different equities and markets. Investwick utilizes a variety of different
                machine learning models to use the best decisions and strategies in different markets. </Text>
                </div>
            </Box>
        </Flex>
        </div>
        
    )
}

export default Profile