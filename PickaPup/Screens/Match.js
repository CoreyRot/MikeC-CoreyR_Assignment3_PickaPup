import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder, ScrollView, Modal, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Divider } from 'react-native-elements';

class Match extends React.Component {
  //call the modal to not show unless clicked on
    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
  render() {
    //shows the image on top and the map on the bottom lets you learn about the dog you are choosing and get to purchase it as well
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Pick A Pup</Text>

            <View style={styles.container2}>

                <View style={styles.boxx}>
                <TouchableHighlight style={{ backgroundColor: "white",}}
                 onPress={() => {
                this.setModalVisible(true);
                }}>
                <Image style={{width:185, height:185,}} resizeMode="contain" source={require( '../assets/images/1.jpg')}/>
                </TouchableHighlight>
                </View>
                <View style={styles.boxx}>
                <TouchableHighlight style={{ backgroundColor: "white",}}
                 onPress={() => {
                this.setModalVisible(true);
                }}>
                <Image style={{width:185, height:185,}} resizeMode="contain" source={require( '../assets/images/2.jpg')}/>
                </TouchableHighlight>
                </View>
                <View style={styles.boxx}>
                <TouchableHighlight style={{ backgroundColor: "white",}}
                 onPress={() => {
                this.setModalVisible(true);
                }}>
                <Image style={{width:185, height:185,}} resizeMode="contain" source={require( '../assets/images/3.jpg')}/>
                </TouchableHighlight>
                </View>
                <View style={styles.boxx}>
                <TouchableHighlight style={{ backgroundColor: "white",}}
                 onPress={() => {
                this.setModalVisible(true);
                }}>
                <Image style={{width:185, height:185,}} resizeMode="contain" source={require( '../assets/images/4.jpg')}/>
                </TouchableHighlight>
                </View>
                <View style={styles.boxx}>
                <TouchableHighlight style={{ backgroundColor: "white",}}
                 onPress={() => {
                this.setModalVisible(true);
                }}>
                <Image style={{width:185, height:185,}} resizeMode="contain" source={require( '../assets/images/5.jpg')}/>
                </TouchableHighlight>
                </View>
                <View style={styles.boxx}>
                <TouchableHighlight style={{ backgroundColor: "white",}}
                 onPress={() => {
                this.setModalVisible(true);
                }}>
                <Image style={{width:185, height:185,}} resizeMode="contain" source={require( '../assets/images/6.jpg')}/>
                </TouchableHighlight>
                </View>

            </View>

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
        <Text style={{ paddingLeft:380, fontWeight:'600', fontSize: 22, }}>X</Text>
      </TouchableHighlight>
      <Text style={styles.name}>Who Am I{"\n"}</Text>
   
    <Image style={{width:300, height:200, alignSelf:'center', justifyContent:'center',}} resizeMode="contain" source={require( '../assets/images/puppylogo.png')}/>
    <ScrollView style={{ backgroundColor: "white",}}>
      <Text style={styles.name}>Name</Text>
      <Divider style={{ backgroundColor: 'black' }} />
      <Text style={styles.userInfo}>Springfalls Zig Zab Razor</Text>
      <Text style={styles.name}>{"\n"}{"\n"} Breed</Text>
      <Divider style={{ backgroundColor: 'black' }} />
      <Text style={styles.userInfo}>Belgian Malinois</Text>
      <Text style={styles.name}>{"\n"}{"\n"}Location</Text>
      <Divider style={{ backgroundColor: 'black' }} />
      <Image style={{ justifyContent:'center', alignSelf:'center'}} resizeMode="contain" source={require( '../assets/images/map.jpg')}/>
              <View>
                  
                <TouchableOpacity
                  style={styles.button}
                  // onPress={() => this.props.navigation.navigate('Profile')}
                  underlayColor='#fff'>
                  <Text style={styles.createText}>Buy Now</Text>
              </TouchableOpacity>
                </View>

      
    </ScrollView>
    
     
    </View>
</Modal>


</View>
</View>
);
}
}
export default Match;

const styles = StyleSheet.create({
    container: {
    justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
    },
    container2: {
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: "row",
        flexWrap: 'wrap'
      },
    header: {
        textAlign: 'center',
        alignItems: 'center',
      color: 'black',
      fontSize: 33,
      textAlign: 'center',
      paddingTop: 40,
      fontWeight: 'bold'
    },
    boxx:{
        display: 'flex',
        textAlign: 'center',
        paddingTop:120,
        margin: 10,
        height: 185,
        width: 185,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name:{
        textAlign: 'center',
        alignItems: 'center',
        fontSize:22,
        color:"#000000",
        fontWeight:'600',
        textAlign:'center',
    //    paddingRight:3,
      },
      userInfo:{
        textAlign: 'center',
        alignItems: 'center',
        fontSize:16,
        color:"#778899",
        fontWeight:'600',
      },

      button: {
    
          color: 'white',
         justifyContent:'center',
         alignSelf:'center',
          width: 200,
          marginRight:10,
          marginLeft:10,
          marginTop:30,
          paddingTop:10,
          paddingBottom:10,
          backgroundColor:'black',
          borderRadius:10,
          borderWidth: 1,
          borderColor: '#fff'
      },

      createText: {
        fontSize: 20,
        color:'white',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
  },
    
  
  });

