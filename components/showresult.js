import React  from 'react';
import {StyleSheet, View,Text} from 'react-native';
export default showresult=(props)=>{
    console.log(props);

    return(
        <View style={styles.container}>
    <Text>Santosh</Text>
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:40
    },
  });