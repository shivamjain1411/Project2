import { FlatList, FlatListProps, StyleSheet, Text, View } from "react-native";
import React from "react";
import library from "../assets/data/library.json";
import { TrackListItem } from "./TrackListItem";

export type TracksListProps = Partial<FlatListProps<unknown>>;

export const TracksList = ({ ...flatlistProps }: TracksListProps) => {
  return (
    <FlatList
      contentContainerStyle={{ zIndex: -1, marginTop: 100 }}
      data={library}
      renderItem={({ item }: any) => (
        <TrackListItem
          track={{
            ...item,
            image: item.artwork,
          }}
        />
      )}
      {...flatlistProps}
    />
  );
};
