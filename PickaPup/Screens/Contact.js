import React, { Component } from 'react'
import { StatusBar, StyleSheet, TouchableOpacity, View, Alert } from 'react-native'
import { Container, Header, Title, Content, Text, Icon, Card, CardItem, Item, Body, Right, Button, Input, Form, Textarea, Left } from 'native-base'


export default class Contact extends Component {


  constructor(props) {
    super(props);
    this.state = {
     name: null,
     mobile: null,
     email:null,
     msg: null,
  
    };
  }


//post the message and call the json file
  postMsg = (name, mobile, email, msg, nameClear, mobileClear, emailClear, msgClear) => {
    if(this.state.msg!=null){ 
      fetch('https://contact-us-ad847.firebaseio.com/contacts.json', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": name,
          "mobile": mobile,
          "email": email,
          "msg": msg,
        }),
      })
      .then((response) => response.json())
      .then((responseData) => {
              if(responseData.name != null ){
                this.refs[nameClear].setNativeProps({text: ''});
                this.refs[mobileClear].setNativeProps({text: ''});
                this.refs[emailClear].setNativeProps({text: ''});
                this.refs[msgClear].setNativeProps({text: ''});
                this.setState({
                    name: null,
                    mobile: null,
                    email:null,
                    msg: null,
                    isSubmited: true,
                  })              
              }
              
              else{
              Alert.alert(
                'Oops !',
                'Something went wrong',
                [
                  {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                ],
                { cancelable: false }
              )
            }

      })
      .done();
    }
    //if all the inputs aren't filled out relay this message
      else{
        Alert.alert(
          'Oops !',
          'Press SUBMIT button after entering your Message.',
          [
            {text: 'OK', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          ],
          { cancelable: false }
        )        
      }
    
  };

    _togglePostCard(){
        this.setState({
            isSubmited: false
        })
    }
                 


    render() {
      return (
        <Container>
          <Content>
          <Text style={{ fontSize:22, alignSelf:'center', fontWeight:'bold' }}>Contact Us</Text>

            <Card style={styles.postCard}>
            {this.state.isSubmited ?
            <View>
                <CardItem>
                    <Item>
                      <Icon active name="ios-checkmark-circle" style={{fontSize: 30, color: '#4CAF50', marginLeft:5, marginRight:10}} />
                       <Text style = {{ flex:1, textAlign:'left', }}>Thank! Our Staff and Support Team will get in touch with you as soon as possible!
                       In the meantime browse our selection of adorable dogs! </Text>
                       
                    </Item>
                </CardItem>
                <CardItem>
                    <Left>
                    </Left>
                    <Body>
                        <TouchableOpacity success onPress={() => this._togglePostCard()}>
                            <Icon active name="refresh" style={{fontSize: 40, color: '#64DD17', marginLeft:10}} />
                        </TouchableOpacity>
                    </Body>
                    <Right>
                    </Right>
                </CardItem>
            </View>
            //once you click submit and it goes through you will be redirected to a post card page that shows the message
            :
            //make and style the contact form
            <View>
             
                <CardItem style={{ height:120, }}>
                    <Item>
                        <Input placeholder='Name' onChangeText={(name) => this.setState({name})} ref={'nameClear'}/>
                    </Item>
                </CardItem>
                <CardItem style={{ height:120, }}>
                    <Item>
                        <Input placeholder='Mobile' onChangeText={(mobile) => this.setState({mobile})} ref={'mobileClear'} keyboardType = {'phone-pad'}/>
                    </Item>
                </CardItem>
                <CardItem style={{ height:120, }}>
                    <Item>
                        <Input placeholder='Email' onChangeText={(email) => this.setState({email})} ref={'emailClear'} keyboardType = {'email-address'}/>
                    </Item>
                </CardItem>
                    <Form style = {{ marginLeft: 20, marginRight:20, }}>
                        <Textarea rowSpan={10} bordered placeholder="Type your message" onChangeText={(msg) => this.setState({msg})} ref={'msgClear'}/>
                    </Form>
                <CardItem>
                    <Left>
                    </Left>
                    <Body>
                        <Button style={{ backgroundColor:'black', }}onPress={() => this.postMsg(this.state.name, this.state.mobile, this.state.email, this.state.msg, 'nameClear', 'mobileClear', 'emailClear', 'msgClear')}>
                        <Text style = {{ color:'white', }}>Submit</Text>
                        </Button>
                    </Body>
                    <Right>
                    </Right>
                </CardItem>
            </View>
            }
            </Card>
          </Content>
        </Container>
      );
  }
}

const styles = StyleSheet.create({
  loading:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    backgroundColor: '#1C97F7',
  },
  alertText: {
    fontSize:12,
    color: '#ffffff',
  },
  postCard: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20,     
  }
});