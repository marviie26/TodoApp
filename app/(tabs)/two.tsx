import React, {useState} from "react";
import { Image, StyleSheet, Pressable, Platform, Button } from 'react-native';
import EditScreenInfo from '../../src/components/EditScreenInfo';
import { Text, View } from '../../src/components/Themed';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";
import { Link } from "expo-router";
import * as ImagePicker from 'expo-image-picker';
import ModalScreen from "../modal";
import { useNavigation, useRoute } from "@react-navigation/native";
import {  item, modalProps, twoProps } from "../../type";


export default function TabTwoScreen({route}:twoProps, item:item) {
  
  const [view, setView] = useState(false)
  const [image, setImage] = useState(null);
  const [items] = route.params;
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // const [textAreaCount, setTextAreaCount] = React.useState(0);

  // const recalculate = (e:React.ChangeEvent<HTMLInputElement>) => {
    
  //   console.log("event value:", e);
  //   setTextAreaCount(e.target.value.length);
  // };
  const handleClickOpen = () => {
    setView(true);
  };
  return (
    <SafeAreaView style={{flex:1 }} >
      <View style={{ padding: 10, display: 'flex', flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>


        <View>
          <Image
            style={{
              width: 70,
              height: 70,
              borderRadius: 30,
              resizeMode: "contain",

            }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
            }}
          />
        </View>


        <View style={{ marginLeft: 50, marginTop: 35 }}>
        <Pressable onPress={handleClickOpen}>
          <FontAwesome5 name="camera" size={24} color="black" style={{
            width: 60,
            height: 60,
            borderRadius: 30,
          
          }} />
          </Pressable>
            
        </View>

        <View >
           <Link href="/modal" asChild>
          <Entypo name="location-pin" size={28} color="black" />
          </Link>
        </View>

        <View style={{ marginLeft: 30 }}>
          <MaterialCommunityIcons name="format-list-numbered-rtl" size={24} color="black" />
        </View>
        <View style={{ marginLeft: 55 }}>
          <MaterialCommunityIcons name="rocket-launch" size={38} color="black" />
        </View>
      </View>
      <View>
        <TextInput multiline maxLength={50}  placeholder="Type here...">
            <Text />
        </TextInput>
      </View>

       {(view) && (<View>
        <View style={{display: 'flex', flexDirection: "row", margin:10, marginTop:20, width:100, height:100, alignItems:"center", }}>
          <View style={{}}>{image && <Image source={{ uri: image }} style={{ width: 100, height: 100, }} />}</View>
        <Button title="" onPress={pickImage} />
        <FontAwesome5 name="camera" size={50} color="black" style={{
            width: 60,
            height: 60,
            borderRadius: 30,
          
          }} />
       <View>
        <Text>{item[].location}</Text>
       </View>
       
          
          
          </View>

       </View>)}


    </SafeAreaView >
  );
}


