import '../global.css';
// import { verifyInstallation } from 'nativewind';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text as RNText, ScrollView } from 'react-native';
import {
  AppButton,
  multiply,
  // AppButton,
  primitives,
  ui,
} from 'react-native-veekit-mobile-ui';
const { Button, Text: AppText, Input, KeyPad, Avatar, Tabs, ListItem, FileInput } = ui;
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
        <AppButton onPress={() => { }} className="bg-[green]">
          AppButton
        </AppButton>
        <Input.Input
          style={{ borderWidth: 5 }}
          className="border-red border-[green]"
        />
        {/* <ButtonWithContext.ButtonWithContext>
          <RNText>Great world</RNText>

        </ButtonWithContext.ButtonWithContext> */}
        {/* <Button variant="tonal">
          <AppText>Waw </AppText>
        </Button> */}
        <AppText color='success' size={9} weight='regular' highContrast classNames="bg-[purple] text-red-100">
          Alaro custom
        </AppText>


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
        <Avatar color="warning" initials="PP" size={2} />
        <View style={{ padding: 40, gap: 5 }}>

          <Button text='My Button SM ' size={'sm'} variant='solid' />
          <Button text='My Button MD ' size={'md'} variant='solid' />
          <Button text='My Button MD ' size={'lg'} variant='solid' />
          <Button text='My Button XL ' size={'xl'} variant='solid' />
          <Button text='My Button XL ' size={'2xl'} variant='solid' state='default' onPress={() => { console.log("issssok") }} />
        </View>
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
