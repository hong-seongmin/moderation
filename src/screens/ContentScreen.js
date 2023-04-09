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

const contentDataLength = Object.keys(contentData).length;

function getPreviousContentId(contentId) {
  return contentId > 0 ? contentId - 1 : null;
}

function getNextContentId(contentId) {
  return contentId < contentDataLength - 1 ? contentId + 1 : null;
}

export default function ContentScreen({ route, navigation }) {
  const { contentId } = route.params;
  const content = getContent(contentId);
  const qrCodeUrl = getQRCodeUrl(contentId);
  const previousContentId = getPreviousContentId(contentId);
  const nextContentId = getNextContentId(contentId);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.content}>{content}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(qrCodeUrl)}>
          <QRCode value={qrCodeUrl} size={200} />
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.buttonContainer}>
        {previousContentId !== null && (
          <TouchableOpacity
            style={{ ...styles.button, marginRight: 10 }}
            onPress={() => navigation.navigate('Content', { contentId: previousContentId })}>
            <Text style={styles.buttonText}>이전</Text>
          </TouchableOpacity>
        )}
        {nextContentId !== null && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Content', { contentId: nextContentId })}>
            <Text style={styles.buttonText}>다음</Text>
          </TouchableOpacity>
        )}
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
    backgroundColor: '#181677',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#88E83C',
    fontSize: 16,
  },
});

