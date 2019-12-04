import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import {Card, Right, Left, Body, Button} from 'native-base';


class CategoryItem extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Card style={styles.imageDesign}>
            <TouchableOpacity>

            {/* <CardItem bordered={true}>
                <Left>
                <Thumbnail source={this.props.imageUri} />
                <Body>
                    <Text>{this.props.itemName}</Text>
                    <Text style={{color:'grey', fontSize:11}}>{this.props.itemCreator}</Text>
                </Body>
                </Left>
            </CardItem> */}

                 <Image source={this.props.imageUri} style={{width:'100%', height:'100%'}}/>
            </TouchableOpacity>
            </Card>
            <View>
                <Text style={{width:100, textAlignVertical:'center', textAlign:'center'}}>{this.props.name}</Text>
            </View>
      </View>

    );
  }
}

export default CategoryItem;

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        width:100,
        height:120,
        marginHorizontal:2,
    },
    imageDesign:{
        borderRadius:60,
        width:60,
        height:60,
    },
    cardFooter:{
     backgroundColor:'rgba(0, 0, 0, 0.020)',
     borderBottomLeftRadius:8,
     borderBottomRightRadius:8,
    }
});