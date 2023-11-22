import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EditScreenInfo from '../src/components/EditScreenInfo';
import { Text, View } from '../src/components/Themed';
import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList, item } from '../type';

export default function ModalScreen() {
  const Navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [location, setLocation] = useState <item[]>([
{location:"Melbourne", key:1 } ,
{location:"Sydney", key:2 } ,
{location:"Brisbane", key:3 } ,
 ]);
  return (
    <View style={{ flex: 1 }}>
        <FlatList data={location}  keyExtractor={(item) => item.key.toString()} renderItem={({item}) =>(
          <TouchableOpacity onPress={() => Navigation.navigate('two', {item})}>
            <Text> {item.location} </Text>
          </TouchableOpacity>
        )}/>
      {/* <View style={{alignItems:"center", justifyContent:"center", display:"flex", margin:10}}>
        <Text style={{fontSize:18}}> Close </Text>
      </View>
      <View style={{ margin: 17, width: 350, height: 40, borderRadius: 20, backgroundColor:"#FAF9F6", justifyContent:"center" }}>
        <MaterialCommunityIcons name="clipboard-text-search" size={15} color="black" style={{margin:10}} />
      </View>
      <View style={{display:'flex', justifyContent:"space-evenly", flexDirection:"column"}}>
        <Pressable style={{margin:7}} >
            <Text >Melbourne</Text>
        </Pressable>
        <Pressable style={{margin:7}}>
        <Text>Sydney</Text>
        </Pressable>
        <Pressable style={{margin:7}}>
        <Text>Brisbane</Text>
        </Pressable>
      </View> */}
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

