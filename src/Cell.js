/**
 * Created by SF on 2018/5/18.
 */


import React, {Component} from 'react'
import {
    Image,
    Dimensions,
} from 'react-native'

const {width} = Dimensions.get('window')

export default class Cell extends Component {

    render() {

        const {spacing, number} = this.props

        return (
            <Image
                ref={(ref) => this.cell = ref}
                style={{
                    marginLeft: spacing,
                    marginTop: spacing,
                    width: (width - spacing * (number + 1)) / number,
                    height: (width - spacing * (number + 1)) / number,
                }}
                source={{uri: this.props.data}}/>
        )
    }


    componentDidMount() {
        if (this.props.callback)
            this.props.callback(this.cell)
    }

}