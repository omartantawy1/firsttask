import React from 'react';
import {StyleSheet,Image,FlatList, Button,View,Text, AppRegistry } from 'react-native';
const GOV = [
    {
     
        title: 'Govern 1',
        image:require('./assets/org1.png'),
      },
      {
        
        title: 'Govern 2',
        image:require('./assets/org2.gif'),
      },
      {
        
        title: 'Govern 3',
        image:require('./assets/org3.jpg'),
      },
      {
        
          title: 'Govern 4',
          image:require('./assets/org4.jpg'),
        },
  ];

export default function Govern(){
   

  return(
      
<View >
<View style={styles.headertext}>
<Text style={styles.textedits}> Govern.Orgs Co </Text>
<Text style={styles.seemore} > See more</Text>
</View>
      

      <FlatList horizontal
      data={GOV}
     
      renderItem={({item})=>{
      return (
          <View> 
              <View style={styles.profileImgContainer} > 
                  <Image source={item.image} style={styles.profileImg} />
              </View>
              <Text style={styles.titles} > {item.title} </Text>
               </View>
            
      );
          
      }}
      
      />
              </View>
          );
  
  


  }
  const styles =StyleSheet.create({
mycontainer:{
flex:1,
alignItems:'center',
justifyContent:'space-between',

},
profileImgContainer: {
marginLeft: 20,
height: 82,
width: 82,
borderRadius: 20,


},
profileImg: {
height: 80,
width: 80,
borderRadius: 20,

},
title:{
fontSize:20,
color:'black',
paddingLeft:13,
paddingBottom:10,

},
row: {
flexDirection: "row",
flexWrap: "wrap",
},
content:{
flex:1,
flexDirection:'row',
alignItems:'center',
justifyContent:'center'
},
headertext:{
flexDirection:'row',
alignItems: 'flex-start',
justifyContent:'space-between',
flexWrap: "wrap",
padding: 20,


},
textedits:{
fontSize:20,
color:'#141414',

},
seemore:{
fontSize:16,
color:'#E11B8D',
paddingTop:10,
},
titles:{
  paddingLeft:25,
  color:'black',
  fontSize:15,
}



});