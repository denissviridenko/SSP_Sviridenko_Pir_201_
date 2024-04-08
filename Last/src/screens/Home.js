import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView, TextInput } from "react-native";
import Icon from "@expo/vector-icons/Entypo";
import Posts from "../screens/Posts";
import styles from "./styles";

export default function Home({ navigation }) {
  const [popularSelected, setPopularSelected] = React.useState(true);

  const onTabPressed = () => {
    setPopularSelected(!popularSelected);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollViewContainer}
    >
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Contacts")}
            style={styles.settingsContainer}
          >
            <Image
              source={require("../images/Untitled.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={styles.settingsText}>Contacts</Text>
          </TouchableOpacity>
          {/* Добавляем кнопку для перехода на страницу с новостной лентой */}
          <TouchableOpacity
            onPress={() => navigation.navigate("NewsFeed")}
            style={styles.settingsContainer}
          >
            <Text style={styles.settingsText}>News Feed</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Find Awesome Photos</Text>

        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="search inspiration ..."
            style={styles.searchBarInput}
          />
          <Icon name="magnifying-glass" size={15} color="#9ca1a2" />
        </View>
      </View>

      <View style={styles.scrollViewContent}>
        <View style={styles.style1}>
          <View style={{ flexDirection: "row", paddingTop: 20 }}>
            <TouchableOpacity
              onPress={onTabPressed}
              style={{
                borderBottomColor: popularSelected ? "#044244" : "#FFF",
                borderBottomWidth: 4,
                paddingVertical: 6,
              }}
            >
              <Text
                style={{
                  color: popularSelected ? "#044244" : "#9ca1a2",
                }}
              >
                MOST POPULAR
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onTabPressed}
              style={{
                borderBottomColor: popularSelected ? "#FFF" : "#044244",
                borderBottomWidth: 4,
                paddingVertical: 6,
                marginLeft: 30,
              }}
            >
              <Text
                style={{
                  color: popularSelected ? "#9ca1a2" : "#044244",
                }}
              >
                RECENT
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Posts
              onPress={() => navigation.navigate("Detail")}
              name="Max Bator"
              profile={require("../images/p1.jpg")}
              photo={require("../images/5.jpg")}
              navigation={navigation}
              postId={0}
            />
            <View style={styles.style4}></View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.style5}></View>
            <Posts
              onPress={() => navigation.navigate("Detail")}
              name="Erka Berka"
              profile={require("../images/p2.jpg")}
              photo={require("../images/6.jpg")}
              navigation={navigation}
              postId={1}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <Posts
              onPress={() => navigation.navigate("Detail")}
              name="Max Bator"
              profile={require("../images/p1.jpg")}
              photo={require("../images/3.jpg")}
              navigation={navigation}
              postId={2}
            />
            <View style={styles.style6}></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
