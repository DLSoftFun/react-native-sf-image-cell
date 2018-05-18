# react-native-sf-image-cell

# 图片列表展示器

# 安装

> npm i react-native-sf-image-cell  

> npm i react-native-sf-zoom-image-viewer  

> npm install react-native-video  

> react-native link

# Props
|  parameter  |  type  |  required  |   description  |  default  |
|:-----|:-----|:-----|:-----|:-----|
|size|number|no|item大小|null|
|numColumns|number|no|列数|null|
|spacing|number|no|间距|null
|data|array|no|图片数组(必须是网络图片)|null|

# 例子
```
/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
Platform,
StyleSheet,
Text,
View
} from 'react-native';
import SFToast from 'react-native-sf-toast';

const instructions = Platform.select({
ios: 'Press Cmd+R to reload,\n' +
'Cmd+D or shake for dev menu',
android: 'Double tap R on your keyboard to reload,\n' +
'Shake or press menu button for dev menu',
});

var arr = ['https:xxx.png','https:xxx.png']

type Props = {};
export default class App extends Component<Props> {
render() {
return (
<View style={styles.container}>

            <ImageCell
                size={100}
                numColumns={3}
                spacing={5}
                data={arr}/>
        
</View>
);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5FCFF',
},
welcome: {
fontSize: 20,
textAlign: 'center',
margin: 10,
},
instructions: {
textAlign: 'center',
color: '#333333',
marginBottom: 5,
},
});



```
