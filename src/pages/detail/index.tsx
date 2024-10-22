import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Detail () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='detail'>
      <Text>Hello world!</Text>
    </View>
  )
}
