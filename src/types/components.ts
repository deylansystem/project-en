export interface FeatureCardProps {
  title: string
  specs: string
  description: string
  image?: string
  icon: any
  accentColor?: string
}

export interface HardwareComponent extends FeatureCardProps {
  category: 'processor' | 'gpu' | 'ram'
}

export interface PeripheralItem extends FeatureCardProps {
  category: 'display' | 'audio' | 'input'
}

export interface SoftwareItem extends Omit<FeatureCardProps, 'image'> {
  category: 'os' | 'dev' | 'creative'
}