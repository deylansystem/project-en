<script setup lang="ts">
import FeatureCard from './common/FeatureCard.vue'
import { peripheralItems } from '../data/peripherals'
</script>

<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="section-title text-center">Peripherals</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          v-for="item in peripheralItems"
          :key="item.title"
          v-bind="item"
        />
      </div>
    </div>
  </section>
</template>