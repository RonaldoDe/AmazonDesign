import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import {Card, Right, Left, Body, Button} from 'native-base';
import StarRating from 'react-native-star-rating';


class CardItemModel extends Component {
  render() {
    return (
      <Card noShadow style={styles.container}>
        <TouchableOpacity activeOpacity={0.8}>
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
            {/* <Left>
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
            </Left> */}
            <Body style={{padding:5}}>
              <Text style={{fontSize:14, fontWeight:'bold', color:'#212121', fontStyle:'italic'}}>{this.props.itemName}</Text>
            </Body>
            <Right style={{padding:5}}>
              <Text>Precio: <Text style={{fontSize:14, fontWeight:'bold', color:'#c4402f'}}>{this.props.itemPrice}</Text></Text>
            </Right>
          </View>
        </TouchableOpacity>
      </Card>
      
    );
  }
}

export default CardItemModel;

const styles = StyleSheet.create({
    container:{
      width:'47%', 
      marginBottom:8,
      borderLeftWidth:0.4,
      borderRightWidth:0.4,
      borderTopWidth:0.4,
      borderBottomWidth:0.4,
      borderColor:'#E0E0E0'
    },
    cardBo:{
      borderTopLeftRadius:8,
      borderTopRightRadius:8,
    },
    cardFooter:{
     backgroundColor:'rgba(0, 0, 0, 0.020)',
     borderBottomLeftRadius:8,
     borderBottomRightRadius:8,
    }
});