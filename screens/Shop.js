import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar, Image} from 'react-native';

import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

import RecommendedCardItem from '../components/RecommendedCardItem';

class Shop extends Component {
  render() {
    return (
        <Container>
          <Header style={[{backgroundColor:'#3a455c', height:90, borderBottomColor:'#757575', borderBottomWidth:0.5}, styles.androidHeader]}>
            <Left style={{flexDirection: 'row',}}>
                <Icon onPress={()=>this.props.navigation.openDrawer()} name='md-menu' style={{color: 'white', marginRight: 15,}} />
                {/* <FAIcon name='amazon' style={{fontSize:32, color:'white'}}></FAIcon>  */}
            </Left>
            <Right>
                <Icon name='md-cart' style={{color:'white'}}></Icon>
            </Right>
          </Header>
            <View>
                <Text >Shop</Text>
            </View>
        </Container>
    );
  }
}

export default Shop;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    androidHeader:{
        ...Platform.select({
            android:{
                paddingTop: StatusBar.currentHeight,
            }
        })
    }
});
