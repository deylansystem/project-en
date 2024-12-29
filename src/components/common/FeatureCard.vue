<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  title: string
  specs: string
  description: string
  image?: string
  icon: Component
  accentColor?: string
}

defineProps<Props>()
</script>

<template>
  <div class="card group">
    <div class="flex items-center gap-4 mb-4">
      <component 
        :is="icon" 
        :class="`w-8 h-8 ${accentColor || 'text-blue-400'} transition-transform group-hover:scale-110`" 
      />
      <h3 class="text-xl font-bold text-gray-100">{{ title }}</h3>
    </div>
    
    <p :class="`text-lg font-semibold mb-3 ${accentColor || 'text-blue-400'}`">
      {{ specs }}
    </p>
    <p class="text-gray-400 mb-4">{{ description }}</p>
    
    <div v-if="image" class="relative overflow-hidden rounded-lg">
      <img 
        :src="image" 
        :alt="title" 
        class="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" 
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
    </div>
  </div>
</template>