# Proyecto KinoStore ReactJS

La idea es hacer un ecommerce basico para una tienda de films de culto
Contiene ya varias categorias, un formulario para el envio de los pedidos, carts y etc.

# Documentacion
## Librerias

 * React-router-dom (para Routear las cositas)
 * React-hot-toast (Para tirar notificaciones, util para saber que ondis)

## Base de Datos

Estamos utilizando Firebase, y para las imagenes simplemente usamos las de tMDB (the movie database, alternativa abierta (no FOSS) a iMDB)

## Estructura

 Importamos firebase/config en index.js, y el resto va en App.jsx
 App.jsx funciona de parent del resto de los componentes y contextos
 Utilizamos react router dom para el routeo en vez de usar HREFs

 Los contenedores itemDetailContainer y itemListContainer hacen exactamente lo que dicen los nombres, sirven de contenedores para traer toda la info de firebase y mostrarla

 -Item
 -ItemDetail
 -ItemList

 Estos componentes muestran las cosas de por si
 Con CartProvider hacemos todo lo que implique pasar info de un lado para otro para poder hacer las cositas con el carrito de compras

 Una vez que tengamos todo seleccionado vamos a terminar compra y eso nos lleva a la pagina de checkout, donde metemos nuestros datos y se nos da un ID de compra para poder seguirla

 Saludos!

 
