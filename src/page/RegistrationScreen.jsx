import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      console.log(width);
      setDimensions(width);
    };
    const subscription = Dimensions.addEventListener("change", onChange);
    return () => subscription?.remove();
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/img/PhotoBG.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboard}
          >
            <View
              style={{
                ...styles.wrapper,
                paddingBottom: isShowKeyboard ? 32 : 78,
                width: dimensions,
              }}
            >
              <View style={styles.wrapperText}>
                <Text style={styles.text}>Регистрация</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Логин"
                onFocus={() => setIsShowKeyboard(true)}
                onTextInput={(value) =>
                  setState((prevState) => ({ ...prevState, userName: value }))
                }
                value={state.userName}
              />
              <TextInput
                style={styles.input}
                placeholder="Адрес электронной почты"
                onFocus={() => setIsShowKeyboard(true)}
                onTextInput={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
                value={state.email}
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                onFocus={() => setIsShowKeyboard(true)}
                onTextInput={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
                value={state.password}
              />

              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.7}
                onPress={keyboardHide}
              >
                <Text style={styles.textBtn}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <Text style={styles.textLogin}>Уже есть аккаунт? Войти</Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopStartRadius: 25,
  },
  wrapperText: {
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    letterSpacing: 0.01,
    marginBottom: 33,
    paddingTop: 92,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    height: 50,
    paddingLeft: 16,
    marginBottom: 16,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    marginTop: 27,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  keyboard: {
    flex: 1,
    justifyContent: "flex-end",
  },
  textLogin: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    marginTop: 16,
    textAlign: "center",
  },
});
