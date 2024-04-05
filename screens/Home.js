import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, Text, Platform } from 'react-native';

import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* STATUS BAR */}
      <FocusedStatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />

      {/* CONTAINER */}
      <View style={{ flex: 1 }}>
        {/* NFT-list */}
        <View style={{ zIndex: 0 }}>
          <FlatList
            ListHeaderComponent={
              <HomeHeader
                marginTop={
                  Platform.OS === 'android'
                    ? getStatusBarHeight() - 10
                    : getStatusBarHeight() + 10
                }
              />
            }
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>

        {/* CONTAINER BACKGROUND -zIndex */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1
          }}
        >
          {/* SECTION-A  */}
          <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
          {/* SECTION-B */}
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>
        {/* CONTAINER BACKGROUND -zIndex */}
      </View>
    </View>
  );
};

export default Home;
