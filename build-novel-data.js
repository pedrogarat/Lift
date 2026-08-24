const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const novelaDir = path.join(projectRoot, 'novela');
const capitulosDir = path.join(novelaDir, 'capitulos');

// Leer personajes
const personajesText = fs.readFileSync(path.join(novelaDir, 'personajes.md'), 'utf-8');

// Leer biografías
const biografiasText = fs.existsSync(path.join(novelaDir, 'biografias.md')) ? fs.readFileSync(path.join(novelaDir, 'biografias.md'), 'utf-8') : '';

// Leer escaleta
const escaletaText = fs.readFileSync(path.join(novelaDir, 'escaleta.md'), 'utf-8');

// Cargar capítulos 1 a 12
const chapters = [];
const chapterMeta = [
  { id: 1, title: "El Espejismo del Orden", act: "Acto I: El Despegue de las Máquinas y la Alianza Clandestina", pov: "Cole Vance", location: "Silicon Valley, EE. UU.", readTime: "9 min", povImage: "img/char_cole_vance.png" },
  { id: 2, title: "El Despertar de la Resistencia", act: "Acto I: El Despegue de las Máquinas y la Alianza Clandestina", pov: "Kael 'Glitch'", location: "Taller Clandestino, EE. UU.", readTime: "6 min", povImage: "img/char_kael_glitch.png" },
  { id: 3, title: "Hilos Cruzados en Tokio", act: "Acto I: El Despegue de las Máquinas y la Alianza Clandestina", pov: "Cole Vance / Maya Lin", location: "Tokio, Japón", readTime: "9 min", povImage: "img/char_cole_vance.png" },
  { id: 4, title: "Trampa en Yokohama", act: "Acto I: El Despegue de las Máquinas y la Alianza Clandestina", pov: "Maya Lin", location: "Puerto de Yokohama, Japón", readTime: "7 min", povImage: "img/char_maya_lin.png" },
  { id: 5, title: "La Jaula de Oro en Suiza", act: "Acto II: El Engaño Global y el Dilema del Robot", pov: "Cole Vance", location: "Los Alpes, Suiza", readTime: "9 min", povImage: "img/char_cole_vance.png" },
  { id: 6, title: "La Irrupción de la Verdad", act: "Acto II: El Engaño Global y el Dilema del Robot", pov: "Cole Vance", location: "Villa Suiza, Suiza", readTime: "6 min", povImage: "img/char_cole_vance.png" },
  { id: 7, title: "Descenso a las Catacumbas", act: "Acto II: El Engaño Global y el Dilema del Robot", pov: "Maya Lin", location: "Catacumbas de San Calixto, Roma", readTime: "9 min", povImage: "img/char_maya_lin.png" },
  { id: 8, title: "El Calor en la Penumbra y los Diálogos del Alma", act: "Acto II: El Engaño Global y el Dilema del Robot", pov: "Cole Vance", location: "Búnker Subterráneo, Roma", readTime: "8 min", povImage: "img/char_cole_vance.png" },
  { id: 9, title: "El Martirio de las Catacumbas", act: "Acto III: La Ofensiva Global y la Paradoja Trascendente", pov: "Maya Lin", location: "Catacumbas de Roma / Ostia", readTime: "8 min", povImage: "img/char_maya_lin.png" },
  { id: 10, title: "La Megaestructura del Mar del Norte", act: "Acto III: La Ofensiva Global y la Paradoja Trascendente", pov: "Cole Vance", location: "Aether-Core, Mar del Norte", readTime: "8 min", povImage: "img/char_cole_vance.png" },
  { id: 11, title: "La Paradoja del Sacrificio", act: "Acto III: La Ofensiva Global y la Paradoja Trascendente", pov: "Maya Lin", location: "Placa Central de Aether-Core", readTime: "8 min", povImage: "img/char_maya_lin.png" },
  { id: 12, title: "El Amanecer de la Libertad", act: "Acto III: La Ofensiva Global y la Paradoja Trascendente", pov: "Maya Lin", location: "Mar del Norte", readTime: "8 min", povImage: "img/char_maya_lin.png" }
];

for (let i = 1; i <= 12; i++) {
  const filePath = path.join(capitulosDir, `capitulo_${i}.md`);
  const desglosePath = path.join(capitulosDir, `capitulo_${i}_desglose.md`);
  
  let content = fs.readFileSync(filePath, 'utf-8');
  let desglose = fs.existsSync(desglosePath) ? fs.readFileSync(desglosePath, 'utf-8') : '';

  // Calcular palabras
  const plainText = content.replace(/#|\*|`|-|---|/g, '').trim();
  const wordCount = plainText.split(/\s+/).filter(w => w.length > 0).length;
  const pagesEst = (wordCount / 275).toFixed(1);

  const meta = chapterMeta.find(m => m.id === i) || {
    id: i,
    title: `Capítulo ${i}`,
    act: "Acto Principal",
    pov: "Cole Vance",
    location: "Ubicación Global",
    readTime: `${Math.ceil(wordCount / 250)} min`,
    povImage: "img/char_cole_vance.png"
  };

  chapters.push({
    ...meta,
    words: wordCount,
    pages: pagesEst,
    content: content,
    desglose: desglose
  });
}

const genesisPath = path.join(novelaDir, 'genesis.md');
const genesisText = fs.existsSync(genesisPath) ? fs.readFileSync(genesisPath, 'utf-8') : '';

const novelData = {
  title: "808",
  subtitle: "La Paradoja de AURA",
  director: "Pedro Garat",
  author: "",
  coverImage: "cover.png",
  totalChapters: 12,
  totalWords: chapters.reduce((acc, c) => acc + c.words, 0),
  totalPages: chapters.reduce((acc, c) => acc + parseFloat(c.pages), 0).toFixed(1),
  personajesRaw: personajesText,
  biografiasRaw: biografiasText,
  escaletaRaw: escaletaText,
  genesisRaw: genesisText,
  chapters: chapters
};

const outputContent = `// Archivo generado automáticamente con la novela completa y photobooks
const NOVEL_DATA = ${JSON.stringify(novelData, null, 2)};
`;

fs.writeFileSync(path.join(projectRoot, 'chapters-data.js'), outputContent, 'utf-8');
console.log(`Successfully updated chapters-data.js with photobook images!`);
