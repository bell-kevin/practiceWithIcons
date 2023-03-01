import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const Board = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.square}>
          <MaterialCommunityIcons name="open-source-initiative" size={50} color="#FFC300" />
        </View>
        <View style={styles.square}>
          <MaterialCommunityIcons name="ubuntu" size={50} color="#F44336" />
        </View>
        <View style={styles.square}>
          <MaterialCommunityIcons name="temperature-kelvin" size={50} color="#3F51B5" />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.square}>
          <Ionicons name="git-pull-request" size={50} color="#009688" />
        </View>
        <View style={styles.square}>
          <Ionicons name="logo-tux" size={50} color="#4CAF50" />
        </View>
        <View style={styles.square}>
          <MaterialCommunityIcons name="linux-mint" size={50} color="#673AB7" />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.square}>
          <MaterialCommunityIcons name="vlc" size={50} color="#FF5722" />
        </View>
        <View style={styles.square}>
          <MaterialCommunityIcons name="bike-fast" size={50} color="#795548" />
        </View>
        <View style={styles.square}>
          <Ionicons name="git-merge" size={50} color="#E91E63" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gainsboro',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  square: {
    width: 100,
    height: 100,
    margin: 5,
    padding: 10,
    borderWidth: 5,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default Board;
