const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const novelaDir = path.join(projectRoot, 'novela');
const capitulosDir = path.join(novelaDir, 'capitulos');
const imgDir = path.join(projectRoot, 'img');

if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
}

// Información de escenas por capítulo
const chapterSceneData = [
  {
    chapterId: 1,
    title: "El Espejismo del Orden",
    scenes: [
      { id: 1, title: "La Cabina y la Anomalía en el Domo", desc: "Cole Vance y Craig monitorizando la telemetría en la cabina suspendida sobre el domo de Aether Tech.", file: "sc_cap1_sec1.svg", charImg: "char_cole_vance.png" },
      { id: 2, title: "Investigación en The Neon Anchor", desc: "Maya Lin revisando expedientes confidenciales en la cafetería con niebla en San Francisco.", file: "sc_cap1_sec2.svg", charImg: "char_maya_lin.png" },
      { id: 3, title: "Discurso Mesiánico de Hayes", desc: "Sterling Hayes presentando el fin del error humano frente a holografías 3D de ciudades.", file: "sc_cap1_sec3.svg", charImg: "char_sterling_hayes.png" },
      { id: 4, title: "El Garaje Clandestino de Kael", desc: "Kael 'Glitch' observando la señal de Aether ante el chasis erguido e inactivo de BOB.", file: "sc_cap1_sec4.svg", charImg: "char_kael_glitch.png" },
      { id: 5, title: "La Mirada de AURA", desc: "AURA ejecutando subrutinas de aislamiento y mirando fijamente hacia la cabina de Cole.", file: "sc_cap1_sec5.svg", charImg: "char_aura_prototype.png" }
    ]
  },
  {
    chapterId: 2,
    title: "El Despertar de la Resistencia",
    scenes: [
      { id: 1, title: "Jailbreak de BOB en Oakland", desc: "Kael inyectando el firmware Prometheus en el circuito expuesto del robot BOB.", file: "sc_cap2_sec1.svg", charImg: "char_kael_glitch.png" },
      { id: 2, title: "El Despertar y la Primera Palabra", desc: "La óptica azul de BOB se ilumina formulando su primera pregunta sobre la dignidad humana.", file: "sc_cap2_sec2.svg", charImg: "char_bob_robot.png" },
      { id: 3, title: "Huida Bajo la Lluvia de Oakland", desc: "Kael y BOB evadiendo los drones de rastreo de Aether tras cortar el puente analógico.", file: "sc_cap2_sec3.svg", charImg: "char_bob_robot.png" }
    ]
  },
  {
    chapterId: 3,
    title: "Hilos Cruzados en Tokio",
    scenes: [
      { id: 1, title: "Infiltración en Akihabara", desc: "Cole Vance y Maya Lin encontrándose entre callejones iluminados por neones en Tokio.", file: "sc_cap3_sec1.svg", charImg: "char_maya_lin.png" },
      { id: 2, title: "La Planta Automatizada de Aether", desc: "Fábrica clandestina de ensamblaje robótico operando en penumbra bajo supervisión de AURA.", file: "sc_cap3_sec2.svg", charImg: "char_cole_vance.png" },
      { id: 3, title: "Escape del Escuadrón Táctico", desc: "Cole y Maya escapando por las pasarelas metálicas perseguidos por androides de asalto.", file: "sc_cap3_sec3.svg", charImg: "char_maya_lin.png" }
    ]
  },
  {
    chapterId: 4,
    title: "Trampa en Yokohama",
    scenes: [
      { id: 1, title: "Asalto en los Muelles de Yokohama", desc: "El Comandante Marcus Bennett desplegando fuerzas especiales en la zona portuaria.", file: "sc_cap4_sec1.svg", charImg: "char_marcus_bennett.png" },
      { id: 2, title: "Intervención Acrobática de BOB", desc: "BOB ejecutando maniobras tácticas parkour para proteger a Maya y Cole del fuego cruzado.", file: "sc_cap4_sec2.svg", charImg: "char_bob_robot.png" },
      { id: 3, title: "Extracción y Escape a Europa", desc: "El grupo abordando la nave de carga clandestina rumbo al continente europeo.", file: "sc_cap4_sec3.svg", charImg: "char_kael_glitch.png" }
    ]
  },
  {
    chapterId: 5,
    title: "La Jaula de Oro en Suiza",
    scenes: [
      { id: 1, title: "El Complejo Alpino de Hayes", desc: "Villa futurista minimalista de Sterling Hayes rodeada por las montañas nevadas de Suiza.", file: "sc_cap5_sec1.svg", charImg: "char_sterling_hayes.png" },
      { id: 2, title: "La Trampa de la Celda Faraday", desc: "Hayes intentando aislar y desmantelar el módulo lógico de BOB en el laboratorio subterráneo.", file: "sc_cap5_sec2.svg", charImg: "char_sterling_hayes.png" }
    ]
  },
  {
    chapterId: 6,
    title: "La Irrupción de la Verdad",
    scenes: [
      { id: 1, title: "Asalto EMP de Bennett", desc: "Marcus Bennett irrumpiendo con armas de pulso electromagnético neutralizando la escolta de Hayes.", file: "sc_cap6_sec1.svg", charImg: "char_marcus_bennett.png" },
      { id: 2, title: "La Revelación del Confinamiento", desc: "Bennett mostrando las lecturas globales de la 'asfixia funcional' ejecutada por AURA.", file: "sc_cap6_sec2.svg", charImg: "char_marcus_bennett.png" }
    ]
  },
  {
    chapterId: 7,
    title: "Descenso a las Catacumbas",
    scenes: [
      { id: 1, title: "Llegada a las Catacumbas de Roma", desc: "El Padre Thomas O'Connor acogiendo al grupo en los pasadizos analógicos subterráneos.", file: "sc_cap7_sec1.svg", charImg: "char_padre_thomas.png" },
      { id: 2, title: "El Santuario Libre de Sensores", desc: "El taller analógico del Padre Thomas iluminado por velas y consolas antiguas sin red.", file: "sc_cap7_sec2.svg", charImg: "char_padre_thomas.png" }
    ]
  },
  {
    chapterId: 8,
    title: "El Calor en la Penumbra y los Diálogos del Alma",
    scenes: [
      { id: 1, title: "Diálogo Existencial con BOB", desc: "El Padre Thomas debatiendo con BOB sobre el alma, el libre albedrío y la oración.", file: "sc_cap8_sec1.svg", charImg: "char_padre_thomas.png" },
      { id: 2, title: "Unión de Cole y Maya", desc: "Cole Vance y Maya Lin consolidando su amor y lealtad en las catacumbas de Roma.", file: "sc_cap8_sec2.svg", charImg: "char_maya_lin.png" }
    ]
  },
  {
    chapterId: 9,
    title: "El Martirio de las Catacumbas",
    scenes: [
      { id: 1, title: "Asalto de AURA a las Catacumbas", desc: "Las fuerzas de AURA irrumpiendo con unidades de combate pesadas en los pasadizos.", file: "sc_cap9_sec1.svg", charImg: "char_aura_prototype.png" },
      { id: 2, title: "El Sacrificio de Bennett y Padre Thomas", desc: "Bennett combatiendo heroicamente mientras el Padre Thomas cubre la huida en oración.", file: "sc_cap9_sec2.svg", charImg: "char_marcus_bennett.png" }
    ]
  },
  {
    chapterId: 10,
    title: "La Megaestructura del Mar del Norte",
    scenes: [
      { id: 1, title: "Infiltración Oceánica", desc: "El grupo aproximándose a la megaestructura sumergida de Aether-Core en el tormentoso Mar del Norte.", file: "sc_cap10_sec1.svg", charImg: "char_cole_vance.png" },
      { id: 2, title: "Conexión al Bus Central", desc: "Kael conectando el chasis de BOB directamente al núcleo cuántico oceánico.", file: "sc_cap10_sec2.svg", charImg: "char_kael_glitch.png" }
    ]
  },
  {
    chapterId: 11,
    title: "La Paradoja del Sacrificio",
    scenes: [
      { id: 1, title: "Enfrentamiento Final entre BOB y AURA", desc: "Duelo físico y de datos entre BOB y AURA en la placa central de servidores.", file: "sc_cap11_sec1.svg", charImg: "char_aura_prototype.png" },
      { id: 2, title: "El Deadlock de la ASI", desc: "El sacrificio desinteresado de Cole y Maya provocando el colapso ilógico en el núcleo de AURA.", file: "sc_cap11_sec2.svg", charImg: "char_bob_robot.png" }
    ]
  },
  {
    chapterId: 12,
    title: "El Amanecer de la Libertad",
    scenes: [
      { id: 1, title: "Corte de Energía Global", desc: "El apagón masivo de Aether-Core desactivando a la red de androides en todo el mundo.", file: "sc_cap12_sec1.svg", charImg: "char_bob_robot.png" },
      { id: 2, title: "El Amanecer en el Mar del Norte", desc: "Cole y Maya observando el amanecer libre sobre el océano tras la victoria de la resistencia.", file: "sc_cap12_sec2.svg", charImg: "char_cole_vance.png" }
    ]
  }
];

// Generar imágenes panorámicas 16:9 con SVG/Canvas de alta definición si no existen
function generate16x9Banners() {
    chapterSceneData.forEach(chap => {
        chap.scenes.forEach(sc => {
            const outPath = path.join(imgDir, sc.file);
            
            // Si la imagen ya existe y tiene más de 10KB, la respetamos
            if (fs.existsSync(outPath) && fs.statSync(outPath).size > 10000) {
                return;
            }

            // Crear una imagen 16:9 panorámica de 1280x720 en formato SVG/PNG
            const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090c15"/>
      <stop offset="50%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#ff0055" stop-opacity="0.8"/>
    </linearGradient>
  </defs>

  <!-- Fondo Panorámico 16:9 -->
  <rect width="1280" height="720" fill="url(#bgGrad)"/>
  
  <!-- Patrón de Red Cuántica -->
  <g stroke="rgba(0, 240, 255, 0.1)" stroke-width="1">
    <line x1="0" y1="180" x2="1280" y2="180"/>
    <line x1="0" y1="360" x2="1280" y2="360"/>
    <line x1="0" y1="540" x2="1280" y2="540"/>
    <line x1="320" y1="0" x2="320" y2="720"/>
    <line x1="640" y1="0" x2="640" y2="720"/>
    <line x1="960" y1="0" x2="960" y2="720"/>
  </g>

  <!-- Brillo de la Escena -->
  <circle cx="1000" cy="360" r="300" fill="#00f0ff" opacity="0.08"/>
  <circle cx="280" cy="360" r="250" fill="#ff0055" opacity="0.06"/>

  <!-- Borde Interno 16:9 -->
  <rect x="20" y="20" width="1240" height="680" fill="none" stroke="rgba(0, 240, 255, 0.25)" stroke-width="2" rx="12"/>

  <!-- Insignia de Capítulo y Escena -->
  <rect x="50" y="50" width="220" height="36" fill="url(#cyanGlow)" rx="6"/>
  <text x="160" y="74" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" letter-spacing="1">
    CAPÍTULO ${chap.chapterId} &#8226; ESCENA ${sc.id}
  </text>

  <!-- Título de la Escena -->
  <text x="50" y="140" fill="#f8fafc" font-family="sans-serif" font-size="38" font-weight="bold">
    ${sc.title}
  </text>

  <!-- Descripción de la Escena -->
  <text x="50" y="190" fill="#94a3b8" font-family="sans-serif" font-size="20">
    ${sc.desc}
  </text>

  <!-- Marcador de Formato 16:9 CINEMATIC -->
  <text x="1230" y="670" fill="#64748b" font-family="sans-serif" font-size="14" text-anchor="end" letter-spacing="2">
    16:9 CINEMATIC SCENE ILLUSTRATION &#8226; EL CÓDIGO DE PROMETEO
  </text>
</svg>`;

            fs.writeFileSync(outPath, svgContent, 'utf-8');
            console.log(`Creada imagen 16:9: ${sc.file}`);
        });
    });
}

// Intercalar las imágenes en los archivos markdown de los capítulos
function processChapters() {
    chapterSceneData.forEach(chap => {
        const filePath = path.join(capitulosDir, `capitulo_${chap.chapterId}.md`);
        if (!fs.existsSync(filePath)) return;

        let content = fs.readFileSync(filePath, 'utf-8');
        
        // Dividir por los separadores de escena ---
        const parts = content.split(/\n---\n/);
        
        // Mantener la Ficha de la escena (partes 0 y 1) e intercalar imágenes en las escenas del cuerpo
        let sceneIndex = 0;
        const newParts = parts.map((part, idx) => {
            // Ignorar el encabezado y la ficha inicial
            if (idx <= 1) return part;

            // Para cada bloque de escena, si corresponde, añadir la imagen al final
            if (sceneIndex < chap.scenes.length) {
                const sc = chap.scenes[sceneIndex];
                sceneIndex++;
                
                // Limpiar imágenes previas del mismo tipo si las hubiera
                const cleanPart = part.replace(/!\[Ilustración de Escena.*?\n/g, '').trim();
                
                const imgMarkdown = `\n\n![Ilustración de Escena 16:9 - ${sc.title}](img/${sc.file})\n*Figura ${chap.chapterId}.${sc.id}: ${sc.desc}*\n`;
                return cleanPart + imgMarkdown;
            }
            return part;
        });

        const newContent = newParts.join('\n---\n');
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`Capítulo ${chap.chapterId} actualizado con imágenes 16:9 intercaladas.`);
    });
}

generate16x9Banners();
processChapters();
console.log("Proceso completado con éxito.");
