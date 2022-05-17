import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
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

export default createAppContainer(navigator);

// For storybook:
// export { default } from './storybook';
