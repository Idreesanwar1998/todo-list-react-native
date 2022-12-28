import {
    StyleSheet,
    View,
    FlatList,
    SafeAreaView,
    Text,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
} from 'react-native';
import ListItem from '../components/ListItem';
import lists from '../services/Lists';

export default function TodoListsScreen() {
    return (
        <SafeAreaView style={styles.todoListScreen}>
            <View style={styles.todoListContainer}>
                <Text style={styles.SectionTitle}>Your Lists</Text>
                <FlatList data={lists} renderItem={({ item }) => <ListItem item={item}></ListItem>} />
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
    todoListScreen: {
        backgroundColor: '#E8EAED',
        flexDirection: 'column',
        flex: 1,
    },
    todoListContainer: {
        flex: 12,
    },
    SectionTitle: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingStart: 10,
        fontWeight: 'bold',
        fontSize: 24,
    },
    taskWriterContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    taskInput: {
        marginStart: 5,
        marginEnd: 5,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        flex: 4,
        borderRadius: 10,
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: 'white',
    },
    taskInputButton: {
        marginEnd: 5,
        borderColor: 'black',
        borderWidth: 1,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: 'white',
    },
});
