import React from 'react';
import { StyleSheet,Image,FlatList,Button,View,Text, AppRegistry } from 'react-native';

const TEL = [
    {
     
        title: 'Telecom 1',
        image:require('./assets/tel1.png'),
      },
      {
        
        title: 'Telecom 2',
        image:require('./assets/tel2.png'),
      },
      {
        
        title: 'Telecom 3',
        image:require('./assets/tel3.jpg'),
      },
      {
        
          title: 'Telecom4 ',
          image:require('./assets/tel4.png'),
        },
  ];

export default function Telecom(){
   

  return(
      
<View >
<View style={styles.headertext}>
<Text style={styles.textedits}> Telecom</Text>
<Text style={styles.seemore} > See more</Text>
</View>
      

      <FlatList horizontal
      data={TEL}
     
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