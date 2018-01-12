import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  myRaidFont: {
    fontFamily: "myraid"
  },
  button: {
    height: 60,
    backgroundColor: "#fdc82f",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10
  },
  mainMenuButton: {
    height: 60,
    backgroundColor: "#fdc82f",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    width: width * 0.5
  },
  buttonText: {
    color: "#522398",
    fontSize: 30
  },
  headingiPad: {
    color: "#522398",
    fontSize: height * 0.14,
    marginBottom: 10,
    marginTop: 20,
    textAlign: "center",
    alignItems: "center",
    textShadowColor: "#fdc82f",
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 20
  },
  headingiPhone: {
    color: "#522398",
    fontSize: height * 0.1,
    marginBottom: 10,
    marginTop: 20,
    textAlign: "center",
    alignItems: "center",
    textShadowColor: "#fdc82f",
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 20
  },
  count: {
    color: "#522398",
    fontSize: height * 0.05
  },
  logo: {
    overflow: "visible",
    width: width * 0.5,
    height: height * 0.15
  },
  boywithcarrot: {
    overflow: "visible",
    height: height * 0.171,
    width: width * 0.25
  },
  girlwithcelery: {
    overflow: "visible",
    height: height * 0.22,
    width: width * 0.19
  },
  row1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  row2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingBottom: height * 0.01
  },
  quizImage: {
    width: width * 0.45,
    height: width * 0.45,
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    overflow: "visible"
  },
  quizHeadingText: {
    fontSize: height * 0.04,
    textAlign: "center",
    paddingBottom: height * 0.03,
    paddingTop: 10
  },
  quizView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  quizButtons: {
    height: height * 0.1,
    backgroundColor: "#fdc82f",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 10,
    width: width * 0.42,
    shadowColor: "#2f0e61",
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1
  },
  quizButtonsSelected: {
    backgroundColor: "#4E18A0"
  },
  quizButtonTextSelected: {
    color: "#FDC82F",
    fontSize: height * 0.028
  },
  quizButtonText: {
    color: "#522398",
    fontSize: height * 0.028
  },
  quizFlatList: {
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: height * 0.2,
    height: height * 0.25
  },
  mainMenuQuizButtons: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  container: {
    flex: 1
  },
  content: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  tabBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    width: 30
  },
  tabBarButton: {
    flex: 0
  },
  headingThankYouPage: {
    color: "#522398",
    fontSize: height * 0.045,
    marginBottom: 10,
    marginTop: height * 0.1,
    textAlign: "center",
    marginLeft: width * 0.15,
    marginRight: width * 0.15
  },
  textThankYouPage: {
    color: "#522398",
    fontSize: height * 0.038,
    alignItems: "center",
    textAlign: "center",
    paddingBottom: height * 0.045,
    marginLeft: width * 0.17,
    marginRight: width * 0.17
  },
  resultsHeaderText: {
    color: "#522398",
    fontSize: height * 0.028,
    justifyContent: "center",
    alignContent: "center"
  },
  resultsText: {
    fontWeight: "bold"
  },
  resultsFlatList: {
    flex: 1,
    flexDirection: "column"
  },
  textResultsPage: {
    color: "#522398",
    fontSize: height * 0.028,
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center"
  },
  correctValue: {
    alignSelf: "flex-start",
    height: height * 0.04,
    width: width * 0.06,
    marginRight: 8
  },
  resultsView: {
    width: width * 0.95,
    paddingBottom: 4,
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8
  },
  card: {
    paddingBottom: 16,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    borderRadius: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3
    }
  },
  cardTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold"
  },
  cardContent: {
    flex: 1
  },
  nestedResultsView: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 8,
    paddingTop: 8
  },
  rootsLogo: {
    height: height * 0.125,
    width: width * 0.125,
    overflow: "visible",
    marginRight: width * 0.08
  },
  m4Logo: {
    height: height * 0.1,
    width: width * 0.1,
    overflow: "visible",
    marginLeft: width * 0.31
  },
  thankYouPageImageText: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingTop: height * 0.11
  },
  thankYouPageImages: {
    flex: 1,
    width: width,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: height * 0.15
  },
  thankYouPageView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    height: height * 0.5
  },
  thankYouPageTextSponsoredByiPad: {
    color: "#522398",
    fontSize: height * 0.035
  },
  thankYouPageTextDevelopedByiPad: {
    color: "#522398",
    fontSize: height * 0.035,
    paddingLeft: width * 0.065
  },
  thankYouPageTextSponsoredByiPhone: {
    color: "#522398",
    fontSize: height * 0.035,
    paddingBottom: height * 0.085
  },
  thankYouPageTextDevelopedByiPhone: {
    color: "#522398",
    fontSize: height * 0.035,
    paddingBottom: height * 0.04
  },
  thankYouPageButtons: {
    alignItems: "center"
  },
  thankYouPageButtonText: {
    fontSize: height * 0.038,
    color: "#522398"
  }
});

export default styles;
