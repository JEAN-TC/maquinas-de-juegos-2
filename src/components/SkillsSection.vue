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
  <section id="skills" class="py-24 bg-background">
    <div class="container mx-auto px-6">
      
      <!-- Título de Sección -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="relative inline-block text-3xl md:text-4xl font-extrabold text-text-primary py-2 tracking-wider uppercase">
          <span>Habilidades Técnicas</span>
          <span 
            class="absolute bottom-0 left-0 w-full h-1 bg-accent
                   transform origin-left transition-transform duration-700 ease-out"
            data-aos="scale-x-100" 
            data-aos-anchor-placement="top-bottom"
          ></span>
        </h2>
      </div>
      
      <!-- Grid de habilidades -->
      <div class="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        
                <!-- Tarjeta de Habilidad -->
        <div 
          v-for="(skill, index) in skills" 
          :key="skill.name"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          class="bg-surface p-6 rounded-2xl text-center cursor-pointer border border-border-color
                 transition duration-700 ease-in-out
                 hover:-translate-y-2 hover:border-accent hover:shadow-2xl hover:shadow-accent/10"
        >
                     <Icon 
            :icon="skill.iconName" 
            class="text-4xl md:text-5xl mb-4 mx-auto text-text-primary
                    transition duration-500 ease-in-out
                    group-hover:text-accent group-hover:scale-110
                    group-hover:shadow-lg group-hover:shadow-accent/20"
          /> 
          <h3 class="font-semibold text-text-primary text-sm md:text-base">{{ skill.name }}</h3>
        </div>

      </div>
    </div>
  </section>
</template>