import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type {PropsWithChildren} from 'react';
export interface item {
    key: any | undefined;
    location:any | undefined;
  }
export type RootStackParamList = {
    modal:{item:item}|undefined;
    two: {item:item}| undefined;


};

export type modalProps = NativeStackScreenProps<RootStackParamList, 'modal'>;

export type twoProps = NativeStackScreenProps<RootStackParamList, 'two'>;

// export type ModalScreenNavigationProp = Props['navigation'];

// export type ModalScreenRouteProp = Props['route'];
// export function navigate(routeName, routeParams) {
//     navigationRef.current?.navigate(routeName, routeParams);
//   }