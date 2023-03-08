import { Text } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, SafeAreaView } from 'react-native'

// import { SafeAreaView } from 'react-native-safe-area-context'
type IProps = NativeStackScreenProps<RoutesProp, 'about'>;

export default ({ navigation }: IProps) => {
  // const navigation = useNavigation<RoutesProp>()

  const goHome = () => {
    // navigation.navigate('home')
    navigation.push('home')
  }

  return (
    <SafeAreaView>
      <Text>about</Text>
      <Button
        title="Go to home"
        onPress={() =>
          // navigation.navigate('home')
          navigation.goBack()
          // navigation.navigate('about', { userId: 1 })
        }
      />
    </SafeAreaView>
  )
}