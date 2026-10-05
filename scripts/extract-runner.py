from PIL import Image
import os

src = r'C:\Users\aliel\.cursor\projects\c-Users-aliel-portfolio\assets\c__Users_aliel_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-0b021d87-7e42-4159-b41d-10d7eafc6ee6.png'
img = Image.open(src).convert('RGBA')
px = img.load()
w, h = img.size

xs, ys = [], []
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if r > 230 and g > 230 and b > 230:
            xs.append(x)
            ys.append(y)

card = img.crop((min(xs), min(ys), max(xs) + 1, max(ys) + 1))
cpx = card.load()
cw, ch = card.size

sx, sy = [], []
for y in range(ch):
    for x in range(cw):
        r, g, b, a = cpx[x, y]
        if not (r > 230 and g > 230 and b > 230):
            sx.append(x)
            sy.append(y)

pad = 4
sl = max(0, min(sx) - pad)
st = max(0, min(sy) - pad)
sr = min(cw, max(sx) + 1 + pad)
sb = min(ch, max(sy) + 1 + pad)
sprite = card.crop((sl, st, sr, sb))
print('sprite crop', sprite.size)

spx = sprite.load()
sw, sh = sprite.size
candidates = []
for target_h in range(18, 28):
    cell = sh / target_h
    if 6 <= cell <= 20:
        candidates.append((abs(cell - round(cell)), round(cell), target_h))
candidates.sort()
print('cell candidates', candidates[:8])

best = None
for cell in range(8, 18):
    for ox in range(0, cell, 2):
        for oy in range(0, cell, 2):
            cols = (sw - ox) // cell
            rows = (sh - oy) // cell
            if cols < 12 or rows < 14:
                continue
            score = 0
            n = 0
            for gy in range(0, rows, 2):
                for gx in range(0, cols, 2):
                    colors = [
                        spx[ox + gx * cell + xx, oy + gy * cell + yy][:3]
                        for yy in (0, cell // 2, cell - 1)
                        for xx in (0, cell // 2, cell - 1)
                    ]
                    avg = [sum(c[i] for c in colors) / len(colors) for i in range(3)]
                    var = sum((c[i] - avg[i]) ** 2 for c in colors for i in range(3)) / len(
                        colors
                    )
                    score += var
                    n += 1
            score /= n
            if best is None or score < best[0]:
                best = (score, cell, ox, oy, cols, rows)

print('best', best)
_, cell, ox, oy, cols, rows = best

out = Image.new('RGBA', (cols, rows), (0, 0, 0, 0))
opx = out.load()
for gy in range(rows):
    for gx in range(cols):
        vals = []
        for dy in range(-1, 2):
            for dx in range(-1, 2):
                cx = ox + gx * cell + cell // 2 + dx
                cy = oy + gy * cell + cell // 2 + dy
                if 0 <= cx < sw and 0 <= cy < sh:
                    vals.append(spx[cx, cy])
        r = sum(v[0] for v in vals) // len(vals)
        g = sum(v[1] for v in vals) // len(vals)
        b = sum(v[2] for v in vals) // len(vals)
        if r > 225 and g > 225 and b > 225:
            opx[gx, gy] = (0, 0, 0, 0)
        else:
            opx[gx, gy] = (r, g, b, 255)

bbox = out.getbbox()
out = out.crop(bbox)
print('final', out.size)

os.makedirs(r'c:\Users\aliel\portfolio\public\sprites', exist_ok=True)
out_path = r'c:\Users\aliel\portfolio\public\sprites\runner.png'
out.save(out_path)
big = out.resize((out.size[0] * 6, out.size[1] * 6), Image.NEAREST)
big.save(r'c:\Users\aliel\portfolio\public\sprites\runner-lg.png')

hi = sprite.convert('RGBA')
hp = hi.load()
for y in range(hi.size[1]):
    for x in range(hi.size[0]):
        r, g, b, a = hp[x, y]
        if r > 230 and g > 230 and b > 230:
            hp[x, y] = (0, 0, 0, 0)
hi.save(r'c:\Users\aliel\portfolio\public\sprites\runner-hi.png')
print('saved', out_path)

for y in range(out.size[1]):
    row = ''
    for x in range(out.size[0]):
        r, g, b, a = out.getpixel((x, y))
        if a < 10:
            row += ' '
        elif r < 45 and g < 45 and b < 45:
            row += '#'
        elif g > 90 and r < 150 and b < 150:
            row += '='
        elif b > 130 and g > 90:
            row += '~'
        elif r > 170 and g < 130:
            row += 'R'
        elif r > 190 and g > 140:
            row += 'Y'
        elif r > 140 and g > 70:
            row += 'o'
        else:
            row += '+'
    print(row)
