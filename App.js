import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./app/screen/auth/Onboarding/index";
import SignIn from "./app/screen/auth/Signin/index";
import { registerRootComponent } from "expo";
import SignUp from "./app/screen/auth/Signup/index";
import Home from "./app/screen/app/Home";
import Routes from "./app/Routes";

const Stack = createStackNavigator();

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#ffffff",
    },
  };
  return (
    <NavigationContainer theme={theme}>
      <Routes />
    </NavigationContainer>
  );
};
registerRootComponent(App);
