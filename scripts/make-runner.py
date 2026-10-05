from PIL import Image

INK = (18, 8, 10, 255)
HAT = (198, 22, 30, 255)
HAT_HI = (255, 188, 188, 255)
HAIR = (96, 48, 32, 255)
SKIN = (244, 178, 118, 255)
SKIN_HI = (255, 220, 100, 255)
SKIN_SH = (228, 118, 48, 255)
EYE_W = (255, 255, 255, 255)
EYE = (18, 8, 10, 255)
SHIRT = (198, 22, 30, 255)
SHIRT_HI = (244, 128, 128, 255)
SHORTS = (50, 208, 218, 255)
SHORTS_HI = (140, 236, 240, 255)
SHOE = (92, 38, 24, 255)
SHOE_HI = (206, 96, 42, 255)
SPEED = (62, 166, 76, 255)

rows = [
    "..............................",
    "..........######..............",
    ".........###ii####............",
    "........##HHHHHH##............",
    "........#ssswwss##............",
    "........#asss@ss#.............",
    "........##ssssss##............",
    ".....uu##RRRRRR##yy...........",
    "....uu#.#RRR*RR#.#yyu.........",
    "....u#..#RRRRRR#...yu.........",
    "........#RRRRRR#..............",
    "........#~~*~~~~#.............",
    "........#~~~~~~~~#............",
    ".......#ll##..#rr#............",
    "......#ll#....#rr##...........",
    ".....#lL#......#rt##..........",
    "....#bb#........#tt##.........",
    "....#bB..........#BBb#........",
    "..................#Bb#........",
    ".....................==.......",
    "....................====......",
    "....................===.......",
]

key = {
    '#': INK,
    'i': HAT_HI,
    'H': HAT,
    's': SKIN,
    'w': EYE_W,
    '@': EYE,
    'a': HAIR,
    'R': SHIRT,
    '*': SHIRT_HI,
    '~': SHORTS,
    'u': SKIN_SH,
    'y': SKIN_HI,
    'l': SKIN,
    'L': SKIN_HI,
    'r': SKIN,
    't': SKIN_HI,
    'b': SHOE,
    'B': SHOE_HI,
    '=': SPEED,
}

W, H = len(rows[0]), len(rows)
img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
px = img.load()
for y, row in enumerate(rows):
    for x, ch in enumerate(row):
        c = key.get(ch)
        if c:
            px[x, y] = c

path = r'c:\Users\aliel\portfolio\public\sprites\runner.png'
img.save(path)
img.resize((W * 6, H * 6), Image.NEAREST).save(
    r'c:\Users\aliel\portfolio\public\sprites\runner-lg.png'
)
print('saved', img.size)
for row in rows:
    print(row)
