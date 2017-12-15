import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    talkButton: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        lineHeight: 16,
        marginTop: Platform.select({
          ios: 6,
          android: 0,
        }),
        marginBottom: Platform.select({
          ios: 5,
          android: 3,
        }),
        height: Platform.select({
            ios: 33,
            android: 70,
        }),
    },
});