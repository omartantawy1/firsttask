import React, { useState } from 'react';
import { StyleSheetProperties,TouchableOpacity,Image,StyleSheet,Button,View,Text, AppRegistry, FlatList, ScrollView } from 'react-native';
import {shouldShow,setShouldShow}  from '../screens/Login';
import { useNavigation } from '@react-navigation/native';
export default function Header (){
  
  const navigation = useNavigation(); 
  const [shouldShow, setShouldShow] = useState("..");
  const  Hideinput=()=>{

    setShouldShow(!shouldShow)
  }


    return(
        
       <View style={styles.row}>
<View style={styles.firstbutton}>


</View>
<Button
  title="Location"
  color="#841584"
 
 />
        

<View>

{shouldShow ?
          <Button
          title="Login "
          color="#841584"
          onPress={() => {navigation.navigate("Home")}}
          />
          : null}
        


   </View>
   <Button
  title="Search"
  color="#841584"
 
 />
    <View>
   
   </View>

       </View>
       
            );


}
const styles = StyleSheet.create({
    row: {
        flex:1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent:'space-between',
        paddingTop:30,
          },
         firstbutton:{
         borderRadius:60,

         } ,
         secondbutton:{
            borderRadius:40,
         },
         thirdbutton:{

         }
     
})
