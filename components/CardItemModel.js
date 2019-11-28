import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import {Card, CardItem, Right, Left, Thumbnail, Body, Button, Icon} from 'native-base';
import StarRating from 'react-native-star-rating';


class CardItemModel extends Component {
  render() {
    return (
      <Card noShadow style={styles.container}>
      {/* <CardItem bordered={true}>
        <Left>
          <Thumbnail source={this.props.imageUri} />
          <Body>
            <Text>{this.props.itemName}</Text>
            <Text style={{color:'grey', fontSize:11}}>{this.props.itemCreator}</Text>
          </Body>
        </Left>
      </CardItem> */}

      <View style={styles.cardBo}>
        <Image source={this.props.imageUri} style={{height: 200, width: null, flex: 1}}/>
      </View>

      <View style={styles.cardFooter}>
        <Left>
          <Button transparent>
            <StarRating 
              disabled={false}
              maxStars={5}
              rating={this.props.rating}
              starSize={12}
              fullStarColor='orange'
              emptyStarColor='orange'
            />
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Text style={{fontSize:14, fontWeight:'bold', color:'#c4402f'}}>{this.props.itemPrice}</Text>
          </Button>
        </Body>
        <Right>
          <Text><Text style={{color:'grey', fontWeight:'300', fontSize:11}}>
            You save    
          </Text> ${this.props.savings}</Text>
        </Right>
      </View>
      </Card>
      
    );
  }
}

export default CardItemModel;

const styles = StyleSheet.create({
    container:{
      width:'50%', 
      marginLeft:8,
      marginBottom:8,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,

      elevation: 5,
      borderWidth:0.01
    },
    cardBo:{
      borderTopLeftRadius:8,
      borderTopRightRadius:8,
    },
    cardFooter:{
     backgroundColor:'rgba(0, 0, 0, 0.040)',
    }
});