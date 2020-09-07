import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Appbar,TextInput, Button  } from 'react-native-paper';
class  App extends React.Component {
  constructor(){
    super();
    this.state={
      Male:"",
      Female:""
    }
  }
  handlepress=()=>{
    console.log("santosh")
  }
  render(){
  return (
    <View>
     <Appbar.Header>
      <Appbar.Content title="Love Calculator" subtitle="find Love compatibility & chances of successful love relationship" />
    </Appbar.Header> 
    <TextInput
   
      label="Enter Male Name"
      value={this.state.text}
      onChangeText={text =>console.log(text)
      }
    />
      <TextInput
      label="Enter Female Name"
      value={this.state.Female}
      onChangeText={text =>this.setState({Female:text})}
    />
     <Button style={{margin:12}} icon="camera" mode="contained" onPress={this.handlepress}>Love Calculator</Button>
      
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;