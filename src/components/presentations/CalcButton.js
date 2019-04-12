import React,{Component} from 'react';
import { View,Text,TouchableOpacity} from 'react-native';
class CalcButton extends Component{
    render(){
        return(
            <TouchableOpacity style={styles.button} 
            onPress={this.props.onButtonChange.bind(this,this.props.value)}
            > 
            <Text style={styles.btnstyle}>{this.props.value}</Text>
            </TouchableOpacity>

        );
    }
}


const styles={
    button:{flex:1,
        borderWidth:1,
        backgroundColor:'rgb(224,224,224)',
        justifyContent:'center',
        alignItems:'center'
    },
  
    btnstyle:{
        fontSize:36,
    }

}
export default CalcButton;