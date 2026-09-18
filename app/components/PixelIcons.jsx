/**
 * True low-res pixel icons as SVG grids (crisp with image-rendering).
 * Colors adapt via CSS currentColor where useful.
 */

function PixelSvg({ size = 16, children, label }) {
  return (
    <svg
      className="pixel-icon-svg"
      width={size * 3}
      height={size * 3}
      viewBox={`0 0 ${size} ${size}`}
      shapeRendering="crispEdges"
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
    >
      {children}
    </svg>
  );
}

function Px({ x, y, fill }) {
  return <rect x={x} y={y} width={1} height={1} fill={fill} />;
}

/** Official Ironman M-Dot: circle head above stylized M body */
export function IronmanPixel() {
  const red = '#ed1c24';
  // Circle "head" centered above the M
  const head = [
    [7, 1], [8, 1],
    [6, 2], [7, 2], [8, 2], [9, 2],
    [6, 3], [7, 3], [8, 3], [9, 3],
    [7, 4], [8, 4],
  ];
  // Gap at y=5, then M body
  // Thick outer stems + inner V that stops above the baseline
  const body = [
    // left stem
    [3, 6], [4, 6],
    [3, 7], [4, 7],
    [3, 8], [4, 8],
    [3, 9], [4, 9],
    [3, 10], [4, 10],
    [3, 11], [4, 11],
    [3, 12], [4, 12],
    [3, 13], [4, 13],
    [3, 14], [4, 14],
    // right stem
    [11, 6], [12, 6],
    [11, 7], [12, 7],
    [11, 8], [12, 8],
    [11, 9], [12, 9],
    [11, 10], [12, 10],
    [11, 11], [12, 11],
    [11, 12], [12, 12],
    [11, 13], [12, 13],
    [11, 14], [12, 14],
    // top bridge of M
    [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6],
    [5, 7], [10, 7],
    // descending V
    [5, 8], [6, 8], [9, 8], [10, 8],
    [6, 9], [7, 9], [8, 9], [9, 9],
    [7, 10], [8, 10],
    [7, 11], [8, 11],
  ];
  return (
    <PixelSvg size={16} label="Ironman">
      {[...head, ...body].map(([x, y], i) => (
        <Px key={i} x={x} y={y} fill={red} />
      ))}
    </PixelSvg>
  );
}

/** Vinyl record */
export function RecordPixel() {
  const black = '#1a1a1a';
  const groove = '#3a3a3a';
  const label = '#c5e0b8';
  const hole = '#1a2e1a';
  const ring = (cx, cy, r, fill) => {
    const pts = [];
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const d = Math.hypot(x + 0.5 - cx, y + 0.5 - cy);
        if (Math.abs(d - r) < 0.55) pts.push([x, y, fill]);
      }
    }
    return pts;
  };
  const fillDisk = (cx, cy, r, fill) => {
    const pts = [];
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        if (Math.hypot(x + 0.5 - cx, y + 0.5 - cy) <= r) pts.push([x, y, fill]);
      }
    }
    return pts;
  };
  const pixels = [
    ...fillDisk(8, 8, 7.2, black),
    ...ring(8, 8, 5.5, groove),
    ...ring(8, 8, 4.2, groove),
    ...fillDisk(8, 8, 2.4, label),
    ...fillDisk(8, 8, 0.9, hole),
  ];
  return (
    <PixelSvg size={16} label="Vinyl record">
      {pixels.map(([x, y, fill], i) => (
        <Px key={i} x={x} y={y} fill={fill} />
      ))}
    </PixelSvg>
  );
}

/** Soccer ball */
export function SoccerPixel() {
  const white = '#f2f2f2';
  const black = '#1a1a1a';
  const outline = [];
  // filled circle white
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      if (Math.hypot(x + 0.5 - 8, y + 0.5 - 8) <= 7) outline.push([x, y, white]);
    }
  }
  // center pentagon-ish + patches
  const blackPatches = [
    [7, 3], [8, 3], [6, 4], [7, 4], [8, 4], [9, 4], [7, 5], [8, 5],
    [3, 7], [4, 7], [3, 8], [4, 8], [4, 9],
    [11, 7], [12, 7], [11, 8], [12, 8], [11, 9],
    [6, 10], [7, 10], [8, 10], [9, 10], [5, 11], [6, 11], [9, 11], [10, 11], [7, 12], [8, 12],
  ];
  // outline ring
  const edge = [];
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const d = Math.hypot(x + 0.5 - 8, y + 0.5 - 8);
      if (d > 6.2 && d <= 7.2) edge.push([x, y, black]);
    }
  }
  const pixels = [...outline, ...edge, ...blackPatches.map(([x, y]) => [x, y, black])];
  return (
    <PixelSvg size={16} label="Soccer ball">
      {pixels.map(([x, y, fill], i) => (
        <Px key={i} x={x} y={y} fill={fill} />
      ))}
    </PixelSvg>
  );
}

/** Open book for reading */
export function BookPixel() {
  const cover = '#3a5c32';
  const page = '#eaf2e6';
  const line = '#849e7c';
  const cells = [
    // left cover
    ...[3, 4, 5, 6, 7, 8, 9, 10, 11].flatMap((y) => [[2, y, cover], [3, y, page], [4, y, page], [5, y, page], [6, y, page]]),
    // spine
    ...[3, 4, 5, 6, 7, 8, 9, 10, 11].map((y) => [7, y, cover]),
    // right cover
    ...[3, 4, 5, 6, 7, 8, 9, 10, 11].flatMap((y) => [[8, y, page], [9, y, page], [10, y, page], [11, y, page], [12, y, cover]]),
    // text lines
    [3, 5, line], [4, 5, line], [5, 5, line],
    [3, 7, line], [4, 7, line], [5, 7, line],
    [3, 9, line], [4, 9, line],
    [9, 5, line], [10, 5, line], [11, 5, line],
    [9, 7, line], [10, 7, line], [11, 7, line],
    [9, 9, line], [10, 9, line],
  ];
  return (
    <PixelSvg size={16} label="Book">
      {cells.map(([x, y, fill], i) => (
        <Px key={i} x={x} y={y} fill={fill} />
      ))}
    </PixelSvg>
  );
}

/** Pixel Earth globe for traveling */
export function TravelPixel() {
  const ocean = '#2a6fbf';
  const oceanDeep = '#1e4f8c';
  const land = '#3d9e4f';
  const landDark = '#2d7a3c';
  const ice = '#e8f4fc';
  const edge = '#0f2a4a';

  // Hand-placed land pixels (Americas left, Eurasia/Africa right, ice caps)
  const landCells = new Set([
    // North America
    '4,4', '5,4', '4,5', '5,5', '6,5', '4,6', '5,6', '3,6', '4,7', '5,7',
    // South America
    '5,8', '5,9', '6,9', '5,10', '6,10', '5,11',
    // Europe / N Africa
    '8,4', '9,4', '8,5', '9,5', '10,5', '8,6', '9,6',
    // Africa
    '8,7', '9,7', '8,8', '9,8', '9,9', '9,10',
    // Asia
    '10,4', '11,4', '12,4', '10,5', '11,5', '12,5', '11,6', '12,6',
    '10,6', '11,7', '12,7',
    // Australia
    '11,10', '12,10', '11,11',
  ]);
  const iceCells = new Set([
    '6,2', '7,2', '8,2', '9,2',
    '6,3', '7,3', '8,3',
    '6,13', '7,13', '8,13', '9,13',
    '7,14', '8,14',
  ]);
  const darkLand = new Set([
    '4,7', '5,10', '9,9', '11,7', '12,6',
  ]);

  const pixels = [];
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const d = Math.hypot(x + 0.5 - 8, y + 0.5 - 8);
      if (d > 7.2) continue;
      if (d > 6.55) {
        pixels.push([x, y, edge]);
        continue;
      }
      const key = `${x},${y}`;
      if (iceCells.has(key)) {
        pixels.push([x, y, ice]);
      } else if (landCells.has(key)) {
        pixels.push([x, y, darkLand.has(key) ? landDark : land]);
      } else {
        // slight depth on left edge of globe
        const shade = x < 5 ? oceanDeep : ocean;
        pixels.push([x, y, shade]);
      }
    }
  }
  return (
    <PixelSvg size={16} label="Earth">
      {pixels.map(([x, y, fill], i) => (
        <Px key={i} x={x} y={y} fill={fill} />
      ))}
    </PixelSvg>
  );
}

/** Pixel spark for other pursuits */
export function PursuitsPixel() {
  const fill = 'currentColor';
  const cells = [
    // center spark
    [7, 2], [8, 2],
    [7, 3], [8, 3],
    [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 5],
    [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6], [11, 6],
    [7, 7], [8, 7],
    [7, 8], [8, 8],
    [7, 9], [8, 9],
    [7, 10], [8, 10],
    // diagonal tips
    [3, 3], [4, 4],
    [12, 3], [11, 4],
    [3, 12], [4, 11],
    [12, 12], [11, 11],
    [2, 7], [3, 7], [12, 7], [13, 7],
  ];
  return (
    <PixelSvg size={16} label="Other pursuits">
      {cells.map(([x, y], i) => (
        <Px key={i} x={x} y={y} fill={fill} />
      ))}
    </PixelSvg>
  );
}

