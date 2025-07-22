<template>
  <section id="projects" class="py-24 bg-background">
    <div class="container mx-auto px-6">
      
      <!-- === INICIO DEL NUEVO TÍTULO ANIMADO === -->
      <div class="text-center mb-20" data-aos="fade-up">
        <h2 
          class="relative inline-block text-3xl md:text-4xl font-extrabold text-text-primary py-2
                 tracking-wider uppercase"
        >
          <span>Proyectos Destacados</span>
      
          <!-- LÍNEA ANIMADA INFERIOR -->
          <span 
            class="absolute bottom-0 left-0 w-full h-1 bg-accent
                   transform origin-left transition-transform duration-700 ease-out"
            data-aos="scale-x-100" 
            data-aos-anchor-placement="top-bottom"
          ></span>
        </h2>
      </div>
      <!-- === FIN DEL NUEVO TÍTULO ANIMADO === -->

      
      <!-- GRID DE PROYECTOS (Tu código se mantiene igual) -->
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div 
          v-for="(project, index) in projects" 
          :key="project.title"
          data-aos="fade-up"
          :data-aos-delay="index * 300"
          class="bg-surface rounded-lg overflow-hidden border border-border-color
                 flex flex-col
                 transform transition-all duration-500
                 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20"
        >
          <a :href="project.link" target="_blank" class="block">
            <img :src="project.image" alt="Imagen del proyecto" class="w-full h-56 object-cover">
          </a>
          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-bold mb-3 text-text-primary">{{ project.title }}</h3>
            <p class="text-text-secondary mb-5 flex-grow">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tech in project.technologies" :key="tech" class="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                {{ tech }}
              </span>
            </div>
            <a v-if="project.link" :href="project.link" target="_blank" class="inline-flex items-center text-accent hover:underline font-bold self-start mt-auto">
              <span>Ver Repositorio</span>
              <Icon icon="mdi:arrow-right" class="w-5 h-5 ml-1" />
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>



<script setup>
import { ref } from 'vue';
import project1Image from '@/assets/proyecto-1.png';
import project2Image from '@/assets/proyecto-2.png';
// Si tienes una tercera imagen, impórtala también:
// import project3Image from '@/assets/proyecto-3.png';

const projects = ref([
  {
    title: 'Análisis de Vulnerabilidades App Web',
    description: '...',
    technologies: ['Burp Suite', 'OWASP ZAP', 'Nmap', 'SQLMap'],
    image: project1Image,
    link: '...'
  },
  {
    title: 'Keylogger en Python',
    description: '...',
    technologies: ['Python', 'Sockets', 'pynput'],
    image: project2Image,
    link: '...'
  },
  // --- ¡AÑADE UN TERCER PROYECTO AQUÍ! ---
  {
    title: 'Mi Tercer Proyecto Increíble',
    description: 'Esta es la descripción de mi tercer proyecto, donde demuestro mis habilidades en seguridad ofensiva y defensiva.',
    technologies: ['Otra', 'Tecnología', 'Genial'],
    image: project1Image, // Puedes usar una imagen temporal mientras consigues la correcta
    link: '...'
  },
  // Y puedes seguir añadiendo más...
]);
</script>