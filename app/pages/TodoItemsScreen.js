import { View, Text } from 'react-native';

export default function TodoItemsScreen() {
    let t = fetch('https://jsonplaceholder.typicode.com/todos/2')
        .then((response) => response.json())
        .then((json) => console.log(json));
    return (
        <View>
            <Text>This is the todo Items Screen</Text>
        </View>
    );
}
