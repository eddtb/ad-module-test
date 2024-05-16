import * as React from 'react';

import { ExpoModuleTestViewProps } from './ExpoModuleTest.types';

export default function ExpoModuleTestView(props: ExpoModuleTestViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
