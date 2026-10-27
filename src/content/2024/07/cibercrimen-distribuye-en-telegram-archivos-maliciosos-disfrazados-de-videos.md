---
title: "Cibercrimen distribuye en Telegram archivos maliciosos disfrazados de videos"
date: 2024-07-23
categories: 
  - "audiovisual"
  - "comunidad"
  - "destacadas"
  - "innovacion"
tags: 
  - "advertencia"
  - "archivos-maliciosos-camuflados-como-videos"
  - "camilo-gutierrez-amaya"
  - "cibercriminales"
  - "eset"
  - "evilvideo"
  - "investigacion"
  - "latinoamerica"
  - "precaucion"
  - "prevencion"
  - "telegram"
coverImage: "kal-visuals-j0837DNuxUY-unsplash.jpg"
---

**El Sumario** - El equipo de investigación de **[ESET](https://www.eset.com/latam/)**, compañía líder en detección proactiva de amenazas, descubrió un exploit zero-day de _Telegram_ para _Android_ que aprovecha una vulnerabilidad y permite a los atacantes enviar **archivos maliciosos camuflados como vídeos**.

## ESET identificó un exploit de día cero de Telegram para Android a la venta en un foro clandestino

La vulnerabilidad que explota permite enviar **payloads maliciosos** que **parecen archivos multimedia** a través del **chat de Telegram**. Si un usuario intenta reproducir el vídeo aparente, recibirá una solicitud para instalar una aplicación externa, que en realidad instala la **carga maliciosa**.

### _**La vulnerabilidad ha sido corregida desde el 11 de julio de 2024, después de que ESET informara de ella a Telegram**_

El análisis del exploit realizado por ESET reveló que funciona en las versiones de Telegram 10.14.4 y anteriores. Se especula que es probable que el payload específico se haya creado utilizando la API de Telegram, ya que permite a los desarrolladores subir archivos multimedia creados, específicamente a los chats o canales de Telegram mediante programación.

“_El exploit parece depender de que el actor de la amenaza sea capaz de generar una carga útil que muestre una aplicación de Android como una vista previa multimedia y no como un archivo adjunto binario. Una vez compartida en el chat, la carga maliciosa aparece como un vídeo de 30 segundos_”, comenta **Camilo Gutiérrez Amaya**, Jefe del Laboratorio de **Investigación** de ESET **Latinoamérica**.

# [Video](https://youtu.be/8mdW3MWoeFI)

\[caption id="attachment\_322955" align="alignnone" width="754"\]![](https://doblellave.com/wp-content/uploads/2024/07/Imagen-referencial-EvilVideo-Cibercriminales-distribuyen-en-Telegram-archivos-maliciosos-disfrazados-de-videos.jpg) Video con la demostración y explicación de la mencionada vulnerabilidad\[/caption\]

Por defecto, los archivos multimedia recibidos a través de Telegram **están configurados para descargarse automáticamente**. Esto significa que los usuarios con la opción activada descargarán automáticamente la carga maliciosa una vez que abran la conversación en la que se compartió. La opción se puede desactivar manualmente, en cuyo caso, la carga se puede descargar pulsando el botón de descarga situado en la esquina superior izquierda del vídeo compartido. Si el usuario intenta reproducir el vídeo, la carga se descargará automáticamente, se informa.

_“Si el usuario intenta reproducir el_ vídeo_, Telegram muestra un mensaje de que no puede reproducirlo y sugiere utilizar un reproductor externo. Se trata de una advertencia original de Telegram que encontramos en el código fuente de la aplicación legítima de Telegram para Android; no ha sido creada ni empujada por la carga maliciosa.”,_ agrega el investigador de ESET.

## No se pudo identificar al autor de la amenaza

En caso de que el usuario pulse el botón _Abrir_ en el mensaje, se le pedirá que instale una aplicación maliciosa disfrazada como el reproductor externo. Antes de la instalación, Telegram pedirá al usuario que habilite la instalación de apps desconocidas.

En este punto, la app maliciosa en cuestión ya ha sido descargada como el aparente archivo de vídeo, pero con la extensión .apk. Es la naturaleza de la vulnerabilidad la que hace que el archivo compartido parezca un vídeo: la aplicación maliciosa real no se alteró para hacerse pasar por un archivo multimedia, lo que sugiere que lo más probable es que se aprovechara el proceso de carga.

A pesar de que el payload fue creado únicamente para Telegram para Android, desde ESET se intentó probar su comportamiento en otros clientes de Telegram, como Telegram Web o Telegram Desktop para Windows, pero el exploit no funcionó en ninguno de ellos. En el caso de Telegram Web, después de intentar reproducir el “vídeo”, el cliente mostró un mensaje de error diciendo que se intente abrir el vídeo con la aplicación de escritorio en su lugar.

\[caption id="attachment\_322960" align="alignnone" width="1024"\]![](https://doblellave.com/wp-content/uploads/2024/07/Foro-clandestino-1024x664.jpg) Mensaje en un foro clandestino anunciando un cryptor-as-a-service para Android\[/caption\]

No se pudo identificar el autor de la amenaza, pero se identificaron otros servicios sospechosos que se compartieron en su mensaje del foro. Además del exploit, han estado utilizando el mismo foro clandestino para anunciar un cryptor-as-a-service para Android que afirman que es totalmente indetectable (FUD).

_“La vulnerabilidad afectaba a todas las versiones de Telegram para Android hasta la 10.14.4, pero ha sido parcheada a partir de la versión 10.14.5. Según comprobó el equipo de ESET, la vista previa multimedia del chat ahora muestra correctamente que el archivo compartido es una aplicación y no un vídeo”,_ concluye Gutiérrez Amaya de ESET.

Coordenadas de **contacto** con ESET: **[https://www.eset.com/ve/](https://www.eset.com/ve/)**. También sus redes sociales: Instagram ([@esetla](https://www.instagram.com/esetla/)) y Facebook: ([ESET](https://www.facebook.com/ESETLA))

_**De interés:**_ [_**MQD: 14 años realizando un Marketing Digital tanto efectivo como ético**_](https://elsumario.com/mqd-14-anos-realizando-un-marketing-digital-tanto-efectivo-como-etico/)

El Sumario

Con información de ESET y Comstat Rowland

_Visita nuestro canal de noticias en_ [**Google News**](https://news.google.com/publications/CAAqBwgKML7Ppgswptq-Aw?hl=es-419&gl=VE&ceid=VE%3Aes-419) _y síguenos para obtener información precisa, interesante y estar al día con todo. También en_ **[Twitter](https://twitter.com/el_sumario)** _e_ **[Instagram](https://www.instagram.com/el_sumario/?hl=es)** _puedes conocer diariamente nuestros contenidos_
