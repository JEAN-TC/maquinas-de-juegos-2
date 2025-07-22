<!-- CÓDIGO FINAL Y COMPLETO PARA TU FOOTER.VUE -->
<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <footer id="contact" class="bg-slate-900 border-t border-slate-800 py-16">
    <div class="container mx-auto text-center px-4">

      <h2 class="text-4xl font-bold text-white mb-4">¡Conectemos!</h2>
      
      <p class="max-w-2xl mx-auto mb-10 text-gray-300">
        Estoy buscando activamente nuevas oportunidades y desafíos. Si crees que mi perfil encaja en tu equipo, no dudes en contactarme.
      </p>

      <div class="flex justify-center items-center space-x-8 mb-12">
        
        <a href="mailto:tu.correo@gmail.com" aria-label="Email" class="transform transition-transform duration-300 hover:scale-110">
          <Icon icon="mdi:gmail" class="w-10 h-10 text-[#EA4335]" />
        </a>

        <a href="https://wa.me/TUNUMERODETELEFONO" target="_blank" aria-label="WhatsApp" class="transform transition-transform duration-300 hover:scale-110">
          <Icon icon="mdi:whatsapp" class="w-10 h-10 text-[#25D366]" />
        </a>

        <a href="https://linkedin.com/in/tu-usuario" target="_blank" aria-label="LinkedIn" class="transform transition-transform duration-300 hover:scale-110">
          <Icon icon="mdi:linkedin" class="w-10 h-10 text-[#0A66C2]" />
        </a>

        <a href="https://github.com/tu-usuario" target="_blank" aria-label="GitHub" class="transform transition-transform duration-300 hover:scale-110">
          <Icon icon="mdi:github" class="w-10 h-10 text-gray-300" />
        </a>

      </div>

      <p class="text-gray-500 text-sm">
        © {{ new Date().getFullYear() }} Tu Nombre. Todos los derechos reservados.
      </p>

    </div>
  </footer>
</template>