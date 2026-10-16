export const VIEWPORTS = Object.freeze([
  { width: 320, height: 812 },
  { width: 375, height: 812 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
]);
export const OVERFLOW_TOLERANCE = 1;
export const TEXT_CONTRAST = 4.5;
export const LARGE_TEXT_CONTRAST = 3;
export const LOADER_CODEPOINT_LIMIT = 8192;

export function contrastRatio(a, b) {
  const luminance = rgb => rgb.slice(0, 3).map(v => {
    const x = v / 255;
    return x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
  }).reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
  const x = luminance(a), y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

export function composite(fg, bg) {
  const a = fg[3] + bg[3] * (1 - fg[3]);
  return a === 0 ? [0, 0, 0, 0] : [
    ...fg.slice(0, 3).map((v, i) => (v * fg[3] + bg[i] * bg[3] * (1 - fg[3])) / a), a,
  ];
}

export function textThreshold(px, weight) {
  return px >= 24 || (px >= 18.66 && weight >= 700) ? LARGE_TEXT_CONTRAST : TEXT_CONTRAST;
}

export function aggregate(checks) {
  if (checks.some(c => c.status === 'FAIL')) return 'FAIL';
  if (checks.some(c => c.status === 'UNVERIFIED')) return 'UNVERIFIED';
  return 'PASS';
}

export function exitCode(status) {
  return status === 'FAIL' ? 1 : status === 'PASS' ? 0 : 2;
}
