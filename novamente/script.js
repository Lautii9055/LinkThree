/* ─────────────────────────────────────────
        tipos de datos y variables
───────────────────────────────────────── */
// let nombreVariable = dato;
// const nombreConstante = dato;


/* ─────────────────────────────────────────
            VARIABLE TIPO STRING
───────────────────────────────────────── */
// let saludar = "Hola, mundo!";
// console.log(saludar);

/* ─────────────────────────────────────────
            VARIABLE TIPO NUMBER
───────────────────────────────────────── */
// let numero = 42;
// console.log(numero);

/* ─────────────────────────────────────────
            CONSTANTE TIPO STRING   
───────────────────────────────────────── */
// const fechaNacimiento = 2005;
// console.log(fechaNacimiento);

// let edad = 2026 - fechaNacimiento;
// console.log(edad);
/* ─────────────────────────────────────────
            CONSTANTE TIPO BOOLEAN
───────────────────────────────────────── */
// const esMayorDeEdad = edad > 18;
// console.log(esMayorDeEdad); 

/* ─────────────────────────────────────────
    ARRAYS (conjunto de datos del mismo tipo)
───────────────────────────────────────── */
// let numeros = [1, 2, 3, 4, 5];
// console.log(numeros);

// let frutas = ["manzana", "banana", "naranja"];
// console.log(frutas);

/* ────────────────────────────────────────────────────────────────────
OBJETOS (conjunto de datos relacionados, con propiedades y valores)
────────────────────────────────────────────────────────────────────── */
// let persona = {
// nombre: "Lautaro",
// edad: 21,
// ocupacion: "Estudiante",
// intereses: ["programación", "música", "deportes"],
// };
// console.log(persona);

/* ─────────────────────────────────────────
FUNCTIONES (bloques de código reutilizables)
───────────────────────────────────────── */
// function saludar(nombre) {
//   return `Hola, ${nombre} Bienvenido a la programación.`;
// }
// console.log(saludar("Lautaro"));

/* ─────────────────────────────────────────
FUNCTIONES (bloques de código reutilizables)
───────────────────────────────────────── */
// function sumar(a, b) {
//   return a + b;
// }
// console.log(sumar(5, 3));




/* ─────────────────────────────────────────
   1. NAVBAR ACTIVO
   Marca como activo el link que corresponde
   a la página que el usuario está viendo.
───────────────────────────────────────── */

// const navLinks = document.querySelectorAll('.nav-links a');
// const paginaActual = window.location.pathname.split('/').pop();

// navLinks.forEach(function(link) {
//   const hrefLink = link.getAttribute('href');
//   if (hrefLink === paginaActual) {
//     link.classList.add('nav-link--activo');
//   }
// });


/* ─────────────────────────────────────────
   2. SCROLL SUAVE
   Hace que los links internos (#seccion)
   scrolleen suavemente en lugar de saltar.
───────────────────────────────────────── */

// const linksInternos = document.querySelectorAll('a[href^="#"]');

// linksInternos.forEach(function(link) {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();

//     const idDestino = link.getAttribute('href');
//     const seccionDestino = document.querySelector(idDestino);

//     if (seccionDestino) {
//       seccionDestino.scrollIntoView({
//         behavior: 'smooth'
//       });
//     }
//   });
// });


/* ─────────────────────────────────────────
   3. BOTÓN "QUIERO SER VOLUNTARIO"
───────────────────────────────────────── */

const btnVoluntario = document.getElementById('btn-voluntario');

if (btnVoluntario) {
  btnVoluntario.addEventListener('click', function (e) {
    e.preventDefault();
    abrirModalVoluntario();
  });
}


/* ─────────────────────────────────────────
   4. VALIDACIÓN DEL FORMULARIO DE CONTACTO
───────────────────────────────────────── */

const btnContacto = document.getElementById('btn-contacto');

if (btnContacto) {
  btnContacto.addEventListener('click', function () {

    const nombre = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const asunto = document.querySelector('.form-select');
    const mensaje = document.querySelector('.form-textarea');

    let hayErrores = false;

    // Limpia errores previos
    const erroresPrevios = document.querySelectorAll('.form-error');
    erroresPrevios.forEach(function (error) {
      error.remove();
    });

    // Valida cada campo
    const campos = [nombre, email, asunto, mensaje];

    campos.forEach(function (campo) {
      if (!campo) return;

      if (campo.value.trim() === '' || campo.value === '') {
        hayErrores = true;
        campo.style.borderColor = '#E05555';

        const mensajeError = document.createElement('p');
        mensajeError.classList.add('form-error');
        mensajeError.textContent = 'Este campo es obligatorio.';
        mensajeError.style.fontSize = '12px';
        mensajeError.style.color = '#E05555';
        mensajeError.style.marginTop = '4px';

        campo.parentNode.appendChild(mensajeError);

      } else {
        campo.style.borderColor = '';
      }
    });

    // Valida formato de email
    if (email && email.value.trim() !== '') {
      const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formatoEmail.test(email.value)) {
        hayErrores = true;
        email.style.borderColor = '#E05555';

        const errorEmail = document.createElement('p');
        errorEmail.classList.add('form-error');
        errorEmail.textContent = 'Ingresá un email válido.';
        errorEmail.style.fontSize = '12px';
        errorEmail.style.color = '#E05555';
        errorEmail.style.marginTop = '4px';

        email.parentNode.appendChild(errorEmail);
      }
    }

    if (!hayErrores) {
      btnContacto.textContent = '¡Mensaje enviado!';
      btnContacto.style.background = 'var(--color-menta-600)';
      btnContacto.disabled = true;

      setTimeout(function () {
        btnContacto.textContent = 'Enviar mensaje';
        btnContacto.style.background = '';
        btnContacto.disabled = false;
      }, 3000);
    }
  });
}


/* ─────────────────────────────────────────
   5. CONTADOR ANIMADO
───────────────────────────────────────── */

function animarContador(elemento, valorFinal, duracion, sufijo) {
  let inicio = 0;
  const incremento = valorFinal / (duracion / 13);

  const intervalo = setInterval(function () {
    inicio += incremento;

    if (inicio >= valorFinal) {
      inicio = valorFinal;
      clearInterval(intervalo);
    }

    elemento.textContent = Math.floor(inicio) + sufijo;
  }, 16);
}

const stats = document.querySelectorAll('.stat-num');
let contadoresActivados = false;

if (stats.length > 0) {
  const observadorStats = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting && !contadoresActivados) {
        contadoresActivados = true;

        if (stats[0]) animarContador(stats[0], 50, 1500, '%');

        if (stats[1]) {
          let cont = 0;
          const intervalo2 = setInterval(function () {
            cont++;
            stats[1].textContent = cont + ' años';
            if (cont >= 11) clearInterval(intervalo2);
          }, 120);
        }

        if (stats[2]) animarContador(stats[2], 70, 1500, '%');
      }
    });
  }, { threshold: 0.3 });

  observadorStats.observe(stats[0]);
}


/* ─────────────────────────────────────────
   EXPANDIBLE AL CLICKEAR IMAGEN DE PROYECTO
───────────────────────────────────────── */

const imagenesProyecto = document.querySelectorAll('.proyecto-card__imagen');

imagenesProyecto.forEach(function (imagen) {
  imagen.addEventListener('click', function () {

    const card = imagen.closest('.proyecto-card');
    const detalle = card.querySelector('.proyecto-card__detalle');

    if (!detalle) return;

    const estaAbierto = detalle.classList.contains('proyecto-card__detalle--visible');

    // Cerrar todos los detalles abiertos
    document.querySelectorAll('.proyecto-card__detalle--visible').forEach(function (d) {
      d.classList.remove('proyecto-card__detalle--visible');
    });

    // Si no estaba abierto, abrir este
    if (!estaAbierto) {
      detalle.classList.add('proyecto-card__detalle--visible');
    }
  });
});



/* ─────────────────────────────────────────
   MENÚ HAMBURGUESA
───────────────────────────────────────── */

const hamburger = document.getElementById('nav-hamburger');
const menuMobile = document.getElementById('nav-menu-mobile');

if (hamburger && menuMobile) {

  // abre y/o cierra al clickear el botón
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('abierto');
    menuMobile.classList.toggle('abierto');
  });

  // cierra al clickear cualquier link del menú
  const linksMobile = menuMobile.querySelectorAll('a');
  linksMobile.forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('abierto');
      menuMobile.classList.remove('abierto');
    });
  });

  // cierra al clickear fuera del menú
  document.addEventListener('click', function (e) {
    const clickDentroNav = e.target.closest('.nav');
    const clickDentroMenu = e.target.closest('.nav-menu-mobile');

    if (!clickDentroNav && !clickDentroMenu) {
      hamburger.classList.remove('abierto');
      menuMobile.classList.remove('abierto');
    }
  });
}


/* ─────────────────────────────────────────
   MODAL FORMULARIO DE DONACIÓN
───────────────────────────────────────── */
function crearModalDonacion() {

  if (document.getElementById('modal-donacion')) return;

  const modalHTML = `
    <div class="modal-overlay" id="modal-donacion">
      <div class="modal-content">
        <button class="modal-close" id="modal-close">&times;</button>
        
        <div class="modal-header">
          <h2 class="modal-title">Apoyá a NovaMente</h2>
          <p class="modal-subtitle">Tu donación nos ayuda a llegar a más jóvenes con recursos de salud mental.</p>
          <div class="modal-total">
            <p class="modal-total-title">Total acumulado de donaciones</p>
            <div class="modal-total-grid">
              <div>
                <p class="modal-total-label">Pesos argentinos (ARS)</p>
                <p class="modal-total-amount" id="total-donaciones-ars">$ 0,00</p>
              </div>
              <div>
                <p class="modal-total-label">Dólares estadounidenses (USD)</p>
                <p class="modal-total-amount" id="total-donaciones-usd">US$ 0.00</p>
              </div>
            </div>
          </div>
        </div>

        <form class="modal-form" id="form-donacion">
          <div class="modal-form-row">
            <div class="form-group">
              <label class="form-label">Nombre</label>
              <input class="form-input" type="text" id="dona-nombre" placeholder="Tu nombre" required />
            </div>
            <div class="form-group">
              <label class="form-label">Apellido</label>
              <input class="form-input" type="text" id="dona-apellido" placeholder="Tu apellido" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Email</label>
            <input class="form-input" type="email" id="dona-email" placeholder="tu@email.com" required />
          </div>

          <div class="modal-form-row">
            <div class="form-group">
              <label class="form-label">Tipo de documento</label>
              <select class="form-input form-input-select" id="dona-tipo-doc" required>
                <option value="" disabled selected>Seleccioná</option>
                <option value="dni">DNI</option>
                <option value="cuit">CUIT</option>
                <option value="cuil">CUIL</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Número de documento</label>
              <input class="form-input" type="text" id="dona-num-doc" placeholder="12345678" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Fecha de nacimiento</label>
            <input class="form-input" type="date" id="dona-fecha-nac" required />
          </div>

          <div class="modal-form-row">
            <div class="form-group">
              <label class="form-label">País (celular)</label>
              <select class="form-input form-input-select" id="dona-pais-celular" required>
                <option value="" disabled selected>Seleccioná país</option>
                <option value="+54">🇦🇷 Argentina (+54)</option>
                <option value="+55">🇧🇷 Brasil (+55)</option>
                <option value="+56">🇨🇱 Chile (+56)</option>
                <option value="+57">🇨🇴 Colombia (+57)</option>
                <option value="+593">🇪🇨 Ecuador (+593)</option>
                <option value="+52">🇲🇽 México (+52)</option>
                <option value="+595">🇵🇾 Paraguay (+595)</option>
                <option value="+51">🇵🇪 Perú (+51)</option>
                <option value="+598">🇺🇾 Uruguay (+598)</option>
                <option value="+58">🇻🇪 Venezuela (+58)</option>
                <option value="+34">🇪🇸 España (+34)</option>
                <option value="+1">🇺🇸 Estados Unidos (+1)</option>
                <option value="+1">🇨🇦 Canadá (+1)</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Número de celular</label>
              <input class="form-input" type="tel" id="dona-celular" placeholder="Ej: 1123456789" required />
            </div>
          </div>

          <div class="modal-form-row">
            <div class="form-group">
              <label class="form-label">Monto a abonar</label>
              <input class="form-input" type="number" id="dona-monto" placeholder="100" min="1" step="0.01" required />
            </div>
            <div class="form-group">
              <label class="form-label">Moneda</label>
              <select class="form-input form-input-select" id="dona-moneda" required>
                <option value="ars" selected>Pesos Argentinos (ARS)</option>
                <option value="usd">Dólares Estadounidenses (USD)</option>
              </select>
            </div>
          </div>

          <div class="form-group" style="margin-top: 1.5rem;">
            <button class="form-btn" type="button" id="btn-donar" style="width: 100%;">Donar ahora</button>
            <p class="form-nota">Al enviar este formulario aceptás nuestra <a href="#">política de privacidad</a>.</p>
          </div>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

crearModalDonacion();
crearModalVoluntario();

const modalDonacion = document.getElementById('modal-donacion');
const modalClose = document.getElementById('modal-close');
const formDonacion = document.getElementById('form-donacion');
const btnDonar = document.getElementById('btn-donar');
const botonesDonarAhora = document.querySelectorAll('.footer-donate-btn, .apoyo-btn, .donacion-btn, .nav-btn');

const TOTAL_DONACIONES_KEY = 'novaMenteTotalDonaciones';

function obtenerTotalesDonaciones() {
  const totalesGuardados = localStorage.getItem(TOTAL_DONACIONES_KEY);
  if (!totalesGuardados) {
    return { ars: 0, usd: 0 };
  }

  try {
    const parsed = JSON.parse(totalesGuardados);
    return {
      ars: parseFloat(parsed.ars) || 0,
      usd: parseFloat(parsed.usd) || 0,
    };
  } catch (e) {
    return { ars: 0, usd: 0 };
  }
}

function guardarTotalesDonaciones(totales) {
  localStorage.setItem(TOTAL_DONACIONES_KEY, JSON.stringify(totales));
}

function formatearMonto(valor, moneda) {
  if (moneda === 'usd') {
    return 'US$ ' + valor.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  return '$ ' + valor.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function actualizarTotalDonacionesUI() {
  const totalARS = document.getElementById('total-donaciones-ars');
  const totalUSD = document.getElementById('total-donaciones-usd');
  const totales = obtenerTotalesDonaciones();

  if (totalARS) {
    totalARS.textContent = formatearMonto(totales.ars, 'ars');
  }

  if (totalUSD) {
    totalUSD.textContent = formatearMonto(totales.usd, 'usd');
  }
}

const modalVoluntario = document.getElementById('modal-voluntario');
const modalVoluntarioClose = document.getElementById('modal-voluntario-close');
const formVoluntario = document.getElementById('form-voluntario');
const btnEnviarVoluntario = document.getElementById('btn-enviar-voluntario');
const botonesVoluntario = document.querySelectorAll('.voluntario-cta__btn, .comunidad-cta-btn');
const botonesQuieroSumarme = document.querySelectorAll('.apoyo-btn-outline');

function limpiarErroresModal(modal) {
  if (!modal) return;
  modal.querySelectorAll('.form-error, .form-success').forEach(function (error) {
    error.remove();
  });
  modal.querySelectorAll('.form-input').forEach(function (input) {
    input.style.borderColor = '';
  });
}

function mostrarMensajeVoluntario(mensaje) {
  if (!modalVoluntario) return;
  const mensajeExistente = modalVoluntario.querySelector('.form-success');
  if (mensajeExistente) {
    mensajeExistente.remove();
  }

  const mensajeExito = document.createElement('p');
  mensajeExito.classList.add('form-success');
  mensajeExito.textContent = mensaje;
  mensajeExito.style.fontSize = '14px';
  mensajeExito.style.color = 'var(--color-menta-800)';
  mensajeExito.style.marginTop = '1rem';

  const form = document.getElementById('form-voluntario');
  if (form) {
    form.appendChild(mensajeExito);
  }
}

function crearModalVoluntario() {
  if (document.getElementById('modal-voluntario')) return;

  const modalHTML = `
    <div class="modal-overlay" id="modal-voluntario">
      <div class="modal-content">
        <button class="modal-close" id="modal-voluntario-close">&times;</button>

        <div class="modal-header">
          <h2 class="modal-title">Quiero ser voluntario</h2>
          <p class="modal-subtitle">Contanos cómo querés ayudar y en qué horario podés acompañar la causa.</p>
        </div>

        <form class="modal-form" id="form-voluntario">
          <div class="modal-form-row">
            <div class="form-group">
              <label class="form-label">Nombre</label>
              <input class="form-input" type="text" id="voluntario-nombre" placeholder="Tu nombre" required />
            </div>
            <div class="form-group">
              <label class="form-label">Apellido</label>
              <input class="form-input" type="text" id="voluntario-apellido" placeholder="Tu apellido" required />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Email</label>
            <input class="form-input" type="email" id="voluntario-email" placeholder="tu@email.com" required />
          </div>

          <div class="modal-form-row">
            <div class="form-group">
              <label class="form-label">Área de interés</label>
              <select class="form-input form-input-select" id="voluntario-area" required>
                <option value="" disabled selected>Seleccioná un área</option>
                <option value="psicologia">Psicología / Salud mental</option>
                <option value="diseno">Diseño y contenido</option>
                <option value="comunicacion">Comunicación / community</option>
                <option value="desarrollo">Desarrollo web</option>
                <option value="educacion">Educación / talleres</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Disponibilidad</label>
              <select class="form-input form-input-select" id="voluntario-disponibilidad" required>
                <option value="" disabled selected>Seleccioná disponibilidad</option>
                <option value="completa">Tiempo completo</option>
                <option value="parcial">Medio tiempo</option>
                <option value="fines">Fines de semana</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Ciudad / País</label>
            <input class="form-input" type="text" id="voluntario-ubicacion" placeholder="Ej: Buenos Aires, Argentina" required />
          </div>

          <div class="form-group">
            <label class="form-label">¿Por qué te interesa sumarte?</label>
            <textarea class="form-input form-textarea" id="voluntario-mensaje" placeholder="Contanos brevemente qué te motiva..." required></textarea>
          </div>

          <div class="form-group" style="margin-top: 1.5rem;">
            <button class="form-btn" type="button" id="btn-enviar-voluntario" style="width: 100%;">Enviar solicitud</button>
            <p class="form-nota">Al enviar este formulario aceptás nuestra <a href="#">política de privacidad</a>.</p>
          </div>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function abrirModalVoluntario() {
  if (modalVoluntario) {
    modalVoluntario.classList.add('activo');
    document.body.style.overflow = 'hidden';
  }
}

function cerrarModalVoluntario() {
  if (modalVoluntario) {
    modalVoluntario.classList.remove('activo');
    document.body.style.overflow = '';
    limpiarErroresModal(modalVoluntario);
  }
}

// Función para abrir el modal
function abrirModalDonacion() {
  if (modalDonacion) {
    actualizarTotalDonacionesUI();
    modalDonacion.classList.add('activo');
    document.body.style.overflow = 'hidden';
  }
}

// Función para cerrar el modal
function cerrarModalDonacion() {
  if (modalDonacion) {
    modalDonacion.classList.remove('activo');
    document.body.style.overflow = '';
    // Limpiar errores
    document.querySelectorAll('.form-error').forEach(function (error) {
      error.remove();
    });
    document.querySelectorAll('.form-input').forEach(function (input) {
      input.style.borderColor = '';
    });
  }
}

// Event listeners para cerrar el modal de donación
if (modalClose) {
  modalClose.addEventListener('click', cerrarModalDonacion);
}

if (modalDonacion) {
  modalDonacion.addEventListener('click', function (e) {
    if (e.target === modalDonacion) {
      cerrarModalDonacion();
    }
  });
}

// Event listeners para cerrar el modal de voluntariado
if (modalVoluntarioClose) {
  modalVoluntarioClose.addEventListener('click', cerrarModalVoluntario);
}

if (modalVoluntario) {
  modalVoluntario.addEventListener('click', function (e) {
    if (e.target === modalVoluntario) {
      cerrarModalVoluntario();
    }
  });
}

// Event listeners para abrir el modal al hacer click en botones "Donar ahora"
botonesDonarAhora.forEach(function (boton) {
  boton.addEventListener('click', function (e) {
    e.preventDefault();
    abrirModalDonacion();
  });
});

// Footer: abrir modal de donación o ir al formulario de contacto
const footerLinks = document.querySelectorAll('.footer-links a');

footerLinks.forEach(function (link) {
  const texto = link.textContent.trim().toLowerCase();

  if (texto === 'donar') {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      abrirModalDonacion();
    });
  }

  if (texto === 'ser voluntario') {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      abrirModalVoluntario();
    });
  }

  if (texto === 'contacto') {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const contactoSection = document.getElementById('contacto-form');
      const esPaginaContacto = window.location.pathname.split('/').pop() === 'contacto.html';

      if (esPaginaContacto && contactoSection) {
        contactoSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = 'contacto.html#contacto-form';
      }
    });
  }
});

// Event listeners para abrir el modal al hacer click en botones "Ser voluntario" y "Quiero sumarme"
botonesVoluntario.forEach(function (boton) {
  boton.addEventListener('click', function (e) {
    e.preventDefault();
    abrirModalVoluntario();
  });
});

botonesQuieroSumarme.forEach(function (boton) {
  if (boton.textContent.trim().toLowerCase() === 'quiero sumarme') {
    boton.addEventListener('click', function (e) {
      e.preventDefault();
      abrirModalVoluntario();
    });
  }
});

// Validación del formulario de donación
if (btnDonar) {
  btnDonar.addEventListener('click', function () {
    const nombre = document.getElementById('dona-nombre');
    const apellido = document.getElementById('dona-apellido');
    const email = document.getElementById('dona-email');
    const tipoDoc = document.getElementById('dona-tipo-doc');
    const numDoc = document.getElementById('dona-num-doc');
    const fechaNac = document.getElementById('dona-fecha-nac');
    const paisCelular = document.getElementById('dona-pais-celular');
    const celular = document.getElementById('dona-celular');
    const monto = document.getElementById('dona-monto');
    const moneda = document.getElementById('dona-moneda');

    let hayErrores = false;

    // Limpiar errores previos
    const erroresPrevios = document.querySelectorAll('.form-error');
    erroresPrevios.forEach(function (error) {
      error.remove();
    });

    // Array de todos los campos
    const campos = [nombre, apellido, email, tipoDoc, numDoc, fechaNac, paisCelular, celular, monto, moneda];

    // Validar cada campo
    campos.forEach(function (campo) {
      if (!campo) return;

      if (campo.value.trim() === '' || campo.value === '') {
        hayErrores = true;
        campo.style.borderColor = '#E05555';

        const mensajeError = document.createElement('p');
        mensajeError.classList.add('form-error');
        mensajeError.textContent = 'Este campo es obligatorio.';
        mensajeError.style.fontSize = '12px';
        mensajeError.style.color = '#E05555';
        mensajeError.style.marginTop = '4px';

        campo.parentNode.appendChild(mensajeError);
      } else {
        campo.style.borderColor = '';
      }
    });

    // Validar formato de email
    if (email && email.value.trim() !== '') {
      const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formatoEmail.test(email.value)) {
        hayErrores = true;
        email.style.borderColor = '#E05555';

        const errorEmail = document.createElement('p');
        errorEmail.classList.add('form-error');
        errorEmail.textContent = 'Ingresá un email válido.';
        errorEmail.style.fontSize = '12px';
        errorEmail.style.color = '#E05555';
        errorEmail.style.marginTop = '4px';

        email.parentNode.appendChild(errorEmail);
      }
    }

    // Validar que el monto sea mayor a 0
    if (monto && monto.value && parseFloat(monto.value) <= 0) {
      hayErrores = true;
      monto.style.borderColor = '#E05555';

      const errorMonto = document.createElement('p');
      errorMonto.classList.add('form-error');
      errorMonto.textContent = 'El monto debe ser mayor a 0.';
      errorMonto.style.fontSize = '12px';
      errorMonto.style.color = '#E05555';
      errorMonto.style.marginTop = '4px';

      monto.parentNode.appendChild(errorMonto);
    }

    // Si no hay errores, mostrar mensaje de éxito
    if (!hayErrores) {
      const montoValor = monto ? parseFloat(monto.value) : 0;
      const monedaSeleccionada = moneda ? moneda.value : 'ars';

      if (montoValor > 0) {
        const totales = obtenerTotalesDonaciones();
        const nuevosTotales = {
          ars: totales.ars + (monedaSeleccionada === 'ars' ? montoValor : 0),
          usd: totales.usd + (monedaSeleccionada === 'usd' ? montoValor : 0),
        };
        guardarTotalesDonaciones(nuevosTotales);
        actualizarTotalDonacionesUI();
      }

      formDonacion.reset();
      btnDonar.textContent = '¡Donación procesada!';
      btnDonar.style.background = 'var(--color-menta-600)';
      btnDonar.disabled = true;

      setTimeout(function () {
        btnDonar.textContent = 'Donar ahora';
        btnDonar.style.background = '';
        btnDonar.disabled = false;
        cerrarModalDonacion();
      }, 2000);
    }
  });
}

// Validación del formulario de voluntariado
if (btnEnviarVoluntario) {
  btnEnviarVoluntario.addEventListener('click', function () {
    const nombre = document.getElementById('voluntario-nombre');
    const apellido = document.getElementById('voluntario-apellido');
    const email = document.getElementById('voluntario-email');
    const area = document.getElementById('voluntario-area');
    const disponibilidad = document.getElementById('voluntario-disponibilidad');
    const ubicacion = document.getElementById('voluntario-ubicacion');
    const mensaje = document.getElementById('voluntario-mensaje');

    let hayErrores = false;

    limpiarErroresModal(modalVoluntario);

    const campos = [nombre, apellido, email, area, disponibilidad, ubicacion, mensaje];

    campos.forEach(function (campo) {
      if (!campo) return;

      if (campo.value.trim() === '' || campo.value === '') {
        hayErrores = true;
        campo.style.borderColor = '#E05555';

        const mensajeError = document.createElement('p');
        mensajeError.classList.add('form-error');
        mensajeError.textContent = 'Este campo es obligatorio.';
        mensajeError.style.fontSize = '12px';
        mensajeError.style.color = '#E05555';
        mensajeError.style.marginTop = '4px';

        campo.parentNode.appendChild(mensajeError);
      } else {
        campo.style.borderColor = '';
      }
    });

    if (email && email.value.trim() !== '') {
      const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formatoEmail.test(email.value)) {
        hayErrores = true;
        email.style.borderColor = '#E05555';

        const errorEmail = document.createElement('p');
        errorEmail.classList.add('form-error');
        errorEmail.textContent = 'Ingresá un email válido.';
        errorEmail.style.fontSize = '12px';
        errorEmail.style.color = '#E05555';
        errorEmail.style.marginTop = '4px';

        email.parentNode.appendChild(errorEmail);
      }
    }

    if (!hayErrores) {
      formVoluntario.reset();
      mostrarMensajeVoluntario('¡Bienvenido a NovaMente!');
      btnEnviarVoluntario.textContent = 'Bienvenido a NovaMente';
      btnEnviarVoluntario.style.background = 'var(--color-menta-600)';
      btnEnviarVoluntario.disabled = true;

      setTimeout(function () {
        btnEnviarVoluntario.textContent = 'Enviar solicitud';
        btnEnviarVoluntario.style.background = '';
        btnEnviarVoluntario.disabled = false;
        cerrarModalVoluntario();
      }, 2000);
    }
  });
}

// Permitir Enter para enviar el formulario de donación
if (formDonacion) {
  formDonacion.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      btnDonar.click();
    }
  });
}

// Permitir Enter para enviar el formulario de voluntariado
if (formVoluntario) {
  formVoluntario.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      btnEnviarVoluntario.click();
    }
  });
}