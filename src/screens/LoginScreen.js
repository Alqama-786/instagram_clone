import * as React from "react";
import * as Yup from "yup";
import {
  Alert,
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";

const LoginScreen = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required!"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required!"),
  });

  const handleLogin = async (values) => {
    try {
      const { email, password } = values;
    } catch (error) {
      Alert.alert(error.message);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.logoImage}
          source={require("../../assets/images/Instagram_icon.png")}
        />
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          handleLogin(values);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => {
          return (
            <View style={styles.form}>
              <TextInput
                style={[
                  styles.formInput,
                  {
                    borderColor: touched.email && errors.email ? "red" : "#ccc",
                  },
                ]}
                placeholder="Phone number, username or email"
                placeholderTextColor="gray"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoFocus={true}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                style={[
                  styles.formInput,
                  {
                    borderColor:
                      touched.password && errors.password ? "red" : "#ccc",
                  },
                ]}
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <Text style={styles.formText}>Forgot password?</Text>
              <TouchableOpacity
                style={styles.formbtn(isValid)}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                <Text style={styles.formbtnText}>Log In</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
      <View style={styles.signup}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity
          style={{ padding: 0, margin: 0 }}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.signupTextBold}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 35,
    height: "100%",
  },
  logo: {
    marginVertical: 60,
  },
  logoImage: {
    width: 80,
    height: 80,
  },
  form: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  formInput: {
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#eee",
    color: "black",
    fontSize: 14,
  },
  formText: {
    color: "#0095f6",
    fontSize: 14,
    textAlign: "right",
    marginBottom: 16,
  },
  formbtn: (isValid) => ({
    backgroundColor: isValid ? "#0095f6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  formbtnText: {
    fontWeight: "600",
    color: "white",
    fontSize: 20,
  },
  signup: {
    marginTop: 40,
    flexDirection: "row",
  },
  signupText: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
  },
  signupTextBold: {
    fontWeight: "bold",
    color: "#0095f6",
  },
});

export default LoginScreen;
