function PixelSvg({ size = 16, children }) {
  return (
    <svg
      className="pixel-note-svg"
      width={size * 2.5}
      height={size * 2.5}
      viewBox={`0 0 ${size} ${size}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function Px({ x, y, fill = 'currentColor' }) {
  return <rect x={x} y={y} width={1} height={1} fill={fill} />;
}

function coinFace(metal, face) {
  const pixels = [];
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const d = Math.hypot(x + 0.5 - 8, y + 0.5 - 8);
      if (d > 7.0) continue;
      if (d > 5.6) pixels.push([x, y, metal]);
      else pixels.push([x, y, face]);
    }
  }
  return pixels;
}

/** LinkedIn blue token — star */
function TokenStar() {
  const base = coinFace('#0a66c2', '#3b8ddd');
  const stamp = [
    [7, 4], [8, 4],
    [7, 5], [8, 5],
    [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6],
    [6, 7], [7, 7], [8, 7], [9, 7],
    [7, 8], [8, 8],
    [6, 9], [7, 9], [8, 9], [9, 9],
    [5, 10], [6, 10], [9, 10], [10, 10],
  ];
  const ink = '#062f5c';
  return (
    <PixelSvg>
      {base.map(([x, y, fill], i) => (
        <Px key={`b${i}`} x={x} y={y} fill={fill} />
      ))}
      {stamp.map(([x, y], i) => (
        <Px key={`s${i}`} x={x} y={y} fill={ink} />
      ))}
    </PixelSvg>
  );
}

/** GitHub silver token — diamond */
function TokenDiamond() {
  const base = coinFace('#b8c4d0', '#d5dde6');
  const stamp = [
    [7, 4], [8, 4],
    [6, 5], [7, 5], [8, 5], [9, 5],
    [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6],
    [5, 7], [6, 7], [9, 7], [10, 7],
    [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8],
    [6, 9], [7, 9], [8, 9], [9, 9],
    [7, 10], [8, 10],
  ];
  const ink = '#2c3640';
  return (
    <PixelSvg>
      {base.map(([x, y, fill], i) => (
        <Px key={`b${i}`} x={x} y={y} fill={fill} />
      ))}
      {stamp.map(([x, y], i) => (
        <Px key={`s${i}`} x={x} y={y} fill={ink} />
      ))}
    </PixelSvg>
  );
}

/** Gmail yellow token — lightning */
function TokenBolt() {
  const base = coinFace('#f4c430', '#ffe066');
  const stamp = [
    [8, 3], [9, 3],
    [7, 4], [8, 4],
    [6, 5], [7, 5],
    [5, 6], [6, 6], [7, 6], [8, 6], [9, 6],
    [7, 7], [8, 7], [9, 7],
    [8, 8], [9, 8],
    [7, 9], [8, 9],
    [6, 10], [7, 10],
    [5, 11], [6, 11],
  ];
  const ink = '#6b4e00';
  return (
    <PixelSvg>
      {base.map(([x, y, fill], i) => (
        <Px key={`b${i}`} x={x} y={y} fill={fill} />
      ))}
      {stamp.map(([x, y], i) => (
        <Px key={`s${i}`} x={x} y={y} fill={ink} />
      ))}
    </PixelSvg>
  );
}

/** Substack orange token — 1UP mushroom */
function TokenOneUp() {
  const base = coinFace('#e85d04', '#ff8c42');
  const stamp = [
    [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5],
    [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [10, 6], [11, 6],
    [4, 7], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7], [10, 7], [11, 7],
    [6, 8], [7, 8], [8, 8], [9, 8],
    [6, 9], [7, 9], [8, 9], [9, 9],
    [6, 10], [7, 10], [8, 10], [9, 10],
  ];
  const spots = [[5, 6], [8, 6], [10, 7]];
  const ink = '#5c2200';
  const spot = '#ffd4a8';
  return (
    <PixelSvg>
      {base.map(([x, y, fill], i) => (
        <Px key={`b${i}`} x={x} y={y} fill={fill} />
      ))}
      {stamp.map(([x, y], i) => (
        <Px key={`s${i}`} x={x} y={y} fill={ink} />
      ))}
      {spots.map(([x, y], i) => (
        <Px key={`p${i}`} x={x} y={y} fill={spot} />
      ))}
    </PixelSvg>
  );
}

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alieldaoushy',
    Token: TokenStar,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/alieldaoushyuci',
    Token: TokenDiamond,
  },
  {
    label: 'Email',
    href: 'https://mail.google.com/mail/u/0/?to=aeldaoushy1@gmail.com&su=Contact%20from%20Portfolio&tf=cm',
    Token: TokenBolt,
  },
  {
    label: 'Substack',
    href: 'https://substack.com/@alieldaoushy',
    Token: TokenOneUp,
  },
];

export default function SocialNotes() {
  return (
    <nav className="social-notes" aria-label="Social links">
      {SOCIALS.map(({ label, href, Token }) => (
        <a
          key={label}
          href={href}
          className="social-note"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Token />
          <span className="social-note-tip">{label}</span>
        </a>
      ))}
    </nav>
  );
}
