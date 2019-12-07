import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Modal, TouchableHighlight, Alert,} from 'react-native';
import { Divider } from 'react-native-elements';
import { Card, CardItem, Item, Body, Right, Button, Input, Form, Textarea, Left } from 'native-base';


class Profile extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.name}>Pick a Pup</Text>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                   source={require( '../assets/images/puppylogo.png')}/>

                <Text style={styles.name}>John Doe </Text>
                <Text style={styles.userInfo}>jhonnydoe@mail.com </Text>
                <Text style={styles.userInfo}>647-999-9999 </Text>
            </View>
          </View>
          <Text style={styles.name}>{"\n"}Bio</Text>
                <Textarea colSpan={2} rowSpan={9} bordered placeholder="Message"/>
<View style={{marginTop: 20}}>
<Modal
  animationType="slide"
  transparent={false}
  visible={this.state.modalVisible}
  onRequestClose={() => {
    Alert.alert('Modal has been closed.');
  }}>
  <View style={{marginTop: 22}}>
  <TouchableHighlight style={{ paddingTop: 50, backgroundColor: "white"}}
        onPress={() => {
          this.setModalVisible(!this.state.modalVisible);
        }}>
        <Text style={{ paddingLeft: 380, fontWeight:'600', fontSize: 22, }}>X</Text>
      </TouchableHighlight>
      <Text style={styles.name}>Account</Text>
      <Divider style={{ backgroundColor: 'black', }} />

    <ScrollView style={{ paddingLeft: 20, backgroundColor: "white",}}>
    <Text style={styles.info}>{"\n"}Info</Text>
    <CardItem style={{ height:120, }}>
      <Item>
        <Input placeholder='First Name' onChangeText={(name) => this.setState({name})} ref={'nameClear'}/>
        <Input placeholder='Last Name' onChangeText={(name) => this.setState({name})} ref={'nameClear'}/>
      </Item>
    </CardItem>
    <CardItem style={{ height:120, }}>
      <Item>
        <Input placeholder='Phone' onChangeText={(name) => this.setState({name})} ref={'nameClear'}/>
        <Input placeholder='Email' onChangeText={(name) => this.setState({name})} ref={'nameClear'}/>
      </Item>
    </CardItem>

      <Text style={styles.info}>{"\n"}Height</Text>
      <CardItem style={{ height:120, }}>
      <Item>
        <Input placeholder='Inches' onChangeText={(name) => this.setState({name})} ref={'nameClear'}/>
        <Input placeholder='Feet' onChangeText={(name) => this.setState({name})} ref={'nameClear'}/>
      </Item>
    </CardItem>
      <Text style={styles.info}>{"\n"}Weight</Text>
      <CardItem style={{ height:120, }}>
      <Item>
        <Input placeholder='Pounds' onChangeText={(name) => this.setState({name})} ref={'nameClear'}/>
      </Item>
    </CardItem>
     
    </ScrollView>
      
     
    </View>
</Modal>



<TouchableHighlight style={{ backgroundColor: "white",}}
  onPress={() => {
    this.setModalVisible(true);
  }}>
  <Text style={styles.name} >Edit Profile</Text>
  
</TouchableHighlight>
<Text style={{fontSize:16, color:"#778899", fontWeight:'600', textAlign:'center',}}>Help Centre</Text>
<Text style={{fontSize:16, color:"#778899", fontWeight:'600', textAlign:'center',}}>Privacy Page</Text>
</View>
</View>
);
}
}
const styles = StyleSheet.create({
  header:{
    alignItems:'center',
    paddingTop: 50,
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:40,
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 84,
    borderWidth: 8,
    borderColor: "black",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
    textAlign:'center',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },

  box:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
    marginLeft: 20,
    marginRight: 20,
  },

  item:{
    flexDirection : 'row',
 },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "black",
  }
});

export default Profile