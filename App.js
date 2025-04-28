import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import Routes from "./app/Routes";
import { Provider } from "react-redux";
import { store } from "./app/store/index";

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#ffffff",
    },
  };
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};
registerRootComponent(App);
