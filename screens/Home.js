import React from 'react';
import { StyleSheetProperties,StyleSheet,ScrollView,Image,View,Text, } from 'react-native';
import Header from '../homeblocks/header';
import Banking from '../homeblocks/bankings';
import Govern from '../homeblocks/govern';
import Hospitals from '../homeblocks/hospitals';
import Telecom from '../homeblocks/telecom';
import { useNavigation } from '@react-navigation/native';





export default function Home(){
  const navigation = useNavigation(); 
    return (
      <ScrollView>
             <View>
            <Header/>
               <Banking />
               <Hospitals/>
                <Govern/>
                <Telecom/>
      </View>
     
      </ScrollView> 
      
    );
  }
    