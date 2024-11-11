/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

//import "../global.css"
import { useState, useEffect, type ReactNode, useRef } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { multiply, Icon, Input, SearchInput, CodeInput } from 'react-native-veekit-mobile-ui';
import   {PinInputModal, type PinInputModalRef } from '../../src/components/pinInputModal';

export default function App() {
  const [result, setResult] = useState<number | undefined>();
  const [value1, setValue1] = useState<string | undefined>();
  const [value2,setValue2] = useState<string | undefined>();
  const [value3,setValue3] = useState<string | undefined>();
  const sampleModalRef = useRef<PinInputModalRef>(null)

  const displayResult = () => {
    if(result! > 0){
      console.log('result: ',result)
    }
    setResult(0)
  }

  const showModal = () => {
    sampleModalRef?.current?.toggleModal()
  }


  useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  useEffect(() => {
    displayResult()
  })


  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerTitle}>Icons</Text>
        <Row>
          <View>
            <Text style={styles.sectionTitle}>SVG Icons</Text>
            <Row>
              <Icon iconType="svg" icon="search" color="red"/>
              <Icon iconType="svg" icon="eye" color="red"/>
              <Icon iconType="svg" icon="eye-off" color="red"/>
            </Row>
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={styles.sectionTitle}>IonIcons</Text>
            <Row>
              <Icon iconType="IonIcons" icon="add" color="red"/>
              <Icon iconType="IonIcons" icon="search" color="red"/>
            </Row>
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={styles.sectionTitle}>MaterialCommunityIcons</Text>
            <Row>
              <Icon iconType="MaterialCommunityIcons" icon="airplane" color="red"/>
              <Icon iconType="MaterialCommunityIcons" icon="bat" color="red"/>
            </Row>
          </View>
        </Row>

        <Text style={[styles.headerTitle,{marginTop: 10}]}>Inputs</Text>
        <Row>
         <View style={{width: '90%'}}>
            <Input 
              placeholder='Enter text here' 
              label='Text input'
              value={value1}
               onChangeText={(t) => {setValue1(t)}}
             />
          </View>
        </Row>

        <Row>
         <View style={{width: '90%'}}>
           <SearchInput
              placeholder='Enter text here' 
              label='Search input'
              value={value2}
              onChange={setValue2}
           />
  
          </View>
        </Row>

        <Row>
         <View style={{width: '90%'}}>
           <Input
              placeholder='Enter text here' 
              label='Password input'
              secure={true}  
              value={value3}
              onChange={setValue3}
           />
  
          </View>
        </Row>

        <Text style={[styles.headerTitle,{marginTop: 10}]}>PIN input</Text>
        <Row>
          <View style={{width: '90%'}}>
            <CodeInput
            //onContinue={}
            />
          </View> 
        </Row>
        <Text style={[styles.headerTitle,{marginTop: 10}]}>PIN input</Text>
        <Row>
        
         <View style={{width: '90%'}}>
           <TouchableOpacity
            onPress={showModal}
           >
             <Text style={styles.sectionTitle}>Click to toggle modal</Text>
           </TouchableOpacity>
  
          </View>
        </Row>
        

        
         {/*<Text className="text-red-100 bg-[green]">Result: {result}</Text>*/}

         <PinInputModal
          title='Enter your PIN'
          onClose={showModal}
          ref={sampleModalRef}
         />
      </ScrollView>
     
     
  );
}

type RowProps = {
  children: ReactNode
}
const Row = (props:RowProps) => {
  return (
    <View style={{flexDirection: 'row', marginVertical: 5,padding: 5}}>
      {props.children}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginTop: 100
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  headerTitle: {
    marginTop: 2,
    marginBottom: 5,
    fontSize:20,
    fontWeight: '600'
  },
  sectionTitle: {
    marginTop: 2,

  }
});
