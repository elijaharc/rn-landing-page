import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider as LocaleProvider } from "./src/context/LocaleContext";
import { Provider as UserProvider } from "./src/context/UserContext";
import HomeScreen from "./src/screens/HomeScreen";
import BetaScreen from "./src/screens/beta/BetaScreen";

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
        <LocaleProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </LocaleProvider>
    )
}

// For storybook:
// export { default } from './storybook';
