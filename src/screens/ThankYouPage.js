import React, { Component } from "react";
import styles from "../styles";
import { StackNavigator, NavigationActions } from "react-navigation";
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  Dimensions
} from "react-native";
import m4Logo from "./../assets/images/m4logo.png";
import rootsLogo from "./../assets/images/rootslogo.png";
import { MAIN_MENU_PAGE, RESULTS_PAGE } from "../constants";

class ThankYouPage extends Component {
  constructor() {
    super();
  }

  mainMenu() {
    const { navigate } = this.props.navigation;
    this.props.navigation.goBack("MainMenu");
    navigate(MAIN_MENU_PAGE);
  }

  // use this finalResults() method after the creation of the Results screen
  finalResults() {
    const { navigate, state } = this.props.navigation;
    const { questions, userAnswers, correctAnswers } = state.params;
    navigate(RESULTS_PAGE, { questions, userAnswers, correctAnswers });
  }

  render() {
    const { state } = this.props.navigation;
    const { width, height } = Dimensions.get("window");

    let textDevelopedBy = "";
    let textSponsoredBy = "";
    let thankYouPageButtonsView = "";

    if (width >= 768) {
      textDevelopedBy = styles.thankYouPageTextDevelopedByiPad;
      textSponsoredBy = styles.thankYouPageTextSponsoredByiPad;
      thankYouPageButtonsView = styles.thankYouPageButtons;
    } else {
      textDevelopedBy = styles.thankYouPageTextDevelopedByiPhone;
      textSponsoredBy = styles.thankYouPageTextSponsoredByiPhone;
      thankYouPageButtonsView = styles.thankYouPageButtons;
    }
    return (
      <View style={styles.thankYouPageView}>
        <Text style={[styles.headingThankYouPage, styles.myRaidFont]}>
          Thank you for playing!
        </Text>
        <Text style={[styles.textThankYouPage, styles.myRaidFont]}>
          To grow up healthy and strong try to have vegetables and fruit with
          every meal or snack! You can either view your results or go back to
          the main menu:
        </Text>

        <View style={thankYouPageButtonsView}>
          <TouchableHighlight
            style={styles.mainMenuButton}
            onPress={this.mainMenu.bind(this)}
          >
            <Text style={[styles.thankYouPageButtonText, styles.myRaidFont]}>
              Main Menu
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#ccc"
            style={styles.mainMenuButton}
            onPress={this.finalResults.bind(this)}
          >
            <Text style={[styles.thankYouPageButtonText, styles.myRaidFont]}>
              Final Results
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.thankYouPageImageText}>
          <Text style={[textDevelopedBy, styles.myRaidFont]}>
            Developed by:
          </Text>
          <Text style={[textSponsoredBy, styles.myRaidFont]}>
            Sponsored by:
          </Text>
        </View>
        <View style={styles.thankYouPageImages}>
          <Image style={styles.m4Logo} source={m4Logo} />
          <Image style={styles.rootsLogo} source={rootsLogo} />
        </View>
      </View>
    );
  }
}
export default ThankYouPage;
