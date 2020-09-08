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
     
       this.state.data?<Showresult data={this.state.data}/>:<Text style={styles.percentage}>Enter your name and the name of your partner/lover/crush to find Love compatibility & chances of successful love relationship.</Text>}

    </View>
  );
  }
}

const styles = StyleSheet.create({
  percentage:{
    color:"rgb(68, 48, 102)",
     fontSize:18,
     fontWeight:"700",
      margin:12,
      lineHeight:25,
      letterSpacing:2,
    
      

    }
});
export default App;