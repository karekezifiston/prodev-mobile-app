import React from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { BACKGROUNDIMAGE, HEROLOGO, HEROLOGOGREEN } from "@/constants";
import { styles } from "@/styles/_mainstyle";

export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer} resizeMode="cover">
      <StatusBar barStyle="light-content" translucent />
      <View style={styles.logoContainer}>
        <Image source={HEROLOGO} style={{ width: 120, height: 60, resizeMode: "contain" }} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Welcome to The Chapters</Text>
        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>
            Join tournaments, meet other players and show your skills.
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 60 }}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonPrimary}
            onPress={() => router.push("/join")}
          >
            <Text style={styles.buttonPrimaryText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonSecondary}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.buttonSecondaryText}>Sign in</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonGroupSubText}>
          <Text style={{ color: "#fff" }}>Or continue with</Text>
        </View>

        <View style={{ marginTop: 18, paddingHorizontal: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "center", gap: 12 }}>
            <Image source={HEROLOGOGREEN} style={{ width: 44, height: 44, resizeMode: "contain" }} />
            {/* You can add GOOGLE/FACEBOOK images from constants if you want here */}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
