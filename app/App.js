import TodoListsScreen from './pages/TodoListsScreen';
import TodoItemsScreen from './pages/TodoItemsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={TodoListsScreen} />
                <Stack.Screen name="test" component={TodoItemsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
