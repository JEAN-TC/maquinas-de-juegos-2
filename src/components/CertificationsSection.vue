<!-- ARCHIVO: src/components/CertificationsSection.vue -->

<script setup>
import { ref } from 'vue';

const certifications = ref([
  {
    name: 'eJPT (eLearnSecurity Junior Penetration Tester)',
    issuer: 'eLearnSecurity',
    badge: 'https://images.credly.com/size/340x340/images/6c6c21e3-294b-4f1b-9f6b-d36c4f346850/eJPT_Certification_Badge.png',
    link: '#' // Pon aquí tu enlace de validación
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    badge: 'https://images.credly.com/size/340x340/images/0e186848-8319-4a0b-801b-c7d01375c3ad/Security_2B_2023.png',
    link: '#'
  },
  {
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    badge: 'https://images.credly.com/size/340x340/images/b2ba3237-77cf-4919-a687-f1239c0af82f/CEHv12-min.png',
    link: '#'
  },
]);
</script>

<template>
  <section id="certifications" class="pt-12 pb-24 bg-dark-background">
    <div class="container mx-auto px-4">
      
      <!-- Título de la Sección -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="relative inline-block text-3xl md:text-4xl font-extrabold text-dark-text-primary py-2 tracking-wider uppercase">
          <span>Certificaciones</span>
          <span class="absolute bottom-0 left-0 w-full h-1 bg-accent transform origin-left transition-transform duration-700 ease-out"
            data-aos="scale-x-100" data-aos-anchor-placement="top-bottom"></span>
        </h2>
      </div>

      <!-- Contenedor de las certificaciones -->
      <div class="max-w-4xl mx-auto space-y-4">
        
        <!-- Tarjeta de Certificación -->
        <a 
          v-for="(cert, index) in certifications" 
          :key="cert.name"
          :href="cert.link"
          target="_blank"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          class="group flex items-center bg-dark-surface p-4 rounded-xl 
                 border-2 border-transparent 
                 transition-all duration-300 ease-in-out
                 hover:border-accent hover:shadow-lg hover:shadow-accent/10 hover:scale-[1.02]"
        >
          <!-- Insignia/Badge -->
          <div class="flex-shrink-0 bg-white/5 p-3 rounded-lg">
            <img :src="cert.badge" :alt="`${cert.name} badge`" class="h-16 w-16 transition-transform duration-300 group-hover:scale-110">
          </div>

          <!-- Información de la certificación -->
          <div class="ml-6 flex-grow">
            <h3 class="text-lg font-bold text-dark-text-primary">
              {{ cert.name }}
            </h3>
            <p class="text-md text-dark-text-secondary">
              Emitida por: <span class="font-semibold text-dark-text-primary/80">{{ cert.issuer }}</span>
            </p>
          </div>

          <!-- Icono de "Verificar" que aparece en hover -->
          <div class="ml-auto text-dark-text-secondary opacity-0 
                      transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </a>
        
      </div>
    </div>
  </section>
</template>