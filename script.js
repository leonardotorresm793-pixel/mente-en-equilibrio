
<!DOCTYPE html>
<html lang="es">

<head>
  <!-- Configuración básica del documento -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Mente en Equilibrio: plataforma educativa sobre bienestar emocional y autocuidado.">

  <!-- Título de la página -->
  <title>Mente en Equilibrio</title>

  <!-- Hoja de estilos principal -->
  <link rel="stylesheet" href="styles.css">
</head>

<body>

  <!-- ENCABEZADO Y MENÚ DE NAVEGACIÓN -->
  <header>
    <h1>Mente en Equilibrio</h1>

    <nav>
      <a href="#inicio">Inicio</a>
      <a href="#nosotros">Quiénes somos</a>
      <a href="#recursos">Recursos educativos</a>
      <a href="#herramientas">Herramientas de bienestar</a>
      <a href="#rutas">Rutas de orientación</a>
      <a href="#cuenta">Mi cuenta</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <!-- SECCIÓN DE INICIO -->
  <section id="inicio" class="hero">
    <h2>Bienvenido a Mente en Equilibrio</h2>

    <p>
      Un espacio digital para aprender sobre salud mental,
      bienestar emocional y autocuidado.
    </p>

    <a href="#recursos" class="boton">Explorar recursos</a>
  </section>

  <!-- SECCIÓN QUIÉNES SOMOS -->
  <section id="nosotros">
    <h2>Quiénes somos</h2>

    <p>
      Mente en Equilibrio es una plataforma educativa que promueve
      el conocimiento, la conciencia y el cuidado del bienestar emocional.
    </p>

    <div class="tarjetas">

      <!-- Misión institucional -->
      <article>
        <h3>Misión</h3>
        <p>
          Ofrecer información y recursos educativos que contribuyan
          al reconocimiento y cuidado del bienestar emocional.
        </p>
      </article>

      <!-- Visión institucional -->
      <article>
        <h3>Visión</h3>
        <p>
          Ser un espacio digital accesible que fomente la educación
          y la conciencia sobre la salud mental.
        </p>
      </article>

      <!-- Compromiso institucional -->
      <article>
        <h3>Compromiso</h3>
        <p>
          Promover el respeto, la empatía, la privacidad y el acceso
          responsable a información educativa.
        </p>
      </article>

    </div>
  </section>

  <!-- SECCIÓN DE RECURSOS EDUCATIVOS -->
  <section id="recursos">
    <h2>Recursos educativos</h2>

    <p>
      Encuentra materiales para aprender sobre bienestar emocional,
      manejo del estrés y autocuidado.
    </p>

    <div class="tarjetas">

      <!-- Guía de la Organización Panamericana de la Salud -->
      <article>
        <h3>Guía para el manejo del estrés</h3>

        <p>
          Consulta la guía ilustrada de la Organización Panamericana
          de la Salud: En tiempos de estrés, haz lo que importa.
        </p>

        <a
          href="https://www.paho.org/es/documentos/tiempos-estres-haz-lo-que-importa-guia-ilustrada-version-adaptada-para-america-latina"
          target="_blank"
          rel="noopener noreferrer">
          Consultar guía educativa
        </a>
      </article>

      <!-- Video educativo de YouTube -->
      <article>
        <h3>Video educativo</h3>

        <p>
          Recurso audiovisual para aprender sobre bienestar emocional.
        </p>

        <div class="video-contenedor">
          <iframe
            src="https://www.youtube.com/embed/nY66tl39PkE"
            title="Video educativo sobre bienestar emocional"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>
      </article>

    </div>
  </section>

  <!-- SECCIÓN DE HERRAMIENTAS DE BIENESTAR -->
  <section id="herramientas">
    <h2>Herramientas de bienestar</h2>

    <p>
      Dedica unos minutos a realizar una pausa y respirar conscientemente.
    </p>

    <!-- Botón que activa el ejercicio desde JavaScript -->
    <button class="boton" id="botonRespiracion" type="button">
      Iniciar ejercicio de respiración
    </button>

    <!-- Aquí se muestran las instrucciones del ejercicio -->
    <p id="mensaje" aria-live="polite"></p>
  </section>

  <!-- SECCIÓN DE RUTAS DE ORIENTACIÓN -->
  <section id="rutas">
    <h2>Rutas de orientación</h2>

    <p>
      Si estás pasando por una situación difícil, busca apoyo en personas
      de confianza y en los servicios de orientación y atención profesional
      disponibles en tu comunidad.
    </p>

    <p>
      Esta plataforma ofrece información educativa y no reemplaza
      la atención profesional.
    </p>
  </section>

  <!-- SECCIÓN DE REGISTRO E INICIO DE SESIÓN -->
  <section id="cuenta">
    <h2>Mi cuenta</h2>

    <p>Regístrate o inicia sesión en Mente en Equilibrio.</p>

    <div class="tarjetas">

      <!-- FORMULARIO DE REGISTRO -->
      <article>
        <h3>Crear una cuenta</h3>

        <form id="formRegistro">

          <label for="registroCorreo">Correo electrónico</label>

          <input
            type="email"
            id="registroCorreo"
            placeholder="Tu correo electrónico"
            autocomplete="email"
            required>

          <label for="registroPassword">Contraseña</label>

          <input
            type="password"
            id="registroPassword"
            placeholder="Mínimo 8 caracteres"
            minlength="8"
            autocomplete="new-password"
            required>

          <button class="boton" type="submit">
            Registrarme
          </button>

        </form>

        <!-- Mensajes de respuesta del registro -->
        <p id="mensajeRegistro" aria-live="polite"></p>
      </article>

      <!-- FORMULARIO DE INICIO DE SESIÓN -->
      <article>
        <h3>Iniciar sesión</h3>

        <form id="formLogin">

          <label for="loginCorreo">Correo electrónico</label>

          <input
            type="email"
            id="loginCorreo"
            placeholder="Tu correo electrónico"
            autocomplete="email"
            required>

          <label for="loginPassword">Contraseña</label>

          <input
            type="password"
            id="loginPassword"
            placeholder="Tu contraseña"
            autocomplete="current-password"
            required>

          <button class="boton" type="submit">
            Iniciar sesión
          </button>

        </form>

        <!-- Mensajes de respuesta del inicio de sesión -->
        <p id="mensajeLogin" aria-live="polite"></p>
      </article>

    </div>

    <!-- INFORMACIÓN DE LA SESIÓN ACTIVA -->
    <div id="sesionUsuario" hidden>
      <h3>Sesión iniciada</h3>

      <p id="usuarioActivo"></p>

      <button class="boton" id="cerrarSesion" type="button">
        Cerrar sesión
      </button>
    </div>

  </section>

  <!-- SECCIÓN DE CONTACTO -->
  <section id="contacto">
    <h2>Contacto</h2>

    <p>Gracias por visitar Mente en Equilibrio.</p>

    <p>
      Este espacio está pensado para promover el aprendizaje
      y el bienestar emocional.
    </p>
  </section>

  <!-- PIE DE PÁGINA -->
  <footer>
    <p>© 2026 Mente en Equilibrio | Plataforma educativa</p>
  </footer>

  <!-- LIBRERÍA OFICIAL DE SUPABASE -->
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

  <!-- ARCHIVO PRINCIPAL DE FUNCIONALIDADES -->
  <script src="script.js"></script>

</body>
</html>
