export function logEvent(name: string, params?: Record<string, unknown>) {
  console.log('event', name, params);
}
