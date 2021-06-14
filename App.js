import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TestScreen from "./src/screens/TestScreen";

const navigator = createStackNavigator(
  {
    Test: TestScreen,
  },
  {
    initialRouteName: "Test",
    defaultNavigationOptions: {
      title: "Loocate",
    },
  }
);

export default createAppContainer(navigator);
