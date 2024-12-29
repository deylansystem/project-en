import { 
  ComputerDesktopIcon,
  ServerIcon,
  CpuChipIcon,
  Square3Stack3DIcon,
  SpeakerWaveIcon,
  DeviceTabletIcon,
  WindowIcon,
  CodeBracketIcon,
  CommandLineIcon
} from '@heroicons/vue/24/outline'

export const hardwareIcons = {
  processor: CpuChipIcon,
  gpu: ServerIcon,
  ram: Square3Stack3DIcon,
  motherboard: ServerIcon
}

export const peripheralIcons = {
  monitor: ComputerDesktopIcon,
  speaker: SpeakerWaveIcon,
  input: DeviceTabletIcon
}

export const softwareIcons = {
  windows: WindowIcon,
  code: CodeBracketIcon,
  command: CommandLineIcon
}

