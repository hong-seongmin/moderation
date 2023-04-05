import React, { useState, useEffect } from 'react';
import { View, Text, SectionList, TouchableOpacity, StyleSheet } from 'react-native';
import { contentData } from '../data';
import localStyles from './styles';



export default function IndexScreen({ navigation }) {
  const [index, setIndex] = useState([]);

  const generateIndexData = () => {
    let newIndexData = [];
  
    for (let i = 0; i < 120; i += 2) {
      newIndexData.push({
        title: contentData[`${i}`].title,
        data: [
          { id: `${i + 1}`, title: contentData[`${i + 1}`].title },
        ],
      });
    }
  
    return newIndexData;
  };
  
  useEffect(() => {
    setIndex(generateIndexData());
  }, []);
  




const renderSectionHeader = ({ section: { title, data } }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Content', { contentId: data[0].id - 1 })}>
    <Text style={styles.sectionHeader}>{title}</Text>
  </TouchableOpacity>
);


  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Content', { contentId: item.id })}>
      <Text style={styles.subTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={index}
        keyExtractor={(item) => item.id}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  item: {
    paddingVertical: 10,
  },
  subTitle: {
    fontSize: 16,
    marginLeft: 20,
  },
});
