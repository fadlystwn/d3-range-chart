import { legend } from "./d3-range-chart";

const vitaminData = [
  { key: 20, bottom: "TOO LOW", color: "#dc4437" },
  { key: [20, 40], bottom: "BORDERLINE", color: "#f5b400", active: 24.75 },
  { key: [40, 100], bottom: "NORMAL", color: "#109d58" },
  { key: [100], bottom: "HIGH", color: "#dc4437" }
];
const bloodRangeData = [
  { key: "", bottom: "", color: "#dc4437" },
  { key: "1.25", bottom: "7", color: "#109D58" },
  { key: "180", bottom: "6", color: "#F5B400" }
];

const BloodSugarData = [
  { key: "<60", bottom: "LOW", color: "#dc4437" },
  { key: "60-100", bottom: "NORMAL", color: "#109D58" },
  { key: ">100", bottom: "HIGH", color: "#dc4437" }
];

const liquidProfileData = [
  { key: "<60", color: "#dc4437" },
  { key: "60-100", color: "#109D58" },
  { key: ">100", color: "#dc4437" }
];

const vitaminOptions = {
  frameWidth: 150,
  frameHeight: 80,
  blockWidth: 80,
  blockHeight: 18,
  blockSpacing: 3,
  blockPosition: { x: 0, y: 10 },
  labelPosition: { x: 21, y: 8 },
  textPosition: { x: 16, y: 21 },
  tickerStep: 20,
  tickerValue: 24.75,
  blockTextColor: "#FFF",
  toolTip: true,
  tooltTipText: "YOU 24.75"
};

const bloodRangeOptions = {
  frameWidth: 150,
  frameHeight: 80,
  blockWidth: 145,
  blockHeight: 10,
  blockTextColor: "#FFF",
  tickerTop: true,
  bottomTickerTextY: 50,
  BottomTickerText: "YOU 24.75"
};

const bloodSugarOptions = {
  frameWidth: 128,
  frameHeight: 48,
  blockWidth: 80,
  blockHeight: 16,
  blockSpacing: 2,
  blockPosition: { x: 0, y: 10 },
  labelPosition: { x: 16, y: 8 },
  textPosition: { x: 16, y: 21 }
};

const liquidProfileOptions = {
  frameWidth: 128,
  frameHeight: 24,
  blockWidth: 120,
  blockHeight: 8,
  blockSpacing: 4,
  blockPotition: 4,
  textPosition: { x: 12, y: 8 }
};

window.addEventListener(
  "load",
  legend("#vitamin", vitaminData, vitaminOptions)
);

window.addEventListener(
  "load",
  legend("#bloodRange", bloodRangeData, bloodRangeOptions)
);
window.addEventListener(
  "load",
  legend("#bloodSugar", BloodSugarData, bloodSugarOptions)
);

// LIQUID PROFILE
window.addEventListener(
  "load",
  legend("#liquidProfile01", liquidProfileData, liquidProfileOptions)
);

window.addEventListener(
  "load",
  legend("#liquidProfile02", liquidProfileData, liquidProfileOptions)
);

window.addEventListener(
  "load",
  legend("#liquidProfile03", liquidProfileData, liquidProfileOptions)
);

window.addEventListener(
  "load",
  legend("#liquidProfile04", liquidProfileData, liquidProfileOptions)
);

window.addEventListener(
  "load",
  legend("#liquidProfile05", liquidProfileData, liquidProfileOptions)
);
