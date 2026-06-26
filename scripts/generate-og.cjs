const sharp = require('sharp');
const path = require('path');

const W = 1200;
const H = 630;

// HUFS navy palette
const NAVY_900 = '#001A33';
const NAVY_800 = '#003876';
const ACCENT = '#2D6FE0';
const ACCENT_LIGHT = '#5B8AF0';

const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${NAVY_900}"/>
      <stop offset="60%" stop-color="${NAVY_800}"/>
      <stop offset="100%" stop-color="#1A4A8A"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${ACCENT}"/>
      <stop offset="100%" stop-color="${ACCENT_LIGHT}"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Decorative circles -->
  <circle cx="1050" cy="80" r="280" fill="${ACCENT}" opacity="0.05"/>
  <circle cx="1080" cy="50" r="180" fill="${ACCENT}" opacity="0.04"/>
  <circle cx="100" cy="600" r="200" fill="${ACCENT}" opacity="0.03"/>

  <!-- Grid pattern overlay -->
  <line x1="400" y1="0" x2="400" y2="${H}" stroke="white" stroke-width="0.3" opacity="0.04"/>
  <line x1="800" y1="0" x2="800" y2="${H}" stroke="white" stroke-width="0.3" opacity="0.04"/>
  <line x1="0" y1="210" x2="${W}" y2="210" stroke="white" stroke-width="0.3" opacity="0.04"/>
  <line x1="0" y1="420" x2="${W}" y2="420" stroke="white" stroke-width="0.3" opacity="0.04"/>

  <!-- Top-left branding eyebrow -->
  <rect x="72" y="60" width="32" height="3" fill="url(#accent)" rx="1"/>
  <text x="72" y="92" fill="${ACCENT_LIGHT}" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="3">한국외국어대학교 · DREAMIT BIZ</text>

  <!-- Main title -->
  <text x="72" y="240" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="900" letter-spacing="-1">HUFS</text>
  <text x="72" y="320" fill="white" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="900" letter-spacing="-1">Vibe Coding</text>

  <!-- Korean subtitle -->
  <text x="72" y="378" fill="rgba(255,255,255,0.78)" font-family="Arial, sans-serif" font-size="26" font-weight="400">대학 행정 실무를 위한 바이브 코딩 · Claude 기반</text>

  <!-- Accent line -->
  <rect x="72" y="408" width="100" height="4" fill="url(#accent)" rx="2"/>

  <!-- Bottom tags -->
  <rect x="72" y="468" width="150" height="38" rx="6" fill="rgba(45,111,224,0.18)" stroke="${ACCENT}" stroke-width="1"/>
  <text x="147" y="493" fill="${ACCENT_LIGHT}" font-family="Arial, sans-serif" font-size="14" font-weight="700" text-anchor="middle">Claude</text>

  <rect x="238" y="468" width="170" height="38" rx="6" fill="rgba(45,111,224,0.18)" stroke="${ACCENT}" stroke-width="1"/>
  <text x="323" y="493" fill="${ACCENT_LIGHT}" font-family="Arial, sans-serif" font-size="14" font-weight="700" text-anchor="middle">행정 자동화</text>

  <rect x="424" y="468" width="170" height="38" rx="6" fill="rgba(45,111,224,0.18)" stroke="${ACCENT}" stroke-width="1"/>
  <text x="509" y="493" fill="${ACCENT_LIGHT}" font-family="Arial, sans-serif" font-size="14" font-weight="700" text-anchor="middle">8시간 · 4H×2회</text>

  <!-- Bottom URL -->
  <text x="72" y="578" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="16" letter-spacing="1">hufs.dreamitbiz.com</text>

  <!-- Right side: large decorative letters -->
  <text x="820" y="520" fill="rgba(255,255,255,0.035)" font-family="Arial, Helvetica, sans-serif" font-size="300" font-weight="900">VC</text>

  <!-- Bottom accent bar -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="url(#accent)"/>
</svg>`;

(async () => {
  const outPath = path.join(__dirname, '..', 'public', 'og-image.png');
  await sharp(Buffer.from(svg))
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(outPath);

  const stats = require('fs').statSync(outPath);
  console.log(`OG image generated: ${outPath}`);
  console.log(`Size: ${(stats.size / 1024).toFixed(1)} KB`);
  console.log(`Dimensions: ${W}x${H}`);
})();
