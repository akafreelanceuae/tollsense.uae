import React from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { Button } from 'react-native-paper';

interface Props {
  onPick: (uri: string) => void;
}

export default function FilePicker({ onPick }: Props) {
  const pick = async () => {
    const res = await DocumentPicker.getDocumentAsync({});
    if (res.type === 'success') {
      onPick(res.uri);
    }
  };
  return <Button onPress={pick}>Pick File</Button>;
}
