export function generateDisputeLetter(details: { plate: string; plaza: string }) {
  return `Dear Salik,\nI dispute a charge at ${details.plaza} for vehicle ${details.plate}.`;
}
