# react-native-draggable-view

DraggableView is a component for react-native, it allows you have a vertical draggable view that you can drag up or drag down. So, if you drag and release that component, then it keeps moving until reach  either initial position or container border.

## Example
### [draggable-view-sample](https://github.com/yaraht17/react-native-draggable-view/tree/master/example/CartView)

![react-native-draggable-view](https://media.giphy.com/media/BA1ucRPKMNM9q/giphy.gif)

### Installation

```bash
$ npm i react-native-draggable-view --save
```

### Usage
```javascript
    <Drawer
        initialDrawerSize={0.09}
        autoDrawerUp={1} // 1 to auto up, 0 to auto down
        renderContainerView={() => (
            <Screen2 navigation={this.props.navigation} />
        )}
        renderDrawerView={() => (
            <Screen3 navigation={this.props.navigation} />
        )}
        renderInitDrawerView={() => (
            <View style={{ backgroundColor: 'white', height: 66 }}>
                <StatusBar hidden={true} />
                <CartHeader />
            </View>
        )}
    />
```

#### Properties

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| onDragDown | undefined | `function` | If you pass a function as parameter it will be notified when the user drag down the drawer  |
| onRelease | undefined | `function` | If you pass a function as parameter it will be notified when the user release the drawer after drag it |
| initialDrawerSize | 0.0 | `number` | It's the initial position or size for Drawer component. If  drawer size is 1 that means its using 100% of avalaible space on the screen |
| isInverseDirection | false | `boolean` | Allows to use the draggable view in the inverse direction. Which means from the top to the bottom. By default is from the bottom to the top. |
| renderContainerView | undefined | `View` | Pass as parameter a renderable react component to show as container. |
| renderDrawerView | undefined | `View` | Pass as parameter a renderable react component to show as drawer. |
|renderInitDrawerView| undefined | `View` | Pass as parameter a renderable react component to show as view can draggable |
|finalDrawerHeight| 0 | `number` | The height position that the drawer will stop starting from top. Example: `finalDrawerHeight={100}` will stop the drawer at 100 pixels from reaching the top. |

