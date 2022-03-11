import * as React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Image, TextInput, View, Text, Button } from "react-native";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().required("A URL is required"),
  caption: Yup.string().max(
    200,
    "Caption has reached the maximum length of 200 characters"
  ),
});

const FormikPostUploader = () => {
  const placeholderImage = "https://via.placeholder.com/150";
  const [thumbnail, setThumbnail] = React.useState(placeholderImage);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values, actions) => {
        console.log(values, actions);
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <View
          style={{
            margin: 20,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderBottomColor: "#c0c0c0",
              marginBottom: 10,
              paddingBottom: 10,
            }}
          >
            <Image
              source={{ uri: thumbnail ? thumbnail : placeholderImage }}
              style={{ width: 100, height: 100, marginRight: 20 }}
            />
            <TextInput
              placeholder="Write a caption..."
              style={{ color: "white", fontSize: 20 }}
              placeholderTextColor="white"
              onChangeText={handleChange("caption")}
              onBlur={handleBlur("caption")}
              value={values.caption}
            />
          </View>
          <TextInput
          returnKeyType="send"
            onChange={(e) => setThumbnail(e.nativeEvent.text)}
            placeholder="Enter Image Url"
            style={{ color: "white" }}
            placeholderTextColor="white"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ color: "red", fontSize: 12 }}>
              {errors.imageUrl}
            </Text>
          )}
          <View style={{ marginTop: 10 }}>
            <Button
              title="Submit"
              onPress={handleSubmit}
              disabled={!isValid}
              color="success"
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
