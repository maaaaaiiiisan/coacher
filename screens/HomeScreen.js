import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.welcomeImage}
          />
        </View>
        <View style={styles.loginForm}>
          <View>
            <Text style={styles.loginFormTitle}>EMAIL</Text>
            <TextInput style={styles.loginFormInput}></TextInput>
          </View>
          <View>
            <Text style={styles.loginFormTitle}>PASSWORD</Text>
            <TextInput style={styles.loginFormInput}></TextInput>
          </View>
        </View>
        <View>
          <Button
            title="SIGN IN"
            color="#efc61f"
            style={styles.SigninBtn}
          ></Button>

        </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#154d7d',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  loginForm: {
    textAlign: 'left',
    marginHorizontal: 50,
  },
  loginFormTitle: {
    fontSize: 17,
    color: 'white',
    lineHeight: 24,
    textAlign: 'left',
    marginBottom: 3,
  },
  loginFormInput: {
    fontSize: 15,
    textAlign: 'left',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 15,
    color: 'white',
    paddingHorizontal: 3,
  },
  SigninBtn: {
    backgroundColor: 'white',
    color: '#efc61f'
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
