import React, { Component } from "react";
import styles from "../styles";
import { NavigationActions } from "react-navigation";
import { Text, View, Image, TouchableHighlight, FlatList } from "react-native";
import data from "../constants";
import checkMark from "../assets/images/checkMark.png";
import xMark from "../assets/images/xmark.png";
import { MAIN_MENU_PAGE } from "../constants";

class Results extends Component {
  static navigationOptions = {
    title: "Results"
  };

  mainMenu() {
    const { navigate } = this.props.navigation;
    this.props.navigation.goBack("MainMenu");
    navigate(MAIN_MENU_PAGE);
  }

  componentWillMount() {
    const { state } = this.props.navigation;
    const { questions, userAnswers, correctAnswers } = state.params;

    const answersList = questions.reduce(function(
      answers,
      { question },
      index
    ) {
      let correctAnswerImage = xMark;
      if (userAnswers[index] === correctAnswers[index]) {
        correctAnswerImage = checkMark;
      }
      if (index < userAnswers.length)
        return [
          ...answers,
          {
            question,
            correctAnswerImage,
            userAnswer: userAnswers[index],
            correctAnswer: correctAnswers[index]
          }
        ];
      return answers;
    },
    []);

    const score = answersList.reduce(function(
      score,
      { userAnswer, correctAnswer }
    ) {
      if (userAnswer === correctAnswer) return score + 1;
      return score;
    },
    0);

    this.setState({ answersList, score });
  }

  render() {
    return (
      <View style={styles.quizView}>
        <Text style={[styles.textResultsPage, styles.myRaidFont]}>
          Final Score: {this.state.score} points
        </Text>
        <FlatList
          data={this.state.answersList}
          numColumns={1}
          style={styles.resultsFlatList}
          renderItem={({ item }) => (
            <View style={styles.resultsView}>
              <View style={styles.card}>
                <Text style={[styles.cardTitle, styles.myRaidFont]}>
                  {item.question}
                </Text>
                <View style={styles.nestedResultsView}>
                  <Image
                    style={styles.correctValue}
                    source={item.correctAnswerImage}
                  />
                  <View style={styles.cardContent}>
                    <Text style={styles.myRaidFont}>
                      You Answered: {item.userAnswer}
                    </Text>
                    <Text style={styles.myRaidFont}>
                      Correct Answer: {item.correctAnswer}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.question}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this.mainMenu.bind(this)}
        >
          <Text style={[styles.buttonText, styles.myRaidFont]}>Main Menu</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Results;
