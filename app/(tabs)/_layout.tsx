// import { Tabs } from "expo-router";

// const TabsNavigation = () => {
//   <Tabs>
//     <Tabs.Screen name="favorites" />
//
//     <Tabs.Screen name="(songs)" />
//
//   </Tabs>;
// };
// export default TabsNavigation;

// import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors, fontSize } from "@/constants/tokens";
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { hide } from "expo-splash-screen";
import { Text } from "react-native";

export default function TabNavigation() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: { fontSize: fontSize.xs, fontWeight: 500 },
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: 0,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={50}
            style={{
              overflow: "hidden",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="playlist"
        options={{
          title: "Playlist",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="playlist-play"
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(songs)"
        options={{
          title: "Songs",
          tabBarIcon: ({ color }) => (
            <Ionicons name="musical-notes-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="artists"
        options={{
          title: "Artists",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="users-line" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
