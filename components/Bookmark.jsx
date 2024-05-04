import React from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Bookmark = ({ savedVideos, onPressVideo }) => {
  return (
    <SafeAreaView className="px-4 my-6 bg-primary h-full">
      <Text className="text-2xl text-white font-psemibold">Bookmark</Text>
      {savedVideos.length === 0 ? (
        <Text>No saved videos</Text>
      ) : (
        <FlatList
          data={savedVideos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onPressVideo(item)}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Image
                  source={{ uri: item.thumbnail }}
                  style={{ width: 50, height: 50, borderRadius: 5 }}
                />
                <Text style={{ marginLeft: 10 }}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Bookmark;
