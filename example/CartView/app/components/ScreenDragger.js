import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Dimensions,
    TouchableOpacity,
    Image,
    FlatList,
    StatusBar,
} from 'react-native';
import CartHeader from './CartHeader'
import Screen2 from './Screen2'
import Screen3 from './Screen3'

import Drawer from 'react-native-draggable-view'
export default class ScreenDragger extends Component {
    render() {
        return (
            <Drawer
                initialDrawerSize={0.09}
                renderContainerView={() => <Screen2 navigation={this.props.navigation} />}
                renderDrawerView={() => (
                    <Screen3 navigation={this.props.navigation} />)}
                renderInitDrawerView={() => (<View style={{
                    backgroundColor: 'white',
                    height: 66,
                }}>
                    <StatusBar hidden={true} />
                    <CartHeader />
                </View>)}
            />
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