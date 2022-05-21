import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";
import HomeScreen from "./src/screens/HomeScreen";
import BetaScreen from "./src/screens/beta/BetaScreen";
import store from "./src/redux/Store";

const navigator = createStackNavigator({
    Home: HomeScreen,
    Beta: BetaScreen
}, {
    initialRouteName: "Home",
    defaultNavigationOptions: {
        title: "Bridge Landing Page"
    }
});

const App = createAppContainer(navigator);

export default () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

// For storybook:
// export { default } from './storybook';
