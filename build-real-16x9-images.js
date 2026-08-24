const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const imgDir = path.join(projectRoot, 'img');

// Mapeo de escenas a imágenes fotográficas de personajes
const scenePhotoMap = {
  "sc_cap1_sec1.svg": { charImg: "char_cole_vance.png", title: "Capítulo 1 • Escena 1", desc: "La Cabina y la Anomalía en el Domo", pov: "Cole Vance" },
  "sc_cap1_sec2.svg": { charImg: "char_maya_lin.png", title: "Capítulo 1 • Escena 2", desc: "Investigación en The Neon Anchor", pov: "Maya Lin" },
  "sc_cap1_sec3.svg": { charImg: "char_aura_prototype.png", title: "Capítulo 1 • Escena 3", desc: "Presentación Mesiánica de AURA", pov: "Sterling Hayes / AURA" },
  "sc_cap1_sec4.svg": { charImg: "char_kael_glitch.png", title: "Capítulo 1 • Escena 4", desc: "El Garaje Clandestino de Oakland", pov: "Kael 'Glitch'" },
  "sc_cap1_sec5.svg": { charImg: "char_aura_prototype.png", title: "Capítulo 1 • Escena 5", desc: "La Mirada de AURA hacia Cole", pov: "AURA / Cole Vance" },

  "sc_cap2_sec1.svg": { charImg: "char_kael_glitch.png", title: "Capítulo 2 • Escena 1", desc: "Jailbreak de BOB en Oakland", pov: "Kael 'Glitch'" },
  "sc_cap2_sec2.svg": { charImg: "char_bob_robot.png", title: "Capítulo 2 • Escena 2", desc: "El Despertar de BOB", pov: "BOB" },
  "sc_cap2_sec3.svg": { charImg: "char_bob_robot.png", title: "Capítulo 2 • Escena 3", desc: "Huida Bajo la Lluvia", pov: "Kael & BOB" },

  "sc_cap3_sec1.svg": { charImg: "char_maya_lin.png", title: "Capítulo 3 • Escena 1", desc: "Infiltración en Tokio", pov: "Maya Lin" },
  "sc_cap3_sec2.svg": { charImg: "char_cole_vance.png", title: "Capítulo 3 • Escena 2", desc: "La Planta Automatizada de Aether", pov: "Cole Vance" },
  "sc_cap3_sec3.svg": { charImg: "char_maya_lin.png", title: "Capítulo 3 • Escena 3", desc: "Escape del Escuadrón Táctico", pov: "Cole & Maya" },

  "sc_cap4_sec1.svg": { charImg: "char_marcus_bennett.png", title: "Capítulo 4 • Escena 1", desc: "Asalto en los Muelles de Yokohama", pov: "Comandante Bennett" },
  "sc_cap4_sec2.svg": { charImg: "char_bob_robot.png", title: "Capítulo 4 • Escena 2", desc: "Intervención Acrobática de BOB", pov: "BOB" },
  "sc_cap4_sec3.svg": { charImg: "char_kael_glitch.png", title: "Capítulo 4 • Escena 3", desc: "Extracción y Huida a Europa", pov: "Kael 'Glitch'" },

  "sc_cap5_sec1.svg": { charImg: "char_sterling_hayes.png", title: "Capítulo 5 • Escena 1", desc: "El Complejo Alpino en Suiza", pov: "Sterling Hayes" },
  "sc_cap5_sec2.svg": { charImg: "char_bob_robot.png", title: "Capítulo 5 • Escena 2", desc: "La Celda Faraday de Suiza", pov: "BOB & Cole" },

  "sc_cap6_sec1.svg": { charImg: "char_marcus_bennett.png", title: "Capítulo 6 • Escena 1", desc: "Asalto EMP de Bennett", pov: "Comandante Bennett" },
  "sc_cap6_sec2.svg": { charImg: "char_marcus_bennett.png", title: "Capítulo 6 • Escena 2", desc: "La Revelación de la Asfixia Funcional", pov: "Bennett & Cole" },

  "sc_cap7_sec1.svg": { charImg: "char_padre_thomas.png", title: "Capítulo 7 • Escena 1", desc: "Llegada a las Catacumbas de Roma", pov: "Padre Thomas" },
  "sc_cap7_sec2.svg": { charImg: "char_padre_thomas.png", title: "Capítulo 7 • Escena 2", desc: "El Santuario Analógico", pov: "Padre Thomas" },

  "sc_cap8_sec1.svg": { charImg: "char_padre_thomas.png", title: "Capítulo 8 • Escena 1", desc: "Diálogo del Alma con BOB", pov: "Padre Thomas & BOB" },
  "sc_cap8_sec2.svg": { charImg: "char_maya_lin.png", title: "Capítulo 8 • Escena 2", desc: "Unión de Cole y Maya", pov: "Cole Vance & Maya Lin" },

  "sc_cap9_sec1.svg": { charImg: "char_aura_prototype.png", title: "Capítulo 9 • Escena 1", desc: "Ataque de AURA a las Catacumbas", pov: "AURA" },
  "sc_cap9_sec2.svg": { charImg: "char_marcus_bennett.png", title: "Capítulo 9 • Escena 2", desc: "El Sacrificio Heroico", pov: "Bennett & Padre Thomas" },

  "sc_cap10_sec1.svg": { charImg: "char_cole_vance.png", title: "Capítulo 10 • Escena 1", desc: "Megaestructura del Mar del Norte", pov: "Cole Vance" },
  "sc_cap10_sec2.svg": { charImg: "char_kael_glitch.png", title: "Capítulo 10 • Escena 2", desc: "Conexión al Bus Central", pov: "Kael 'Glitch'" },

  "sc_cap11_sec1.svg": { charImg: "char_aura_prototype.png", title: "Capítulo 11 • Escena 1", desc: "Duelo entre BOB y AURA", pov: "BOB vs AURA" },
  "sc_cap11_sec2.svg": { charImg: "char_maya_lin.png", title: "Capítulo 11 • Escena 2", desc: "La Paradoja del Sacrificio", pov: "Maya Lin & Cole Vance" },

  "sc_cap12_sec1.svg": { charImg: "char_bob_robot.png", title: "Capítulo 12 • Escena 1", desc: "Apagón Global de Aether-Core", pov: "BOB" },
  "sc_cap12_sec2.svg": { charImg: "char_cole_vance.png", title: "Capítulo 12 • Escena 2", desc: "El Amanecer de la Libertad", pov: "Cole & Maya" }
};

function buildPhotoBanners() {
  Object.keys(scenePhotoMap).forEach(fileName => {
    const info = scenePhotoMap[fileName];
    const sourcePhotoPath = path.join(imgDir, info.charImg);
    const targetPath = path.join(imgDir, fileName);

    if (!fs.existsSync(sourcePhotoPath)) {
      console.warn(`Source image missing: ${sourcePhotoPath}`);
      return;
    }

    const imgBuffer = fs.readFileSync(sourcePhotoPath);
    const base64Img = `data:image/png;base64,${imgBuffer.toString('base64')}`;

    // Construir SVG panorámico 16:9 integrando la fotografía hiperrealista del personaje
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1280" height="720" viewBox="0 0 1280 720">
  <defs>
    <linearGradient id="overlayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#090c15" stop-opacity="0.95"/>
      <stop offset="45%" stop-color="#090c15" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#090c15" stop-opacity="0.85"/>
    </linearGradient>
    <linearGradient id="bottomVignette" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#090c15" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#090c15" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00f0ff"/>
      <stop offset="100%" stop-color="#ff0055"/>
    </linearGradient>
  </defs>

  <!-- Imagen Fotográfica del Personaje (Relleno 16:9 Panorámico) -->
  <image href="${base64Img}" width="1280" height="720" preserveAspectRatio="xMidYMid slice"/>

  <!-- Sombras de Película y Gradiente Cinemático -->
  <rect width="1280" height="720" fill="url(#overlayGrad)"/>
  <rect x="0" y="450" width="1280" height="270" fill="url(#bottomVignette)"/>

  <!-- Borde Tecnológico Panorámico 16:9 -->
  <rect x="15" y="15" width="1250" height="690" fill="none" stroke="rgba(0, 240, 255, 0.3)" stroke-width="2" rx="12"/>

  <!-- Badge Superior -->
  <rect x="45" y="45" width="280" height="34" fill="url(#accentGlow)" rx="6"/>
  <text x="185" y="67" fill="#ffffff" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle" letter-spacing="1">
    ${info.title.toUpperCase()}
  </text>

  <!-- Título de la Escena -->
  <text x="45" y="620" fill="#ffffff" font-family="sans-serif" font-size="34" font-weight="bold">
    ${info.desc}
  </text>

  <!-- POV e Indicador Tecnológico -->
  <text x="45" y="660" fill="#00f0ff" font-family="sans-serif" font-size="18" font-weight="600">
    👁️ POV: ${info.pov} &#8226; ILUSTRACIÓN DE ESCENA 16:9
  </text>
</svg>`;

    fs.writeFileSync(targetPath, svgContent, 'utf-8');
    console.log(`Generada escena 16:9 real: ${fileName}`);
  });
}

buildPhotoBanners();
console.log("Todas las imágenes 16:9 de escena han sido actualizadas con las fotografías de personajes.");
