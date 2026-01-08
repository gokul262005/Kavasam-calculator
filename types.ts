
export type Language = 'en' | 'ta';
export type Unit = 'feet' | 'inches';

export interface PadiPart {
  id: string;
  nameKey: keyof typeof import('./translations').translations['en']['parts'];
  height: string;
  width: string;
}

export interface MetalDetails {
  sheetWeight: string; // 10, 12, or 14
  pricePerKg: string;
}

export interface CalculationResult {
  id: string;
  timestamp: number;
  totalSqFt: number;
  totalSheets: number;
  totalWeight: number;
  totalPrice: number;
  unitUsed: Unit;
  parts: PadiPart[];
}

export interface Translations {
  title: string;
  subtitle: string;
  langToggle: string;
  unitLabel: string;
  feet: string;
  inches: string;
  partsHeader: string;
  metalHeader: string;
  height: string;
  width: string;
  sheetWeightLabel: string;
  pricePerKg: string;
  calculate: string;
  save: string;
  results: string;
  totalArea: string;
  sheetSize: string;
  sheetsReq: string;
  totalWeight: string;
  totalPrice: string;
  history: string;
  sendWhatsApp: string;
  noHistory: string;
  parts: {
    leftMandapam: string;
    rightMandapam: string;
    leftThoon: string;
    rightThoon: string;
    upMandapam: string;
    keelaMandapam: string;
  };
}
