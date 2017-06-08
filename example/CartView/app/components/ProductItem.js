
import React, { Component } from 'react';
import {
    StyleSheet, View, Dimensions, Image, Text,
    Animated, Platform, TouchableOpacity, ScrollView, FlatList
} from 'react-native';

import iconStar from '../media/icon_star.png'
import iconStarDisable from '../media/icon_star_disable.png'

import demoProduct from '../media/demo_product.png'
import demoProduct2 from '../media/demo_product2.png'
import demoProduct3 from '../media/demo_product3.png'
import demoProduct4 from '../media/demo_product4.png'

import btnMinus from '../media/button_minus.png'
import btnPlus from '../media/button_plus.png'
import btnPlusLarge from '../media/button_plus_large.png'
const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}


export default class ProductItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0,
            isFavorite: true,

        }
    }
    render() {
        return (
            <View style={styles.product}>
                <Image style={styles.product_image} source={this.props.image} />
                <View style={styles.product_detail}>
                    <View style={styles.product_detail_header}>
                        <Text style={styles.product_name} numberOfLines={2} ellipsizeMode='tail'>
                            Fresh countryside chicken thigh ( pack of 4 )
                        </Text>
                        <TouchableOpacity onPress={this.onFavoritePress}>
                            <Image style={styles.product_favorite} source={this.state.isFavorite ? iconStar : iconStarDisable} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.product_detail_footer}>
                        <View style={styles.product_price}>
                            <Text style={styles.product_price_default}>
                                150 KES
                            </Text>
                            <Text style={styles.product_price_discount}>
                                120 KES
                            </Text>
                        </View>
                        {this.state.number > 0 ?
                            <View style={styles.button_layout}>
                                <TouchableOpacity
                                    onPress={this.onMinusPress}
                                    style={{ marginRight: 15 }}>
                                    <Image style={styles.button_minus} source={btnMinus} />
                                </TouchableOpacity>
                                <Text style={{ marginRight: 15, fontSize: 14, }} >
                                    {this.state.number}
                                </Text>
                                <TouchableOpacity
                                    onPress={this.onPlusPress}>
                                    <Image style={styles.button_plus} source={btnPlus} />
                                </TouchableOpacity>
                            </View>
                            :
                            <View>
                                <TouchableOpacity
                                    onPress={this.onPlusPress} >
                                    <Image
                                        style={styles.button_plus_large} source={btnPlusLarge} />
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                </View>
            </View>
        );
    }
    onMinusPress = () => {
        if (this.state.number > 0) {
            this.setState({
                number: this.state.number - 1
            })
        }
    }
    onPlusPress = () => {
        this.setState({
            number: this.state.number + 1
        })
    }
    onFavoritePress = () => {
        this.setState({
            isFavorite: !this.state.isFavorite
        })
    }
}

const styles = StyleSheet.create({
    product: {
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        flex: 1,
    },
    body: {
        flex: 1,
        height: Screen.height - 122,
    },
    product_image: {
        width: 72,
        height: 72,
    },
    product_detail: {
        justifyContent: 'space-around',
        marginLeft: 10,
        flexDirection: 'column',
        flex: 1,
    },
    product_detail_header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    product_name: {
        color: '#4A4A4A',
        fontSize: 14,
        width: 180,
    },
    product_favorite: {
        width: 20,
        height: 19,
    },
    product_detail_footer: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    product_price: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    product_price_default: {
        textDecorationLine: 'line-through',
        color: '#BABCBE',
        fontSize: 12,
    },
    product_price_discount: {
        marginLeft: 20,

        color: '#FC5734',
        fontSize: 12,
    },
    button_layout: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    button_minus: {
        width: 34,
        height: 34,
    },
    button_plus: {
        width: 34,
        height: 34,
    },
    button_plus_large: {
        width: 109,
        height: 32,
    },
})