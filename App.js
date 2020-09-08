import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Appbar,TextInput, Button  } from 'react-native-paper';
import Showresult from './components/showresult';

class  App extends React.Component {
  constructor(){
    super();
    this.state={
      Male:"",
      Female:"",
      data:""
    }
  }
  handlepress=()=>{

    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.Male}&sname=${this.state.Female}`, {
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "a364e389c4msh7bcadf55d1e46dep10df0fjsn49dcba286647"
	}
})
.then(response =>response.json()
).then(res=>this.setState({data:res}))
.catch(err => {
	console.log(err);
});
this.setState({Male:"",Female:""});

  }
  render(){
   
  return (
    <View>
     <Appbar.Header>
      <Appbar.Content title="Love Calculator" subtitle="find Love compatibility & chances of successful love relationship" />
    </Appbar.Header> 
    <TextInput
   
      label="Enter Male Name"
      value={this.state.Male}
      onChangeText={text =>this.setState({Male:text})
      }
    />
      <TextInput
      label="Enter Female Name"
      value={this.state.Female}
      onChangeText={text =>this.setState({Female:text})}
    />
     <Button style={{margin:12}} mode="contained" onPress={this.handlepress}>Love Calculator</Button>
     {
     
       this.state.data?<Showresult data={this.state.data}/>:null}
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