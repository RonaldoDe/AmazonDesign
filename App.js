import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, StatusBar } from 'react-native';

import { createAppContainer, NavigationActions } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Home from './screens/HomeScreen';
import Shop from './screens/Shop';

import { Container, Content, Header, Left, Right, Icon, Body, List, ListItem } from 'native-base';


class App extends React.Component {
  render(){
    return (

      <AppNavigator />
         
    );
  }
}

const CustomDraweContentComponent = (props) =>{
  return(
    <Container>
      <Header style={[{backgroundColor:'#fafafa', height: 90}, styles.androidHeader]}>
        <Left style={{flex:1, flexDirection: 'row', alignItems:'center'}}>
          <Icon name='person' style={{color:'#212121'}} />
          <Text style={{marginLeft:5, fontSize:22, color:'#212121', fontStyle:'normal'}}>Hello, Ronaldo</Text>
        </Left>
      </Header>
      <Content>
          <FlatList 
            style={{borderTopWidth:0.5, borderTopColor:'#f0f0f0'}}          
            data={[{
                title: 'Home', key: 'Home'
              },
              {
                title: 'Shop', key: 'Shop'
              }
            ]}
            renderItem={({item, index}) => (
              <ListItem noBorder onPress={()=> props.navigation.navigate(item.key)}>
                <Text>{item.title}</Text>
              </ListItem>
            )}
          />
        </Content>
    </Container>
  )
}

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Shop:{
    screen: Shop
  }
  
},{
  drawerPosition:'left',
  contentComponent:CustomDraweContentComponent,
  drawerToggleRoute:'DrawerToggle'
});


export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidHeader:{
      ...Platform.select({
          android:{
              paddingTop: StatusBar.currentHeight,
          }
      })
  }
});
