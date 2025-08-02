Claro, aquí tienes el código del `Footer.vue` con los colores ajustados para que combine con la barra de navegación oscura que se ve en la imagen.

Se han realizado los siguientes cambios:

  * El color de fondo del footer se ha cambiado a **negro oscuro** (`#000000`).
  * El color de los bordes se ha ajustado para que coincida con el borde sutil de la barra de navegación.
  * Los colores de los enlaces y los textos se han unificado para mantener la coherencia con el estilo de la barra superior.

### Código del Footer con Colores Unificados

```vue
<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <footer class="relative bg-black border-t-2 border-gray-800 text-gray-400 overflow-hidden">
    
    <div class="absolute inset-0 bg-repeat opacity-[0.02] cyber-glitch-overlay"></div>
    <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/50 to-transparent"></div>

    <div class="relative container mx-auto px-6 py-20">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
        
        <div class="space-y-4">
          <h3 class="text-2xl font-extrabold hover:animate-soft-glow cursor-default">
            <span class="bg-gradient-to-r from-gray-200 via-white to-gray-400 text-transparent bg-clip-text">
              Tu Nombre Completo
            </span>
          </h3>
          <p class="text-sm">Diseñando soluciones digitales con tecnología moderna.</p>
          <div class="space-y-3 text-sm pt-2">
            <a href="mailto:tu.correo@gmail.com" class="group flex items-center justify-center md:justify-start transition-colors hover:text-white">
              <Icon icon="mdi:email-outline" class="w-5 h-5 mr-3 text-cyan-400 transition-transform duration-300 group-hover:scale-110"/>
              <span>tu.correo@gmail.com</span>
            </a>
            <a href="tel:+51123456789" class="group flex items-center justify-center md:justify-start transition-colors hover:text-white">
              <Icon icon="mdi:phone" class="w-5 h-5 mr-3 text-cyan-400 transition-transform duration-300 group-hover:scale-110"/>
              <span>+51 989 697 285</span>
            </a>
              <a href="#" class="group flex items-center justify-center md:justify-start transition-colors hover:text-white">
              <Icon icon="mdi:map-marker" class="w-5 h-5 mr-3 text-cyan-400 transition-transform duration-300 group-hover:scale-110"/>
              <span>Ciudad, País</span>
            </a>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">Explorar</h3>
          <ul class="space-y-3 text-sm">
            <li><a href="#about" class="footer-link">Sobre Mí</a></li>
            <li><a href="#skills" class="footer-link">Habilidades</a></li>
            <li><a href="#projects" class="footer-link">Proyectos</a></li>
            <li><a href="#certifications" class="footer-link">Certificaciones</a></li>
          </ul>
        </div>
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">Recursos</h3>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="footer-link">Descargar CV</a></li>
            <li><a href="https://github.com/tu-usuario" target="_blank" class="footer-link">Perfil de GitHub</a></li>
          </ul>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">Conectar</h3>
          <p class="text-sm">Sígueme en redes sociales:</p>
          <div class="flex justify-center md:justify-start space-x-4 pt-2">
            <a href="#" class="icon-glow-container text-gray-400 hover:text-white p-2">
              <Icon icon="mdi:linkedin" class="w-7 h-7"/>
            </a>
            <a href="#" class="icon-glow-container text-gray-400 hover:text-white p-2">
              <Icon icon="mdi:github" class="w-7 h-7"/>
            </a>
            <a href="#" class="icon-glow-container text-gray-400 hover:text-white p-2">
              <Icon icon="mdi:facebook" class="w-7 h-7"/>
            </a>
            <a href="#" class="icon-glow-container text-gray-400 hover:text-white p-2">
              <Icon icon="mdi:whatsapp" class="w-7 h-7"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-black/60 backdrop-blur-sm border-t border-gray-800/50 py-4">
      <div class="container mx-auto px-6 text-center text-xs text-gray-400">
        © {{ new Date().getFullYear() }} Tu Nombre Completo | Diseñado y desarrollado con <span class="text-cyan-400">♥</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Estilo del "link" del footer */
.footer-link {
  @apply relative transition-colors duration-300;
}

.footer-link::after {
  @apply content-[''] absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 scale-x-0 transition-transform duration-300 ease-in-out origin-left;
}

.footer-link:hover::after {
  @apply scale-x-100;
}

/* Efecto de resplandor para los íconos sociales */
.icon-glow-container {
  @apply relative transition-colors duration-300;
}

.icon-glow-container::before {
  @apply content-[''] absolute inset-0 rounded-full bg-cyan-400 -z-10 opacity-0 transition-opacity duration-300;
  filter: blur(10px);
}

.icon-glow-container:hover::before {
  @apply opacity-70;
}

.icon-glow-container:hover {
  @apply text-white;
}

/* Animaciones */
@keyframes soft-glow {
  0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #0ff; }
  50% { text-shadow: 0 0 3px #fff, 0 0 8px #fff, 0 0 12px #0ff, 0 0 18px #0ff; }
}

.animate-soft-glow {
  animation: soft-glow 3s ease-in-out infinite alternate;
}
</style>
```