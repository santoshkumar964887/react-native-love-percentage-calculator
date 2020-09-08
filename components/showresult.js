import React  from 'react';
import {StyleSheet, View,Text} from 'react-native';
export default showresult=(props)=>{
    console.log(props);

    return(
        <View style={styles.container}>
    
        <Text style={{color:"green",fontSize:21,fontWeight:"900",padding:15}}>{props.data.fname} And {props.data.sname}</Text>
        <Text style={styles.percentage}>Love Percentage : {props.data.percentage}</Text>
        <Text  style={styles.percentage}>Result Suggestion : {props.data.result}</Text>
    
    </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
     
     
      marginTop:40
    },
    percentage:{
        color:"rgb(5, 3, 69)",
         fontSize:16,
         fontWeight:"600",
          margin:20
        }

  });