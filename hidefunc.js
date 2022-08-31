import React, {useState} from 'react';
 import {
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    Image
} from 'react-native';
 
const Hidefunc = () => {
  const [shouldShow, setShouldShow] = useState("..");
 
  const  Hideinput=()=>{

      setShouldShow(false)
    }
        
   
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
       
        {shouldShow ? (
          <Button
          title=" hello"/>
        ) : null}
        <Button
          title="Hide"
          onPress={Hideinput}
        />
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
});
 
export default Hidefunc;
 
 
   

