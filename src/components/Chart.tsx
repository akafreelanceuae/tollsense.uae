import React from 'react';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';

interface Props {
  data: { x: string; y: number }[];
}

export default function Chart({ data }: Props) {
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryBar data={data} />
    </VictoryChart>
  );
}
