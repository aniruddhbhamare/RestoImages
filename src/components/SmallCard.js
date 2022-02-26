import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const SmallCard = ({ name, value, color }) => {
    const { textStyle } = styles;
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: color, padding: 20 }}>
            <View style={{}}>
                <Text style={textStyle}>{name} </Text>
            </View>
            <View style={{}}>
                <Text style={textStyle}>{value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16
    }
})

export default SmallCard