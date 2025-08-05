<!-- ARCHIVO: src/components/SkillsSection.vue -->

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

// 1. IMPORTAMOS TUS IMÁGENES LOCALES
// Asegúrate de que esta ruta sea correcta: están en src/assets/habilidades/
import malwareIcon from '@/assets/habilidades/analisis-de-virus.png';
import wiresharkIcon from '@/assets/habilidades/descarga (1).png';
import nmapIcon from '@/assets/habilidades/ojo (1).png'; // Supongo que esta es para Nmap, ¡cámbiala si es para OSINT!

const skills = ref([
  // ... Iconos que funcionan bien
  { name: 'Pentesting Web',    icon: 'material-symbols:security', type: 'iconify' },
  { name: 'Metasploit',        icon: 'simple-icons:metasploit', type: 'iconify' },
  { name: 'Python',            icon: 'mdi:language-python', type: 'iconify' },
  { name: 'Bash Scripting',    icon: 'mdi:bash', type: 'iconify' },
  { name: 'Seguridad en Redes', icon: 'mdi:lan-connect', type: 'iconify' },
  { name: 'Criptografía',      icon: 'mdi:lock', type: 'iconify' },
  { name: 'OSINT',             icon: 'mdi:magnify', type: 'iconify' },

  // 2. AÑADIMOS LAS HABILIDADES QUE USARÁN TUS IMÁGENES LOCALES
  { name: 'Análisis de Malware', icon: malwareIcon, type: 'image' },
  { name: 'Nmap',              icon: nmapIcon, type: 'image' },
  { name: 'Wireshark',         icon: wiresharkIcon, type: 'image' },
]);
</script>

<template>
  <section id="skills" class="py-24 bg-background">
    <div class="container mx-auto px-6">
      
      <!-- === INICIO DEL TÍTULO ANIMADO === -->
      <div class="text-center mb-20" data-aos="fade-up">
        <h2 
          class="relative inline-block text-3xl md:text-4xl font-extrabold text-text-primary py-2
                 tracking-wider uppercase"
        >
          <span>Habilidades Técnicas</span>
          <span 
            class="absolute bottom-0 left-0 w-full h-1 bg-accent
                   transform origin-left transition-transform duration-700 ease-out"
            data-aos="scale-x-100" 
            data-aos-anchor-placement="top-bottom"
          ></span>
        </h2>
      </div>
      <!-- === FIN DEL TÍTULO ANIMADO === -->
      
      <!-- Grid de habilidades (Tu código actual) -->
      <div class="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        
        <div 
          v-for="(skill, index) in skills" 
          :key="skill.name"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div 
            class="bg-surface p-6 h-full rounded-2xl text-center cursor-pointer border border-border-color
                   flex flex-col items-center justify-center
                   transition-transform transition-shadow duration-500 ease-in-out
                   hover:-translate-y-2 hover:border-accent hover:shadow-2xl hover:shadow-accent/10
                   group" 
          >
            <div class="w-12 h-12 mb-4">
              <Icon 
                v-if="skill.type === 'iconify'" 
                :icon="skill.icon" 
                class="w-full h-full text-text-primary
                       transform transition-all duration-300 ease-in-out
                       group-hover:scale-125 group-hover:text-accent"
              />
              <img 
                v-else-if="skill.type === 'image'" 
                :src="skill.icon" 
                alt="" 
                class="w-full h-full object-contain
                       transform transition-transform duration-300 ease-in-out
                       group-hover:scale-125"
              />
            </div>
            
            <h3 class="font-semibold text-text-primary text-sm md:text-base">{{ skill.name }}</h3>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>