import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { contentData } from '../data';

function getContent(contentId) {
  return contentData[contentId].content;
}

function getQRCodeUrl(contentId) {
  return contentData[contentId].qrCodeUrl;
}

export default function ContentScreen({ route, navigation }) {
  const { contentId } = route.params;
  const content = getContent(contentId);
  const qrCodeUrl = getQRCodeUrl(contentId);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.content}>{content}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(qrCodeUrl)}>
          <QRCode value={qrCodeUrl} size={200} />
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>뒤로가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});