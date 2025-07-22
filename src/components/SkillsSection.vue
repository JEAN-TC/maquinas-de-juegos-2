<!-- ARCHIVO: src/components/SkillsSection.vue -->

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const skills = ref([
  { name: 'Pentesting Web', iconName: 'material-symbols:security' },
  { name: 'Análisis de Malware', iconName: 'carbon:virus' },
  { name: 'Nmap', iconName: 'tabler:brand-nmap' },
  { name: 'Wireshark', iconName: 'cib:wireshark' },
  { name: 'Metasploit', iconName: 'simple-icons:metasploit' },
  { name: 'Python', iconName: 'mdi:language-python' },
  { name: 'Bash Scripting', iconName: 'mdi:bash' },
  { name: 'Seguridad en Redes', iconName: 'mdi:lan-connect' },
  { name: 'Criptografía', iconName: 'mdi:lock' },
  { name: 'OSINT', iconName: 'mdi:magnify' },
]);
</script>

<template>
  <section id="skills" class="py-24"> <!-- Quitamos el fondo, ahora es global -->
    <div class="container mx-auto px-6">
      
      <!-- Título con el nuevo color de texto principal -->
      <h2 
        data-aos="fade-up" 
        class="text-3xl md:text-4xl font-bold text-center mb-16 text-text-primary"
      >
        Habilidades Técnicas
      </h2>
      
      <!-- Grid de habilidades -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        
        <!-- Tarjeta de Habilidad con el nuevo diseño claro -->
        <div 
          v-for="(skill, index) in skills" 
          :key="skill.name"
          :data-aos-delay="index * 100" 
          data-aos="fade-up"
          class="bg-surface p-6 rounded-lg text-center cursor-pointer border border-border-color
                 transition-all duration-300
                 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10"
        >
          <!-- Icono con el nuevo color de acento -->
          <Icon 
            :icon="skill.iconName" 
            class="text-5xl mb-4 mx-auto text-accent"
          /> 
          <!-- Texto de la habilidad con el nuevo color principal -->
          <h3 class="font-medium text-text-primary">{{ skill.name }}</h3>
        </div>

      </div>
    </div>
  </section>
</template>