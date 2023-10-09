import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const videos = [
  { id: 1, url: 'https://www.youtube.com/watch?v=tAGnKpE4NCI' },
  { id: 2, url: 'https://www.youtube.com/watch?v=8JPtxtSK-Cs' },
  { id: 3, url: 'https://www.youtube.com/watch?v=SBjQ9tuuTJQ' },
];

const VideoPlayer = () => {
  const renderItem = ({ item }) => (
    <View style={styles.videoContainer}>
      <WebView source={{ uri: item.url }} style={styles.video} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Videos de Youtube</Text>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: 390,
    height: 280,
    margin: 10,
  },
  video: {
    flex: 1,
    backgroundColor: "blue",
  },
  titulo: {
    color: "red",
    fontSize: 30,
    fontWeight:"bold",
    backgroundColor: "black",
    width: "100%",
    textAlign: "center"
  },
});

export default VideoPlayer;
