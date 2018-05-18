/**
 * Created by SF on 2018/5/18.
 */

import React, {Component} from 'react'
import {
    View,
    FlatList,
    Dimensions,
    TouchableOpacity,
    findNodeHandle
} from 'react-native'

import {
    SFZiConfig,
    SFZiView
} from 'react-native-sf-zoom-image-viewer'
import Cell from "./Cell";
const {width} = Dimensions.get('window')

export default class ImageCell extends Component {

    componentWillMount() {
        this.array = []
    }
    render() {
        return (
            <View
                style={{width: width}}>
                <FlatList
                    numColumns={this.props.numColumns}
                    data={this.props.data}
                    keyExtractor={(item, index) => index + 'key'}
                    renderItem={this.renderItem}/>
                <SFZiView
                    ref={(ref) => {
                        this.zoom = ref
                    }}/>
            </View>
        )
    }

    renderItem = (item) => {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={this.click.bind(this, item)}>
                <Cell
                    number={this.props.numColumns}
                    spacing={this.props.spacing}
                    data={item.item}
                    callback={(ref) => {
                        this.array.push(ref)
                    }}/>
            </TouchableOpacity>
        )
    }

    click = (item) => {
        var ds = [];
        SFZiConfig.inOneView = false

        for (var i = 0; i < this.props.data.length; i++) {
            var handel = findNodeHandle(this.array[i]);
            var subData = this.props.data[i];
            var data = {
                source: subData,
                type: SFZiConfig.type_img,
                handel: handel,
            }
            ds.push(data);
        }
        console.log(ds)
        this.zoom.showWithData(ds, item.index);
    }



}