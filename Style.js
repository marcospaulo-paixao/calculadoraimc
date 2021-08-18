import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'; 

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: Constants.statusBarHeight
    },
    content: {
      flex: 1,
    },
    header: {
      backgroundColor: '#007aff',
      height: 75,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleHeader: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff'
    },
    body: {
      padding: 15,
      marginTop: 35
    },
    labelIntput: {
      fontSize: 20
    },
    input: {
      borderWidth: 2,
      borderRadius: 5,
      marginVertical: 10,
      padding: 10,
      borderColor: '#b3b3b3',
    },
    contentButton: {
      flex: 1,
      alignItems: 'center'
    },
    labelButton: {
      fontSize: 20,
      color: '#fff'
    },
    button: {
      backgroundColor: '#007aff',
      height: 50,
      width: 150,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    contentResult: {
      flex: 1,
      alignItems: 'center',
      marginTop: 50
    },
    labelResult: {
      fontSize: 50,
      marginTop: 50
    }
  });
  