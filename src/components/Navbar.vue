<script setup>
// 1. IMPORTAMOS EL COMPONENTE 'ICON'
import { Icon } from '@iconify/vue';
</script>

<template>
  <nav class="bg-slate-900/80 backdrop-blur-sm text-white p-4 fixed top-0 left-0 w-full z-10">
    <div class="container mx-auto flex justify-between items-center">
      
      <!-- Lado Izquierdo: Tu Nombre -->
      <a href="#" class="text-xl font-bold text-black -400 hover:text-white -300 transition-colors">
        Tu Nombre
      </a>

      <!-- Lado Derecho: Agrupamos los enlaces y los iconos -->
      <div class="flex items-center space-x-6">
        
        <!-- Enlaces de Navegación (tu código original) -->
        <ul class="hidden md:flex space-x-6">
          <li><a href="#about" class="hover:text-black -400 transition-colors">Sobre Mí</a></li>
          <li><a href="#skills" class="hover:text-black -400 transition-colors">Habilidades</a></li>
          <li><a href="#projects" class="hover:text-black -400 transition-colors">Proyectos</a></li>
          <li><a href="#contact" class="hover:text-black -400 transition-colors">Contacto</a></li>
        </ul>

        <!-- 2. AQUÍ AÑADIMOS LOS ICONOS DE REDES SOCIALES -->
        <div class="flex items-center space-x-4">
          <a href="https://github.com/tu-usuario" target="_blank" aria-label="GitHub">
            <Icon icon="mdi:github" class="w-6 h-6 hover:text-cyan-400 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" aria-label="LinkedIn">
            <Icon icon="mdi:linkedin" class="w-6 h-6 hover:text-cyan-400 transition-colors" />
          </a>
        </div>
        
      </div>

    </div>
  </nav>
</template>