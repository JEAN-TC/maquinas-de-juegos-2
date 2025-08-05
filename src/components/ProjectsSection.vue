<!-- ARCHIVO: src/components/ProjectsSection.vue (Con Mejoras Añadidas) -->

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import project1Image from '@/assets/proyecto-1.png';
import project2Image from '@/assets/proyecto-2.png';


const projects = ref([
  {
    title: 'Análisis de Vulnerabilidades App Web',
    description: 'Pentest completo a una aplicación web, identificando XSS, SQLi y CSRF, y elaborando un informe detallado con recomendaciones.',
    technologies: ['Burp Suite', 'OWASP ZAP', 'Nmap', 'SQLMap'],
    image: project1Image,
    link: '#'
  },
  {
    title: 'Keylogger en Python',
    description: 'Desarrollo de un keylogger educativo para entender su funcionamiento y detección. Captura y envía pulsaciones a un servidor seguro.',
    technologies: ['Python', 'Sockets', 'pynput'],
    image: project2Image,
    link: '#'
  },

  {
    title: 'Mi Tercer Proyecto Increíble',
    description: 'Simulación de un ataque dirigido (Red Team) para evaluar las defensas de una red, incluyendo fases de OSINT, explotación y post-explotación.',
    technologies: ['Metasploit', 'Kali Linux', 'Active Directory'],
    image: project1Image,
    link: '#'
  },
  
]);
</script>

<template>
  <section id="projects" class="py-24 bg-background">
    <div class="container mx-auto px-6">
      
<!-- === TÍTULO FINAL ESTILO "HUD INTERACTIVO" === -->
<div 
  class="relative group text-center mb-20 w-full max-w-lg mx-auto py-4"
  data-aos="fade-up"
>
  <!-- Las 4 esquinas decorativas. Invisibles por defecto. -->
  <div class="absolute top-0 left-0 w-0 h-0 border-l-2 border-t-2 border-accent 
              transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
  <div class="absolute top-0 right-0 w-0 h-0 border-r-2 border-t-2 border-accent 
              transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
  <div class="absolute bottom-0 left-0 w-0 h-0 border-l-2 border-b-2 border-accent 
              transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
  <div class="absolute bottom-0 right-0 w-0 h-0 border-r-2 border-b-2 border-accent 
              transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>

  <!-- Título -->
  <h2 class="text-3xl md:text-4xl font-extrabold text-text-primary tracking-widest uppercase
             transition-all duration-300 group-hover:text-accent group-hover:scale-105">
    Proyectos Destacados
  </h2>
</div>

      
      <!-- GRID DE PROYECTOS (Tu código original sin cambios) -->
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <a 
          v-for="(project, index) in projects" 
          :key="project.title"
          :href="project.link" 
          target="_blank"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
          class="group block bg-white rounded-xl overflow-hidden border border-gray-200
                 shadow-lg transition-all duration-500 ease-in-out
                 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 hover:border-transparent"
        >
          <!-- Contenido de la tarjeta -->
          <div class="relative flex flex-col h-full">
            <!-- Imagen -->
            <div class="overflow-hidden">
              <img :src="project.image" alt="Imagen del proyecto" 
                   class="w-full h-56 object-cover
                          transition-transform duration-500 ease-in-out
                          group-hover:scale-105">
            </div>

            <!-- Contenido del texto -->
            <div class="relative p-6 flex flex-col flex-grow">
              <!-- ✨ Capa de "Cyber Glitch" que aparece en Hover ✨ -->
              <div 
                class="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 
                       cyber-glitch-overlay pointer-events-none"
              ></div>
              
              <!-- Contenido Textual (posicionado encima de la capa) -->
              <div class="relative z-10 flex flex-col flex-grow">
                <h3 class="text-xl font-bold mb-3 text-gray-900
                           transition-colors duration-300 group-hover:text-white">
                  {{ project.title }}
                </h3>
                
                <p class="text-sm mb-6 flex-grow min-h-[90px] text-gray-600
                           transition-colors duration-300 group-hover:text-gray-300">
                  {{ project.description }}
                </p>
                
                <div class="flex flex-wrap gap-2 mb-6">
                  <span v-for="tech in project.technologies" :key="tech"
                        class="text-xs font-semibold px-3 py-1 rounded-full 
                               bg-gray-100 text-gray-800
                               transition-colors duration-300
                               group-hover:bg-cyan-400/10 group-hover:text-cyan-300">
                    {{ tech }}
                  </span>
                </div>
                
                <div class="inline-flex items-center text-gray-800 font-bold self-start mt-auto
                            transition-colors duration-300 group-hover:text-cyan-300">
                  <span>Ver Repositorio</span>
                  <Icon icon="mdi:arrow-right" class="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"/>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>