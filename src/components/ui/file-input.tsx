import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import DocumentPicker, { type DocumentPickerResponse } from 'react-native-document-picker';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from '../../lib/tailwind';

interface FileInputProps {
  onFileSelect?: (file: DocumentPickerResponse | null) => void;
  acceptedFormats?: string[];
  maxSize?: number; // in bytes
}

const FileInput: React.FC<FileInputProps> = ({
  onFileSelect,
  acceptedFormats = ['jpg', 'png', 'pdf'],
  maxSize = 5 * 1024 * 1024, // 5MB default
}) => {
  const [selectedFile, setSelectedFile] = useState<DocumentPickerResponse | null>(null);

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.pick({
        //@ts-ignore 
        type: acceptedFormats.map(format => DocumentPicker.types[format.toUpperCase()] || format),
        copyTo: 'cachesDirectory',
      });
      const file = result[0] || null;
      // Check file size
      if (file && file.size && file.size > maxSize) {
        Alert.alert('File too large', 'Please select a smaller file');
        return;
      }
      setSelectedFile(file);
      onFileSelect?.(file);
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        Alert.alert('Error', 'Failed to pick file');
      }
    }
  };

  const handleDelete = () => {
    setSelectedFile(null);
    onFileSelect?.(null);
  };

  return (
    <View style={tw`w-full space-y-2`}>
      <Text style={tw`text-purple-600 text-lg font-semibold`}>
        {/* <Icon name="upload" size={20} color="#9333EA" /> */}
        Upload Document
      </Text>
      <View style={tw`border-2 border-dashed border-gray-200 rounded-lg p-6`}>
        {!selectedFile ? (
          <View style={tw`items-center space-y-4`}>
            <View style={tw`bg-purple-50 p-4 rounded-full`}>
              {/* <Icon name="cloud-upload" size={32} color="#9333EA" /> */}
            </View>
            <TouchableOpacity
              onPress={handleFilePick}
              style={tw`bg-white border border-gray-300 rounded-lg px-6 py-2`}
            >
              <Text style={tw`text-gray-700 font-medium`}>Browse file</Text>
            </TouchableOpacity>
            <Text style={tw`text-gray-500 text-sm`}>
              Accepted file format: {acceptedFormats.join(', ').toUpperCase()}
            </Text>
          </View>
        ) : (
          <View style={tw`bg-gray-50 rounded-lg p-4 flex-row justify-between items-center`}>
            <View style={tw`flex-row items-center flex-1`}>
              {/* <Icon name="file-document" size={24} color="#4B5563" /> */}
              <View style={tw`ml-3`}>
                <Text style={tw`text-gray-900 font-medium`}>
                  {selectedFile.name}
                </Text>
                <Text style={tw`text-gray-500 text-sm`}>
                  {(selectedFile.size || 0 / 1024).toFixed(0)}kb
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={handleDelete}
              style={tw`p-2`}
            >
              {/* <Icon name="delete" size={20} color="#EF4444" /> */}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default FileInput;