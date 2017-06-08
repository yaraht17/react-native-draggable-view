
import React, { Component } from 'react';
import {
    StyleSheet, View, Dimensions, Image, Text,
    Animated, Platform, TouchableOpacity, ScrollView, FlatList
} from 'react-native';
import iconCart from '../media/icon_cart.png'
import iconClaw from '../media/icon_claw.png'
import iconCheckout from '../media/icon_next_arrow.png'

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}
export default class CartHeader extends Component{
    render() {
        return (
            <View style={styles.cart_layout}>
                <View style={{ height: 4, width: Screen.width, backgroundColor: '#FD792E' }} />
                <View style={styles.cart_detail}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 40,
                            height: 40,
                        }}>
                            <Image style={styles.icon_cart} source={iconCart} />
                            <View style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: 20,
                                height: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#FC5734', borderRadius: 10
                            }}>
                                <Text style={{

                                    fontSize: 10,
                                    color: 'white'
                                }}> 20</Text>
                            </View>
                        </View>
                        <Text style={{ color: '#4A4A4A', fontSize: 14, fontWeight: 'bold', marginLeft: 10, }}>KES 3000</Text>
                    </View>
                    <Image style={styles.icon_claw} source={iconClaw} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#FD792E', fontSize: 12, marginRight: 10, }}>FREE DELIVERY</Text>
                        <TouchableOpacity>
                        <Image style={styles.icon_checkout} source={iconCheckout} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    cart_layout: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: 56,
    },
    cart_detail: {
        paddingLeft: 20,
        paddingRight: 20,
        height: 52,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon_claw: {
        position: 'absolute',
        top: 2,
        bottom: 0,
        left: (Screen.width / 2) - 16,
        right: (Screen.width / 2) - 16,
        width: 32,
        height: 6,
    },
    icon_checkout: {
        width: 16,
        height: 16,
    },
    icon_cart: {

        width: 22,
        height: 23,
    },
})