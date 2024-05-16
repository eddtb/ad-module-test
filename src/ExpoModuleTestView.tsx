import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoModuleTestViewProps } from './ExpoModuleTest.types';

const NativeView: React.ComponentType<ExpoModuleTestViewProps> =
  requireNativeViewManager('ExpoModuleTest');

export default function ExpoModuleTestView(props: ExpoModuleTestViewProps) {
  return <NativeView {...props} />;
}
