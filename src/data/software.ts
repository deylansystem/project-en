import { softwareIcons } from '../utils/icons'
import type { SoftwareItem } from '../types/components'

export const softwareItems: SoftwareItem[] = [
  {
    category: 'os',
    title: 'Operating System',
    icon: softwareIcons.windows,
    specs: 'Windows 11 Pro',
    description: 'Latest Windows OS for maximum compatibility and security',
    image: 'https://sm.pcmag.com/pcmag_au/review/m/microsoft-/microsoft-windows-11_as8h.jpg',
    accentColor: 'text-purple-600'
  },
  {
    category: 'dev',
    title: 'Development Tools',
    icon: softwareIcons.code,
    specs: 'Visual Studio Code, Docker',
    description: 'Professional development environment setup',
    image: 'https://miro.medium.com/v2/resize:fit:719/1*vmW2Gu0ElsVxq79gYRLTlw.png',
    accentColor: 'text-purple-600'
  },
  {
    category: 'creative',
    title: 'Creative Suite',
    icon: softwareIcons.command,
    specs: 'Adobe Creative Cloud',
    description: 'Complete suite for content creation and editing',
    image: 'https://citl.news.niu.edu/wp-content/uploads/sites/14/2024/05/creativecloud-800x500-1.png',
    accentColor: 'text-purple-600'
  }
]