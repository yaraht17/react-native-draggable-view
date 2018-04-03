var TENSION = 800;
var FRICTION = 90;

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Image,
  View,
  Animated,
  AlertIOS,
  PanResponder,
  Dimensions, TouchableOpacity
} from 'react-native';
var SCREEN_HEIGHT = Dimensions.get('window').height;
var DraggableDrawerHelper = require('./helper')(SCREEN_HEIGHT);

class component extends Component {
  constructor (props) {
    super(props)
    // naming it initialX clearly indicates that the only purpose
    // of the passed down prop is to initialize something internally
    var initialDrawerSize = DraggableDrawerHelper.calculateInitialPosition(this.props.initialDrawerSize);
    var finalDrawerSize = this.props.finalDrawerHeight ? this.props.finalDrawerHeight : 0;
    // console.log(initialDrawerSize, 'Initila size');
    this.state = {
      touched: 'FALSE',
      position: new Animated.Value(initialDrawerSize),
      initialPositon: initialDrawerSize,
      finalPosition: finalDrawerSize,
    };
  }

  onUpdatePosition (position) {
    // console.log('UPDATE_POSITION', position);
    position = position -50;
    this.state.position.setValue(position);
    this._previousTop = position;
    // console.log('Position ', position);
    var initialPosition = DraggableDrawerHelper.getInitialPosition();

    if (initialPosition === position) {
      this.props.onInitialPositionReached && this.props.onInitialPositionReached();
    }
  }

  componentWillMount () {
    // Initialize the DraggableDrawerHelper that will drive animations
    DraggableDrawerHelper.setupAnimation(TENSION, FRICTION,
      (position) => {
        if (!this.center) return;
        this.onUpdatePosition(position.value);
      }
    );

    this._panGesture = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return DraggableDrawerHelper.isAValidMovement(gestureState.dx, gestureState.dy) && this.state.touched == 'TRUE';
      },
      onPanResponderMove: (evt, gestureState) => {
        this.moveDrawerView(gestureState);
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.moveFinished(gestureState);
      },
    });
  }


  moveDrawerView (gestureState) {
    // console.log('GESTURE', gestureState);
    if (!this.center) return;
    var currentValue = Math.abs(gestureState.moveY / SCREEN_HEIGHT);
    var isGoingToUp = (gestureState.vy < 0);
    //Here, I'm subtracting %5 of screen size from edge drawer position to be closer as possible to finger location when dragging the drawer view
    var position = gestureState.moveY - SCREEN_HEIGHT * 0.05;
    //Send to callback function the current drawer position when drag down the drawer view component
    //   if(!isGoingToUp) this.props.onDragDown(1-currentValue);
    this.onUpdatePosition(position);
  }

  moveFinished (gestureState) {
    var isGoingToUp = (gestureState.vy < 0);
    if (!this.center) return;
    DraggableDrawerHelper.startAnimation(gestureState.vy, gestureState.moveY, this.state.initialPositon, gestureState.stateId, this.state.finalPosition);
    this.props.onRelease && this.props.onRelease(isGoingToUp);
  }

  render() {
    var containerView = this.props.renderContainerView ? this.props.renderContainerView() : null;
    var drawerView = this.props.renderDrawerView ? this.props.renderDrawerView() : null;
    var initDrawerView = this.props.renderInitDrawerView ? this.props.renderInitDrawerView() : null;
    var drawerPosition = {
      top: this.state.position
    };

    return (
      <View style={styles.viewport}>
        <View style={styles.container}>
          {containerView}
        </View>
        <Animated.View
          style={[drawerPosition, styles.drawer,
            {backgroundColor: this.props.drawerBg ? this.props.drawerBg : 'white' }]}
          ref={(center) => this.center = center}
          {...this._panGesture.panHandlers}>
          <TouchableWithoutFeedback
            onPressIn={() => { this.setState({ touched: 'TRUE' }); }}
            onPressOut={() => { this.setState({ touched: 'FALSE' }); }}>
            {initDrawerView}


          </TouchableWithoutFeedback>
          {drawerView}
        </Animated.View>

      </View>
    );
  }
};


var styles = StyleSheet.create({
  viewport: {
    flex: 1,
  },
  drawer: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

module.exports = component;
