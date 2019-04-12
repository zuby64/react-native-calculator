import React, { Component } from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import {CalcButton} from '../presentations/index';
class Calc extends Component{
    state={
        inputFieldValue:'',
        pendingoperation:null,
        firstoperand:'',
        validKeys:[
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "+",
          "-",
          "/",
          "*",
          "=",
          "Cls"

        
          
        ],
    }
   
    onTextInputChange=(value)=>{
           
           //+ is used to concatenate the previous value to the new one
     this.setState({inputFieldValue: value});      
              
    }
    onButtonChange=(value)=>{
        //if it is an operation then store it in pending operaation and 
        //set the operand in first operand and thus clear input filed value 
        //for the second operand oherwise continous concatenating the value in inputfield value
        //clearing the inputfieldvalue so that it can be done for two operands at a time to reduce complexity of the code
        if(["+","-","*","/"].indexOf(value) > -1){
           this.setState({pendingoperation:value, firstoperand:this.state.inputFieldValue,inputFieldValue:''});
           //further we dont need to change calue of inputfield that is why retrun
           return;
        }
        else if(value==="="){
             this.Calculate();
             //then dont need to change the value of inputfieldvalue just return
             return;
        }
        else if(value==="Cls"){
            this.setState({inputFieldValue:'',pendingoperation:null,firstoperand:''});
            return;
        }

          //other wise store the content in inputfieldvalue 
        //+ is used to concatenate the previous value to the new one
  this.setState({inputFieldValue:this.state.inputFieldValue + value});      
           
 }
 Calculate = ()=>{
     let result=null;
     switch(this.state.pendingoperation){

        case '+':

        result= (Number(this.state.firstoperand)+Number(this.state.inputFieldValue)).toString();
        this.setState({
            
            inputFieldValue:result,
            pendingoperation:null,
            firstoperand:''
        });
        return;
        case '-':
        
        result= (Number(this.state.firstoperand)-Number(this.state.inputFieldValue)).toString();
        this.setState({
            
            inputFieldValue:result,
            pendingoperation:null,
            firstoperand:''
        });
        return;
        case '*':
        
        result= (Number(this.state.firstoperand)*Number(this.state.inputFieldValue)).toString();
        this.setState({
            
            inputFieldValue:result,
            pendingoperation:null,
            firstoperand:''
        });
        return;
        case '/':
        
        result= (Number(this.state.firstoperand)/Number(this.state.inputFieldValue)).toString();
        this.setState({
            
            inputFieldValue:result,
            pendingoperation:null,
            firstoperand:''
        });
        return;
        default:
        return;
     }
 }
 
    render(){
        return(
            <View style={{flex:1,}}>
                <TextInput onChangeText={this.onTextInputChange} value={this.state.inputFieldValue}  style={styles.TextInputStyle} />
                <View style={{flex:1,flexDirection:'column'}}>
                   {this.state.validKeys.map((key,i)=>{
                              if(i%2 !=0){
                                   return;
                              }
                       return(
                           <View style={styles.row}> 
                          <CalcButton value={this.state.validKeys[i]} onButtonChange={this.onButtonChange}/>
                          <CalcButton value={this.state.validKeys[i+1]} onButtonChange={this.onButtonChange}/>
                                
                           </View>
                       )
                   })}
                </View>
                
            </View>
        )
    }
}
const styles={
    TextInputStyle:{
        height:100,
        width:100+'%',
        backgroundColor:'rgb(41,41,41)',
       color:'rgb(255,255,255)',
        fontSize:48,
        textAlign:'right',
    },
    row:{
        flex:1,
        flexDirection:'row',
    }
  

}
export default Calc;