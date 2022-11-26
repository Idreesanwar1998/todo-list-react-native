import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TodoListPage from './components/pages/TodoLists';
import lists from './services/Lists';

export default function App() {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={[styles.topContainer, styles.blackBorder]}></View>
            <View style={[styles.bottomContainer, styles.blackBorder]}>
                <TodoListPage todoLists={lists} />
            </View>
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
        flex: 10,
    },
});
