import { hardwareIcons } from '../utils/icons'
import type { HardwareComponent } from '../types/components'

export const hardwareComponents: HardwareComponent[] = [
  {
    category: 'processor',
    title: 'Processor',
    icon: hardwareIcons.processor,
    specs: 'Intel Core i9-13900K',
    description: 'Latest generation processor with 24 cores and 32 threads for ultimate performance',
    image: 'https://cdn.wccftech.com/wp-content/uploads/2022/08/Intel-Raptor-Lake-1030x943.jpg'
  },
  {
    category: 'gpu',
    title: 'Graphics Card',
    icon: hardwareIcons.gpu,
    specs: 'NVIDIA RTX 4090',
    description: 'Top-tier graphics card with 24GB GDDR6X memory for gaming and content creation',
    image: 'https://preview.redd.it/o79vchlvq7t91.png?width=3840&format=png&auto=webp&s=df732ffa705ec40e691ed460fd7bf47a7004f0cc'
  },
  {
    category: 'ram',
    title: 'RAM',
    icon: hardwareIcons.ram,
    specs: '64GB DDR5-6000',
    description: 'High-speed memory for smooth multitasking and content creation',
    image: 'https://www.gskill.com/img/pr/2022.03.30-ddr5-6000-cl30-32gbx2-announce/02-gskill-trident-z5-rgb-silver.jpg'
  },
  {
    category: 'motherboard',
    title: 'Mother Board',
    icon: hardwareIcons.motherboard,
    specs: 'ASUS ROG STRIX Z790',
    description: 'Premium gaming motherboard with advanced features',
    image: 'https://www.neobyte.es/87466-large_default/asus-rog-strix-z790-h-gaming-wi-fi-placa-base-1700-atx.jpg'
  }
]