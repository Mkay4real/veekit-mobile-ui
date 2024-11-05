import "../global.css"
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { multiply } from 'react-native-veekit-mobile-ui';

export default function App() {
  const [result, setResult] = useState<number | undefined>();

  useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text 
      // className="text-red-100 bg-[green]"
      >Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
