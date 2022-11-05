import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={[styles.topContainer, styles.blackBorder]}>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
            <View style={[styles.bottomContainer, styles.blackBorder]}></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    blackBorder: {
        borderWidth: 1,
        borderColor: '#000',
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topContainer: {
        flex: 1,
    },
    bottomContainer: {
        flex: 6,
    },
});
