import { StyleSheet, View, Pressable, Text, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/AntDesign';
import uuid from 'react-native-uuid';

function listItemPressed(item) {
    alert(`${item.name} was pressed`);
}

function listItemDeleted(item) {
    alert(`${item.name} was deleted`);
}

export default function TodoListPage({ todoLists }) {
    return (
        <View style={styles.todoListContainer}>
            <FlatList
                data={todoLists}
                renderItem={({ item }) => (
                    <Pressable style={styles.todoListItem} onPress={() => listItemPressed(item)}>
                        <View style={styles.listItemContainer}>
                            <Text style={styles.listName}>{item.name}</Text>
                            <Ionicons
                                style={styles.iconStyle}
                                name="delete"
                                size={20}
                                color="red"
                                onPress={() => {
                                    listItemDeleted(item);
                                }}
                            />
                        </View>
                        <FlatList
                            horizontal={true}
                            data={item.tags.slice(0, 3)}
                            renderItem={({ item }) => <Text style={styles.tag}>{item.name}</Text>}
                        />
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
    listItemContainer: {
        flexDirection: 'row',
    },
    listName: {
        flex: 5,
        // borderColor: '#000000',
        // borderWidth: 1,
    },
    iconStyle: {
        flex: 1,
        // borderColor: '#000000',
        // borderWidth: 1,
        textAlign: 'right',
    },
    tag: {
        padding: 5,
        margintop: 5,
        marginBottom: 5,
        marginEnd: 5,
        borderRadius: 50,
        backgroundColor: '#2471A3',
        color: '#fff',
    },
});
