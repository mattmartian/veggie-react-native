import React, { Component } from "react";
import {
  Alert,
  Image,
  Text,
  View,
  TouchableHighlight,
  FlatList
} from "react-native";
import styles from "../styles";
import { THANK_YOU_PAGE, QUIZ_PAGE, MINI_GAME, MAIN_GAME } from "../constants";

const maxQuestions = 10;
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Question ${navigation.state.params.indexValue + 1}`
  });

  answerValidation(answer, question) {
    const { navigate, state } = this.props.navigation;
    const {
      indexValue,
      questions,
      userAnswers,
      correctAnswers,
      quizType
    } = state.params;
    if (!answer) {
      return Alert.alert(
        `Try Again`,
        `Please select an answer before continuing`
      );
    } else if (answer === question.correctAnswer) {
      Alert.alert(
        `Amazing!`,
        `${question.correctAnswer} is the correct answer! ${
          quizType === MAIN_GAME ? `Did you know? ${question.fact}` : ``
        }`
      );
    } else {
      Alert.alert(
        `Nice try.`,
        `The actual answer is: ${question.correctAnswer}. ${
          quizType === MAIN_GAME ? `Did you know? ${question.fact}` : ``
        }`
      );
    }

    if (userAnswers.length >= maxQuestions - 1)
      return navigate(THANK_YOU_PAGE, {
        questions,
        userAnswers,
        correctAnswers
      });
    return navigate(QUIZ_PAGE, {
      indexValue: indexValue + 1,
      userAnswers: [...userAnswers, answer],
      questions: [...questions, question.question],
      correctAnswers: [...correctAnswers, question.correctAnswer],
      quizType
    });
  }

  render() {
    const { indexValue, questions } = this.props.navigation.state.params;

    const question = questions[indexValue];
    return (
      <View style={styles.quizView}>
        <Text
          style={[styles.quizHeadingText, styles.myRaidFont]}
          allowFontScaling
        >
          {question.question}
        </Text>

        <Image style={styles.quizImage} source={question.imageSrc} />

        <FlatList
          scrollEnabled={false}
          contentContainerStyle={styles.quizFlatList}
          numColumns={2}
          data={question.answers}
          extraData={this.state}
          renderItem={({ item }) => (
            <TouchableHighlight
              style={[
                styles.quizButtons,
                this.state.selectedAnswer === item && styles.quizButtonsSelected
              ]}
              onPress={() => {
                this.setState({ selectedAnswer: item });
              }}
            >
              <Text
                style={[
                  styles.quizButtonText,
                  styles.myRaidFont,
                  this.state.selectedAnswer === item &&
                    styles.quizButtonTextSelected
                ]}
              >
                {item}
              </Text>
            </TouchableHighlight>
          )}
          keyExtractor={item => item}
        />
        <TouchableHighlight
          style={styles.quizButtons}
          onPress={() => {
            this.answerValidation(this.state.selectedAnswer, question);
          }}
        >
          <Text style={[styles.quizButtonText, styles.myRaidFont]}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Quiz;
