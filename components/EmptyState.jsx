import { View, Image, Text } from 'react-native';
import CustomButton from './CustomButton';

import { images } from '../constants';
import { router } from 'expo-router';

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[125px]"
        resizeMode="contain"
      />

      <Text className="font-psemibold text-xl mt-2 text-center text-white">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>

      <CustomButton
        title="Create video"
        handlePress={() => router.push('/create')}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
