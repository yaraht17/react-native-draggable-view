import React, { Component } from 'react';
import {
    StyleSheet, View, Dimensions, Image, Text,
    Animated, Platform, TouchableOpacity, ScrollView, FlatList
} from 'react-native';
import iconBack from '../media/icon_back_arrow.png'
import iconExit from '../media/icon_exit.png'
import demoProduct from '../media/demo_product.png'
import demoProduct2 from '../media/demo_product2.png'
import demoProduct3 from '../media/demo_product3.png'
import demoProduct4 from '../media/demo_product4.png'

import ProductItemNote from './ProductItemNote'

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

export default class Screen2 extends Component {
    constructor(props) {
        super(props);

    }
    _keyExtractor = (item, index) => item.id;


    render() {

        return (

            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.alert_layout}>
                        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>KES 1800  more to free delivery! </Text>
                    </View>
                    <View style={styles.body}>
                        <FlatList
                            data={
                                [{ id: 0, title: 'Meat', type: 0 }, { id: 1, image: demoProduct, type: 1 }, { id: 2, image: demoProduct2, type: 1 }, { id: 3, title: 'Fresh food', type: 0 },
                                { id: 4, image: demoProduct3, type: 1 }, { id: 5, image: demoProduct4, type: 1 },
                                ]
                            }
                            renderItem={({ item }) =>
                                item.type == 0 ? <View style={{ padding: 15 }}>
                                    <Text style={{ fontSize: 18, color: '#4A4A4A' }}> {item.title}</Text>
                                </View>
                                    :
                                    <ProductItemNote image={item.image} />
                            }
                            ItemSeparatorComponent={this.renderSeparator}
                            keyExtractor={this._keyExtractor}
                        />
                        {this.renderItemProduct}
                    </View>

                </View>

            </View>

        );
    }
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#D8D8D8",
                }}
            />
        );
    };

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF0F2',
    },
    body: {
        flex: 1,
    },
    content: {
        // height: Screen.height,
        width: Screen.width,
        // height: 300,
        flex: 1,
    },
    alert_layout: {
        backgroundColor: '#FD792E',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }




});