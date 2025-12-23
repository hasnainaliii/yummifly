import { Redirect } from "expo-router";

export default function Index() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <Redirect href="/(auth)/SignIn" />;
  } else {
    return <Redirect href="/(main)" />;
  }
}
