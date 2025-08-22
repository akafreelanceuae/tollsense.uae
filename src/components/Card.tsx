import React from 'react';
import { Card as PaperCard } from 'react-native-paper';

export default function Card(props: React.ComponentProps<typeof PaperCard>) {
  return <PaperCard {...props} />;
}
