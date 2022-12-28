import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from '../ListItem';

export default function TodoListPage({ todoLists }) {
    return (
        <View style={styles.todoListContainer}>
            <FlatList data={todoLists} renderItem={({ item }) => <ListItem item={item}></ListItem>} />
        </View>
    );
}

const styles = StyleSheet.create({
    todoListContainer: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    iconStyle: {
        flex: 1,
        textAlign: 'right',
    },
    tag: {
        padding: 10,
        paddingEnd: 20,
        paddingStart: 20,
        marginBottom: 10,
        marginEnd: 5,
        borderRadius: 20,
        backgroundColor: '#b1ecfc',
    },

    tagContent: {
        color: '#1d48f2',
    },
});
