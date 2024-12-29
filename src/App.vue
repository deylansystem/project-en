<script setup lang="ts">
import Header from './components/Header.vue'
import ComponentSection from './components/ComponentSection.vue'
import SoftwareSection from './components/SoftwareSection.vue'
import PeripheralsSection from './components/PeripheralsSection.vue'
</script>

<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <ComponentSection />
      <SoftwareSection />
      <PeripheralsSection />
    </main>
    <footer class="bg-gray-800 text-white py-8 text-center">
      <p class="font-times">© 2025 Jose A. Deyan D. - Dream Computer Build Project</p>
    </footer>
  </div>
</template>