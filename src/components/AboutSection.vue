<!-- src/components/AboutSection.vue -->
<template>
  <section id="about" class="py-20 bg-slate-800 text-white">
    <div class="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
      <div class="w-full md:w-1/3 flex justify-center">
        <!-- Recuerda poner tu foto en src/assets/profile-pic.jpg -->
        <img src="@/assets/foto-de-perfil.jpg" alt="Tu Foto" class="rounded-full h-64 w-64 object-cover border-4 border-cyan-400 shadow-lg">
      </div>
      <div class="w-full md:w-2/3 text-center md:text-left">
        <h2 class="text-4xl font-bold mb-4">Sobre Mí</h2>
        <p class="text-slate-300">
          Aquí va tu descripción. Habla sobre tu pasión por la ciberseguridad, tus motivaciones y tu experiencia de forma breve y directa.
        </p>
      </div>
    </div>
  </section>
</template>