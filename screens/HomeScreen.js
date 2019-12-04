import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar, ScrollView} from 'react-native';

import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem} from 'native-base';

import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

import CardItemModel from '../components/CardItemModel';
import CategoryItem from '../components/CategoryItem';

class HomeScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            loading:false,
            products:[],
            url:'https://pokeapi.co/api/v2/pokemon/'
        }

    }

    componentDidMount(){
        this.getProducts();
    }

    getProducts = () => {
        this.setState({loading:true})

        fetch(this.state.url)
        .then(res => res.json())
        .then( res => {
            this.setState({
                products:res.results, 
                url:res.next,
                loading:false
            })
        });

    };
    
  render() {

    if(this.state.loading){
        return (
            <View>
                <Text></Text>
            </View>
        );
        
    }else{
        return (
            <Container>
            <Header style={[{backgroundColor:'#fafafa', height:90, borderBottomColor:'#dbdbdb', borderBottomWidth:0.5}, styles.androidHeader]}>
                <Left style={{flexDirection: 'row',}}>
                    <Icon onPress={()=>this.props.navigation.openDrawer()} name='md-menu' style={{color: '#212121', marginRight: 15,}} />
                    {/* <FAIcon name='amazon' style={{fontSize:32, color:'white'}}></FAIcon>  */}
                </Left>
                <Right>
                    <Icon name='md-cart' style={{color:'#212121'}} onPress={()=>this.props.navigation.navigate('Shop')}></Icon>
                </Right>
            </Header>
            {/* <View style={{ position:'absolute', left:0, right:0, top:90, height:70, backgroundColor:'#3a455c', flexDirection: 'row', alignItems:'center', paddingHorizontal:5}}>
                <TouchableOpacity>
                    <View style={{width:100, backgroundColor:'#e7e7eb', height:50, borderRadius:4, padding:10}}>
                        <Text style={{fontSize:12}}>Shop by</Text>
                        <Text style={{fontWeight:'bold'}}>Category</Text>
                    </View>
                </TouchableOpacity>

                <View style={{flex:1, height:'100%', marginLeft:5, justifyContent:'center'}}>
                    <Item style={{backgroundColor:'white', paddingHorizontal:10, borderRadius:4}}>
                        <Icon name='search' style={{fontSize:20, paddingTop: 5,}}></Icon>
                        <Input placeholder='Search'></Input>
                    </Item>

                </View>
            </View> */}

                <Content style={{backgroundColor:'white', marginTop:'1%'}}>
                    {/*<View style={{height:50, backgroundColor:'white', flexDirection:'row', paddingHorizontal:5, alignItems:'center', justifyContent:'space-between'}}>
                        <Text>Hello, Ronaldo Camacho</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text>Your Account </Text>
                            <Icon name='arrow-forward' style={{fontSize:18}}></Icon>
                        </View>
        </View>*/}

                    {/* <Swiper 
                        style={{height:100}}
                        autoplay={true}
                    >
                        <View style={{flex:1}}>
                            <Image style={{flex:1, height:null, width:null, resizeMode:'contain'}} 
                                source={require('../assets/swiper/320x50_web_banner_example-001.jpg')} />
                        </View>
                        <View style={{flex:1}}>
                            <Image style={{flex:1, height:null, width:null, resizeMode:'contain'}} 
                                source={require('../assets/swiper/320x50_web_banner_example-002.jpg')} />
                        </View>
                        <View style={{flex:1}}>
                            <Image style={{flex:1, height:null, width:null, resizeMode:'contain'}} 
                                source={require('../assets/swiper/320x50_web_banner_example-006.jpg')} />
                        </View>
                    </Swiper> */}

                    <View style={{width:'100%', paddingVertical:20, paddingHorizontal:4}}>
                        <Text style={{fontWeight:'bold', fontSize:20}}>Categorias</Text>
                    </View>

                <View style={{width:'100%', paddingVertical:5, height:150, paddingHorizontal:4, alignContent:'center'}}>
                        <ScrollView horizontal>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                <CategoryItem 
                                    name='Accesorios'
                                    imageUri={require('../assets/category/acces.png')}
                                />
                                <CategoryItem 
                                    name='sadsafsger ger hgdr g'
                                    imageUri={require('../assets/category/acces.png')}
                                />
                                <CategoryItem 
                                    name='Juguetes'
                                    imageUri={require('../assets/category/acces.png')}
                                />
                                <CategoryItem 
                                    name='Hombres'
                                    imageUri={require('../assets/category/acces.png')}
                                />
                            </View>
                            
                        </ScrollView>
                </View>

                    {/* <Card noShadow style={{marginLeft:5, marginRight:5, alignItems:'center'}}>
                        <CardItem header>
                            <Text style={{fontWeight:'bold'}}>Your Recomendations</Text>
                        </CardItem>
                    </Card> */}
                        <View style={{width:'100%', flexDirection: 'row', paddingHorizontal:2, alignItems:'center', justifyContent:'space-around'}}>

                            {this.state.products.map((val, key) => {
                                return ( 
                                    <CardItemModel key={key}
                                    itemName={val.name}
                                    itemCreator='Ronaldo Camacho'
                                    itemPrice='$20'
                                    savings='2.5'
                                    imageUri={require('../assets/recommended/GfQfcUJ.png')}
                                    rating={4.5}
                                    />
                                    
                                );
                            
                            })}
                            {/* <CardItemModel
                                itemName='Beautiful'
                                itemCreator='Ronaldo Camacho'
                                itemPrice='$20'
                                savings='2.5'
                                imageUri={require('../assets/recommended/GfQfcUJ.png')}
                                rating={4.5}
                            />

                            <CardItemModel  
                                itemName='Finger print'
                                itemCreator='Ronaldo Camacho'
                                itemPrice='$50'
                                savings='2.5'
                                imageUri={require('../assets/recommended/LOGO-negro-250x250px-FINAL.png')}
                                rating={3.5}
                            /> */}

                        </View>
                        {/* <CardItemModel
                                itemName='Fozy'
                                itemCreator='Ronaldo Camacho'
                                itemPrice='$30'
                                savings='2.5'
                                imageUri={require('../assets/recommended/Png-250x250px--..png')}
                                rating={2}
                            />

                            <CardItemModel
                                itemName='Witch'
                                itemCreator='Ronaldo Camacho'
                                itemPrice='$10'
                                savings='2.5'
                                imageUri={require('../assets/recommended/tumblr_oed1302TVB1vnqjx7o1_250.png')}
                                rating={3.5}
                            /> */}

                </Content>

            </Container>
        );
    }

  }
}

export default HomeScreen;

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
