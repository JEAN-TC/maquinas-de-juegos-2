// src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import './styles/input.css'

// --- INICIO DE LA CONFIGURACIÓN DE AOS ---
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

// Inicializa AOS
AOS.init({
  duration: 1000,  // Puedes ajustar esta velocidad global para la carga de la página
  once: true,
  offset: 100,
  easing: 'ease-in-out',
});
// --- FIN DE LA CONFIGURACIÓN DE AOS ---

// IMPORTANTE: SOLO HAY UNA LÍNEA PARA CREAR LA APP
createApp(App).mount('#app') 

