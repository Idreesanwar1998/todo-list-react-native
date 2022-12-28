import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable } from 'react-native';
import TodoListPage from './components/pages/TodoLists';
import lists from './services/Lists';

export default function App() {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text style={styles.SectionTitle}>Your Lists</Text>
            <View style={styles.listContainer}>
                <TodoListPage todoLists={lists} />
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.taskWriterContainer}
            >
                <TextInput style={styles.taskInput} placeholder="Add a new list" />
                <Pressable style={styles.taskInputButton}>
                    <Text>+</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    SectionTitle: {
        marginStart: 15,
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 24,
    },
    listContainer: {
        flex: 10,
        margin: 15,
    },
    taskWriterContainer: {
        flexDirection: 'row',
        paddingStart: 15,
        paddingEnd: 15,
    },
    taskInput: {
        flex: 4,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginEnd: 5,
        borderRadius: 10,
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
    },
    taskInputButton: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
    },
});
