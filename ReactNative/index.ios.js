/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

let image = require('./test.jpg')

import CodePush from 'react-native-code-push';

export default class FECodePushTest extends Component {

    componentDidMount() {
        CodePush.notifyAppReady();//为避免警告
        this.sync();
    }

    /** Update is downloaded silently, and applied on restart (recommended) */
    sync() {
        CodePush.sync(
            {},
            this.codePushStatusDidChange.bind(this),
            this.codePushDownloadDidProgress.bind(this)
        );
    }

    /** Update pops a confirmation dialog, and then immediately reboots the app */
    syncImmediate() {
        CodePush.sync(
            { installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: true },
            this.codePushStatusDidChange.bind(this),
            this.codePushDownloadDidProgress.bind(this)
        );
    }

    codePushDownloadDidProgress(progress) {
        console.log(progress);
    }

    codePushStatusDidChange(syncStatus) {
        switch(syncStatus) {
            case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
                console.log("Checking for update.");
                break;
            case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
                console.log("Downloading package.");
                break;
            case CodePush.SyncStatus.AWAITING_USER_ACTION:
                console.log("Awaiting user action.");
                break;
            case CodePush.SyncStatus.INSTALLING_UPDATE:
                console.log("Installing update.");
                break;
            case CodePush.SyncStatus.UP_TO_DATE:
                console.log("App up to date.");
                break;
            case CodePush.SyncStatus.UPDATE_IGNORED:
                console.log("Update cancelled by user.");
                break;
            case CodePush.SyncStatus.UPDATE_INSTALLED:
                console.log("Update installed and will be applied on restart.");
                break;
            case CodePush.SyncStatus.UNKNOWN_ERROR:
                console.log("An unknown error occurred.");
                break;
        }
    }

  render() {
      return (
          <View style={styles.container}>
              <Text style={styles.welcome}>
                  Welcome to CodePush!-FlyElephant
              </Text>
              <TouchableOpacity onPress={this.sync.bind(this)}>
                  <Text style={styles.syncButton}>Press for background sync</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.syncImmediate.bind(this)}>
                  <Text style={styles.syncButton}>Press for dialog-driven sync</Text>
              </TouchableOpacity>
              <Image style={styles.image} resizeMode={Image.resizeMode.contain} source={require("./test.jpg")}/>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        paddingTop: 50
    },
    image: {
        margin: 30,
        width: Dimensions.get("window").width - 100,
        height: 365 * (Dimensions.get("window").width - 100) / 651,
    },
    messages: {
        marginTop: 30,
        textAlign: "center",
    },
    restartToggleButton: {
        color: "blue",
        fontSize: 17
    },
    syncButton: {
        color: "green",
        fontSize: 17
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 20
    },
});

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };

FECodePushTest = CodePush(codePushOptions)(FECodePushTest);

AppRegistry.registerComponent('FECodePushTest', () => FECodePushTest);
