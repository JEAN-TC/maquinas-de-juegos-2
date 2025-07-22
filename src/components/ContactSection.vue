<!-- ARCHIVO: src/components/ContactSection.vue -->

<script setup>
// No necesita JS para el diseño
</script>

<template>
  <section id="form-contact" class="py-20">
    <div class="container mx-auto px-4 max-w-3xl">

      <!-- Título de la sección -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-text-primary">¿Tienes un proyecto en mente?</h2>
        <p class="text-text-secondary mt-2">Envíame un mensaje y te responderé lo antes posible.</p>
      </div>

      <!-- Formulario con estilos de Tailwind CSS -->
      <form 
        name="contact-form" 
        method="POST" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        class="space-y-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <!-- Campo oculto para Netlify -->
        <input type="hidden" name="form-name" value="contact-form" />
        
        <!-- Campo trampa para bots (honeypot) -->
        <p class="hidden">
          <label>No llenes esto si eres humano: <input name="bot-field" /></label>
        </p>

        <!-- Campo Nombre -->
        <div>
          <label for="name" class="block text-sm font-medium text-text-secondary mb-2">Nombre</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            required 
            class="w-full bg-surface border border-border-color rounded-md py-3 px-4 text-text-primary 
                   focus:ring-2 focus:ring-accent focus:border-accent transition duration-200"
          />
        </div>

        <!-- Campo Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-text-secondary mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            required 
            class="w-full bg-surface border border-border-color rounded-md py-3 px-4 text-text-primary
                   focus:ring-2 focus:ring-accent focus:border-accent transition duration-200"
          />
        </div>
        
        <!-- Campo Mensaje -->
        <div>
          <label for="message" class="block text-sm font-medium text-text-secondary mb-2">Mensaje</label>
          <textarea 
            name="message" 
            id="message" 
            rows="5" 
            required
            class="w-full bg-surface border border-border-color rounded-md py-3 px-4 text-text-primary
                   focus:ring-2 focus:ring-accent focus:border-accent transition duration-200"
          ></textarea>
        </div>

        <!-- Botón de Envío -->
        <div class="text-center pt-4">
          <button 
            type="submit" 
            class="bg-accent text-white font-bold py-3 px-10 rounded-lg shadow-md
                   transform transition-all duration-300 hover:bg-accent-hover hover:scale-105"
          >
            Enviar Mensaje
          </button>
        </div>

      </form>
    </div>
  </section>
</template>