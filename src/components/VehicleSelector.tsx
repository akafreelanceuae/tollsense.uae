import React from 'react';
import { Picker } from '@react-native-picker/picker';

export interface VehicleOption {
  id: string;
  label: string;
}

interface Props {
  vehicles: VehicleOption[];
  value: string;
  onChange: (id: string) => void;
}

export default function VehicleSelector({ vehicles, value, onChange }: Props) {
  return (
    <Picker selectedValue={value} onValueChange={onChange}>
      {vehicles.map(v => (
        <Picker.Item key={v.id} label={v.label} value={v.id} />
      ))}
    </Picker>
  );
}
