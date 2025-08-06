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

// Lógica para el menú móvil
const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <header 
    :class="[
      'fixed top-0 left-0 w-full z-50 py-4 transition-transform duration-500 ease-in-out',
      { '-translate-y-full': isHidden },
      'bg-black shadow-lg border-b border-gray-700'
    ]"
  >
    <div class="absolute bottom-0 left-0 w-full h-px 
                bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
    
    <div class="container mx-auto px-6 flex justify-between items-center">
      
      <a href="#" class="text-2xl font-extrabold"
        :class="['text-2xl font-extrabold', 'hover:animate-soft-glow', 'text-silver-shine']">
        Tu Nombre
      </a>

      <div class="flex items-center space-x-6 md:space-x-12">
        
        <ul class="hidden md:flex items-center divide-x divide-gray-600 font-semibold text-white">
          <li>
            <a href="#about" class="hover:animate-soft-glow px-5 relative nav-link">
              Sobre Mí
              <span class="nav-link-underline"></span>
            </a>
          </li>
          <li>
            <a href="#skills" class="hover:animate-soft-glow px-5 relative nav-link">
              Habilidades
              <span class="nav-link-underline"></span>
            </a>
          </li>
          <li>
            <a href="#projects" class="hover:animate-soft-glow px-5 relative nav-link">
              Proyectos
              <span class="nav-link-underline"></span>
            </a>
          </li>
          <li>
            <a href="#contact" class="hover:animate-soft-glow px-5 relative nav-link">
              Contacto
              <span class="nav-link-underline"></span>
            </a>
          </li>
        </ul>

        <div class="hidden md:flex items-center space-x-6">
          <a href="#" target="_blank" aria-label="GitHub" class="hover:scale-110 transition-transform duration-200">
            <svg class="w-7 h-7 hover:animate-soft-glow" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="LinkedIn" class="hover:scale-110 transition-transform duration-200">
            <svg class="w-7 h-7 hover:animate-soft-glow" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </a>
        </div>

        <button @click="toggleMobileMenu" class="md:hidden text-white focus:outline-none">
          <Icon v-if="!isMobileMenuOpen" icon="fa6-solid:bars" class="w-7 h-7" />
          <Icon v-else icon="fa6-solid:xmark" class="w-7 h-7" />
        </button>
      </div>
    </div>

    <nav 
      v-if="isMobileMenuOpen"
      :class="[
        'md:hidden bg-black text-white px-6 py-4 transition-all duration-300 ease-in-out',
        'transform translate-y-0 opacity-100'
      ]"
    >
      <ul class="flex flex-col space-y-4 text-lg">
        <li><a href="#about" @click="toggleMobileMenu" class="hover:animate-soft-glow">Sobre Mí</a></li>
        <li><a href="#skills" @click="toggleMobileMenu" class="hover:animate-soft-glow">Habilidades</a></li>
        <li><a href="#projects" @click="toggleMobileMenu" class="hover:animate-soft-glow">Proyectos</a></li>
        <li><a href="#contact" @click="toggleMobileMenu" class="hover:animate-soft-glow">Contacto</a></li>
      </ul>
      <div class="mt-6 flex justify-center space-x-6">
        <a href="#" target="_blank" aria-label="GitHub">
          <svg class="w-7 h-7 hover:animate-soft-glow" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
        <a href="#" target="_blank" aria-label="LinkedIn">
          <svg class="w-7 h-7 hover:animate-soft-glow" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </a>
        </div>
    </nav>
  </header>
</template>