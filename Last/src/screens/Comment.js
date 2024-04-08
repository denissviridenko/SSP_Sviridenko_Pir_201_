import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../store/actions";

const CommentPage = ({ route }) => {
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();

  const postId = route.params.postId; // Предположим, что у вас есть параметр postId в route

  const comments = useSelector(
    (state) => state.comments.posts[postId]?.comments || []
  );

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      dispatch(addComment(route.params.postId, newComment)); // Передача postId из route.params
      setNewComment('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Отображение списка комментариев */}
      <View style={styles.commentsContainer}>
        {comments.map((comment, index) => (
          <View>
            <View style={styles.commentHeader}>
              <View style={styles.profileImageContainer}>
                <Image
                  source={route.params.profile}
                  style={styles.profileImage}
                />
              </View>
              <View style={styles.commentDetails}>
                <Text style={styles.commentName}>{route.params.name}</Text>
                <Text style={styles.commentTime}>1 mins ago</Text>
              </View>
            </View>
            <View key={index} style={styles.commentItem}>
              <Text>{comment}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.commentHeader}>
        <View style={styles.profileImageContainer}>
          <Image source={route.params.profile} style={styles.profileImage} />
        </View>
        <View style={styles.commentDetails}>
          <Text style={styles.commentName}>{route.params.name}</Text>
          <Text style={styles.commentTime}>1 mins ago</Text>
        </View>
      </View>
      <TextInput
        onChangeText={setNewComment}
        value={newComment}
        style={styles.input}
        placeholder="Комментарий..."
        multiline
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddComment}>
        <Text style={styles.addButtonText}>Добавить</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  commentsContainer: {
    marginBottom: 20,
  },
  commentItem: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
  profileImageContainer: {
    width: "20%",
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 13,
  },
  commentDetails: {
    width: "60%",
  },
  commentName: {
    fontSize: 14,
    color: "#044244",
  },
  commentTime: {
    fontSize: 12,
    color: "#9ca1a2",
  },
  input: {
    marginBottom: 20,
    borderRadius: 15,
    padding: 15,
    backgroundColor: "#e8e8e8",
  },
  addButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  addButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default CommentPage;
