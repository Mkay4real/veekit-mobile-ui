/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import '../global.css';
// import { verifyInstallation } from 'nativewind';
import { useState, useEffect, type ReactNode, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text as RNText,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  AppButton,
  Avatar,
  Button,
  FileInput,
  ListItem,
  // AppButton,
  primitives,
  Tabs,
  Text as AppText,
  KeyPad,
  Dropdown,
  // ui,
} from 'react-native-veekit-mobile-ui';

import {
  multiply,
  Icon,
  Input,
  SearchInput,
  CodeInput,
  PinInputModal,
  type PinInputModalRef,
} from 'react-native-veekit-mobile-ui';
import type { SelectOption } from '../../src/types/SelectOption';
import type { InputHandler } from '../../src/types/InputHandler';

// const {
//   Button,
//   Text: AppText,
//   // Input: IInput,
//   // KeyPad,
//   Avatar,
//   Tabs,
//   ListItem,
//   FileInput,
// } = ui;
const { Slot } = primitives;

export default function App() {
  const [result, setResult] = useState<number | undefined>();
  const [value1, setValue1] = useState<string | undefined>();
  const [value2, setValue2] = useState<string | undefined>();
  const [value3, setValue3] = useState<string | undefined>();
  const [gender, setGender] = useState<string>('');
  const sampleModalRef = useRef<PinInputModalRef>(null);

  const selectRef = useRef<InputHandler>(null);

  const genders: SelectOption[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  // verifyInstallation();
  


  const displayResult = () => {
    if (result! > 0) {
      console.log('result: ', result);
    }
    setResult(0);
  };

  const showModal = () => {
    sampleModalRef?.current?.toggleModal();
  };

  const onSelect = (val:string) => {
    console.log('selected gender: ',val)
    setGender(val)
  }

  const checkGender = () => {
    selectRef?.current?.checkValidation()
  }

  useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  const tabs = [
    {
      label: 'Same Bank',
      content: <View style={{backgroundColor: 'red', padding: 40}} />,
    },
    {
      label: 'Other Banks',
      content: <View />,
    },
  ];

  useEffect(() => {
    displayResult();
  });


  return (
    <ScrollView contentContainerStyle={{ }}>
      <View style={{flex:1, flexGrow: 1, marginTop:100}}>
        <View style={styles.container}>
          <RNText>Result: {result}</RNText>
          <AppButton onPress={() => { }} className="bg-[green]">
            AppButton
          </AppButton>
          {/* <Input.Input
          style={{ borderWidth: 5 }}
          className="border-red border-[green]"
        /> */}
          {/* <ButtonWithContext.ButtonWithContext>
          <RNText>Great world</RNText>

        </ButtonWithContext.ButtonWithContext> */}
          {/* <Button variant="tonal">
          <AppText>Waw </AppText>
        </Button> */}
          <AppText color='success' size={9} weight='regular' highContrast className="bg-[purple] text-red-100">
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
          <KeyPad type='decimal'/>
          <Avatar color="warning" initials="PP" size={2} />
          <View style={{padding: 40, gap: 5}}>

            <Button text='My Button SM ' size={'sm'} variant='solid' />
            <Button text='My Button MD ' size={'md'} variant='solid' />
            <Button text='My Button MD ' size={'lg'} variant='solid' />
            <Button text='My Button XL ' size={'xl'} variant='solid' />
            <Button text='My Button XL ' size={'2xl'} variant='solid' state='default' onPress={() => { console.log("issssok"); }} />
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

        <Text style={styles.headerTitle}>Icons</Text>
        <Row>
          <View>
            <Text style={styles.sectionTitle}>SVG Icons</Text>
            <Row>
              <Icon iconType="svg" icon="search" color="red" />
              <Icon iconType="svg" icon="eye" color="red" />
              <Icon iconType="svg" icon="eye-off" color="red" />
            </Row>
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={styles.sectionTitle}>IonIcons</Text>
            <Row>
              <Icon iconType="IonIcons" icon="add" color="red" />
              <Icon iconType="IonIcons" icon="search" color="red" />
            </Row>
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={styles.sectionTitle}>MaterialCommunityIcons</Text>
            <Row>
              <Icon iconType="MaterialCommunityIcons" icon="airplane" color="red" />
              <Icon iconType="MaterialCommunityIcons" icon="bat" color="red" />
            </Row>
          </View>
        </Row>

        <Text style={[styles.headerTitle, {marginTop: 10}]}>Inputs</Text>
        <Row>
          <View style={{width: '100%'}}>
            <Input
              placeholder='Email address'
              value={value1}
              onChangeText={(t) => { setValue1(t); }}
            />
          </View>
        </Row>

        <Row>
          <View style={{width: '100%'}}>
            <SearchInput
              placeholder='Bank name, account name or account number'
             value={value2}
              onChange={setValue2}
            />

          </View>
        </Row>

        <Row>
          <View style={{width: '100%'}}>
            <Input
              placeholder='Password'
              secure={true}
              value={value3}
              onChange={setValue3}
            />

          </View>
        </Row>

        <Text style={[styles.headerTitle, {marginTop: 10}]}>Code input</Text>
        <Row>
          <View style={{width: '90%'}}>
            <CodeInput
            //onContinue={}
            />
          </View>
        </Row>
        <Text style={[styles.headerTitle, {marginTop: 10}]}>PIN input modal</Text>
        <Row>

          <View style={{width: '90%'}}>
            <TouchableOpacity
              onPress={showModal}
            >
              <Text style={styles.sectionTitle}>Click to toggle modal</Text>
            </TouchableOpacity>

          </View>
        </Row>

        <Text style={[styles.headerTitle, {marginTop: 10}]}>Dropdown</Text>
        <Row>
        <View style={{width: '100%', marginBottom:10}}>
          <Dropdown
           title='Select gender'
           validationRules='required'
           data={genders}
           value={gender}
           onSelected={onSelect}
           ref={selectRef}
          />
        </View>
          
        
        </Row>
        <Row>
        <Button text='Check gender' size={'sm'} variant='solid' onPress={checkGender} />
        </Row>



        {/*<Text className="text-red-100 bg-[green]">Result: {result}</Text>*/}

        <PinInputModal
          title='Enter your PIN'
          onClose={showModal}
          ref={sampleModalRef}
        />

      
      </View>
    </ScrollView>
  );

}

type RowProps = {
  children: ReactNode
}
const Row = (props: RowProps) => {
  return (
    <View style={{flexDirection: 'row', marginVertical: 5, padding: 5}}>
      {props.children}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  headerTitle: {
    marginTop: 2,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: '600'
  },
  sectionTitle: {
    marginTop: 2,

  }
});
