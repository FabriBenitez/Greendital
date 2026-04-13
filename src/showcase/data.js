export const currency = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

export const compactCurrency = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  notation: 'compact',
  maximumFractionDigits: 1,
})

export const sections = [
  { id: 'control', label: 'Panel de Control' },
  { id: 'products', label: 'Estudio de Productos' },
  { id: 'pos', label: 'Mesa de Negociacion' },
  { id: 'catalog', label: 'Vitrina Mobile' },
  { id: 'value', label: 'Por que 3000 USD' },
]

export const categories = [
  'Todos',
  'iPhones',
  'Accesorios',
  'Audio',
  'Proteccion',
  'Carga',
  'Reacondicionados',
]

export const brands = [
  'Todas',
  'Apple',
  'Belkin',
  'Anker',
  'Spigen',
  'ESR',
  'Otterbox',
  'Native Union',
]

export const paymentMethods = ['Efectivo', 'Transferencia', 'Mercado Pago']

export const initialProducts = [
  {
    id: 1,
    name: 'iPhone 15 128GB',
    category: 'iPhones',
    brand: 'Apple',
    sku: 'IPH-15-128',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=400', // iPhone 15 Pink
    cost: 1050000,
    price: 1349900,
    stock: 4,
    reserved: 2,
    soldMonthly: 14,
    clicks: 41,
    reservations: 9,
    lastSaleDays: 1,
    updatedAt: 'Hoy 10:15',
    supplier: 'iMport BA',
    leadTimeDays: 3,
    priceTrend: 'up',
    featured: 'Mas vendido',
    description: 'El modelo de entrada de la linea 15. Gran salida por precio y camara.',
    specs: {
      Pantalla: '6.1" Super Retina XDR',
      Chip: 'A16 Bionic',
      Camara: '48MP principal + 12MP ultra',
      Bateria: 'Hasta 20h video',
      Conectividad: 'USB-C, 5G, Wi-Fi 6',
    },
    variants: [
      { label: 'Negro', stock: 2 },
      { label: 'Rosa', stock: 1 },
      { label: 'Amarillo', stock: 1 },
    ],
    priceHistory: [1289900, 1319900, 1349900],
    bundle: ['Funda Spigen Ultra Hybrid', 'Vidrio templado ESR'],
  },
  {
    id: 2,
    name: 'iPhone 15 Pro 256GB',
    category: 'iPhones',
    brand: 'Apple',
    sku: 'IPH-15P-256',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=400', // iPhone 15 Pro
    cost: 1480000,
    price: 1899900,
    stock: 3,
    reserved: 1,
    soldMonthly: 9,
    clicks: 35,
    reservations: 7,
    lastSaleDays: 2,
    updatedAt: 'Hoy 09:50',
    supplier: 'iMport BA',
    leadTimeDays: 4,
    priceTrend: 'up',
    featured: 'Premium',
    description: 'Titanio, camara pro y chip A17. El mas pedido por fotografia y video.',
    specs: {
      Pantalla: '6.1" ProMotion 120Hz',
      Chip: 'A17 Pro',
      Camara: 'Sistema triple 48MP',
      Bateria: 'Hasta 23h video',
      Extras: 'Boton Accion, USB-C 3.0',
    },
    variants: [
      { label: 'Titanio Negro', stock: 2 },
      { label: 'Titanio Natural', stock: 1 },
    ],
    priceHistory: [1829900, 1869900, 1899900],
    bundle: ['Funda Otterbox Symmetry', 'MagSafe Charger 15W'],
  },
  {
    id: 3,
    name: 'iPhone 14 128GB',
    category: 'iPhones',
    brand: 'Apple',
    sku: 'IPH-14-128',
    image: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&q=80&w=400', // iPhone 14
    cost: 790000,
    price: 999900,
    stock: 5,
    reserved: 0,
    soldMonthly: 18,
    clicks: 29,
    reservations: 6,
    lastSaleDays: 1,
    updatedAt: 'Hoy 11:30',
    supplier: 'iMport BA',
    leadTimeDays: 3,
    priceTrend: 'down',
    featured: 'Mejor precio',
    description: 'El iPhone mas accesible del momento. Ideal para primer iPhone o regalo.',
    specs: {
      Pantalla: '6.1" Super Retina XDR',
      Chip: 'A15 Bionic',
      Camara: '12MP principal + 12MP ultra',
      Bateria: 'Hasta 20h video',
      Conectividad: 'Lightning, 5G, Wi-Fi 6',
    },
    variants: [
      { label: 'Medianoche', stock: 2 },
      { label: 'Blanco estrella', stock: 2 },
      { label: 'Rojo', stock: 1 },
    ],
    priceHistory: [1049900, 1019900, 999900],
    bundle: ['Funda de silicona Apple', 'Cable USB-C a Lightning'],
  },
  {
    id: 4,
    name: 'iPhone 16 Pro 128GB',
    category: 'iPhones',
    brand: 'Apple',
    sku: 'IPH-16P-128',
    image: 'https://imgs.search.brave.com/Dz-ZeHPhNptfTj_GtgSKDQl8AvQX8n0cS4RHiVQk3lQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS50aGV2ZXJn/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/L3NpdGVzLzIvY2hv/cnVzL3VwbG9hZHMv/Y2hvcnVzX2Fzc2V0/L2ZpbGUvMjU2MTI4/NzEvRFNDMDgzMDgu/SlBHP3F1YWxpdHk9/OTAmc3RyaXA9YWxs/JmNyb3A9MC4xMzI5/Nzg3MjM0MDQyNSww/LDk5LjczNDA0MjU1/MzE5MiwxMDAmdz0y/NDAw', // iPhone 16 Pro Desert
    cost: 1650000,
    price: 1999900,
    stock: 8,
    reserved: 3,
    soldMonthly: 25,
    clicks: 84,
    reservations: 12,
    lastSaleDays: 0,
    updatedAt: 'Hoy 12:45',
    supplier: 'iMport BA',
    leadTimeDays: 4,
    priceTrend: 'up',
    featured: 'Nuevo Lanzamiento',
    description: 'El nuevo estandar de potencia con Titanio Grado 5 y Camera Control.',
    specs: {
      Pantalla: '6.3" ProMotion 120Hz',
      Chip: 'A18 Pro',
      Camara: 'Fusion 48MP + Ultra Gran Angular 48MP',
      Bateria: 'Hasta 27h video',
      Conectividad: 'USB-C 3.0, Wi-Fi 7',
    },
    variants: [
      { label: 'Titanio Desierto', stock: 4 },
      { label: 'Titanio Natural', stock: 4 },
    ],
    priceHistory: [1899900, 1949900, 1999900],
    bundle: ['Funda de silicona MagSafe', 'Cargador 25W USB-C'],
  },
  {
    id: 5,
    name: 'iPhone 16 128GB',
    category: 'iPhones',
    brand: 'Apple',
    sku: 'IPH-16-128',
    image: 'https://imgs.search.brave.com/Dz-ZeHPhNptfTj_GtgSKDQl8AvQX8n0cS4RHiVQk3lQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS50aGV2ZXJn/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/L3NpdGVzLzIvY2hv/cnVzL3VwbG9hZHMv/Y2hvcnVzX2Fzc2V0/L2ZpbGUvMjU2MTI4/NzEvRFNDMDgzMDgu/SlBHP3F1YWxpdHk9/OTAmc3RyaXA9YWxs/JmNyb3A9MC4xMzI5/Nzg3MjM0MDQyNSww/LDk5LjczNDA0MjU1/MzE5MiwxMDAmdz0y/NDAw', // iPhone 16 Ultramarine
    cost: 1150000,
    price: 1499900,
    stock: 12,
    reserved: 1,
    soldMonthly: 45,
    clicks: 112,
    reservations: 15,
    lastSaleDays: 0,
    updatedAt: 'Hoy 14:00',
    supplier: 'iMport BA',
    leadTimeDays: 3,
    priceTrend: 'up',
    featured: 'Mas buscado',
    description: 'El nuevo iPhone 16 con Chip A18 y Camera Control. Potencia y diseño.',
    specs: {
      Pantalla: '6.1" Super Retina XDR',
      Chip: 'A18 Bionic',
      Camara: 'Fusion 48MP + Ultra Gran Angular 12MP',
      Bateria: 'Hasta 22h video',
      Conectividad: 'USB-C, Wi-Fi 7, 5G',
    },
    variants: [
      { label: 'Azul Ultramar', stock: 4 },
      { label: 'Verde Azulado', stock: 4 },
      { label: 'Rosa', stock: 4 },
    ],
    priceHistory: [1449900, 1479900, 1499900],
    bundle: ['Funda de silicona MagSafe', 'Protector de pantalla'],
  },
  {
    id: 6,
    name: 'iPhone 13 128GB Reacondicionado',
    category: 'Reacondicionados',
    brand: 'Apple',
    sku: 'IPH-13-128-R',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=400', // iPhone 13
    cost: 510000,
    price: 689900,
    stock: 3,
    reserved: 1,
    soldMonthly: 8,
    clicks: 22,
    reservations: 4,
    lastSaleDays: 4,
    updatedAt: 'Ayer 17:20',
    supplier: 'Retech AR',
    leadTimeDays: 2,
    priceTrend: 'down',
    featured: 'Oportunidad',
    description: 'iPhone 13 certificado en excelente estado. Gran entrada para publico sensible al precio.',
    specs: {
      Pantalla: '6.1" Super Retina XDR',
      Chip: 'A15 Bionic',
      Camara: '12MP Dual',
      Bateria: 'Bateria al 90%+',
      Estado: 'Grado A - Certificado',
    },
    variants: [
      { label: 'Medianoche', stock: 2 },
      { label: 'Rosa', stock: 1 },
    ],
    priceHistory: [729900, 709900, 689900],
    bundle: ['Funda Spigen', 'Garantia 6 meses'],
  },
]

export const initialCustomers = [
  {
    id: 1,
    name: 'Martina Ruiz',
    phone: '+54 9 11 6421-1402',
    segment: 'iPhones y accesorios premium',
    purchases: 4,
    lifetimeValue: 5820000,
    lastPurchase: 'Hace 12 dias',
  },
  {
    id: 2,
    name: 'Joaquin Lopez',
    phone: '+54 9 11 5188-2901',
    segment: 'Reacondicionados y fundas',
    purchases: 7,
    lifetimeValue: 3940000,
    lastPurchase: 'Hace 4 dias',
  },
  {
    id: 3,
    name: 'Valentina Sosa',
    phone: '+54 9 11 3877-0092',
    segment: 'Audio y accesorios',
    purchases: 3,
    lifetimeValue: 1418000,
    lastPurchase: 'Hace 20 dias',
  },
]

export const whatsappQueue = [
  { id: 1, customer: 'Luca Ferreyra', intent: 'Quiere reservar', productId: 2, waitMinutes: 3, stage: 'Caliente' },
  { id: 2, customer: 'Milagros Pena', intent: 'Pide mejor precio', productId: 1, waitMinutes: 7, stage: 'Negociando' },
  { id: 3, customer: 'Matias Vega', intent: 'Consulta stock hoy', productId: 3, waitMinutes: 11, stage: 'En cola' },
  { id: 4, customer: 'Sofia Vera', intent: 'Quiere combo con AirPods', productId: 4, waitMinutes: 4, stage: 'Upsell' },
]

export const pricingAlerts = [
  { id: 1, title: '3 modelos con costo subiendo', detail: 'La lista mayorista entro 6.8% arriba desde ayer.', action: 'Actualizar precios masivos' },
  { id: 2, title: '2 SKUs con margen por debajo del objetivo', detail: 'Estan por debajo de 24% de contribucion.', action: 'Revisar margen o bundle' },
  { id: 3, title: '1 modelo para liquidacion', detail: 'iPhone 13 reacondicionado lleva 49 dias sin venta.', action: 'Marcar oferta + publicar por WhatsApp' },
]

export const moduleHighlights = [
  { id: 1, title: 'WhatsApp Desk', text: 'Canaliza consultas, reservas y seguimiento desde el mismo flujo comercial.' },
  { id: 2, title: 'Control de Precios', text: 'Precio sugerido, historial y proteccion de margen para Argentina.' },
  { id: 3, title: 'Radar de Stock', text: 'Reposicion priorizada segun rotacion, reservas y lead time del proveedor.' },
  { id: 4, title: 'Mesa de Negociacion', text: 'Venta rapida con precio editable, descuento controlado y cobro flexible.' },
]

export const quickReplies = [
  'Lo tengo disponible. Te lo puedo reservar con seña.',
  'Te paso una opcion con mejor relacion precio-rendimiento.',
  'Si queres, te armo combo con funda y vidrio y te cierro precio hoy.',
]

export function buildWhatsappUrl(number, product, mode = 'consultar') {
  const intro =
    mode === 'reservar'
      ? 'Hola! Quiero reservar este producto:'
      : 'Hola! Estoy interesado en este producto:'

  const text = `${intro}

${product.name}
Precio: ${currency.format(product.price)}
SKU: ${product.sku}

${mode === 'reservar' ? 'Podemos apartarlo?' : 'Lo tenes disponible?'}`

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}