import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoModuleTest.web.ts
// and on native platforms to ExpoModuleTest.ts
import ExpoModuleTestModule from './ExpoModuleTestModule';
import ExpoModuleTestView from './ExpoModuleTestView';
import { ChangeEventPayload, ExpoModuleTestViewProps } from './ExpoModuleTest.types';

// Get the native constant value.
export const PI = ExpoModuleTestModule.PI;

export function hello(): string {
  return ExpoModuleTestModule.hello();
}

export function initialize(): string {
  return ExpoModuleTestModule.initialize();
}

export function loadAd(): string {
  return ExpoModuleTestModule.loadAd();
}

export async function setValueAsync(value: string) {
  return await ExpoModuleTestModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoModuleTestModule ?? NativeModulesProxy.ExpoModuleTest);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoModuleTestView, ExpoModuleTestViewProps, ChangeEventPayload };
