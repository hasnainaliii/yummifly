import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Cause-Bold": require("@/assets/fonts/Cause-Bold.ttf"),
    "Cause-Medium": require("@/assets/fonts/Cause-Medium.ttf"),
    "Cause-Regular": require("@/assets/fonts/Cause-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
