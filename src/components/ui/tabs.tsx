import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from '../../lib/tailwind';

interface TabProps {
  tabs: { label: string; content: React.ReactNode }[];
}

const Tab: React.FC<TabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };

  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-row w-full px-2 pt-3 border-gray-200 border rounded-lg`}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={tw`flex-1 py-2 px-2 items-center ${
              activeTab === index
                ? 'border-b-2 border-gray-900 text-gray-900 text-sm-bold'
                : 'text-gray-400'
            }`}
            onPress={() => handleTabPress(index)}
          >
            <Text style={tw`${activeTab === index? 'text-gray-900':'text-gray-400'}`} >{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={tw`flex-1 bg-white p-6`}>{tabs[activeTab]?.content}</View>
    </View>
  );
};

export default Tab;
