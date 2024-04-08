import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/Entypo";
import { FontAwesome } from "@expo/vector-icons";

export default class Posts extends React.Component {
  state = {
    liked: false,
    comment: false,
    textComment: "",
  };
  onLike = () => {
    this.setState({ liked: !this.state.liked });
  };

  onComment = () => {
    this.setState({ comment: !this.state.comment });
  };

  render() {
    const {
      name,
      profile,
      photo,
      postId,
      onPress,
      onPressComment,
      navigation,
    } = this.props;

    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 25,
            alignItems: "center",
          }}
        >
          <View style={{ width: "20%" }}>
            <Image
              source={profile}
              style={{
                width: 45,
                height: 45,
                borderRadius: 13,
              }}
            />
          </View>
          <View
            style={{
              width: "60%",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: "#044244",
              }}
            >
              {name}
            </Text>

            <Text
              style={{
                fontSize: 12,
                color: "#9ca1a2",
              }}
            >
              2 mins ago
            </Text>
          </View>
          <View
            style={{
              width: "20%",
              alignItems: "flex-end",
            }}
          >
            <Icon name="sound-mix" color="#044244" size={20} />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            paddingTop: 20,
          }}
        >
          <ImageBackground
            source={photo}
            style={{
              width: "100%",
              height: 220,
            }}
            imageStyle={{
              borderRadius: 30,
            }}
          >
            <View
              style={{
                height: "100%",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity
                onPress={onPress}
                style={{
                  marginBottom: 20,
                  borderRadius: 5,
                  padding: 5,
                  backgroundColor: "#e8e8e8",
                  marginRight: 10,
                }}
              >
                <Icon name="forward" color="#044244" size={20} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Comment", { name, profile, photo,postId })
                }
                style={{
                  marginBottom: 20,
                  borderRadius: 5,
                  padding: 5,
                  backgroundColor: "#e8e8e8",
                }}
              >
                <FontAwesome
                  name={this.state.comment === true ? "comment" : "comment-o"}
                  color={this.state.comment === true ? "#044244" : "#044244"}
                  size={20}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.onLike}
                style={{
                  marginBottom: 20,
                  borderRadius: 5,
                  padding: 5,
                  backgroundColor: "#e8e8e8",
                  marginLeft: 10,
                  marginRight: 20,
                }}
              >
                <Icon
                  name={this.state.liked === true ? "heart" : "heart-outlined"}
                  color={this.state.liked === true ? "red" : "#044244"}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        {this.state.comment ? (
          <>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 25,
                alignItems: "center",
              }}
            >
              <View style={{ width: "20%" }}>
                <Image
                  source={profile}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 13,
                  }}
                />
              </View>
              <View
                style={{
                  width: "60%",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#044244",
                  }}
                >
                  {name}
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    color: "#9ca1a2",
                  }}
                >
                  1 mins ago
                </Text>
              </View>
              <View
                style={{
                  width: "20%",
                  alignItems: "flex-end",
                }}
              ></View>
            </View>
            <TextInput
              onChangeText={(text) => this.setState({ textComment: text })}
              style={{
                marginBottom: 20,
                borderRadius: 15,
                padding: 15,
                backgroundColor: "#e8e8e8",
              }}
              placeholder="Коментарии..."
            ></TextInput>
          </>
        ) : null}
      </View>
    );
  }
}
