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
  <section id="projects" class="py-24 relative overflow-hidden">
    
    <!-- Fondo con video -->
    <div class="absolute inset-0 z-0">
      <video autoplay muted loop playsinline :src="fondowebVideo" class="w-full h-full object-cover"></video>
      <div class="absolute inset-0 bg-black/70"></div> 
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <!-- Título con chispas -->
      <div class="text-center mb-16 relative flex items-center justify-center gap-10" data-aos="fade-up">
        <div class="spark-container spark-left">
          <span v-for="n in 8" :key="'left'+n" class="spark"></span>
        </div>

        <h2 class="title-fire">𝗠𝗜𝗦 𝗣𝗥𝗢𝗬𝗘𝗖𝗧𝗢𝗦</h2>

        <div class="spark-container spark-right">
          <span v-for="n in 8" :key="'right'+n" class="spark"></span>
        </div>
      </div>
      
      <!-- Grid de proyectos -->
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="project.title"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
          class="group relative rounded-xl overflow-hidden transition-all duration-500 ease-in-out"
        >
          <div class="absolute -inset-0.5 z-0 transition-all duration-500
                      bg-gradient-to-br from-orange-400 to-red-500
                      opacity-0 group-hover:opacity-75 blur-xl"></div>
          <div class="absolute inset-0 z-0 transition-all duration-500
                      bg-gradient-to-br from-orange-500 via-red-600 to-black
                      opacity-0 group-hover:opacity-100"></div>

          <a
            :href="project.link"
            target="_blank"
            class="relative z-10 block flex flex-col h-full 
                   bg-gray-900/80 backdrop-blur-sm
                   border border-gray-700 rounded-xl
                   transition-all duration-500
                   group-hover:bg-transparent group-hover:border-orange-400/50"
          >
            <div class="overflow-hidden">
              <img 
                :src="project.image" alt="Imagen del proyecto"
                class="w-full h-56 object-cover
                       transition-transform duration-500 ease-in-out
                       group-hover:scale-105"
              >
            </div>
            
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-bold mb-3 text-gray-200 
                         transition-colors duration-300 group-hover:text-white">
                {{ project.title }}
              </h3>
              <p class="text-sm mb-6 flex-grow text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tech in project.technologies" :key="tech"
                      class="text-xs font-semibold px-3 py-1 rounded-full
                             bg-gray-800 text-gray-300
                             transition-all duration-300
                             group-hover:bg-orange-500/20 group-hover:text-orange-300">
                  {{ tech }}
                </span>
              </div>
              <div class="inline-flex items-center text-gray-300 font-bold self-start mt-auto
                         transition-colors duration-300 group-hover:text-orange-400">
                <span>Ver Repositorio</span>
                <Icon icon="mdi:arrow-right" class="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"/>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Chispas dispersas por todo el fondo -->
    <div class="global-sparks">
      <span v-for="n in 20" :key="'global'+n" class="spark spark-global"></span>
    </div>
  </section>
</template>

<style scoped>
/* Estilo del título con negro + naranja saturado */
.title-fire {
  font-size: 3.2rem;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(to bottom, #000000 35%, #ff6a00 70%, #ff4500 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: titleGlow 3s infinite ease-in-out, heatWave 2s infinite ease-in-out;
  letter-spacing: 4px;
  filter: contrast(1.8) saturate(2.8);
  text-shadow: 0 0 18px rgba(255, 120, 0, 0.85);
}

@keyframes titleGlow {
  0%, 100% {
    text-shadow: 0 0 14px rgba(255, 120, 0, 0.7), 0 0 28px rgba(255, 69, 0, 0.6);
  }
  50% {
    text-shadow: 0 0 30px rgba(255, 160, 0, 1), 0 0 55px rgba(255, 69, 0, 0.95);
  }
}

@keyframes heatWave {
  0%   { transform: skewX(0deg) translateY(0px); }
  25%  { transform: skewX(1deg) translateY(-1px); }
  50%  { transform: skewX(-1deg) translateY(1px); }
  75%  { transform: skewX(0.5deg) translateY(-1px); }
  100% { transform: skewX(0deg) translateY(0px); }
}

/* Chispas laterales */
.spark-container {
  position: relative;
  width: 50px;
  height: 90px;
}

.spark {
  position: absolute;
  bottom: 0;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #ffb400 40%, #ff4500 70%, transparent 100%);
  border-radius: 50%;
  animation: sparkFly 1.4s infinite ease-out;
  opacity: 0.9;
}

@keyframes sparkFly {
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  60% { opacity: 1; }
  100% { transform: translate(var(--x-move), -100px) scale(0.3); opacity: 0; }
}

.spark:nth-child(1) { --x-move: -10px; animation-delay: 0s; left: 5%; }
.spark:nth-child(2) { --x-move: -15px; animation-delay: 0.2s; left: 25%; }
.spark:nth-child(3) { --x-move: 5px; animation-delay: 0.4s; left: 50%; }
.spark:nth-child(4) { --x-move: 12px; animation-delay: 0.1s; left: 75%; }
.spark:nth-child(5) { --x-move: -8px; animation-delay: 0.5s; left: 15%; }
.spark:nth-child(6) { --x-move: 18px; animation-delay: 0.3s; left: 65%; }
.spark:nth-child(7) { --x-move: -20px; animation-delay: 0.6s; left: 35%; }
.spark:nth-child(8) { --x-move: 15px; animation-delay: 0.7s; left: 85%; }

/* Chispas globales ahora bajan */
.global-sparks {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.spark-global {
  width: 4px;
  height: 4px;
  position: absolute;
  background: radial-gradient(circle, #ffdd66 40%, #ff5500 70%, transparent 100%);
  border-radius: 50%;
  animation: globalSparkFall 3s infinite ease-out;
  opacity: 0.8;
}

@keyframes globalSparkFall {
  0%   { transform: translateY(-300px) scale(0.4); opacity: 0; }
  50%  { opacity: 1; }
  100% { transform: translateY(0) scale(1); opacity: 0; }
}

.spark-global:nth-child(odd) { animation-duration: 2.5s; }
.spark-global:nth-child(even) { animation-duration: 3.5s; }
.spark-global:nth-child(1)  { left: 10%; animation-delay: 0s; }
.spark-global:nth-child(2)  { left: 25%; animation-delay: 0.5s; }
.spark-global:nth-child(3)  { left: 40%; animation-delay: 1s; }
.spark-global:nth-child(4)  { left: 60%; animation-delay: 0.2s; }
.spark-global:nth-child(5)  { left: 80%; animation-delay: 1.5s; }
.spark-global:nth-child(6)  { left: 5%; animation-delay: 2s; }
.spark-global:nth-child(7)  { left: 15%; animation-delay: 0.7s; }
.spark-global:nth-child(8)  { left: 35%; animation-delay: 1.2s; }
.spark-global:nth-child(9)  { left: 50%; animation-delay: 2.3s; }
.spark-global:nth-child(10) { left: 70%; animation-delay: 0.9s; }
.spark-global:nth-child(11) { left: 90%; animation-delay: 1.7s; }
.spark-global:nth-child(12) { left: 20%; animation-delay: 2.5s; }
.spark-global:nth-child(13) { left: 45%; animation-delay: 1.9s; }
.spark-global:nth-child(14) { left: 65%; animation-delay: 2.7s; }
.spark-global:nth-child(15) { left: 85%; animation-delay: 0.4s; }
.spark-global:nth-child(16) { left: 30%; animation-delay: 1.4s; }
.spark-global:nth-child(17) { left: 55%; animation-delay: 0.6s; }
.spark-global:nth-child(18) { left: 75%; animation-delay: 2.1s; }
.spark-global:nth-child(19) { left: 95%; animation-delay: 1.1s; }
.spark-global:nth-child(20) { left: 12%; animation-delay: 2.9s; }
</style>
