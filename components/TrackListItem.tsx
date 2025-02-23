import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
// import FastImage from "react-native-fast-image";
import { unknownTrackImageuri } from "@/constants/images";
import { defaultStyles } from "@/styles";
import { colors, fontSize } from "@/constants/tokens";

export type TrackListItemProps = {
  track: { title: string; image?: string; artist?: string };
};
export const TrackListItem = ({ track }: TrackListItemProps) => {
  const isActiveTrack = false;

  return (
    <TouchableHighlight>
      <View style={styles.trackItemContainer}>
        <View>
          <Image
            source={{
              uri: track.image ?? unknownTrackImageuri,
            }}
            style={{
              ...styles.trackArtWorkImage,
              opacity: isActiveTrack ? 0.6 : 1,
            }}
          />
        </View>
        <View style={{ width: "100%" }}>
          <Text
            numberOfLines={1}
            style={{
              ...styles.trackTitleText,
              color: isActiveTrack ? colors.primary : colors.text,
            }}
          >
            {track.title}
          </Text>
          {track.artist && (
            <Text
              numberOfLines={1}
              style={{ ...styles.trackArtistText, color: colors.text }}
            >
              {track.artist}
            </Text>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  trackArtWorkImage: {
    borderRadius: 8,
    width: 50,
    height: 50,
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: fontSize.sm,
    fontWeight: "600",
    maxWidth: "90%",
  },
  trackArtistText: {
    ...defaultStyles.text,
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 4,
  },
  trackItemContainer: {
    flexDirection: "row",
    columnGap: 14,
    alignItems: "center",
    paddingRight: 20,
  },
});
