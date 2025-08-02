<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

// --- IMPORTACIONES DE IMÁGENES CORREGIDAS ---
// Asegúrate de que las imágenes estén dentro de la carpeta "certifications"
import cert1 from '@/assets/certifications/certificacion-1.png';
import cert2 from '@/assets/certifications/certifications-2.png'; // <-- Corregido el nombre (era certificationS)

// Crea una variable para una imagen de placeholder si no tienes una tercera
// por ejemplo, reusando la primera. O añade una nueva importación.
import placeholderCert from '@/assets/certifications/certificacion-1.png';

const certifications = ref([
  {
    name: 'Certificación 1', // ¡Cambia este nombre!
    issuer: 'Institución 1',
    image: cert1, 
    link: '#' 
  },
  {
    name: 'Certificación 2', // ¡Cambia este nombre!
    issuer: 'Institución 2',
    image: cert2,
    link: '#'
  },
  {
    // He añadido este como ejemplo para el grid de 3.
    // Cambia sus datos o elimínalo.
    name: 'Tercer Certificado',
    issuer: 'Otra Institución',
    image: placeholderCert, // Usando la imagen de placeholder
    link: '#'
  },
]);
</script>

<template>
  <section id="certifications" class="py-24 bg-dark-background">
    <div class="container mx-auto px-4">
      
      <!-- Título de la Sección -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="relative inline-block text-3xl md:text-4xl font-extrabold text-dark-text-primary py-2 tracking-wider uppercase">
          <span>Certificaciones</span>
          <span class="absolute bottom-0 left-0 w-full h-1 bg-accent transform origin-left transition-transform duration-700 ease-out"
            data-aos="scale-x-100" data-aos-anchor-placement="top-bottom"></span>
        </h2>
      </div>

      <!-- Galería de Certificados -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div 
          v-for="(cert, index) in certifications" 
          :key="cert.name"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          class="group relative"
        >
          <!-- Efecto de borde brillante "Aurora" -->
          <div class="absolute -inset-px bg-gradient-to-r from-cyan-500 to-purple-600 
                      rounded-xl blur opacity-0 group-hover:opacity-75 
                      transition-opacity duration-500">
          </div>

          <!-- Contenedor principal de la tarjeta -->
          <div class="relative bg-dark-surface rounded-lg h-full overflow-hidden
                      border border-dark-border-color
                      transition-transform duration-300 ease-in-out group-hover:scale-[1.03]">

            <!-- Imagen del Certificado -->
            <img :src="cert.image" :alt="`Certificado de ${cert.name}`" 
                 class="w-full h-full object-contain p-2
                        transition-all duration-500 group-hover:scale-105 group-hover:saturate-125"
            >

            <!-- Overlay con Información (Aparece y se desliza en hover) -->
            <div 
              class="absolute inset-0 p-6 flex flex-col justify-end text-left
                     bg-gradient-to-t from-black/90 via-black/60 to-transparent
                     backdrop-blur-sm <!-- ✨ Efecto Glassmorphism ✨ -->
                     opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                     transition-all duration-500 ease-in-out"
            >
              
              <h3 class="text-xl font-bold text-white mb-1
                         opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                         transition-all duration-500 delay-100 ease-out">
                {{ cert.name }}
              </h3>

              <p class="text-md text-gray-300
                         opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                         transition-all duration-500 delay-200 ease-out">
                Emitida por: {{ cert.issuer }}
              </p>
              
              <a :href="cert.link" target="_blank"
                 class="inline-flex items-center text-accent font-semibold mt-4
                        opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-500 delay-300 ease-out group-hover:text-cyan-300"
              >
                Ver Credencial <Icon icon="mdi:arrow-right" class="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1"/>
              </a>

            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>