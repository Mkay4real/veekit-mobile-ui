import '../global.css';
// import { verifyInstallation } from 'nativewind';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text as RNText, ScrollView } from 'react-native';
import {
  multiply,
  AppButton,
  primitives,
  ui,
} from 'react-native-veekit-mobile-ui';
// import { multiply, AppButton  } from 'react-native-veekit-mobile-ui';
const { Button, Text: UIText, Input, Button2, KeyPad, Avatar, Tabs, ListItem, FileInput } = ui;
const { Slot } = primitives;
export default function App() {
  const [result, setResult] = useState<number | undefined>();
  // verifyInstallation();

  useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  const tabs = [
    {
      label: 'Same Bank',
      content: <View style={{ backgroundColor: 'red', padding: 40 }} />,
    },
    {
      label: 'Other Banks',
      content: <View />,
    },
  ];

  return (
    <ScrollView contentContainerStyle={{ flex: 1, flexGrow: 1, paddingVertical: 50 }}>
      <View style={styles.container}>
        <RNText className="text-red-100 bg-[green]">Result: {result}</RNText>
        <AppButton onPress={() => { }} classNames="bg-[green]">
          AppButton
        </AppButton>
        <Button2 onPress={() => { }} classNames="bg-[green]">
          AppButton 2
        </Button2>
        <Input.Input
          style={{ borderWidth: 5 }}
          className="border-red border-[green]"
        />
        <Button.Button variant="tonal">
          <UIText.Text>Waw </UIText.Text>
        </Button.Button>
        <UIText.Text variant={'largeTitle'} className="bg-[purple]">
          Alaro custom
        </UIText.Text>

        <Slot.Pressable
          onPress={() => {
            console.log('Pressed111');
          }}
        >

          {/* <Text >Slot: {result}</Text> */}
          {/* The `onPress` prop is passed down to the `Pressable` */}
          {/* <Pressable /> */}
        </Slot.Pressable>
        {/* <KeyPad type="decimal" /> */}
        <Avatar color="warning" initials="PP" size={5} />
        <Tabs tabs={tabs} />

        <ListItem
          title="Chloe Olowo"
          subtitle="0903456798 | Vbank"
          leadingIcon={<Avatar initials='AO' />}
        />

        {/* <ListItem
          title="75MB Data for (24 hours)"
          subtitle="₦100.00"
          trailingIcon={<Avatar initials='AO' />}
        />

        <ListItem
          title="750MB Data for (7 days)"
          subtitle="₦500.00"
          order="reverse"
        /> */}

        <FileInput />

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});