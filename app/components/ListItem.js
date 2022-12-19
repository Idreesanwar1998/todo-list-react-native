import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';

function listItemPressed(item) {
    alert(`${item.name} was pressed`);
}

function listItemDeleted(item) {
    alert(`${item.name} was deleted`);
}

export default function ListItem({ item }) {
    const [listItem, setListItem] = useState({
        id: item.id,
        name: item.name,
        complete: item.complete,
        tags: item.tags,
    });

    function updateItem(value) {
        setListItem({ ...listItem, complete: value });
    }

    return (
        <View>
            <Pressable style={styles.listItem} onPress={() => listItemPressed(listItem)}>
                <View style={styles.listItemContainer}>
                    <Checkbox
                        style={styles.itemCheckBox}
                        value={listItem.complete}
                        onValueChange={updateItem}
                        color={undefined}
                    />
                    <Text style={styles.listItemTitle}>{listItem.name}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        marginLeft: 6,
        marginRight: 6,
        marginTop: 20,
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#fff',
    },
    boxShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    listItemContainer: {
        flexDirection: 'row',
    },
    listItemTitle: {
        flex: 5,
        fontSize: 16,
        fontWeight: '400',
        maxWidth: '80%',
    },
    itemCheckBox: {
        marginEnd: 15,
    },
});
