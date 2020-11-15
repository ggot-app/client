import * as React from 'react';
import { Button, StyleSheet, Image, View } from 'react-native';

export default function MyPage({ navigation }) {
  return (
    <View>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99D8E6495DF3A01901'
          }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 200 / 2
          }}
        />
      </View>
      <View style={styles.middleContainer}>
        {/* <Button
          title='내 꽂'
          onPress={() => }
        />
        <Button
          title='남 꽂'
          onPress={() => }
        /> */}
      </View>
      <View stye={styles.bottomContainer}>
        {/* <Button
          title='로그아웃'
          onPress={() => }
        /> */}
        {/* <Button
          title='회원탈퇴'
          onPress={() => }
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
  middleContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
  }
})
