import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Share,
} from "react-native";
// import QRCode from "react-native-qrcode-svg";
import { contentData } from "../data";
import { Audio } from "expo-av";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

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
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  // 오디오 파일 미리 매핑
  const audioFiles = {
    0: require("assets/tts/tts_0.mp3"),
    1: require("assets/tts/tts_1.mp3"),
    2: require("assets/tts/tts_2.mp3"),
    3: require("assets/tts/tts_3.mp3"),
    4: require("assets/tts/tts_4.mp3"),
    5: require("assets/tts/tts_5.mp3"),
    6: require("assets/tts/tts_6.mp3"),
    7: require("assets/tts/tts_7.mp3"),
    8: require("assets/tts/tts_8.mp3"),
    9: require("assets/tts/tts_9.mp3"),
    10: require("assets/tts/tts_10.mp3"),
    11: require("assets/tts/tts_11.mp3"),
    12: require("assets/tts/tts_12.mp3"),
    13: require("assets/tts/tts_13.mp3"),
    14: require("assets/tts/tts_14.mp3"),
    15: require("assets/tts/tts_15.mp3"),
    16: require("assets/tts/tts_16.mp3"),
    17: require("assets/tts/tts_17.mp3"),
    18: require("assets/tts/tts_18.mp3"),
    19: require("assets/tts/tts_19.mp3"),
    20: require("assets/tts/tts_20.mp3"),
    21: require("assets/tts/tts_21.mp3"),
    22: require("assets/tts/tts_22.mp3"),
    23: require("assets/tts/tts_23.mp3"),
    24: require("assets/tts/tts_24.mp3"),
    25: require("assets/tts/tts_25.mp3"),
    26: require("assets/tts/tts_26.mp3"),
    27: require("assets/tts/tts_27.mp3"),
    28: require("assets/tts/tts_28.mp3"),
    29: require("assets/tts/tts_29.mp3"),
    30: require("assets/tts/tts_30.mp3"),
    31: require("assets/tts/tts_31.mp3"),
    32: require("assets/tts/tts_32.mp3"),
    33: require("assets/tts/tts_33.mp3"),
    34: require("assets/tts/tts_34.mp3"),
    35: require("assets/tts/tts_35.mp3"),
    36: require("assets/tts/tts_36.mp3"),
    37: require("assets/tts/tts_37.mp3"),
    38: require("assets/tts/tts_38.mp3"),
    39: require("assets/tts/tts_39.mp3"),
    40: require("assets/tts/tts_40.mp3"),
    41: require("assets/tts/tts_41.mp3"),
    42: require("assets/tts/tts_42.mp3"),
    43: require("assets/tts/tts_43.mp3"),
    44: require("assets/tts/tts_44.mp3"),
    45: require("assets/tts/tts_45.mp3"),
    46: require("assets/tts/tts_46.mp3"),
    47: require("assets/tts/tts_47.mp3"),
    48: require("assets/tts/tts_48.mp3"),
    49: require("assets/tts/tts_49.mp3"),
    50: require("assets/tts/tts_50.mp3"),
    51: require("assets/tts/tts_51.mp3"),
    52: require("assets/tts/tts_52.mp3"),
    53: require("assets/tts/tts_53.mp3"),
    54: require("assets/tts/tts_54.mp3"),
    55: require("assets/tts/tts_55.mp3"),
    56: require("assets/tts/tts_56.mp3"),
    57: require("assets/tts/tts_57.mp3"),
    58: require("assets/tts/tts_58.mp3"),
    59: require("assets/tts/tts_59.mp3"),
    60: require("assets/tts/tts_60.mp3"),
    61: require("assets/tts/tts_61.mp3"),
    62: require("assets/tts/tts_62.mp3"),
    63: require("assets/tts/tts_63.mp3"),
    64: require("assets/tts/tts_64.mp3"),
    65: require("assets/tts/tts_65.mp3"),
    66: require("assets/tts/tts_66.mp3"),
    67: require("assets/tts/tts_67.mp3"),
    68: require("assets/tts/tts_68.mp3"),
    69: require("assets/tts/tts_69.mp3"),
    70: require("assets/tts/tts_70.mp3"),
    71: require("assets/tts/tts_71.mp3"),
    72: require("assets/tts/tts_72.mp3"),
    73: require("assets/tts/tts_73.mp3"),
    74: require("assets/tts/tts_74.mp3"),
    75: require("assets/tts/tts_75.mp3"),
    76: require("assets/tts/tts_76.mp3"),
    77: require("assets/tts/tts_77.mp3"),
    78: require("assets/tts/tts_78.mp3"),
    79: require("assets/tts/tts_79.mp3"),
    80: require("assets/tts/tts_80.mp3"),
    81: require("assets/tts/tts_81.mp3"),
    82: require("assets/tts/tts_82.mp3"),
    83: require("assets/tts/tts_83.mp3"),
    84: require("assets/tts/tts_84.mp3"),
    85: require("assets/tts/tts_85.mp3"),
    86: require("assets/tts/tts_86.mp3"),
    87: require("assets/tts/tts_87.mp3"),
    88: require("assets/tts/tts_88.mp3"),
    89: require("assets/tts/tts_89.mp3"),
    90: require("assets/tts/tts_90.mp3"),
    91: require("assets/tts/tts_91.mp3"),
    92: require("assets/tts/tts_92.mp3"),
    93: require("assets/tts/tts_93.mp3"),
    94: require("assets/tts/tts_94.mp3"),
    95: require("assets/tts/tts_95.mp3"),
    96: require("assets/tts/tts_96.mp3"),
    97: require("assets/tts/tts_97.mp3"),
    98: require("assets/tts/tts_98.mp3"),
    99: require("assets/tts/tts_99.mp3"),
    100: require("assets/tts/tts_100.mp3"),
    101: require("assets/tts/tts_101.mp3"),
    102: require("assets/tts/tts_102.mp3"),
    103: require("assets/tts/tts_103.mp3"),
    104: require("assets/tts/tts_104.mp3"),
    105: require("assets/tts/tts_105.mp3"),
    106: require("assets/tts/tts_106.mp3"),
    107: require("assets/tts/tts_107.mp3"),
    108: require("assets/tts/tts_108.mp3"),
    109: require("assets/tts/tts_109.mp3"),
    110: require("assets/tts/tts_110.mp3"),
    111: require("assets/tts/tts_111.mp3"),
    112: require("assets/tts/tts_112.mp3"),
    113: require("assets/tts/tts_113.mp3"),
    114: require("assets/tts/tts_114.mp3"),
    115: require("assets/tts/tts_115.mp3"),
    116: require("assets/tts/tts_116.mp3"),
    117: require("assets/tts/tts_117.mp3"),
    118: require("assets/tts/tts_118.mp3"),
    119: require("assets/tts/tts_119.mp3"),
  };

  async function playSound(contentId) {
    const audioFile = audioFiles[contentId];
    if (audioFile) {
      const { sound } = await Audio.Sound.createAsync(audioFile);
      setSound(sound);
      await sound.playAsync();
    } else {
      console.error("Audio file not found for contentId:", contentId);
    }
  }

  async function loadSound(contentId, shouldPlay = false) {
    if (sound) {
      await sound.unloadAsync();
    }
    const audioFile = audioFiles[contentId];
    if (audioFile) {
      const { sound: newSound } = await Audio.Sound.createAsync(audioFile);
      setSound(newSound);
      newSound.setOnPlaybackStatusUpdate(updatePlaybackStatus);
      if (shouldPlay) {
        await newSound.playAsync();
      }
    } else {
      console.error("Audio file not found for contentId:", contentId);
    }
  }

  useEffect(() => {
    // 페이지를 벗어날 때 사운드를 정지하고 언로드
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const updatePlaybackStatus = (status) => {
    if (status.didJustFinish && !status.isLooping) {
      setIsPlaying(false);
      sound.unloadAsync();
    } else if (status.isPlaying) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const handlePlayPause = async () => {
    if (!sound) {
      await loadSound(contentId, true); // 사운드가 없으면 로드하고 재생
    } else {
      const status = await sound.getStatusAsync();
      if (status.isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
    }
  };

  const handleStop = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync(); // 정지 후 사운드 언로드
      setSound(null); // 사운드 인스턴스를 null로 설정하여 다음 재생을 위해 새로운 사운드를 로드할 준비
      setIsPlaying(false); // 재생 상태를 false로 설정
    }
  };

  const onShare = async () => {
    try {
      await Share.share({
        message: `공유하기 ${content}\n해석 정보: ${qrCodeUrl}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // 책 모양 아이콘 클릭 시 링크로 이동
  const openLink = () => {
    Linking.openURL(qrCodeUrl);
  };

  return (
    <View style={styles.container}>
      <View style={styles.audioControlContainer}>
        <TouchableOpacity onPress={handlePlayPause} style={{ marginRight: 20 }}>
          {isPlaying ? (
            <MaterialIcons name="pause" size={36} color="#88E83C" />
          ) : (
            <MaterialIcons name="play-arrow" size={36} color="#88E83C" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleStop}>
          <MaterialIcons name="stop" size={36} color="#88E83C" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={styles.content}>{content}</Text>
        {/* <TouchableOpacity onPress={() => Linking.openURL(qrCodeUrl)}>
          <QRCode value={qrCodeUrl} size={200} />
        </TouchableOpacity> */}
        {/* 책 모양의 아이콘을 통한 링크 이동 */}
        <View style={styles.iconContainer}>
          {/* 책 모양 아이콘 */}
          <TouchableOpacity onPress={openLink}>
            <MaterialCommunityIcons
              name="book-open-variant"
              size={48}
              color="#1B5410"
            />
          </TouchableOpacity>
          {/* 공유 아이콘 */}
          <TouchableOpacity onPress={onShare} style={{ marginLeft: 20 }}>
            <MaterialIcons name="share" size={48} color="#1B5410" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        {previousContentId !== null && (
          <TouchableOpacity
            style={{ ...styles.button, marginRight: 10 }}
            onPress={() =>
              navigation.navigate("Content", { contentId: previousContentId })
            }
          >
            <Text style={styles.buttonText}>이전</Text>
          </TouchableOpacity>
        )}
        {nextContentId !== null && (
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Content", { contentId: nextContentId })
            }
          >
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
    backgroundColor: "#fff",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#181677",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  audioControlContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10,
    paddingRight: 20,
    paddingTop: 10,
  },
});
