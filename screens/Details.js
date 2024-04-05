import React from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
  Platform
} from 'react-native';

import { COLORS, SIZES, assets, SHADOWS, FONTS } from '../constants';
import {
  CircleButton,
  RectButton,
  SubInfo,
  DetailsDesc,
  DetailsBid,
  FocusedStatusBar
} from '../components';

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: '100%', height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: '100%', height: '100%' }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={
        Platform.OS === 'android'
          ? getStatusBarHeight() + 10
          : getStatusBarHeight() + 10
      }
    />

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={
        Platform.OS === 'android'
          ? getStatusBarHeight() + 10
          : getStatusBarHeight() + 10
      }
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <View
      style={{
        flex: 1
      }}
    >
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      {/* BID ITEMS */}
      <FlatList
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </>
        )}
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
      />

      {/* BID BUTTON */}
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: SIZES.small - 4,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          zIndex: 1
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
    </View>
  );
};

export default Details;
