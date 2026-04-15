---
title: "Prevenidos sobre SnakeStealer: el infostealer que encabeza el robo de contraseñas"
date: 2025-10-12
categories: 
  - "comunidad"
  - "destacadas"
  - "dinero"
  - "innovacion"
tags: 
  - "algunas-buenas-practicas-para-reducir-el-riesgo-de-infeccion"
  - "ciberatacantes"
  - "ciberdelincuentes"
  - "ciberseguridad"
  - "codigo-malicioso"
  - "eset-latinoamerica"
  - "eset-threat-report"
  - "eset-venezuela"
  - "infostealer"
  - "martina-lopez-2"
  - "payload"
  - "prevencion"
  - "seguridad-informatica"
  - "snakestealer"
coverImage: "Imagen-referencial-Snakestealer-el-infostealer-que-lidera-el-robo-de-contrasenas-en-2025-Suministrada-por-ESET-y-Comstat-R.jpg"
---

**El Sumario** - Los **infostealers** son un tipo de **código malicioso** que buscan robar información de manera silenciosa y que se convirtieron en una herramienta altamente utilizada por los **ciberatacantes**. Desde el laboratorio de [**ESET**](https://www.eset.com/latam/), compañía líder en detección proactiva de amenazas, se identificaron múltiples campañas que tienen como carga útil final (_payload_) un infostealer. Dentro de las identificadas [_AsyncRAT_ es la más frecuente](https://www.welivesecurity.com/es/investigaciones/xml-convierte-en-dropper-apunta-colombia/), pero también se utilizan familias como _HoudRAT_, _Agent Tesla_, _LummaStealer_ o _FormBook_. Sin embargo, y según el [**ESET Threat Report H12025**](https://web-assets.esetstatic.com/wls/en/papers/threat-reports/eset-threat-report-h12025.pdf), _**SnakeStealer**_ es la familia que mayor detección ha tenido en lo que va del 2025.

Esta familia hizo sus primeras apariciones en 2019. En sus primeras versiones utilizaba la plataforma Discord para alojar el stealer, que **se descargaba luego de que la víctima interactuara con un archivo adjunto a un correo de phishing**. Un factor en común en todos los años de vida de SnakeStealer es su modelo de negocio (por así decirlo), basado en lo que se conoce como malware-as-a-service (MaaS) en el que los atacantes alquilan o venden el acceso a malware listo para usar, similar a un software comercial, pero en el **mercado negro**. Esto **facilita que incluso personas con pocos conocimientos técnicos puedan lanzar campañas maliciosas aprovechando la infraestructura y soporte de desarrolladores especializados**.

_“SnakeStealer volvió a ganar popularidad en el ambiente cibercriminal, y no por casualidad: tras la caída de Agent Tesla, otro infostealer popular, sus propios operadores recomendaron a SnakeStealer como reemplazo en los canales de Telegram donde lo ofrecían como MaaS. Esto podría explicar por qué SnakeStealer pasó a ocupar el primer puesto en las detecciones de infostealers de manera tan rápida, siendo responsable de 1/5 de las mismas a nivel mundial, según la telemetría de ESET”_, comenta **Martina Lopez**, Investigadora de **Seguridad Informática** de **ESET Latinoamérica**.

Durante 2020 y 2021 este código malicioso [vio su pico en cuanto a campañas](https://malpedia.caad.fkie.fraunhofer.de/details/win.404keylogger) desplegadas asociadas a él, pero, según ESET, sin ningún tipo de preferencia aparente con respecto a su geografía. El malware fue descubierto en distintos países del mundo, sin reportes de campañas completas en América Latina.

<figure>

[![](https://tu-r2-bucket.r2.cloudflarestorage.com/images/Imagen-referencial-B-Acompanamiento-del-texto.jpg)](https://elsumario.com/wp-content/uploads/2025/10/Imagen-referencial-B-Acompanamiento-del-texto.jpg)

<figcaption>

Hashes relacionados con SnakeStealer, reportados por año (Fuente del gráfico: [MalwareBazaar](https://bazaar.abuse.ch/))

</figcaption>

</figure>

**Con el correr de los años, la forma en la que el _payload_ llegaba a la víctima se fue diversificando**, aunque el primer contacto se sigue dando mayormente mediante un adjunto vía phishing: desde el mismo **payload** comprimido con contraseña, pasando por archivos de tipo menos usuales (como RTF o ISO) como _downloaders_, o incluso empaquetado con otras amenazas. **Desde ESET comentan que existen algunos casos reportados de SnakeStealer camuflado bajo cracks o aplicaciones falsas en la web**, aunque parecen ser ocasiones esporádicas.

**Entre las capacidades dañinas más utilizadas por SnakeStealer, ESET destaca:**

- Funcionalidades evasivas, como matar procesos asociados con herramientas de seguridad, de análisis de malware o debuggers en el equipo víctima, así como verificaciones de hardware para descartar el uso de una máquina virtual.

- Persistencia mediante la modificación de registros de arranque de Windows.

- Robo de credenciales almacenadas en navegadores, bases de datos, clientes de correo o chat (como Discord) y de redes WiFi.

- Captura del portapapeles y keylogging.

- Toma de capturas de pantalla.

En cuanto a los mecanismos de exfiltración, el malware ofrece al atacante una variedad de métodos como la carga a un servidor usando el protocolo FTP, la publicación a un canal de Telegram mediante HTTP, o el envío de la información comprimida en un adjunto mediante correo electrónico.

### **Algunas buenas prácticas para reducir el riesgo de infección**

- Mantener el sistema operativo y las aplicaciones actualizadas.

- Utilizar [software de seguridad](https://www.eset.com/latam/hogar/) tanto en computadoras como dispositivos móviles.

- Desconfiar de adjuntos y enlaces en correos o mensajes no solicitados. Si provienen de alguna entidad o marca reconocida, contactarlos mediante algún medio oficial para determinar la veracidad del mensaje.

- Activar la autenticación multifactor (MFA) en servicios y programas que lo permitan, para evitar un acceso indebido en caso de que nuestra contraseña sea robada.

- En caso de sospecha de infección, cambiar todas las contraseñas desde otro dispositivo, revocar sesiones ya abiertas y mantenerse alerta ante movimientos sospechosos en cuentas.

ESET invita a conocer más sobre seguridad informática visitando: [https://www.welivesecurity.com/es/](https://www.welivesecurity.com/es/)

Para obtener otros datos preventivos está igualmente disponible: [https://www.eset.com/ve/](https://www.eset.com/ve/), y sus redes sociales @eset\_ve. También _Instagram_ ([@esetla](https://www.instagram.com/esetla/)) y _Facebook_ ([ESET](https://www.facebook.com/ESETLA)).

El Sumario

Con información e imagen referencial suministradas por ESET y Comstat Rowland

_Visita nuestro canal de noticias en_ [**Google News**](https://news.google.com/publications/CAAqBwgKML7Ppgswptq-Aw?hl=es-419&gl=VE&ceid=VE%3Aes-419) _y síguenos para obtener información precisa, interesante y estar al día con todo. También en_ **[X/Twitter](https://twitter.com/el_sumario)** _e_ **[Instagram](https://www.instagram.com/el_sumario/?hl=es)** __puedes conocer diariamente nuestros contenidos__
