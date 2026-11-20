
// ========================================
// MENTE EN EQUILIBRIO
// CONEXIÓN CON SUPABASE
// ========================================

// Configuración de conexión con Supabase
const SUPABASE_URL = "https://xywqmeobjtprcsssmoeu.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_hvu8tfvLq1ua2NP7x6E5Hg_VbwdX2hk";

// Crear el cliente de conexión con Supabase
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

// ========================================
// IDENTIFICACIÓN DE ELEMENTOS HTML
// ========================================

// Formularios de registro e inicio de sesión
const formularioRegistro = document.getElementById("formRegistro");
const formularioLogin = document.getElementById("formLogin");

// Mensajes de respuesta
const mensajeRegistro = document.getElementById("mensajeRegistro");
const mensajeLogin = document.getElementById("mensajeLogin");

// Elementos de la sesión
const contenedorSesion = document.getElementById("sesionUsuario");
const usuarioActivo = document.getElementById("usuarioActivo");
const botonCerrarSesion = document.getElementById("cerrarSesion");

// Elementos del ejercicio de respiración
// Busca primero el botón por su identificador.
// Si no lo encuentra, busca el botón dentro de la sección herramientas.
const botonRespiracion =
  document.getElementById("botonRespiracion") ||
  document.querySelector("#herramientas button");

const mensajeRespiracion = document.getElementById("mensaje");

// ========================================
// REGISTRO DE USUARIOS
// ========================================

// Permite crear una cuenta con correo electrónico y contraseña
if (formularioRegistro) {

  formularioRegistro.addEventListener("submit", async function(event) {

    // Evitar que la página se recargue
    event.preventDefault();

    // Obtener los datos del formulario
    const correo = document.getElementById("registroCorreo").value.trim();
    const password = document.getElementById("registroPassword").value;

    mensajeRegistro.textContent = "Creando tu cuenta...";

    try {

      // Registrar el usuario en Supabase Authentication
      const { data, error } = await supabaseClient.auth.signUp({
        email: correo,
        password: password,
        options: {
          emailRedirectTo:
            window.location.origin + window.location.pathname
        }
      });

      // Verificar si ocurrió algún error
      if (error) {
        throw error;
      }

      // Limpiar los campos del formulario
      formularioRegistro.reset();

      // Verificar si Supabase inició la sesión automáticamente
      if (data.session) {

        mensajeRegistro.textContent =
          "¡Tu cuenta fue creada correctamente!";

        mostrarSesion(data.user);

      } else {

        mensajeRegistro.textContent =
          "Si tu registro fue aceptado, revisa tu correo electrónico para confirmar tu cuenta antes de iniciar sesión.";

      }

    } catch (error) {

      // Mostrar el error de registro
      mensajeRegistro.textContent =
        "Error al registrarte: " + error.message;

    }

  });

}

// ========================================
// INICIO DE SESIÓN
// ========================================

// Permite ingresar con una cuenta registrada
if (formularioLogin) {

  formularioLogin.addEventListener("submit", async function(event) {

    event.preventDefault();

    // Obtener correo y contraseña
    const correo = document.getElementById("loginCorreo").value.trim();
    const password = document.getElementById("loginPassword").value;

    mensajeLogin.textContent = "Verificando tus datos...";

    try {

      // Consultar las credenciales en Supabase
      const { data, error } =
        await supabaseClient.auth.signInWithPassword({
          email: correo,
          password: password
        });

      if (error) {
        throw error;
      }

      // Limpiar el formulario
      formularioLogin.reset();

      mensajeLogin.textContent =
        "¡Bienvenido a Mente en Equilibrio!";

      // Mostrar la información del usuario
      mostrarSesion(data.user);

    } catch (error) {

      mensajeLogin.textContent =
        "Error al iniciar sesión: " + error.message;

    }

  });

}

// ========================================
// MOSTRAR LA SESIÓN DEL USUARIO
// ========================================

// Actualiza la información visible del usuario autenticado
function mostrarSesion(usuario) {

  // Verificar que los elementos existan
  if (!contenedorSesion || !usuarioActivo) {
    return;
  }

  // Si no hay usuario, ocultar la sesión
  if (!usuario) {

    contenedorSesion.hidden = true;
    usuarioActivo.textContent = "";

    return;
  }

  // Mostrar el correo del usuario autenticado
  usuarioActivo.textContent =
    "Has iniciado sesión con: " + usuario.email;

  contenedorSesion.hidden = false;

}

// ========================================
// CERRAR SESIÓN
// ========================================

// Permite finalizar la sesión del usuario
if (botonCerrarSesion) {

  botonCerrarSesion.addEventListener("click", async function() {

    try {

      // Solicitar a Supabase el cierre de sesión
      const { error } = await supabaseClient.auth.signOut();

      if (error) {
        throw error;
      }

      // Ocultar la información de la sesión
      mostrarSesion(null);

      mensajeLogin.textContent =
        "Has cerrado sesión correctamente.";

    } catch (error) {

      mensajeLogin.textContent =
        "Error al cerrar sesión: " + error.message;

    }

  });

}

// ========================================
// COMPROBAR SESIÓN AL CARGAR LA PÁGINA
// ========================================

// Recuperar una sesión iniciada anteriormente
async function comprobarSesion() {

  try {

    const { data, error } = await supabaseClient.auth.getUser();

    if (error || !data.user) {

      mostrarSesion(null);
      return;

    }

    mostrarSesion(data.user);

  } catch (error) {

    mostrarSesion(null);
    console.error("Error al comprobar la sesión:", error);

  }

}

// Ejecutar la comprobación inicial
comprobarSesion();

// ========================================
// DETECTAR CAMBIOS DE AUTENTICACIÓN
// ========================================

// Actualizar la página cuando se inicia o cierra sesión
supabaseClient.auth.onAuthStateChange(function(event, session) {

  if (event === "SIGNED_IN" && session) {

    mostrarSesion(session.user);

  }

  if (event === "SIGNED_OUT") {

    mostrarSesion(null);

  }

});

// ========================================
// EJERCICIO DE RESPIRACIÓN CONSCIENTE
// ========================================

// Presenta instrucciones para realizar un ejercicio de respiración
function iniciarRespiracion() {

  // Verificar que los elementos existan
  if (!botonRespiracion || !mensajeRespiracion) {
    return;
  }

  // Instrucciones del ejercicio
  const pasos = [
    "Inhala lentamente por la nariz durante 4 segundos...",
    "Mantén el aire durante 4 segundos...",
    "Exhala suavemente durante 4 segundos...",
    "¡Excelente! Has completado un ciclo de respiración."
  ];

  let paso = 0;

  // Desactivar el botón durante el ejercicio
  botonRespiracion.disabled = true;

  // Mostrar la primera instrucción
  mensajeRespiracion.textContent = pasos[paso];

  // Cambiar la instrucción cada cuatro segundos
  const intervalo = setInterval(function() {

    paso++;

    if (paso < pasos.length) {

      mensajeRespiracion.textContent = pasos[paso];

    } else {

      // Finalizar el ejercicio
      clearInterval(intervalo);

      mensajeRespiracion.textContent =
        "¡Muy bien! Tómate un momento para continuar con calma.";

      // Reactivar el botón
      botonRespiracion.disabled = false;

    }

  }, 4000);

}

// ========================================
// ACTIVAR EL BOTÓN DE RESPIRACIÓN
// ========================================

if (botonRespiracion) {

  // Evitar ejecutar el ejercicio dos veces
  // si el HTML todavía contiene un atributo onclick.
  botonRespiracion.removeAttribute("onclick");

  // Asociar el botón con la función
  botonRespiracion.addEventListener(
    "click",
    iniciarRespiracion
  );

}

// ========================================
// FIN DEL ARCHIVO SCRIPT.JS
// ========================================
