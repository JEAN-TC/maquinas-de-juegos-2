<!-- ARCHIVO: src/components/AboutSection.vue -->

<script setup>
// Asegúrate de que tu imagen de perfil está en la ruta correcta
import profileImage from '@/assets/foto-de-perfil.jpg';
</script>

<template>
  <section id="about" class="py-32 bg-black text-white"> <!-- ✨ FONDO NEGRO Y TEXTO BLANCO BASE ✨ -->
    <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      
      <!-- Columna de la Imagen -->
      <div 
        data-aos="fade-right" 
        class="relative mx-auto w-80 h-80 lg:w-96 lg:h-96 group"
      >
        <!-- Borde estático de fondo -->
        <div class="absolute inset-0 rounded-full bg-surface border-2 border-border-color"></div>
        
        <!-- Borde con efecto de escaneo giratorio -->
        <div 
          class="absolute inset-0 rounded-full 
                 bg-[conic-gradient(from_0deg,transparent_40%,theme(colors.accent)_80%,transparent)]
                 animate-spin transition-opacity duration-500 opacity-50 group-hover:opacity-100"
          style="animation-duration: 4s;"
        ></div>
        
        <!-- Contenedor de la Imagen -->
        <div class="relative w-full h-full rounded-full overflow-hidden p-3">
          <img :src="profileImage" alt="Tu foto de perfil" class="w-full h-full object-cover rounded-full">
        </div>
      </div>
      
      <!-- Columna de Texto -->
      <div data-aos="fade-left" data-aos-delay="200">
        
        <!-- Título de Sección -->
        <div class="text-left mb-6">
          <h2 class="text-4xl lg:text-5xl font-extrabold text-text-primary">
            Sobre Mí
          </h2>
          <!-- Línea decorativa sutil -->
          <div class="w-24 h-1 bg-accent mt-3"></div>
        </div>
        
        <p class="text-text-secondary leading-relaxed text-lg">
          Aquí va tu descripción. Habla sobre tu pasión por la ciberseguridad, tus motivaciones y tu experiencia de forma breve y directa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

      </div>

    </div>
  </section>
</template>