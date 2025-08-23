import { httpsCallable } from 'firebase/functions';
import { functions } from './firebase';

export function callFunction<T, R>(name: string, data: T) {
  const fn = httpsCallable<T, R>(functions, name);
  return fn(data).then(res => res.data);
}
