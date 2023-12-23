import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Question = () => {
    return (
        <View style={styles.group576}>
            <View style={styles.group575}>
                <View style={styles.rectangle29} />
                <View style={styles.rectangle30} />
                <View style={styles.rectangle31} />
            </View>
            <View style={styles.rectangle28} />
            <Text style={styles.dateText}>20 December 2023</Text>
            <Text style={styles.headingText}>Three things I’m looking forward to today are...</Text>

            {/* Options */}
            <View style={styles.options}>
                <View style={styles.option}>
                    <Text style={styles.optionText}>Type here</Text>
                    <View style={styles.ellipse238} />
                </View>
                {/* Repeat for other options */}
            </View>
        </View>
    );
}

export default Question;

const styles = StyleSheet.create({
    group576: {
        width: '100%', 
        height: '100%', 
        position: 'relative',
    },
    group575: {
        width: 277, 
        height: 391, 
        position: 'absolute', 
        left: 8, 
        top: 9,
    },
    rectangle29: {
        width: 200, 
        height: 300, 
        position: 'absolute', 
        left: 77, 
        top: 9, 
        backgroundColor: '#87B5E2',
        filter: 'blur(100px)',
        // boxShadow and filter are not directly supported in React Native
    },
    rectangle30: {
        width: 200, 
        height: 300, 
        position: 'absolute', 
        left: 50, 
        top: 91, 
        backgroundColor: '#99D0DE',
        filter: 'blur(100px)',
    },
    rectangle31: {
        width: 200, 
        height: 300, 
        position: 'absolute', 
        left: 0, 
        top: 0, 
        backgroundColor: '#2EC5CE',
        filter: 'blur(100px)',
    },
    rectangle28: {
        width: 294, 
        height: 354, 
        position: 'absolute', 
        left: 0, 
        top: 0, 
        backgroundColor: 'white', 
        borderRadius: 10,
    },
    dateText: {
        position: 'absolute', 
        left: 15, 
        top: 26, 
        color: '#BAB7B2', 
        fontSize: 12, 
        fontWeight: '500',
    },
    headingText: {
        width: 260, 
        position: 'absolute', 
        left: 15, 
        top: 57, 
        color: '#626267', 
        fontSize: 16, 
        fontWeight: '500',
    },
    options: {
        width: 93, 
        height: 121, 
        position: 'absolute', 
        left: 25, 
        top: 125,
    },
    option: {
        width: 93, 
        height: 17, 
        position: 'absolute', 
    },
    optionText: {
        left: 26, 
        position: 'absolute', 
        color: '#BAB7B2', 
        fontSize: 14, 
        fontWeight: '500',
    },
    ellipse238: {
        width: 16, 
        height: 16, 
        position: 'absolute', 
        left: 0, 
        top: 1, 
        borderRadius: 9999, 
        borderWidth: 1, 
        borderColor: '#9AA1A9',
    },
    // ... Other styles for ellipse239, ellipse240, etc.
});
