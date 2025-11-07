import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_joinstyle";
import { HEROLOGO } from "@/constants";

export default function Join() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSubmit = () => {
    if (!fullName || !email || !password) {
      Alert.alert("Validation", "Please fill all required fields.");
      return;
    }
    if (password !== confirm) {
      Alert.alert("Validation", "Passwords do not match.");
      return;
    }

    // For this task we'll just show success and navigate back to index (or to signin)
    Alert.alert("Success", "Account created successfully.", [
      { text: "OK", onPress: () => router.push("/signin") },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.iconsection}>
        <Image source={HEROLOGO} style={{ width: 90, height: 45, resizeMode: "contain" }} />
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ color: "#34967C", fontSize: 16 }}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Create Account</Text>
        <Text style={styles.subText}>Sign up to start joining tournaments</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Full name</Text>
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholder="John Doe"
            style={styles.formControl}
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="email@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.formControl}
          />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              style={styles.passwordControl}
            />
          </View>
        </View>

        <View>
          <Text style={styles.formLabel}>Confirm password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput
              secureTextEntry
              value={confirm}
              onChangeText={setConfirm}
              placeholder="Confirm Password"
              style={styles.passwordControl}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={onSubmit}>
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/signin")}>
          <Text style={styles.signupSubTitleText}> Sign in</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
