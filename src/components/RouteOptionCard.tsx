import React from 'react';
import { View, Text } from 'react-native';

export interface RouteOption {
  distanceKm: number;
  etaMinutes: number;
  salikAED: number;
}

export default function RouteOptionCard({ option }: { option: RouteOption }) {
  return (
    <View className="p-2">
      <Text>{`${option.distanceKm} km`}</Text>
      <Text>{`${option.etaMinutes} min`}</Text>
      <Text>{`${option.salikAED} AED`}</Text>
    </View>
  );
}
