import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

export default function NewsFeed({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ padding: 20, alignItems: "flex-start" }}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ fontSize: 16, color: "blue" }}>Back to Home</Text>
      </TouchableOpacity>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Latest News</Text>
        {}
        <ScrollView  showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Image
              source={require("../images/1.jpg")}
              style={{ width: 400, height: 350, borderRadius: 10 }}
            />
            <Text style={{ fontSize: 16, marginTop: 5 }}>Министерство природных ресурсов и охраны окружающей среды весной и осенью традиционно инициирует акции по наведению порядка на земле, благоустройству и озеленению населенных пунктов.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Image
              source={require("../images/2.jpg")}
              style={{ width: 400, height: 350, borderRadius: 10 }}
            />
            <Text style={{ fontSize: 16, marginTop: 5 }}>В эту субботу, 6 апреля, Минприроды проведет в Беларуси единый день озеленения.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Image
              source={require("../images/3.jpg")}
              style={{ width: 400, height: 350, borderRadius: 10 }}
            />
            <Text style={{ fontSize: 16, marginTop: 5 }}>Щучинская райинспекция приглашает предприятия и жителей Щучинского района принять активное участие в данном мероприятии и тем самым внести свою лепту в общее большое дело – сохранение природы родного края.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Image
              source={require("../images/4.jpg")}
              style={{ width: 400, height: 350, borderRadius: 10 }}
            />
            <Text style={{ fontSize: 16, marginTop: 5 }}>Охрана природы напоминает: в Беларуси за уничтожение краснокнижных растений грозит штраф до 30 базовых величин</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Image
              source={require("../images/5.jpg")}
              style={{ width: 400, height: 350, borderRadius: 10 }}
            />
            <Text style={{ fontSize: 16, marginTop: 5 }}>В Беларуси произрастает множество первоцветов, среди которых есть виды, включенные в Красную книгу. Соответственно, их сбор запрещен. К таковым относятся прострел луговой и раскрытый, фиалка топяная, медуница узколистная, черемша и другие виды редких и находящихся под угрозой исчезновения растений</Text>
          </TouchableOpacity>
          {}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
