import * as React from "react";
import * as Yup from "yup";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";

const SignupScreen = ({ navigation }) => {
  const SignupFormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required!"),
    userName: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required!"),
    password: Yup.string().min(6, "Password must be at least 6 characters"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.logoImage}
          source={require("../../assets/images/Instagram_icon.png")}
        />
      </View>
      <Formik
        initialValues={{ email: "", userName: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={SignupFormSchema}
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
                placeholder="Email"
                placeholderTextColor="gray"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <TextInput
                style={[
                  styles.formInput,
                  {
                    borderColor:
                      touched.userName && errors.userName ? "red" : "#ccc",
                  },
                ]}
                placeholder="Username"
                placeholderTextColor="gray"
                onChangeText={handleChange("userName")}
                onBlur={handleBlur("userName")}
                value={values.userName}
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
        <Text style={styles.signupText}>Already have an account? </Text>
        <TouchableOpacity
          style={{ padding: 0, margin: 0 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.signupTextBold}>Log In</Text>
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
    marginVertical: 6,
    padding: 10,
    backgroundColor: "#eee",
    color: "black",
    fontSize: 14,
  },
  formbtn: (isValid) => ({
    backgroundColor: isValid ? "#0095f6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
    marginTop: 30,
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

export default SignupScreen;
