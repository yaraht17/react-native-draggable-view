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

import ProductItem from './ProductItem'

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
                    <View style={styles.toolbar}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
                            <Image
                                style={styles.toolbarLeft}
                                source={iconBack} />
                        </TouchableOpacity>

                        <Text style={styles.toolbarTitle} > Chicken </Text>
                        <TouchableOpacity >
                            <Image style={styles.toolbarRight} source={iconExit} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.body}>
                        <FlatList
                            data={
                                [{ id: 1, image: demoProduct }, { id: 2, image: demoProduct2 }, { id: 3, image: demoProduct3 }, { id: 4, image: demoProduct4 },
                                { id: 5, image: demoProduct4 }, { id: 6, image: demoProduct4 }, { id: 7, image: demoProduct4 }, { id: 8, image: demoProduct4 }]
                            }
                            renderItem={({ item }) =>
                                <ProductItem image={item.image} />
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
        backgroundColor: 'white',
    },

    content: {
        // height: Screen.height,
        width: Screen.width,
        // height: 300,
        flex: 1,
    },
    body: {
        flex: 1,
        marginBottom: 56,
    },
    toolbar: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        backgroundColor: '#2B3740'
    },
    toolbarLeft: {
        marginLeft: 10,
        width: 16,
        height: 16,
    },
    toolbarTitle: {
        color: 'white',
        fontSize: 16,
    },
    toolbarRight: {
        marginRight: 10,
        width: 14,
        height: 14,
    },



});