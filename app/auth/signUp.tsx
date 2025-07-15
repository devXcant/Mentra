import { auth, db } from "@/config/firebaseConfig";
import images from "@/constants/images";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string>();

  const CreateNewAccount = () => {
    createUserWithEmailAndPassword(auth, email!, password!).then(async(res) => {
      const user = res.user;
      console.log(user);
      await SavedUser(user)
    }).catch(e => {
      alert("Account creation failed" + e.message)
    })
  };

  const SavedUser = async (user:any) => {
    await setDoc(doc(db, "users", email!),{
      name: fullName,
      email: email,
      member: false,
      uid: user?.uid
    });
  };
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
            placeholder="Full Name"
            className="w-full border border-gray rounded-lg p-4 text-base"
            placeholderTextColor="#999"
            onChangeText={(value: any) => setFullName(value)}
          />
          <TextInput
            placeholder="Email"
            className="w-full border border-gray rounded-lg p-4 text-base"
            placeholderTextColor="#999"
            keyboardType="email-address"
            onChangeText={(value: any) => setEmail(value)}
          />
          <TextInput
            placeholder="Password"
            className="w-full border border-gray rounded-lg p-4 text-base"
            placeholderTextColor="#999"
            secureTextEntry
            onChangeText={(value: any) => setPassword(value)}
          />

          <TouchableOpacity
            onPress={CreateNewAccount}
            className="bg-primary rounded-xl p-4 mt-4"
          >
            <Text className="text-white text-center text-base font-satoshi-bold">
              Create Account
            </Text>
          </TouchableOpacity>

          <View className="flex flex-row justify-center mt-6">
            <Text className="text-gray text-base">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push("/auth/signIn")}>
              <Text className="text-primary text-base font-semibold ml-2">
                Sign in here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
