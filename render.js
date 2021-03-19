const Twig = require("twig").factory()
const {twig} = Twig
const fs = require("fs")
const path = require("path");

const spots = [
  {
    "id": 1,
    "name": "文化",
    "spots": [
      {
        "id": 4,
        "name": "金山",
        "fear_level": 2,
      },
      {
        "id": 5,
        "name": "無宿人の墓",
        "fear_level": 1,
      },
      {
        "id": 6,
        "name": "二つ岩大明神",
        "fear_level": 4,
      },
      {
        "id": 7,
        "name": "キリシタン塚",
        "fear_level": 2,
      },
      {
        "id": 11,
        "name": "賽の河原",
        "fear_level": 5,
      },
      {
        "id": 12,
        "name": "梨の木地蔵",
        "fear_level": 4,
      },
      {
        "id": 13,
        "name": "阿仏房妙宣寺",
        "fear_level": 1,
      },
    ],
  },
  {
    "id": 2,
    "name": "自然",
    "spots": [
      {
        "id": 1,
        "name": "乙和池",
        "fear_level": 3,
      },
      {
        "id": 3,
        "name": "地獄谷",
        "fear_level": 1,
      },
      {
        "id": 10,
        "name": "海府大橋",
        "fear_level": 2,
      },
    ],
  },
  {
    "id": 3,
    "name": "廃墟",
    "spots": [
      {
        "id": 2,
        "name": "高原廃墟",
        "fear_level": 3,
      },
      {
        "id": 8,
        "name": "ホテルおもだか",
        "fear_level": 2,
      },
      {
        "id": 9,
        "name": "中山トンネル",
        "fear_level": 3,
      },
    ],
  },
];

// f
const readdirRecursively = (dir, files = []) => {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const dirs = [];
  for (const dirent of dirents) {
    if (dirent.isDirectory()) dirs.push(`${dir}/${dirent.name}`);
    if (dirent.isFile()) files.push(`${dir}/${dirent.name}`);
  }
  for (const d of dirs) {
    files = readdirRecursively(d, files);
  }
  return files;
};

// main
const template_path = "./src/templates"
const files = readdirRecursively(template_path)
for (const v of files) {
  const filename = path.basename(v)
  if (filename.slice(0, 1) === "_")
    continue

  const outpath = v.replace(template_path, "").replace(".twig", ".html")
  fs.mkdir("./public" + path.dirname(outpath), { recursive: true }, (err) => {
    twig({
      namespaces: {"template_directory": path.resolve() + "/" + template_path},
      path: path.resolve(v),
      load(template) {
        const html = template.render({"break_point": "961px", "spots": spots})
        fs.writeFileSync("./public" + outpath, html)
      }
    })
  })
}
