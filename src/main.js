
import { createApp } from 'vue'
import App from './App.vue'
import './styles/input.css'

// --- INICIO DE LA CONFIGURACIÓN DE AOS ---
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

// Inicializa AOS
AOS.init({
  duration: 700,  // Duración de la animación
  once: true,     // Animar solo una vez
  offset: 120,    // Animar cuando el elemento esté a 120px de ser visible
  easing: 'ease-in-out', // Curva de animación suave
});
// --- FIN DE LA CONFIGURACIÓN DE AOS ---

createApp(App).mount('#app')