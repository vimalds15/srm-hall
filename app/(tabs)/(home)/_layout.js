import { Stack } from "expo-router"

const StackLayout = () => {
    return (
        <Stack initialRouteName="home"  >
            <Stack.Screen name="home" />
            <Stack.Screen name="detail" />
        </Stack>
    )
}

export default StackLayout