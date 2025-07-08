# “Informe – Evaluación Módulo 3

## ¿Qué hace la página?

Permite que el usuario escriba su nombre en el campo de texto al presionar el botón **«Saludar»**, muestra:

1. Un saludo personalizado **«Hola, *[nombre ingresado]*»**.
2. La longitud del nombre ingresado (número de caracteres)

Si el usuario hace clic en el botón sin haber ingresa su nombre se muestra un mensaje indicando que se debe ingresar el nombre.

## ¿Qué aprendí?

* Comprendí cómo interactuar/mostrar/ocultar elementos del HTML desde JavaScript de acuerdo a la data.
* Aplicar buenas prácticas al separar la lógica en el archivo JS, los estilos en el CSS y la estructura en el HTML.
* Cómo "escuchar" los eventos como `keyup` para reaccionar al momento que el usuario presiona la tecla enter así como el evento `addEventListener`.
* Entender la diferencia entre `document.querySelector` y `document.getElementById`
  * `getElementById()` busca por el atributo id del HTML.
  * `querySelector()` utiliza el CSS (clases, atributos...).

## ¿Estructuras de JavaScript usada?

**Variables** `const nameInput`, `const greetBtn`, `let nombre`
**Funciones** `function saludar() { … }`
**Condicionales** `if (nombre) { … } else { … }`
**Eventos** `addEventListener("click", saludar)`
**Manipulación de texto** `.trim()`, `.length`

## ¿MAyor dificultad?

* Mantener la coherencia de identificadores entre el HTML y el JavaScript, me pasó que un simple "desajuste" (`information` vs `info`) provocó que no funcionara el JS como debería.
* Empezar a entender y diferenciar `document.getElementById` de `document.querySelector`.

## ¿Qué mejoraría si tuviera más tiempo?

* **Validación previa y activación del botón**
  * Deshabilitar el botón «Saludar» (`disabled`) cuando el campo de texto esté vacío y habilitarlo solo cuando se detecte texto.
* **Validaciones de entrada**
  * Impedir que se escriban caracteres no deseados (números/símbolos raros), así como limitar la longitud o aplicar expresiones regulares que validen solo letras.
* **Control de errores**
  * Mostrar errores ya sea con modales o dentro del componente.
* **Aprender e implementar interacciones dinámicas**
  * Agregar un contador de caracteres y que cambie a medida que el usuario escribe.
  * Agregar mas estilos y cosas de diseño.