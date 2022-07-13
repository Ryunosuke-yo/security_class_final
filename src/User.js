import { Text, Spinner, Center, Box, VStack, Image } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'


export default function(){

    const [userInfo, setUserInfo] = useState()
    const [isFetching, setIsFetching]  = useState(true)    

    useEffect(()=>{
        const {hash} = window.location
        const accessToken = hash.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1]
        const getUserInfo = async()=> {
                const res = await axios.get(`https://id.twitch.tv/oauth2/userinfo`, {
                        headers : {
                                "Content-type" : "application/json",
                                "Authorization" : `Bearer ${accessToken}`
                            }
                        })
                        setUserInfo(res.data)
                        setIsFetching(false)
                    }
        try {
            getUserInfo()
        } catch (error) {
            console.log(error)
        }
        
    },[])

    console.log(userInfo)

    return (
            <Center height="100vh">
                {isFetching ? <Spinner color='red.500' size="xl"/> : 
                <VStack>
                    <Text>You signed in as  <Text as="span" fontWeight="bold">{userInfo.preferred_username}</Text></Text>
                    <Image src={userInfo.picture}/>
                </VStack>
                }
            </Center>
        
    )
}