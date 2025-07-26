<!-- ARCHIVO: src/components/Navbar.vue -->

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from '@iconify/vue';

// Lógica para ocultar/mostrar la barra
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
      'fixed top-0 left-0 w-full z-50',
      'transition-transform duration-500 ease-in-out py-4',
      { '-translate-y-full': isHidden },
      
      // ✨ ESTILOS SÓLIDOS Y PERMANENTES USANDO COLORES ESTÁNDAR DE TAILWIND ✨
      'bg-black shadow-lg border-b border-gray-700'
    ]"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      
      <!-- Lado Izquierdo: Tu Nombre -->
      <a href="#" class="text-2xl font-extrabold text-white hover:text-cyan-400 transition-colors">
        Tu Nombre
      </a>

      <!-- Lado Derecho -->
      <div class="flex items-center space-x-8">
        <!-- Enlaces -->
        <ul class="hidden md:flex space-x-8 text-gray-400 font-medium">
          <li><a href="#about" class="hover:text-white transition-colors">Sobre Mí</a></li>
          <li><a href="#skills" class="hover:text-white transition-colors">Habilidades</a></li>
          <li><a href="#projects" class="hover:text-white transition-colors">Proyectos</a></li>
          <li><a href="#contact" class="hover:text-white transition-colors">Contacto</a></li>
        </ul>

        <!-- Iconos de Redes Sociales -->
        <div class="flex items-center space-x-5 text-white">
          <a href="#" target="_blank" aria-label="GitHub" class="hover:text-cyan-400 transition-colors">
            <Icon icon="mdi:github" class="w-7 h-7" />
          </a>
          <a href="#" target="_blank" aria-label="LinkedIn" class="hover:text-cyan-400 transition-colors">
            <Icon icon="mdi:linkedin" class="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>