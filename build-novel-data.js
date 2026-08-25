const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const novelaDir = path.join(projectRoot, 'novela');
const capitulosDir = path.join(novelaDir, 'capitulos');

// Leer archivos de organización si existen
const personajesText = fs.existsSync(path.join(novelaDir, 'personajes.md')) ? fs.readFileSync(path.join(novelaDir, 'personajes.md'), 'utf-8') : '';
const biografiasText = fs.existsSync(path.join(novelaDir, 'biografias.md')) ? fs.readFileSync(path.join(novelaDir, 'biografias.md'), 'utf-8') : '';
const escaletaText = fs.existsSync(path.join(novelaDir, 'escaleta.md')) ? fs.readFileSync(path.join(novelaDir, 'escaleta.md'), 'utf-8') : '';
const genesisText = fs.existsSync(path.join(novelaDir, 'genesis.md')) ? fs.readFileSync(path.join(novelaDir, 'genesis.md'), 'utf-8') : '';

const chapters = [];

const chapterMeta = [
  { id: 1, title: "Capítulo 1: El Muro entre las Plantas", act: "Acto I: El Atrapamiento", pov: "Leo Vance", location: "Vanderbilt Tower, Nueva York", readTime: "5 min", povImage: "img/char_leo.png" },
  { id: 2, title: "Capítulo 2: La Escotilla y la Segunda Cabina", act: "Acto I: El Atrapamiento", pov: "Marcus Holt / Leo Vance", location: "Hueco del Ascensor", readTime: "5 min", povImage: "img/char_marcus.png" },
  { id: 3, title: "Capítulo 3: La Geometría Imposible", act: "Acto II: El Puzzle Tridimensional", pov: "Elena Ruiz / Leo Vance", location: "Matriz de Cabinas", readTime: "6 min", povImage: "img/char_elena.png" },
  { id: 4, title: "Capítulo 4: La Prensa de Metal", act: "Acto II: El Sacrificio Gore", pov: "Leo Vance", location: "Umbral de Transición", readTime: "6 min", povImage: "img/char_leo.png" },
  { id: 5, title: "Capítulo 5: El Vacío y las Cuentas Pendientes", act: "Acto III: La Inmensidad Final", pov: "Leo Vance / Elena Ruiz", location: "El Vacío Diáfano", readTime: "6 min", povImage: "img/char_elena.png" }
];

if (fs.existsSync(capitulosDir)) {
  const files = fs.readdirSync(capitulosDir);
  const chapterFiles = files.filter(f => f.match(/^capitulo_\d+\.md$/i));
  
  // Ordenar por número de capítulo
  chapterFiles.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0], 10);
    const numB = parseInt(b.match(/\d+/)[0], 10);
    return numA - numB;
  });

  chapterFiles.forEach((file) => {
    const num = parseInt(file.match(/\d+/)[0], 10);
    const filePath = path.join(capitulosDir, file);
    const desglosePath = path.join(capitulosDir, `capitulo_${num}_desglose.md`);

    const content = fs.readFileSync(filePath, 'utf-8');
    const desglose = fs.existsSync(desglosePath) ? fs.readFileSync(desglosePath, 'utf-8') : '';

    // Extraer título de la primera línea si existe
    const firstLineMatch = content.match(/^#\s+(.+)$/m);
    const chapterTitle = firstLineMatch ? firstLineMatch[1].trim() : `Capítulo ${num}`;

    // Calcular palabras y páginas
    const plainText = content.replace(/#|\*|`|-|---|/g, '').trim();
    const wordCount = plainText.length > 0 ? plainText.split(/\s+/).filter(w => w.length > 0).length : 0;
    const pagesEst = (wordCount / 275).toFixed(1);

    const meta = chapterMeta.find(m => m.id === num) || {
      id: num,
      title: chapterTitle,
      act: "Acto Principal",
      pov: "Leo Vance",
      location: "Nueva York",
      readTime: `${Math.max(1, Math.ceil(wordCount / 250))} min`,
      povImage: "img/char_leo.png"
    };

    chapters.push({
      ...meta,
      words: wordCount,
      pages: pagesEst,
      content: content,
      desglose: desglose
    });
  });
}

const novelData = {
  title: "LIFT",
  subtitle: "El Laberinto del Abismo",
  director: "Pedro Garat",
  author: "Pedro Garat",
  coverImage: "cover.png",
  totalChapters: chapters.length,
  totalWords: chapters.reduce((acc, c) => acc + c.words, 0),
  totalPages: chapters.reduce((acc, c) => acc + parseFloat(c.pages), 0).toFixed(1),
  personajesRaw: personajesText,
  biografiasRaw: biografiasText,
  escaletaRaw: escaletaText,
  genesisRaw: genesisText,
  chapters: chapters
};

const outputContent = `// Archivo generado automáticamente para LIFT\nconst NOVEL_DATA = ${JSON.stringify(novelData, null, 2)};\n`;

fs.writeFileSync(path.join(projectRoot, 'chapters-data.js'), outputContent, 'utf-8');
console.log(`Successfully updated chapters-data.js for LIFT with character images and ${chapters.length} chapter(s)!`);
