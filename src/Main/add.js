import React, {useState} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StatusBar,
  ToastAndroid,
  Alert,
  ImageBackground,
} from 'react-native';
import {ListItem, Body, CheckBox} from 'native-base';
import Logo from '../../Components/Logo/index';
import {firebaseApp} from '../../Middle/Api/Firebase/Firebase';

// icon
import IconAn from 'react-native-vector-icons/AntDesign';

// style
import styles from '../../Asset/Login';

const Login = props => {
  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState('');
  const [loading, setLoading] = useState(false);

  // login
  const onLogin = () => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.navigate('Home');
        setEmail('');
        setPassword('');
      })
      .catch(err => {
        console.log('err,', err);
        Alert.alert(
          'Login',
          'Đăng nhập thất bại!',
          [
            {
              text: 'Cancel',
              //onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => {}},
          ],
          {cancelable: false},
        );
      });
  };

  const onLoginFB = () => {
    Alert.alert('login on FB');
  };

  return (
    <ImageBackground
      source={require('../../../Images/anh-nen1.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.boxView}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          hidden={false}
          translucent={true}
        />
        <View style={{paddingLeft: 50, paddingRight: 50}}>
          <View style={{marginBottom: 20}}>
            <Logo />
          </View>

          <View>
            <KeyboardAvoidingView>
              <View style={styles.boxInput}>
                <IconAn
                  name={'user'}
                  size={25}
                  color={'#353131'}
                  style={{marginTop: 7}}
                />
                <TextInput
                  placeholder="User.."
                  style={styles.txtInput}
                  onChangeText={email => setEmail(email)}
                  value={email}
                />
              </View>
              <View style={styles.boxInput}>
                <IconAn
                  name={'unlock'}
                  size={25}
                  color={'#353131'}
                  style={{marginTop: 7}}
                />
                <TextInput
                  placeholder="Password.."
                  style={styles.txtInput}
                  secureTextEntry={true}
                  onChangeText={password => setPassword(password)}
                  value={password}
                />
              </View>
              <ListItem style={{borderBottomWidth: 0}}>
                <CheckBox
                  checked={false}
                  color="green"
                  style={styles.checkbox}
                />
                <Body>
                  <Text style={{color: '#3A403D'}}>Nhớ mật khẩu!</Text>
                </Body>
              </ListItem>
            </KeyboardAvoidingView>
            {/* <Text style={styles.error}>{error}</Text> */}
            <TouchableOpacity
              style={styles.boxTouchableOpacity}
              onPress={onLogin}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <IconAn name={'login'} size={20} color={'#353131'} />
                <Text style={styles.text}>Login</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.boxTouchableOpacityFB}
              onPress={onLoginFB}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <IconAn name={'facebook-square'} size={20} color={'#ffffff'} />
                <Text style={[styles.text, styles.colorWhite]}>Facebook</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.boxSignUp}>
              <Text style={styles.txtNotAccount}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('SignUp')}>
                <Text style={styles.textSignUp}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
// https://github.com/longbem/DownloadTruyen.git
