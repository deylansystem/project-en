<script setup lang="ts">
import FeatureCard from './common/FeatureCard.vue'
import { hardwareComponents } from '../data/hardware'
</script>

<template>
  <section class="py-24 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900"></div>
    
    <div class="relative container mx-auto px-4">
      <h2 class="section-title text-center">Hardware Components</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          v-for="component in hardwareComponents"
          :key="component.title"
          v-bind="component"
        />
      </div>
    </div>
  </section>
</template>