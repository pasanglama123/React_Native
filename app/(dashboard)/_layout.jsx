import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { Ionicons } from '@expo/vector-icons';

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.navBackground,
          paddingTop: 15,
          height: 70
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused,color, size }) => (
            <Ionicons 
             name={focused ? "person": 'person-outline'} 
             size={size} 
             color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="books"
        options={{
          title: 'Books',
          tabBarIcon: ({focused, color, size }) => (
            <Ionicons 
              name={focused ? "book" : 'book-outline'} 
              size={size} 
              color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({focused, color, size }) => (
            <Ionicons 
              name={focused ? "create" : 'create-outline'} 
              size={size} 
              color={color} />
          )
        }}
      />
    </Tabs>
  );
}

export default DashboardLayout;
