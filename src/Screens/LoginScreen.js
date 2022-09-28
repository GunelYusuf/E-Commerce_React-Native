import React from 'react';
import { Box, Image, VStack, Heading, Input, Button,Text } from "native-base";
import  Colors  from '../color';
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from 'react-native';

export default function LoginScreen() {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading>LOGIN</Heading>
        <VStack space={5} pt="6">
          {/* Email */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.white} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            color={Colors.black}
            borderBottomColor={Colors.white}
          />
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.white} />
            }
            variant="underlined"
            type='password'
            placeholder="*********"
            w="70%"
            pl={2}
            color={Colors.black}
            borderBottomColor={Colors.white}
          />
          {/* Password */}
        </VStack>
        <Button _pressed={{bg:Colors.main,}} _text={{color:Colors.white}} w="40%" my={30} rounded={50} bg={Colors.blue}>LOGIN</Button>
        <Pressable mt={4}>
           <Text color={Colors.deepestGray}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  );
}
