<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import project1Image from '@/assets/proyecto-1.png';
import project2Image from '@/assets/proyecto-2.png';
import fondowebVideo from '@/assets/Fondo-web/dale1.mp4'; 

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
  <section
    id="projects"
    class="py-24 relative z-10"
  >
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source :src="fondowebVideo" type="video/mp4" />
      Tu navegador no soporta el video de fondo.
    </video>

    <div
      class="absolute inset-0 bg-black/50 z-10"
    ></div>

    <div class="container mx-auto px-6 relative z-20">
      <div 
        class="relative group text-center mb-20 w-full max-w-lg mx-auto py-4"
        data-aos="fade-up"
      >
        <div class="absolute top-0 left-0 w-0 h-0 border-l-2 border-t-2 border-accent 
                     transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
        <div class="absolute top-0 right-0 w-0 h-0 border-r-2 border-t-2 border-accent 
                     transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
        <div class="absolute bottom-0 left-0 w-0 h-0 border-l-2 border-b-2 border-accent 
                     transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
        <div class="absolute bottom-0 right-0 w-0 h-0 border-r-2 border-b-2 border-accent 
                     transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
      
        <h2 class="text-3xl md:text-4xl font-extrabold text-white tracking-widest uppercase
                     transition-all duration-300 group-hover:text-accent group-hover:scale-105">
          Proyectos Destacados
        </h2>
      </div>
      
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
          <div class="relative flex flex-col h-full">
            <div class="overflow-hidden">
              <img :src="project.image" alt="Imagen del proyecto" 
                     class="w-full h-56 object-cover
                           transition-transform duration-500 ease-in-out
                           group-hover:scale-105">
            </div>
            <div class="relative p-6 flex flex-col flex-grow">
              <div 
                class="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 
                       cyber-glitch-overlay pointer-events-none"
              ></div>
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

<style scoped>
/* ================================================= */
/* === Estilos de iluminación y decoración === */
/* ================================================= */

/* Estos estilos se mantienen para los efectos de las tarjetas */
.group:hover .relative.flex.flex-col.h-full {
    box-shadow: 0 0 15px rgba(0, 200, 255, 0.7),
                0 0 25px rgba(0, 200, 255, 0.5),
                0 0 40px rgba(0, 200, 255, 0.3);
    border-color: rgba(0, 200, 255, 0.5);
    transition: all 0.4s ease-in-out;
}
.group:hover .text-gray-900 { color: #fff; }
.group:hover .text-gray-600 { color: #e0e0e0; }
.group:hover .bg-gray-100 { background-color: rgba(0, 200, 255, 0.2); color: #00e0ff; }
.group:hover .text-gray-800 { color: #00e0ff; }
.group:hover h2 {
    text-shadow: 0 0 10px #fff,
                 0 0 20px rgba(0, 200, 255, 0.8),
                 0 0 30px rgba(0, 200, 255, 0.6);
    transition: text-shadow 0.4s ease-in-out;
}
.cyber-glitch-overlay {
    background-color: rgba(10, 25, 47, 0.7);
    box-shadow:
      inset 0 0 50px rgba(14, 165, 233, 0.4),
      inset 0 0 15px rgba(4, 31, 44, 0.308);
    overflow: hidden;
    position: absolute;
}
.cyber-glitch-overlay::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200%;
    background: transparent url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYmVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGUmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC41IDAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjam9pc2UpIi8+PC9zdmc+');
    animation: noise 2s steps(10) infinite;
    opacity: 0.1;
}
@keyframes noise {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-5%, -10%); }
    20% { transform: translate(-15%, 5%); }
    30% { transform: translate(7%, -25%); }
    40% { transform: translate(-5%, 25%); }
    50% { transform: translate(-15%, 10%); }
    60% { transform: translate(15%, 0%); }
    70% { transform: translate(0%, 15%); }
    80% { transform: translate(25%, 35%); }
    90% { transform: translate(-10%, 10%); }
}
</style>