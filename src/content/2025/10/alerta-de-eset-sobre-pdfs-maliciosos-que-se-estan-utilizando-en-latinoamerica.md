---
title: "Alerta de ESET sobre PDFs maliciosos que se están utilizando en Latinoamérica"
date: 2025-10-04
categories: 
  - "comunidad"
  - "destacadas"
  - "innovacion"
tags: 
  - "alerta"
  - "ciberdelincuentes"
  - "ciberseguridad"
  - "eset"
  - "fabiana-ramirez-cuenca-2"
  - "ltinoamerica"
  - "pdfs-maliciosos"
  - "peru"
  - "precaucion"
  - "reciente-campana-de-phishing"
  - "recoleccion-de-informacion"
  - "troyano-ratty"
coverImage: "vidhunnan-murugan-1JWBB23W9Og-unsplash.jpg"
---

**El Sumario** - **El equipo de investigación de [ESET](https://www.eset.com/latam/)**, compañía líder en detección proactiva de amenazas, **descubrió una reciente campaña de phishing que distribuye Ratty**, un troyano de acceso remoto (RAT). La campaña utiliza documentos PDF maliciosos y técnicas de ingeniería social dirigidas a usuarios de habla hispana, principalmente de usuarios en **Perú**. Los cibercriminales han utilizado diferentes servicios de alojamiento en la nube como Google Drive, Dropbox y Mediafire para alojar y propagar diferentes códigos maliciosos descritos en este blog.

Se trata de una información de valor tanto para usuarios esporádicos u ocasionales así como para avanzados y frecuentes.

<figure>

![](https://tu-r2-bucket.r2.cloudflarestorage.com/images/Imagen-referencial-A-Para-acompanar-el-texto.jpg)

<figcaption>

Ejemplo del archivo adjunto tipo PDF

</figcaption>

</figure>

Ratty es un troyano de acceso remoto que tiene diversas funciones como la captura de pantalla, acceso a la cámara y al micrófono, [keylogging,](https://www.welivesecurity.com/la-es/2021/03/04/que-es-keylogger-herramienta-para-espiar/) navegación por archivos y ejecución remota de comandos en el sistema infectado. “_Este RAT escrito en Java aunque no es habitual en la región latinoamericana está siendo utilizado en campañas maliciosas debido a la gran cantidad de funcionalidades con las que cuenta. Entre sus capacidades más relevantes se destaca la de recolección de información mediante keylogging, capturas de pantalla y grabación de audio, entre otros, así como la exfiltración de datos, conexión C2 y persistencia. Estas no son sus únicas funcionalidades y existen diversas variantes con distintos paquetes y módulos”,_ comenta **Fabiana Ramírez Cuenca**, Investigadora de Seguridad Informática de **ESET Latinoamérica**.

La campaña maliciosa comienza con un correo de phishing que incluye un archivo adjunto llamado Factura.pdf que induce a la víctima a hacer clic en un enlace que produce la descarga de un archivo HTML (FACTURA-243240011909044.html), que a su vez descarga un script VBS (FA-45-04-25.vbs). Este script, al ser ejecutado, facilita la descarga de un archivo comprimido (InvoiceXpress.zip), dentro del cual se encuentra un archivo (InvoiceXpress.cmd) encargado de ejecutar InvoiceXpress.jar, identificado como el troyano de acceso remoto Ratty, que además establece conexión con un servidor de comando y control.

<figure>

![](https://tu-r2-bucket.r2.cloudflarestorage.com/images/Imagen-referencial-B-Para-acompanar-el-texto.jpg)

<figcaption>

Diagrama de infección

</figcaption>

</figure>

### **Una vez ejecutado, Ratty realiza múltiples acciones; aunque no son las únicas, desde ESET destacan las siguientes**

- **Recolección de información**
    
    - Captura de imágenes y video desde la cámara web de la víctima.
    
    - Grabación de audio a través del micrófono.
    
    - Capturas de pantalla del dispositivo de la víctima.
    
    - Keylogging: captura de pulsaciones de teclado (keylogging).

- **Persistencia:** Ratty logra persistencia en Windows copiándose dentro del sistema y disfrazándose como un archivo png. Luego crea una llave, llamada AutorunKey, en un registro que garantiza que el software malicioso se inicie automáticamente con cada inicio de sesión.

- **Comando y control**: Se conecta al servidor de comando y control alojado en EQUINIX-CONNECT-EMEAGB, un proveedor de servicios web.  En el análisis de ESET, la muestra intentó establecer comunicación sobre el puerto TCP 8911. Asimismo, se identificaron módulos como PacketLogin, PacketKeepAlive y PacketDisconnect, empleados para gestionar la autenticación inicial y conexión con el servidor de control.

- **Ocultamiento de actividades maliciosas:** Contiene también paquetes utilizados para permitir un bloqueo de pantalla y así ocultar actividades maliciosas. También, otros paquetes que permiten controlar o congelar el mouse/pulsador y la pantalla para impedir interacción del usuario.

- **Transferencia de archivos y exfiltración:** Presencia de paquetes que permiten descargar y subir archivos entre el C2 y el dispositivo infectado. También HTTPUtil.java que gestionaría comunicaciones HTTP.

[![](https://tu-r2-bucket.r2.cloudflarestorage.com/images/Imagen-referencial-ESET-advierte-por-PDFs-maliciosos-que-circulan-en-Latinoamerica-Suministrada-por-ESET-y-Comstat-R-1024x576.jpg)](https://elsumario.com/wp-content/uploads/2025/10/Imagen-referencial-ESET-advierte-por-PDFs-maliciosos-que-circulan-en-Latinoamerica-Suministrada-por-ESET-y-Comstat-R.jpg)

ESET invita a conocer más sobre seguridad informática visitando: [https://www.welivesecurity.com/es/](https://www.welivesecurity.com/es/)

Para obtener otros útiles datos preventivos está igualmente disponible en Venezuela: [https://www.eset.com/ve/](https://www.eset.com/ve/), y sus redes sociales @eset\_ve. También _Instagram_ ([@esetla](https://www.instagram.com/esetla/)) y _Facebook_ ([ESET](https://www.facebook.com/ESETLA)).

El Sumario

Con información e imágenes referenciales complementarias suministradas por ESET y Comstat Rowland

_Visita nuestro canal de noticias en_ [**Google News**](https://news.google.com/publications/CAAqBwgKML7Ppgswptq-Aw?hl=es-419&gl=VE&ceid=VE%3Aes-419) _y síguenos para obtener información precisa, interesante y estar al día con todo. También en_ **[X/Twitter](https://twitter.com/el_sumario)** _e_ **[Instagram](https://www.instagram.com/el_sumario/?hl=es)** _puedes conocer diariamente nuestros contenidos_
