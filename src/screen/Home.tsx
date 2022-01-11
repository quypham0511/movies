import React, {useState, useCallback} from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import validate from '../utility/validate'

const Home = () => {
  const PASS = '12345678'
  const [pass, setPass] = useState('12345678')
  const [rePass, setRePass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [errorCheckInputPass, setErrorCheckInputPass] = useState('')
  const [errorCheckInputNewPass, setErrorCheckInputNewPass] = useState('')
  const [errorCheckInputRePass, setErrorCheckInputREPass] = useState('')

  const handlePass = useCallback(() => {
    let errorMessageCheckInputPass = validate.isPassword(pass)
    let errorMessageCheckInputNewPass = validate.isPassword(newPass)
    let errorMessageCheckInputAuthPass = validate.isPassword(rePass)

    setErrorCheckInputPass(errorMessageCheckInputPass)
    setErrorCheckInputNewPass(errorMessageCheckInputNewPass)
    setErrorCheckInputREPass(errorMessageCheckInputAuthPass)

    if (newPass.trim() !== rePass.trim()) {
      //setErrorCheckInputNewPass('2 mat khau khong duoc trung nhau')
      setErrorCheckInputREPass('Mat khau nhap lai phai trung nhau')
      return
    }

    if (
      `${errorMessageCheckInputPass}${errorMessageCheckInputNewPass}${errorMessageCheckInputAuthPass}` ===
      ''
    ) {
      if (pass.toString().trim() !== PASS.trim()) {
        setErrorCheckInputPass('Hai mat khau khong dung ')
        return
      }
      Alert.alert('Cap nhat mat khau thanh cong')
    }
  }, [pass, rePass, newPass])

  const onChangeRePass = text => {
    setRePass(text)
  }

  const onChangePass = text => {
    setPass(text)
  }

  const onChangeNewPass = text => {
    setNewPass(text)
  }

  return (
    <SafeAreaView style={styles.wrapContainer}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />
      <LinearGradient
        colors={['#E73636', '#E0DADF', '#DD3838']}
        style={styles.linearGradient}
        end={{x: 3, y: 1}}
      />
      <LinearGradient
        colors={['#E73636', '#E0DADF']}
        style={styles.linear2Gradient}
        end={{x: 3, y: 1}}
      />

      <View style={styles.topComponent}>
        <Ionicons
          name='chevron-back-outline'
          size={32}
          color='white'
          style={styles.chevronIcon}
        />
        <Text style={styles.txtScreenName}>Đổi mật khẩu</Text>
        <Ionicons
          name='notifications-outline'
          size={32}
          color='white'
          style={styles.notificationIcon}
        />
      </View>

      <View style={styles.bodyComponent}>
        <Text style={styles.txtBox}>Mật khẩu</Text>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangePass}
          value={pass}
          //secureTextEntry={true}
        />
        {errorCheckInputPass?.length > 0 && (
          <Text style={styles.txtNotifycationPass}>{errorCheckInputPass}</Text>
        )}
        <Text style={styles.txtBox}>Mật khẩu mới</Text>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeNewPass}
          value={newPass}
          //secureTextEntry={true}
        />
        {errorCheckInputNewPass?.length > 0 && (
          <Text style={styles.txtNotifycationPass}>
            {errorCheckInputNewPass}
          </Text>
        )}
        <Text style={styles.txtBox}> Nhập lại mật khẩu</Text>
        <TextInput
          style={styles.txtInput}
          onChangeText={onChangeRePass}
          value={rePass}
          //secureTextEntry={true}
        />
        {errorCheckInputRePass?.length > 0 && (
          <Text style={styles.txtNotifycationPass}>
            {errorCheckInputRePass}
          </Text>
        )}
        <TouchableOpacity style={styles.txtOnButton} onPress={handlePass}>
          <View>
            <Text style={styles.txtChangInfo}>Xác nhận mật khẩu</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home
const styles = StyleSheet.create({
  wrapContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    width: 414,
    height: 868,
    left: 0,
    top: 0,
    justifyContent: 'center',
    backgroundColor: '#C62828',
  },
  topComponent: {
    width: 330,
    height: 30,
    position: 'absolute',
    top: 72,
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyComponent: {
    width: 414,
    height: 746,
    position: 'absolute',
    left: 0,
    top: 112,
    backgroundColor: '#F5E2E2',
  },
  txtInput: {
    width: 382,
    height: 40,
    borderWidth: 1,
    padding: 6,
    marginLeft: 5,
    marginTop: 10,
    borderStyle: 'solid',
    borderColor: '#A59898',
    borderRadius: 7,
  },
  txtOnButton: {
    width: 382,
    height: 40,
    borderWidth: 1,
    padding: 8,
    marginLeft: 5,
    marginTop: 22,
    borderStyle: 'solid',
    borderColor: '#A59898',
    borderRadius: 7,
    backgroundColor: '#F32A2A',
    alignItems: 'center',
  },
  txtBox: {
    marginLeft: 7,
    marginTop: 13,
    color: '#3346F3',
    fontSize: 15,
  },
  txtScreenName: {
    color: 'white',
    fontSize: 25,
  },
  txtChangInfo: {
    color: '#CDE0CE',
    fontSize: 17,
  },
  chevronIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  notificationIcon: {
    position: 'absolute',
    top: 0,
    left: 320,
  },
  linearGradient: {
    backgroundColor: '#E485B1',
    width: 177,
    height: 177,
    borderRadius: 120,
    position: 'absolute',
    top: -8,
    left: -47,
  },
  linear2Gradient: {
    width: 160,
    height: 160,
    borderRadius: 120,
    top: -40,
    left: 275,
    position: 'absolute',
  },
  txtNotifycationPass: {
    color: '#F32323CC',
    marginBottom: 12,
    fontSize: 14,
  },
})
