import React from 'react';
import { Banner } from 'react-native-paper';

interface Props {
  visible: boolean;
  message: string;
}

export default function AlertBanner({ visible, message }: Props) {
  return <Banner visible={visible}>{message}</Banner>;
}
