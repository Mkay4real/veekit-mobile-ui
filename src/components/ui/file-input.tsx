import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import DocumentPicker, { type DocumentPickerResponse } from 'react-native-document-picker';
import tw from '../../lib/tailwind';
import CloudIcon from '../../icons/cloud';
import TrashIcon from '../../icons/trash';

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
        // type: DocumentPicker.types.images,// acceptedFormats.map(format => DocumentPicker.types[format.toUpperCase()] || format),
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
    <View style={tw`w-full gap-2`}>
      <View style={tw`border-2 border-dashed border-gray-200 self-center max-w-[80%] rounded-lg p-6`}>
        {!selectedFile ? (
          <View style={tw`items-center gap-4`}>
              <CloudIcon />
           
            <TouchableOpacity
              onPress={handleFilePick}
              style={tw`bg-white border my-4 border-gray-300 rounded-lg px-6 py-2`}
            >
              <Text style={tw`text-gray-700 font-medium`}>Browse file</Text>
            </TouchableOpacity>
            <Text style={tw`text-gray-500 text-sm-body`}>
              Accepted file format: {acceptedFormats.join(', ').toUpperCase()}
            </Text>
          </View>
        ) : (
          <View style={tw`rounded-lg p-4 justify-between items-center`}>
            <View style={tw`items-center justify-center`}>
                <CloudIcon />
              {/* <Icon name="file-document" size={24} color="#4B5563" /> */}
              <View style={tw`items-center`}>
                <Text style={tw`text-gray-900 font-medium`}>
                  {selectedFile.name}
                </Text>
                <Text style={tw`text-gray-500 text-sm-body`}>
                  {(selectedFile.size || 0 / 1024).toFixed(0)}kb
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={handleDelete}
              style={tw`p-2 flex-row items-center`}
            >
                <TrashIcon />
              {/* <Icon name="delete" size={20} color="#EF4444" /> */}
              <Text  style={tw`text-dark-error9 text-sm-bold`}>  Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default FileInput;