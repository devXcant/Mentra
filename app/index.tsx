import images from "@/constants/images";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <Image
          source={images.landing}
          className="w-full h-[300px] mt-[70px]"
          resizeMode="cover"
        />

        <View className="flex-1 justify-around p-6 bg-primary rounded-t-[35px] -mt-[35px] -mb-10">
          <View>
            <Text className="text-[30px] font-bold text-center text-white">
              Welcome to Mentra Course
            </Text>
            <Text className="text-[20px] text-white mt-5 text-center font-satoshi">
              Transform your ideas into engaging educational content,
              effortlessly with AI!
            </Text>
          </View>

          <View className="space-y-4 mt-10">
            <TouchableOpacity className="bg-white py-4 rounded-xl">
              <Text className="text-primary text-center text-base font-bold">
                Get Started
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="py-4">
              <Text className="text-white text-center text-base font-satoshi">
                Already have an account?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
