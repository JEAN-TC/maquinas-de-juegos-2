<!-- ARCHIVO: src/components/Navbar.vue -->

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';
// Lógica de scroll para ocultar/mostrar
const isHidden = ref(false);
const lastScrollY = ref(0);

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isHidden.value = currentScrollY > lastScrollY.value && currentScrollY > 100;
  lastScrollY.value = currentScrollY;
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <header 
    :class="[
      'fixed top-0 left-0 w-full z-50 py-4',
      'transition-transform duration-500 ease-in-out',
      { '-translate-y-full': isHidden },
      'bg-black shadow-lg'
    ]"
  >
    <!-- Borde inferior decorativo con gradiente -->
    <div class="absolute bottom-0 left-0 w-full h-px 
               bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
    
    <div class="container mx-auto px-6 flex justify-between items-center">
      
      <!-- Lado Izquierdo: Tu Nombre -->
      <a 
        href="#" 
        class="text-2xl font-extrabold hover:animate-soft-glow"
      >
        <span class="bg-gradient-to-r from-gray-300 via-white to-gray-400 text-transparent bg-clip-text">
          Tu Nombre
        </span>
      </a>

      <!-- Lado Derecho -->
      <div class="flex items-center space-x-12">
        
        <!-- Enlaces de Navegación -->
        <ul class="hidden md:flex space-x-10 font-semibold">
          <li>
            <a href="#about" class="hover:animate-soft-glow">
              <span class="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 text-transparent bg-clip-text">
                Sobre Mí
              </span>
            </a>
          </li>
          <li>
            <a href="#skills" class="hover:animate-soft-glow">
              <span class="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 text-transparent bg-clip-text">
                Habilidades
              </span>
            </a>
          </li>
          <li>
            <a href="#projects" class="hover:animate-soft-glow">
              <span class="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 text-transparent bg-clip-text">
                Proyectos
              </span>
            </a>
          </li>
          <li>
            <a href="#contact" class="hover:animate-soft-glow">
              <span class="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 text-transparent bg-clip-text">
                Contacto
              </span>
            </a>
          </li>
        </ul>

        <!-- Iconos de Redes Sociales -->
        <div class="flex items-center space-x-6">
          <a href="#" target="_blank" aria-label="GitHub" class="hover:animate-soft-glow">
            <!-- SVG de GitHub para aplicar el gradiente -->
            <svg class="w-7 h-7" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="github-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#CCCCCC" />
                  <stop offset="50%" style="stop-color:#FFFFFF" />
                  <stop offset="100%" style="stop-color:#999999" />
                </linearGradient>
              </defs>
              <path fill="url(#github-gradient)" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="LinkedIn" class="hover:animate-soft-glow">
             <!-- SVG de LinkedIn para aplicar el gradiente -->
            <svg class="w-7 h-7" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <defs>
                <linearGradient id="linkedin-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#CCCCCC" />
                  <stop offset="50%" style="stop-color:#FFFFFF" />
                  <stop offset="100%" style="stop-color:#999999" />
                </linearGradient>
              </defs>
              <path fill="url(#linkedin-gradient)" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>