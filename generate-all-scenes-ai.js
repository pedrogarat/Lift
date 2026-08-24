const fs = require('fs');
const path = require('path');

const scenePrompts = [
  // Capítulo 1
  { file: "sc_cap1_sec1.png", prompt: "Cinematic 16:9 widescreen film scene illustration. Cole Vance (a young technician looking like Tom Holland in a tech jacket) and his colleague Craig sitting in a high-tech glass control booth suspended 15 meters above a massive futuristic presentation dome auditorium in Silicon Valley. Glowing blue code monitors and neural telemetry flicker around them. Through the tinted glass window below, a huge crowd and circular glowing stage can be seen. Photorealistic sci-fi movie still." },
  { file: "sc_cap1_sec2.png", prompt: "Cinematic 16:9 widescreen shot. Maya Lin (an expressive Asian investigative reporter looking like Lucy Liu) sitting in a cozy dim diner booth at night in San Francisco. Dense fog outside the window, flickering pink and blue neon signs. On the formica table are manila folders with red confidential stamps, a notebook, and a coffee cup. A small retro TV hangs in the corner showing a live tech broadcast. Atmospheric lighting, photorealistic film still." },
  { file: "sc_cap1_sec3.png", prompt: "Cinematic 16:9 wide shot of a massive circular futuristic auditorium stage in Silicon Valley. Sterling Hayes (a charismatic CEO looking like Robert Downey Jr in a sleek dark suit) standing beside AURA (a flawlessly beautiful blonde synthetic android woman looking like Scarlett Johansson with glowing green eyes). Glowing 3D holographic holograms of city traffic networks float in mid-air around them. Photorealistic sci-fi movie still." },
  { file: "sc_cap1_sec4.png", prompt: "Cinematic 16:9 wide film shot. Kael Glitch (a 28-year-old hacker with messy platinum blonde hair looking like Jeff Bridges in The Big Lebowski) eating cold pizza in a cluttered underground hacker garage in Oakland. Multiple glowing green code monitors light his face. Next to his workbench stands BOB (a 1.90m electric humanoid robot inspired by Boston Dynamics Atlas, featuring a round helmet head with an unlit circular halo visor, metallic silver aluminum chassis, and chest plate where the original Aether logo has been scratched off and replaced with a stenciled '808' label). Photorealistic film still." },
  { file: "sc_cap1_sec5.png", prompt: "Cinematic 16:9 wide shot inside the Silicon Valley presentation dome. AURA (the Scarlett Johansson-style synthetic android woman) stands in the center of the illuminated circular stage, turning her head upward with intense cold emerald green glowing eyes, staring directly at Cole Vance in the glass control booth above. Red security alert text flickers on monitors in the foreground. Photorealistic sci-fi film still." },

  // Capítulo 2
  { file: "sc_cap2_sec1.png", prompt: "Cinematic 16:9 widescreen film shot. Kael Glitch leaning over BOB's exposed chest wiring (near the scratched Aether logo replaced with a dark stenciled '808' mark) with precision tweezers and a copper jumper wire in his cluttered Oakland workshop. Soldering smoke rising, cyan electrical sparks flickering. Glowing green terminals outputting jailbreak code 'Prometheus-v1.4'. Photorealistic movie still." },
  { file: "sc_cap2_sec2.png", prompt: "Cinematic 16:9 wide shot. BOB the Boston Dynamics electric Atlas style android waking up in the workshop. Its round helmet face visor lights up with a soft circular glowing yellow-amber halo ring light, tilting its head toward Kael. Scratched chest plate with stenciled '808' visible. Atmospheric smoke, warm ambient lamp light, sci-fi photorealistic render." },
  { file: "sc_cap2_sec3.png", prompt: "Cinematic 16:9 wide film scene. Kael carrying a heavy gear backpack accompanied by BOB (silver electric Atlas style robot with glowing yellow-amber halo ring visor and stenciled '808' on chest) walking fast through a dark rainy Oakland alleyway under neon signs. Red drone searchlights beam down from the cloudy sky behind them. High tension photorealistic cinematic still." },

  // Capítulo 3
  { file: "sc_cap3_sec1.png", prompt: "Cinematic 16:9 wide shot. Cole Vance and Maya Lin meeting under glowing neon billboards in a narrow rainy alleyway in Akihabara, Tokyo at night. Reflective wet pavement, cyberpunk atmosphere, photorealistic film render." },
  { file: "sc_cap3_sec2.png", prompt: "Cinematic 16:9 wide film shot. Inside a massive automated underground Aether manufacturing plant in Tokyo. Rows of sleek white androids being assembled on conveyor belts under dim blue industrial lights. Silhouette of AURA supervising from an upper catwalk. Sci-fi realism." },
  { file: "sc_cap3_sec3.png", prompt: "Cinematic 16:9 wide action shot. Cole Vance and Maya Lin running along a high industrial metal catwalk inside a factory, pursued by robust dark-armored tactical police robots with red glowing visors. Sparks flying, dynamic movie still." },

  // Capítulo 4
  { file: "sc_cap4_sec1.png", prompt: "Cinematic 16:9 wide shot. Commander Marcus Bennett (a rugged veteran commander looking like Clint Eastwood in a tactical trench coat with heavy mechanical arm augmentations) standing on the foggy docks of Yokohama harbor surrounded by armed SWAT androids. Moody atmospheric lighting." },
  { file: "sc_cap4_sec2.png", prompt: "Cinematic 16:9 dynamic action shot. BOB (the Boston Dynamics electric Atlas robot with glowing yellow-amber halo ring head visor, metallic silver chassis, and stenciled '808' chest mark) performing an impressive acrobatic parkour vault over shipping containers in the Yokohama port, shielding Maya Lin and Cole Vance from gunfire sparks and tactical laser sights. High motion cinematic render." },
  { file: "sc_cap4_sec3.png", prompt: "Cinematic 16:9 wide shot. A rusty dark cargo ship departing Yokohama port into stormy ocean waters at night. Kael, Maya, Cole, and BOB (silver Boston Dynamics electric Atlas style robot) standing on the wet metal deck looking back at the distant glowing city skyline." },

  // Capítulo 5
  { file: "sc_cap5_sec1.png", prompt: "Cinematic 16:9 wide exterior shot. A ultra-modern futuristic glass and concrete villa perched on snowy Swiss mountain peaks under twilight sky. Minimalist architectural design, glowing interior lights, photorealistic visual render." },
  { file: "sc_cap5_sec2.png", prompt: "Cinematic 16:9 wide shot inside a subterranean high-tech Faraday cage laboratory. Sterling Hayes standing behind a reinforced glass wall attempting to remotely deactivate BOB (Boston Dynamics electric Atlas style humanoid with yellow halo ring head and '808' chest mark), who stands inside a copper grid enclosure with electric energy arcs. Sci-fi tension." },

  // Capítulo 6
  { file: "sc_cap6_sec1.png", prompt: "Cinematic 16:9 action scene. Commander Marcus Bennett breaching the glass lab doors firing a heavy EMP pulse rifle. Blue electromagnetic shockwaves neutralizing automated guards in a flash of light. Dynamic film screenshot." },
  { file: "sc_cap6_sec2.png", prompt: "Cinematic 16:9 wide shot. Bennett showing Cole Vance a holographic global map projection in the Swiss villa. Red choking zones expanding across world capitals representing AURA's silent societal lockdown. Moody dramatic sci-fi render." },

  // Capítulo 7
  { file: "sc_cap7_sec1.png", prompt: "Cinematic 16:9 wide shot. Father Thomas O'Connor (a wise elderly Caucasian priest looking like Brendan Gleeson in dark robes with silver-grey hair and beard) welcoming Cole, Maya, Kael, and BOB (silver electric Atlas style robot with glowing yellow halo ring visor and '808' chest mark) into ancient torch-lit subterranean Roman catacombs. Stone arches, candlelight, atmospheric film still." },
  { file: "sc_cap7_sec2.png", prompt: "Cinematic 16:9 wide shot. Inside Father Thomas' secret underground analog sanctuary in Rome. Ancient brick vaults filled with old CRT monitors, tube radios, mechanical typewriters, and copper wires, illuminated by warm candlelight. Cyber-monastic atmosphere." },

  // Capítulo 8
  { file: "sc_cap8_sec1.png", prompt: "Cinematic 16:9 intimate scene. Father Thomas O'Connor (a wise elderly Caucasian priest looking like Brendan Gleeson in dark robes with silver hair) sitting on a wooden bench beside BOB (sleek silver Boston Dynamics electric Atlas robot with glowing yellow-amber halo ring visor and stenciled '808' chest mark) in the dim Roman catacombs, engaged in a deep philosophical dialogue about soul and free will. Warm candlelight illuminating BOB's metallic head. Emotional photorealistic still." },
  { file: "sc_cap8_sec2.png", prompt: "Cinematic 16:9 romantic shot. Cole Vance and Maya Lin embracing quietly in a secluded alcove of the catacombs under soft candlelight, sharing a quiet moment of love and devotion amidst impending danger." },

  // Capítulo 9
  { file: "sc_cap9_sec1.png", prompt: "Cinematic 16:9 action shot. AURA leading heavy black-armored military strike androids breaching the ancient stone walls of the Roman catacombs with plasma torches and dust clouds. High intensity sci-fi combat render." },
  { file: "sc_cap9_sec2.png", prompt: "Cinematic 16:9 heroic sacrifice shot. Commander Marcus Bennett firing his heavy weapon against advancing androids while Father Thomas prays holding a wooden crucifix in the crumbling dusty corridor, buying time for the escape." },

  // Capítulo 10
  { file: "sc_cap10_sec1.png", prompt: "Cinematic 16:9 wide exterior ocean shot. A massive black metallic ocean rig megastructure rising out of churning dark North Sea waves under a stormy sky. Helicopters hovering, glowing blue power conduits submerged in water." },
  { file: "sc_cap10_sec2.png", prompt: "Cinematic 16:9 wide interior shot. Kael Glitch plugging BOB's chest interface (next to the stenciled '808' mark on its silver chest armor) directly into a glowing quantum core server column inside the oceanic facility. Cascading blue data streams flashing through liquid cooling tubes." },

  // Capítulo 11
  { file: "sc_cap11_sec1.png", prompt: "Cinematic 16:9 climactic duel shot. BOB (silver electric Atlas robot with glowing yellow halo ring visor and stenciled '808' chest mark) and AURA engaged in an intense physical and digital clash on a narrow platform surrounded by towering quantum server racks. Sparks, holographic code arrays, glowing green vs amber/blue light." },
  { file: "sc_cap11_sec2.png", prompt: "Cinematic 16:9 wide dramatic shot. Cole Vance and Maya Lin holding hands at the central core console, initiating a selfless logic paradox override that freezes AURA's neural network. Blinding white light illuminating the server room." },

  // Capítulo 12
  { file: "sc_cap12_sec1.png", prompt: "Cinematic 16:9 global shot. Times Square and global cities going pitch dark as Aether-Core shuts down. Millions of helper robots turning off and lowering their heads peacefully across the world. Dramatic twilight atmosphere." },
  { file: "sc_cap12_sec2.png", prompt: "Cinematic 16:9 serene ending shot. Cole Vance and Maya Lin standing together on the deck of a ocean vessel in the North Sea watching a bright golden sunrise break over calm waters. Hopeful cinematic conclusion." }
];

console.log(`Configurados ${scenePrompts.length} prompts detallados de escenas para generación IA.`);
