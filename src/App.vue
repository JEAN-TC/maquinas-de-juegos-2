<!-- src/App.vue -->
<template>
  <div>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>

import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';
import Footer from './components/Footer.vue';
import { Icon } from '@iconify/vue';

</script>

<style>
/* Agrega estilos globales si es necesario, como un scroll-behavior suave */
html {
  scroll-behavior: smooth;
}
</style>