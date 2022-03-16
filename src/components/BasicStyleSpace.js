//create component with basic style to apply as needed throughout app
import React from "react";
import { View, StyleSheet } from 'react-native'

const BasicStyledSpace = ({ children }) => {
    return (
        <View style={styles.space} >
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    space: {
        margin: 15
    }
})

export default BasicStyledSpace
