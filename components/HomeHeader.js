import { View, Text, Image, TextInput } from 'react-native';
import { COLORS, SIZE, SHADOWS, assets, SIZES, FONTS } from '../constants';

const HomeHeader = ({ onSearch, ...props }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font
      }}
    >
      {/* HEADER */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          ...props
        }}
      >
        {/* logo */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Image
            source={assets.logo2}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30
            }}
          />
          <Text
            style={{
              color: COLORS.white,
              fontFamily: FONTS.bold,
              fontSize: SIZES.medium,
              marginLeft: 5
            }}
          >
            CONSULTING
          </Text>
        </View>

        {/* profile pic */}
        <View
          style={{
            width: 45,
            height: 45
          }}
        >
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%'
            }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: 'absolute',
              width: 15,
              height: 15,
              bottom: 0,
              right: 0
            }}
          />
        </View>
      </View>

      {/* GREETING */}
      <View
        style={{
          marginVertical: SIZES.font
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white
          }}
        >
          Hello, Austine 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2
          }}
        >
          Let's find a masterpiece
        </Text>
      </View>

      <View
        style={{
          marginTop: SIZES.font
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
            width: '100%',
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20
            }}
          />
          <TextInput
            placeholder="Search NFTs"
            style={{
              flex: 1,
              marginLeft: SIZES.base / 2
            }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
