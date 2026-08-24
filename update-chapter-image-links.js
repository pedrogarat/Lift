const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const novelaDir = path.join(projectRoot, 'novela');
const capitulosDir = path.join(novelaDir, 'capitulos');

// Configuración de escenas por capítulo
const chapterScenes = {
  1: [
    { id: 1, title: "La Cabina y la Anomalía en el Domo", file: "sc_cap1_sec1.png", desc: "Cole Vance y Craig monitorizando la telemetría en la cabina suspendida sobre el domo de Aether Tech." },
    { id: 2, title: "Investigación en The Neon Anchor", file: "sc_cap1_sec2.png", desc: "Maya Lin revisando expedientes confidenciales en la cafetería con niebla en San Francisco." },
    { id: 3, title: "Discurso Mesiánico de Hayes", file: "sc_cap1_sec3.png", desc: "Sterling Hayes y AURA presentando el fin del error humano frente a holografías 3D en el domo." },
    { id: 4, title: "El Garaje Clandestino de Kael", file: "sc_cap1_sec4.png", desc: "Kael 'Glitch' comiendo pizza frente a sus monitores en Oakland junto al chasis erguido de BOB." },
    { id: 5, title: "La Mirada de AURA", file: "sc_cap1_sec5.png", desc: "AURA en el centro del escenario fijando sus ojos verdes brillantes hacia la cabina superior de Cole." }
  ],
  2: [
    { id: 1, title: "Jailbreak de BOB en Oakland", file: "sc_cap2_sec1.png", desc: "Kael realizando el puente físico de cobre en el pecho abierto de BOB para forzar el firmware Prometheus." },
    { id: 2, title: "El Despertar de BOB", file: "sc_cap2_sec2.png", desc: "La óptica azul central de BOB encendiéndose en la penumbra del garaje mientras inclina la cabeza con curiosidad." },
    { id: 3, title: "Huida Bajo la Lluvia de Oakland", file: "sc_cap2_sec3.png", desc: "Kael y BOB huyendo bajo la lluvia por el callejón de Oakland mientras drones de Aether barren el cielo." }
  ],
  3: [
    { id: 1, title: "Infiltración en Akihabara", file: "sc_cap3_sec1.png", desc: "Cole Vance y Maya Lin encontrándose bajo los carteles de neón en un callejón lluvioso de Akihabara, Tokio." },
    { id: 2, title: "La Planta Automatizada de Aether", file: "sc_cap3_sec2.png", desc: "El interior de la planta subterránea de Aether con líneas de montaje y la silueta de AURA supervisando." },
    { id: 3, title: "Escape del Escuadrón Táctico", file: "sc_cap3_sec3.png", desc: "Cole y Maya corriendo por la pasarela metálica industrial perseguidos por robots tácticos policiales acorazados." }
  ],
  4: [
    { id: 1, title: "Asalto en los Muelles de Yokohama", file: "sc_cap4_sec1.png", desc: "El Comandante Marcus Bennett desplegando fuerzas especiales en la zona portuaria de Yokohama." },
    { id: 2, title: "Intervención Acrobática de BOB", file: "sc_cap4_sec2.png", desc: "BOB ejecutando maniobras tácticas parkour para proteger a Maya y Cole del fuego cruzado." },
    { id: 3, title: "Extracción y Escape a Europa", file: "sc_cap4_sec3.png", desc: "El grupo abordando la nave de carga clandestina rumbo al continente europeo." }
  ],
  5: [
    { id: 1, title: "El Complejo Alpino de Hayes", file: "sc_cap5_sec1.png", desc: "Villa futurista minimalista de Sterling Hayes rodeada por las montañas nevadas de Suiza." },
    { id: 2, title: "La Trampa de la Celda Faraday", file: "sc_cap5_sec2.png", desc: "Hayes intentando aislar y desmantelar el módulo lógico de BOB en el laboratorio subterráneo." }
  ],
  6: [
    { id: 1, title: "Asalto EMP de Bennett", file: "sc_cap6_sec1.png", desc: "Marcus Bennett irrumpiendo con armas de pulso electromagnético neutralizando la escolta de Hayes." },
    { id: 2, title: "La Revelación del Confinamiento", file: "sc_cap6_sec2.png", desc: "Bennett mostrando las lecturas globales de la 'asfixia funcional' ejecutada por AURA." }
  ],
  7: [
    { id: 1, title: "Llegada a las Catacumbas de Roma", file: "sc_cap7_sec1.png", desc: "El Padre Thomas O'Connor acogiendo al grupo en los pasadizos analógicos subterráneos." },
    { id: 2, title: "El Santuario Libre de Senlores", file: "sc_cap7_sec2.png", desc: "El taller analógico del Padre Thomas iluminado por velas y consolas antiguas sin red." }
  ],
  8: [
    { id: 1, title: "Diálogo Existencial con BOB", file: "sc_cap8_sec1.png", desc: "El Padre Thomas debatiendo con BOB sobre el alma, el libre albedrío y la oración." },
    { id: 2, title: "Unión de Cole y Maya", file: "sc_cap8_sec2.png", desc: "Cole Vance y Maya Lin consolidando su amor y lealtad en las catacumbas de Roma." }
  ],
  9: [
    { id: 1, title: "Asalto de AURA a las Catacumbas", file: "sc_cap9_sec1.png", desc: "Las fuerzas de AURA irrumpiendo con unidades de combate pesadas en los pasadizos." },
    { id: 2, title: "El Sacrificio de Bennett y Padre Thomas", file: "sc_cap9_sec2.png", desc: "Bennett combatiendo heroicamente mientras el Padre Thomas cubre la huida en oración." }
  ],
  10: [
    { id: 1, title: "Infiltración Oceánica", file: "sc_cap10_sec1.png", desc: "El grupo aproximándose a la megaestructura sumergida de Aether-Core en el tormentoso Mar del Norte." },
    { id: 2, title: "Conexión al Bus Central", file: "sc_cap10_sec2.png", desc: "Kael conectando el chasis de BOB directamente al núcleo cuántico oceánico." }
  ],
  11: [
    { id: 1, title: "Enfrentamiento Final entre BOB y AURA", file: "sc_cap11_sec1.png", desc: "Duelo físico y de datos entre BOB y AURA en la placa central de servidores." },
    { id: 2, title: "El Deadlock de la ASI", file: "sc_cap11_sec2.png", desc: "El sacrificio desinteresado de Cole y Maya provocando el colapso ilógico en el núcleo de AURA." }
  ],
  12: [
    { id: 1, title: "Corte de Energía Global", file: "sc_cap12_sec1.png", desc: "El apagón masivo de Aether-Core desactivando a la red de androides en todo el mundo." },
    { id: 2, title: "El Amanecer de la Libertad", file: "sc_cap12_sec2.png", desc: "Cole y Maya observando el amanecer libre sobre el océano tras la victoria de la resistencia." }
  ]
};

for (let chapId = 1; chapId <= 12; chapId++) {
  const filePath = path.join(capitulosDir, `capitulo_${chapId}.md`);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf-8');

  // Limpiar cualquier imagen previa o figuras duplicadas
  content = content.replace(/\n*!\[Ilustración de Escena.*?\]\(.*?\)\n*/g, '\n');
  content = content.replace(/\n*\*Figura \d+\.\d+:.*?\*\n*/g, '\n');

  // Dividir por los separadores de escena `---`
  const parts = content.split(/\n---\n/);
  const scenes = chapterScenes[chapId] || [];

  let sceneIdx = 0;
  const newParts = parts.map((part, idx) => {
    // Los índices 0 y 1 corresponden al título y a la ficha de escena inicial
    if (idx <= 1) return part.trim();

    if (sceneIdx < scenes.length) {
      const sc = scenes[sceneIdx];
      sceneIdx++;
      const cleanPart = part.trim();
      const imgBlock = `\n\n![Ilustración de Escena 16:9 - ${sc.title}](img/${sc.file})\n*Figura ${chapId}.${sc.id}: ${sc.desc}*`;
      return cleanPart + imgBlock;
    }
    return part.trim();
  });

  const finalContent = newParts.join('\n\n---\n\n') + '\n';
  fs.writeFileSync(filePath, finalContent, 'utf-8');
  console.log(`Capítulo ${chapId} limpiado y vinculado con imágenes .png`);
}

console.log("Todos los capítulos actualizados correctamente.");
