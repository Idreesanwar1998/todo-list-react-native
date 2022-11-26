import { StyleSheet, View, Pressable, Text, FlatList } from 'react-native';

function listItemPressed(item) {
    alert(`${item.name} was pressed`);
}

export default function TodoListPage({ todoLists }) {
    return (
        <View style={styles.todoListContainer}>
            <FlatList
                data={todoLists}
                renderItem={({ item }) => (
                    <Pressable style={styles.todoListItem} onPress={() => listItemPressed(item)}>
                        <Text>{item.name}</Text>
                    </Pressable>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    todoListContainer: {
        flex: 1,
    },
    todoListItem: {
        borderWidth: 1,
        borderColor: '#000000',
        marginLeft: 6,
        marginRight: 6,
        marginTop: 6,
        padding: 10,
        borderRadius: 10,
    },
});
