import images from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-start px-6 pt-10">
        <Image
          source={images.logo}
          resizeMode="contain"
          className="w-36 h-36 mb-6"
        />

        <Text className="text-2xl font-satoshi-bold text-center mb-6">
          Create a New Account
        </Text>

        <View className="w-full flex gap-3 p-3">

          <TextInput
            placeholder="Email"
            className="w-full border border-gray rounded-lg p-4 text-base"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Password"
            className="w-full border border-gray rounded-lg p-4 text-base"
            placeholderTextColor="#999"
            secureTextEntry
          />

          <TouchableOpacity
            onPress={() => {}}
            className="bg-primary rounded-xl p-4 mt-4"
          >
            <Text className="text-white text-center text-base font-satoshi-bold">
             Sign in
            </Text>
          </TouchableOpacity>

          <View className="flex flex-row justify-center mt-6">
            <Text className="text-gray text-base">
              Dont have an account yet?
            </Text>
            <TouchableOpacity onPress={() => router.push("/auth/signUp")}>
              <Text className="text-primary text-base font-semibold ml-2">
                Create account here!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
