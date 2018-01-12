import React, { Component } from "react";
import Expo, { Font } from "expo";
import { StackNavigator } from "react-navigation";
import MainMenu from "./src/screens/MainMenu.js";
import Quiz from "./src/screens/Quiz.js";
import ThankYouPage from "./src/screens/ThankYouPage.js";
import Results from "./src/screens/Results.js";

const NavigationApp = StackNavigator(
  {
    MainMenu: { screen: MainMenu },
    Quiz: { screen: Quiz },
    ThankYouPage: { screen: ThankYouPage },
    Results: { screen: Results }
  },
  {
    navigationOptions: {
      headerStyle: {
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  }
);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  render() {
    return this.state.fontLoaded ? <NavigationApp /> : null;
  }

  async componentDidMount() {
    await Font.loadAsync({
      myraid: require("./src/assets/fonts/myraid.ttf")
    });

    this.setState({ fontLoaded: true });
  }
}
