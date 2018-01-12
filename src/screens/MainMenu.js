import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  AsyncStorage,
  View,
  Image,
  TouchableHighlight,
  StatusBar,
  Dimensions
} from "react-native";

import {
  QUIZ_PAGE,
  MINI_GAME,
  MAIN_GAME,
  MINI_GAME_DATA,
  MAIN_GAME_DATA
} from "../constants";
import { shuffleArray } from "../utils";
import styles from "../styles";
import mainGameData from "../constants";

import snowman from "./../assets/images/snowman.png";
import girl from "./../assets/images/girl.png";

import boywithcarrot from "./../assets/images/HKCC_boy_w_carrot.png";
import girlwithcelery from "./../assets/images/HKCC_girl_w_celery.png";

import logo from "./../assets/images/logo.png";

const asyncKey = "visitCount";

class MainMenu extends Component {
  constructor() {
    super();

    this.state = {};
    this.fetchCount();
  }

  static navigationOptions = {
    title: "Main Menu",
    header: null
  };

  async addVisitor() {
    try {
      this.setState(previousState => {
        return { visits: previousState.visits + 1 };
      });
      let newCount = this.state.visits;
      await AsyncStorage.setItem(asyncKey, newCount.toString());
    } catch (error) {}
  }

  async fetchCount() {
    try {
      const count = await AsyncStorage.getItem(asyncKey);
      count = Number(count);

      if (count !== null) {
        this.setState({ visits: count });
      }
    } catch (error) {}
  }

  startQuiz() {
    const { navigate } = this.props.navigation;
    navigate(QUIZ_PAGE, {
      indexValue: 0,
      userAnswers: [],
      questions: shuffleArray(MAIN_GAME_DATA),
      correctAnswers: [],
      quizType: MAIN_GAME
    });
    this.addVisitor();
  }

  startMiniGame() {
    const { navigate } = this.props.navigation;
    navigate(QUIZ_PAGE, {
      indexValue: 0,
      userAnswers: [],
      questions: shuffleArray(MINI_GAME_DATA),
      correctAnswers: [],
      quizType: MINI_GAME
    });
    this.addVisitor();
  }

  render() {
    const { width, height } = Dimensions.get("window");
    let heading = styles.headingiPad;

    if (width >= 768) {
      heading = styles.headingiPad;
    } else {
      heading = styles.headingiPhone;
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={[heading, styles.myRaidFont]}>
          Choose to Boost Veggies and Fruit
        </Text>
        <View style={styles.mainMenuQuizButtons}>
          <TouchableHighlight
            style={styles.mainMenuButton}
            onPress={this.startQuiz.bind(this)}
          >
            <Text style={[styles.buttonText, styles.myRaidFont]}>
              Start Quiz
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#ccc"
            style={styles.mainMenuButton}
            onPress={this.startMiniGame.bind(this)}
          >
            <Text style={[styles.buttonText, styles.myRaidFont]}>
              Play Bonus Game
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row1}>
          <Image style={styles.boywithcarrot} source={boywithcarrot} />
          <Image style={styles.girlwithcelery} source={girlwithcelery} />
        </View>
        <View style={styles.row2}>
          <Text style={[styles.count, styles.myRaidFont]}>
            Visits : {this.state.visits}
          </Text>
          <Image resizeMode="contain" style={styles.logo} source={logo} />
        </View>
      </View>
    );
  }
}
export default MainMenu;
