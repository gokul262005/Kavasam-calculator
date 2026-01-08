
import { Translations } from './types';

export const translations: Record<'en' | 'ta', Translations> = {
  en: {
    title: "PADI Kavasam Calculator",
    subtitle: "Professional Metal Sheet Estimation",
    langToggle: "தமிழ்",
    unitLabel: "Select Measurement Unit",
    feet: "Feet",
    inches: "Inches",
    partsHeader: "PADI Kavasam Parts (3 Sides Calculation)",
    metalHeader: "Metal Sheet Details",
    height: "Height",
    width: "Width",
    sheetWeightLabel: "Weight per Sheet (kg)",
    pricePerKg: "Price per Kg (₹)",
    calculate: "Calculate Area & Price",
    save: "Save to History",
    results: "Calculation Results",
    totalArea: "Total Area (Sq.Ft)",
    sheetSize: "Sheet Size (4 × 4 ft)",
    sheetsReq: "Total Sheets Required",
    totalWeight: "Total Weight (kg)",
    totalPrice: "Total Price (₹)",
    history: "Calculation History",
    sendWhatsApp: "Send via WhatsApp",
    noHistory: "No history found",
    parts: {
      leftMandapam: "Left Side Mandapam",
      rightMandapam: "Right Side Mandapam",
      leftThoon: "Left Thoon",
      rightThoon: "Right Thoon",
      upMandapam: "Up Side Mandapam",
      keelaMandapam: "Keela Mandapam"
    }
  },
  ta: {
    title: "நிலை படி கவசம் கால்குலேட்டர்",
    subtitle: "உலோகத் தகடு மதிப்பீடு",
    langToggle: "English",
    unitLabel: "அளவீட்டு அலகைத் தேர்ந்தெடுக்கவும்",
    feet: "அடி (Feet)",
    inches: "அங்குலம் (Inches)",
    partsHeader: "படி கவசம் பாகங்கள் (3 பக்கங்கள் கணக்கீடு)",
    metalHeader: "உலோகத் தகடு விவரங்கள்",
    height: "உயரம்",
    width: "அகலம்",
    sheetWeightLabel: "ஒரு தகட்டின் எடை (கிலோ)",
    pricePerKg: "ஒரு கிலோ விலை (₹)",
    calculate: "கணக்கிடு",
    save: "வரலாற்றில் சேமி",
    results: "கணக்கீட்டு முடிவுகள்",
    totalArea: "மொத்தப் பரப்பளவு (ச.அடி)",
    sheetSize: "தகடு அளவு (4 × 4 அடி)",
    sheetsReq: "தேவையான மொத்தத் தகடுகள்",
    totalWeight: "மொத்த எடை (கிலோ)",
    totalPrice: "மொத்த விலை (₹)",
    history: "கணக்கீட்டு வரலாறு",
    sendWhatsApp: "வாட்ஸ்அப்பில் பகிர்க",
    noHistory: "வரலாறு எதுவும் இல்லை",
    parts: {
      leftMandapam: "இடது பக்க மண்டபம்",
      rightMandapam: "வலது பக்க மண்டபம்",
      leftThoon: "இடது தூண்",
      rightThoon: "வலது தூண்",
      upMandapam: "மேல் பக்க மண்டபம்",
      keelaMandapam: "கீழ் மண்டபம்"
    }
  }
};
