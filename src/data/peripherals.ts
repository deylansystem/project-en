import { peripheralIcons } from '../utils/icons'
import type { PeripheralItem } from '../types/components'

export const peripheralItems: PeripheralItem[] = [
  {
    category: 'display',
    title: 'Monitor',
    icon: peripheralIcons.monitor,
    specs: 'LG 34" Ultrawide QHD',
    description: '3440x1440, 144Hz, HDR',
    image: 'https://m.media-amazon.com/images/I/61nEKG51KGL._AC_UF1000,1000_QL80_.jpg',
    accentColor: 'text-green-600'
  },
  {
    category: 'audio',
    title: 'Audio',
    icon: peripheralIcons.speaker,
    specs: 'Audio-Technica ATH-M50x',
    description: 'Professional Studio Headphones',
    image: 'https://cannonsound.com.au/cdn/shop/files/audio-technica-ath-m50x-lab-professional-monitor-headphones---limited-edition-33247926.jpg?v=1725946924',
    accentColor: 'text-green-600'
  },
  {
    category: 'input',
    title: 'Input Devices',
    icon: peripheralIcons.input,
    specs: 'Logitech G Pro X Superlight',
    description: 'Mechanical Keyboard & Wireless Mouse',
    image: 'https://s1.q4cdn.com/104539020/files/doc_multimedia/PROX2-Landscape-21.jpg',
    accentColor: 'text-green-600'
  }
]