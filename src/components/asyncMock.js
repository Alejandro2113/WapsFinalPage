const products = [
  {
    id: "1",
    name: "Iphone 15 PRO max",
    price: 1400,
    category: "apple",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-15-pro-202309?wid=384&hei=512&fmt=jpeg&qlt=90&.v=1692827834790",
    stock: 12,
    description: "Iphone 15 PRO MAX 256GB",
    details:
      "El iPhone 15 Pro Max es la joya de la corona de Apple en su línea de dispositivos móviles. Aquí tienes algunos puntos destacados:Diseño de Titanio: El iPhone 15 Pro Max presenta un chasis de titanio, lo que no solo le otorga mayor resistencia, sino también un aspecto elegante y moderno. Pantalla Impresionante: Su pantalla OLED de 6.7 pulgadas es una maravilla visual. Con una tasa de refresco de 120 Hz, colores vibrantes y tecnología HDR, es perfecta para ver contenido multimedia y jugar. Potencia Interna: Está impulsado por el procesador Apple A17 Pro de seis núcleos, lo que garantiza un rendimiento excepcional en todas las tareas. Sistema de Cámaras Pro: La cámara principal de 48 MP ofrece estabilización óptica de imagen y compatibilidad con fotos de superalta resolución. Además, cuenta con un teleobjetivo para zoom óptico y otras características avanzadas. Extras: El iPhone 15 Pro Max también incluye parlantes estéreo, Face ID para desbloqueo seguro, carga inalámbrica y resistencia al polvo y al agua.",
  },
  {
    id: "2",
    name: "Iphone 15 PRO",
    price: 1300,
    category: "apple",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-15-pro-202309?wid=384&hei=512&fmt=jpeg&qlt=90&.v=1692827834790",
    stock: 20,
    description: "Iphone 15 PRO 256GB",
    details:
      "El iPhone 15 Pro es el hermano menor de su version pro max, en su línea de dispositivos móviles. Aquí tienes algunos puntos destacados:Diseño de Titanio: El iPhone 15 Pro presenta un chasis de titanio, lo que no solo le otorga mayor resistencia, sino también un aspecto elegante y moderno. Pantalla Impresionante: Su pantalla OLED de 5.6 pulgadas es una maravilla visual. Con una tasa de refresco de 120 Hz, colores vibrantes y tecnología HDR, es perfecta para ver contenido multimedia y jugar. Potencia Interna: Está impulsado por el procesador Apple A17 Pro de seis núcleos, lo que garantiza un rendimiento excepcional en todas las tareas. Sistema de Cámaras Pro: La cámara principal de 48 MP ofrece estabilización óptica de imagen y compatibilidad con fotos de superalta resolución. Además, cuenta con un teleobjetivo para zoom óptico y otras características avanzadas. Extras: El iPhone 15 Pro también incluye parlantes estéreo, Face ID para desbloqueo seguro, carga inalámbrica y resistencia al polvo y al agua.",
  },
  {
    id: "3",
    name: "Iphone 14 128 gb",
    price: 1250,
    category: "apple",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-14-202309?wid=384&hei=512&fmt=jpeg&qlt=90&.v=1693516153040",
    stock: 22,
    description: "Iphone 14 128GB",
    details:
      "Diseño y Dimensiones: El iPhone 14 presenta un diseño elegante con una pantalla Super Retina XDR de 6.1 pulgadas (15.4 cm) en diagonal. Sus esquinas redondeadas se integran perfectamente en un rectángulo estándar. El grosor del dispositivo es de 7.8 mm, y su peso es de 172 g12. Resistencia y Certificación IP68: Este teléfono es resistente al agua y al polvo gracias a su certificación IP68. Puede sumergirse hasta 6 metros de profundidad durante un máximo de 30 minutos sin sufrir daños3. Cámara Dual de Alta Resolución: El sistema de cámara dual incluye una lente principal de 12 MP con estabilización óptica de imagen y una lente ultra gran angular de 12 MP con un campo de visión de 120°. Además, cuenta con funciones como el Modo Retrato, HDR Inteligente y grabación de vídeo en 4K y HDR con Dolby Vision1. Rendimiento y Chip A15 Bionic: El iPhone 14 está impulsado por el potente chip A15 Bionic, que consta de un CPU de 6 núcleos y una GPU de 5 núcleos. También cuenta con el Neural Engine de 16 núcleos para tareas de inteligencia artificial1. Extras: Entre otras características, el iPhone 14 ofrece sonido Hi-Fi, parlantes estéreo, carga inalámbrica y estabilización de imagen por sensor4. En resumen, el iPhone 14 combina un diseño atractivo con un rendimiento sólido y una excelente calidad de cámara. ¡Espero que esta descripción te ayude a conocer más sobre este dispositivo!",
  },
  {
    id: "4",
    name: "Iphone 15 128 GB",
    price: 1300,
    category: "apple",
    img: "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-geo-230912_inline.jpg.large_2x.jpg",
    stock: 25,
    description: "Descripcion de Iphone 15",
    details: `Diseño y Dimensiones: El iPhone 15 conserva el diseño elegante de la generación anterior, pero incorpora una característica llamada Dynamic Island en su pantalla de 6.1 pulgadas. Su chasis está construido en aluminio, y la parte delantera cuenta con Ceramic Shield para mayor resistencia. En la parte trasera, encontramos vidrio tintado en masa en colores como negro, azul, verde, amarillo y rosa12.
Pantalla Super Retina XDR: La pantalla OLED de 6.1 pulgadas (15.54 cm) en diagonal ofrece una resolución de 2,556 por 1,179 píxeles a 460 píxeles por pulgada. Las esquinas redondeadas complementan el diseño curvo del dispositivo. Además, cuenta con tecnologías como HDR, True Tone y una amplia gama cromática (P3). Su brillo máximo alcanza los 1,000 nits (típico) y puede llegar hasta 1,600 nits en modo HDR y 2,000 nits en exteriores1.
Potencia Interna: El iPhone 15 está impulsado por el procesador Apple A16 Bionic, que consta de un CPU de 6 núcleos (2 de rendimiento y 4 de eficiencia), una GPU de 5 núcleos y un Neural Engine de 16 núcleos. Esto garantiza un rendimiento sólido en todas las tareas1.
Cámara Dual Avanzada: Su sistema de cámara dual incluye:
Cámara principal de 48 MP con apertura de ƒ/1.6, estabilización óptica de imagen y compatibilidad con fotos de altísima resolución.
Lente ultra gran angular de 12 MP con apertura de ƒ/2.4 y campo de visión de 120°.
Teleobjetivo x2 de 12 MP con apertura de ƒ/1.6 y estabilización óptica de imagen.
Zoom óptico de acercamiento x2 y zoom óptico de alejamiento x2, con un rango de zoom óptico total de x4.
Funciones como Modo Noche, Retratos avanzados y HDR Inteligente1.
Extras: Además, el iPhone 15 cuenta con reconocimiento facial Face ID y una cámara frontal de 12 MP. En resumen, es un dispositivo que combina diseño, potencia y fotografía de alta calidad.
`,
  },
  {
    id: "5",
    name: "Ipad 10ma generacion",
    price: 600,
    category: "apple",
    img: "https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_10th_gen__ej5p5x6yf2gm_xlarge_2x.png",
    stock: 5,
    description: "Descripcion de Ipad",
    details: `Liquid Retina display
10.9-inch (diagonal) LED backlit Multi‑Touch display with IPS technology
2360-by-1640-pixel resolution at 264 pixels per inch (ppi)
True Tone display
500 nits brightness
Fingerprint-resistant oleophobic coating
Supports Apple Pencil
(USB-C)
Supports Apple Pencil
(1st generation)
The iPad display has rounded corners. When measured diagonally as a rectangle, the screen is 10.86 inches. Actual viewable area is less.
 Pair and charge Apple Pencil (1st generation) using USB‑C to Apple Pencil Adapter.
4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps
1080p HD video recording at 25 fps, 30 fps, or 60 fps
720p HD video recording at 30 fps or 60 fps
Slo‑mo video support for 1080p at 120 fps or 240 fps
Time-lapse video with stabilization
Extended dynamic range for video up to 30 fps
Video image stabilization
Cinematic video stabilization (1080p and 720p)
Continuous autofocus video
Playback zoom
Video formats captured: HEVC and H.264`,
  },
  {
    id: "6",
    name: "Samsung s23 pro",
    price: 800,
    category: "samsung",
    img: "https://images.samsung.com/latin/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-colors-green-back.jpg",
    stock: 16,
    description: "Descripcion de Samsung s23 pro",
    details: `Product Identifiers
BrandSamsung
MPNSM-S928UZTFXAA
ModelSamsung Galaxy S24 Ultra
eBay Product ID (ePID)7064930794
Product Key Features
SIM Card SlotDual SIM (SIM + eSIM)
FeaturesWireless PowerShare, Ultra Wide-Angle Camera, Fingerprint Sensor, eSIM, Telephoto Lens
Camera Resolution200.0 MP, 12.0 MP, 50.0 MP, 10.0 MP
ProcessorOcta Core
Model NumberSm-S928u
ColorGray
Operating SystemAndroid
StyleBar
NetworkUnlocked
Storage Capacity512 GB
Connectivity5G, Bluetooth, Wi-Fi, NFC
Screen Size6.8 in
RAM12 GB
Chipset ModelQualcomm Snapdragon 8 Gen 3 for Galaxy
Dimensions
Item Height6.39 in
Item Width3.11 in
Item Weight8.18 oz
Additional Product Features
Release Date1/17/2024
Wireless ChargingYes
Pixel Density501 ppi
Water ResistanceYes
Display Resolution3120 x 1440
Manufacturer ColorTitanium Gray
StylusYes
Number of Lenses in Back Camera4
Front Camera Resolution12 MP
Number of Lenses in Front Camera1
Back Camera Resolution50 MP, 12 MP, 200 MP, 10 MP
Network Generation5G
Battery Capacity5000 mAh
Display TechnologyAMOLED
Item Depth0.34 in

`,
  },
  {
    id: "7",
    name: "Playstation 5",
    price: 800,
    category: "consoles",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png",
    stock: 12,
    description: "Descripcion de Playstation 5",
    details: `CPU y GPU:
CPU: 8 núcleos Zen 2 a una frecuencia de reloj variable de hasta 3.5 GHz.
GPU: 10.28 teraflops, 36 unidades de cálculo a una frecuencia de reloj variable de hasta 2.23 GHz. La arquitectura de la GPU es RDNA 2 personalizada desarrollada por AMD123.
Memoria:
16 GB de memoria RAM tipo GDDR6 con un bus de 256 bits.
Almacenamiento interno:
Disco duro SSD patentado de 825 GB, que ofrece velocidades de carga ultrarrápidas4.
Unidad óptica:
PS5 incluye una unidad de lectura de discos 4K UHD Blu-ray.
`,
  },
  {
    id: "8",
    name: "Nintendo switch lite",
    price: 300,
    category: "consoles",
    img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_800/dpr_2.0/ncom/en_US/switch/lite/dedicated-to-handheld",
    stock: 10,
    description: "Descripcion de swicht lite",
    details: `Size	
Approximately 3.6 inches high, 8.2 inches long, and .55 inches deep
*The depth from the tip of the analog sticks to the tip of the ZL/ZR buttons is 1.12 inches

Weight	
Approx. .61 lbs

Screen	
Capacitive touch screen / 5.5 inch LCD / 1280x720 resolution

CPU/GPU	
NVIDIA Custom Tegra processor

Storage	
32 GB of internal storage, a portion of which is reserved for use by the system. Users can easily expand storage space using microSDHC or microSDXC cards up to 2TB (sold separately).

Wireless	
Wi-Fi (IEEE 802.11 a/b/g/n/ac

Bluetooth 4.1 / NFC (near field communication)

Speakers	
Stereo

Buttons	
Left Stick
Right Stick
A B X Y L R ZL ZR + - Buttons
+ Control Pad
Power Button
Volume Button
HOME Button
Capture Button

USB connector	
USB Type-C
Used for charging only.

Headphone/mic jack	
3.5mm 4-pole stereo (CTIA standard)

Game card slot	
Nintendo Switch game cards

microSD card slot	
Compatible with microSD, microSDHC and microSDXC memory cards.
*Once the microSDXC card is inserted, a system update will be necessary. An Internet connection is required to perform this system update.

Sensor	
Accelerometer / gyroscope

Operating environment	
41-95 degrees F / 20-80% humidity

Internal battery	
Lithium ion battery / battery capacity 3570mAh

Battery life	
Model number: HDH-001
Approx. 3.0 to 7.0 hours

*The battery life will depend on the games you play. For instance, the battery will last approximately 4 hours for The Legend of Zelda: Breath of the Wild.

Power Consumption	
Handheld & Tabletop modes
Playing a game: Approx. 4W
Watching a video: Approx. 3W
On the main menu: Approx. 2W
Sleep mode: Approx. 0.03W
Power off: Less than 0.01W

Estimated annual energy consumption*: Approx. 3 kWh
`,
  },
  {
    id: "9",
    name: "Nintendo switch zelda",
    price: 450,
    category: "consoles",
    img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_600/ncom/My%20Nintendo%20Store/EN-US/Hardware/nintendo-switch-oled-model-the-legend-of-zelda-tears-of-the-kingdom-edition-112870/112870-legend-of-zelda-tears-of-the-kingdom-switch-oled-special-edition-console-and-joy-con-front-1200x675",
    stock: 5,
    description: "Descripcion de swicht zelda",
    details: `
Size	
Approximately 4 inches high, 9.4 inches long, and 0.55 inches deep (with Joy-Con attached)
*The depth from the tip of the analog sticks to the tip of the ZL/ZR buttons is 1.12 inches

Weight	
Approximately .66 lbs
(Approximately .88 lbs when Joy-Con controllers are attached)

Screen	
Multi-touch capacitive touch screen / 6.2-inch LCD Screen / 1280 x 720

CPU/GPU	
NVIDIA Custom Tegra processor

Storage	
32 GB of internal storage, a portion of which is reserved for use by the system. Users can easily expand storage space using microSDHC or microSDXC cards up to 2TB (sold separately).

Wireless	
Wi-Fi (IEEE 802.11 a/b/g/n/ac)(*)
Bluetooth 4.1
(*In TV mode, Nintendo Switch systems can be connected with a wired LAN adapter - sold separately)

Video output	
Up to 1080p via HDMI in TV mode
Up to 720p via built-in screen in tabletop mode and handheld mode

Audio output	
Compatible with 5.1ch Linear PCM output
Output via HDMI connector in TV mode

Speakers	
Stereo

Buttons	
Power button / Volume button

USB connector	
USB Type-C
Used for charging or for connecting to the Nintendo Switch dock.

Headphone/mic jack	
3.5mm 4-pole stereo (CTIA standard)

Game card slot	
Nintendo Switch game cards

microSD card slot	
Compatible with microSD, microSDHC, and microSDXC memory cards *Once the microSDXC card is inserted, a system update will be necessary. An Internet connection is required to perform this system update.

Sensor	
Accelerometer, gyroscope, and brightness sensor

Operating environment	
41-95 degrees F / 20-80% humidity

Internal battery	
Lithium-ion battery/4310mAh

Battery life	
Approximately 4.5 - 9 hours
*The battery life will depend on the games you play. For instance, the battery will last approximately 5.5 hours for The Legend of Zelda: Breath of the Wild.

Power Consumption	
TV mode
Playing a game: Approx. 7W
Watching a video: Approx. 6W
On the main menu: Approx. 3W
Sleep mode: Approx. 0.3W
Power off: Approx. 0.3W

Handheld & Tabletop modes
Playing a game: Approx. 4W
Watching a video: Approx. 3W
On the main menu: Approx. 2W
Sleep mode: Approx. 0.03W
Power off: Less than 0.01W

Estimated annual energy consumption*: Approx. 6 kWh

*The estimated annual energy consumption of a console when used for gaming an average two hours per day for a whole year.

Power consumption varies depending on software and usage conditions. Values have been rounded off to the nearest full value. There also may be some statistical variations on the energy consumption values displayed. The values could also change depending on the usage environment and conditions.

Charging time	
Approximately 3 hours
*When charging while the hardware is in sleep mode
`,
  },
  {
    id: "10",
    name: "Nintendo switch mario",
    price: 450,
    category: "consoles",
    img: "https://siman.vtexassets.com/arquivos/ids/4754222-1600-auto?v=638319602370400000&width=1600&height=auto&aspect=true",
    stock: 5,
    description: "Descripcion de swicht mario",
    details: `
Size	
Approximately 4 inches high, 9.4 inches long, and 0.55 inches deep (with Joy-Con attached)
*The depth from the tip of the analog sticks to the tip of the ZL/ZR buttons is 1.12 inches

Weight	
Approximately .66 lbs
(Approximately .88 lbs when Joy-Con controllers are attached)

Screen	
Multi-touch capacitive touch screen / 6.2-inch LCD Screen / 1280 x 720

CPU/GPU	
NVIDIA Custom Tegra processor

Storage	
32 GB of internal storage, a portion of which is reserved for use by the system. Users can easily expand storage space using microSDHC or microSDXC cards up to 2TB (sold separately).

Wireless	
Wi-Fi (IEEE 802.11 a/b/g/n/ac)(*)
Bluetooth 4.1
(*In TV mode, Nintendo Switch systems can be connected with a wired LAN adapter - sold separately)

Video output	
Up to 1080p via HDMI in TV mode
Up to 720p via built-in screen in tabletop mode and handheld mode

Audio output	
Compatible with 5.1ch Linear PCM output
Output via HDMI connector in TV mode

Speakers	
Stereo

Buttons	
Power button / Volume button

USB connector	
USB Type-C
Used for charging or for connecting to the Nintendo Switch dock.

Headphone/mic jack	
3.5mm 4-pole stereo (CTIA standard)

Game card slot	
Nintendo Switch game cards

microSD card slot	
Compatible with microSD, microSDHC, and microSDXC memory cards *Once the microSDXC card is inserted, a system update will be necessary. An Internet connection is required to perform this system update.

Sensor	
Accelerometer, gyroscope, and brightness sensor

Operating environment	
41-95 degrees F / 20-80% humidity

Internal battery	
Lithium-ion battery/4310mAh

Battery life	
Approximately 4.5 - 9 hours
*The battery life will depend on the games you play. For instance, the battery will last approximately 5.5 hours for The Legend of Zelda: Breath of the Wild.

Power Consumption	
TV mode
Playing a game: Approx. 7W
Watching a video: Approx. 6W
On the main menu: Approx. 3W
Sleep mode: Approx. 0.3W
Power off: Approx. 0.3W

Handheld & Tabletop modes
Playing a game: Approx. 4W
Watching a video: Approx. 3W
On the main menu: Approx. 2W
Sleep mode: Approx. 0.03W
Power off: Less than 0.01W

Estimated annual energy consumption*: Approx. 6 kWh

*The estimated annual energy consumption of a console when used for gaming an average two hours per day for a whole year.

Power consumption varies depending on software and usage conditions. Values have been rounded off to the nearest full value. There also may be some statistical variations on the energy consumption values displayed. The values could also change depending on the usage environment and conditions.

Charging time	
Approximately 3 hours
*When charging while the hardware is in sleep mode
`,
  },
  {
    id: "11",
    name: "Air pods Pro",
    price: 250,
    category: "accesories",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1694014871985",
    stock: 12,
    description: "Descripcion de swicht mario",
    details: `Features
Custom high-excursion Apple driver
Custom high dynamic range amplifier
Active Noise Cancellation
Adaptive Transparency
Vent system for pressure equalization
Personalized Spatial Audio with dynamic head tracking
Adaptive EQ
Sensors
Dual beamforming microphones
Inward-facing microphone
Dual optical sensors
Motion-detecting accelerometer
Speech-detecting accelerometer
Skin-detect sensor
Connectivity
Bluetooth 5.3
Accessibility
Live Listen audio
Headphone levels
Headphone Accommodations
Conversation Boost
Chipset
Apple H2 headphone chip and Apple U1 chip in MagSafe Charging Case
Battery Life
Up to 6 hours of listening time with a single charge (up to 5.5 hours with Spatial Audio and Head Tracking enabled)
Up to 4.5 hours of talk time with a single charge
AirPods Pro with MagSafe Charging Case
Up to 30 hours of listening time
Up to 24 hours of talk time
AirPods Pro Dimensions
Height: 30.9 mm
Width: 21.8 mm
Depth: 24.0 mm
Weight: 5.3 grams
AirPods Pro Case Dimensions
Height: 45.2 mm 
Width: 60.6 mm 
Depth: 21.7 mm 
Weight: 50.8 grams
Water Resistance
Sweat and water-resistant (IPX4), making them perfect for your active lifestyle.
`,
  },
  {
    id: "12",
    name: "Airpods max",
    price: 450,
    category: "accesories",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604022365000",
    stock: 16,
    description: "Descripcion de swicht mario",
    details: `Audio Technology
Apple-designed dynamic driver
Active Noise Cancellation
Transparency mode
Personalized Spatial Audio with dynamic head tracking1
Adaptive EQ
Sensors
Optical sensor (each ear cup)
Position sensor (each ear cup)
Case-detect sensor (each ear cup)
Accelerometer (each ear cup)
Gyroscope (left ear cup)
Microphones
Nine microphones total:

Eight microphones for Active Noise Cancellation
Three microphones for voice pickup (two shared with Active Noise Cancellation and one additional microphone)
Chip
Apple H1 headphone chip (each ear cup)

Controls
Digital Crown

Turn for volume control
Press once to play or pause media
Press once to answer a call or mute or unmute
Press twice to end a call
Press twice to skip forward
Press three times to skip back
Press and hold for Siri
Noise control button

Press to switch between Active Noise Cancellation and Transparency mode
Hey Siri

Say “Hey Siri” to do things like play a song, make a call, or get directions
`,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 100);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 100);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 200);
  });
};
