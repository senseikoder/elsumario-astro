---
title: "Privacidad: Apps de citas filtraban ubicación exacta de los usuarios"
date: 2024-08-21
categories: 
  - "comunidad"
  - "destacadas"
  - "innovacion"
tags: 
  - "acosadores"
  - "apps"
  - "camilo-gutierrez-amaya"
  - "citas"
  - "depredadores"
  - "deteccion-proactiva-de-amenazas"
  - "eset"
  - "eset-latinoamerica"
  - "filtracion-de-datos"
  - "laboratorio-de-investigacion"
  - "prevencion"
  - "seguridad-personal"
coverImage: "Imagen-referencial-Riesgo-de-privacidad-Apps-de-citas-que-filtraban-la-ubicacion-exacta-de-los-usuarios.jpg"
---

**El Sumario** - En la era digital, las funciones de geolocalización de muchas aplicaciones ofrecen una comodidad innegable, como **seleccionar el comercio más cercano para realizar una compra urgente para retirar personalmente**, pero, **en el caso de [las redes sociales](https://www.welivesecurity.com/en/social-media/10-things-avoid-posting-social-media-why/), las [aplicaciones de citas](https://www.welivesecurity.com/2022/08/12/safety-first-how-to-tweak-the-settings-on-your-dating-apps/), los [juegos](https://www.welivesecurity.com/2023/05/03/using-discord-privacy-security-risks/) y muchos otros servicios en línea, probablemente no sea la mejor idea compartir la ubicación exacta**. En este sentido, el equipo de investigación de [ESET](https://www.eset.com/latam/), compañía líder en detección proactiva de amenazas, alerta cómo algunas apps de citas **filtraban** ubicaciones exactas de sus usuarios.

Cuando se permite que una aplicación utilice la ubicación del dispositivo, por ejemplo en una aplicación de citas, es razonable suponer que la ubicación es generalizada, por ejemplo: “situado en Tampa a 23 millas”. Con una población de unos 400.000 habitantes, localizar la ubicación exacta de alguien debería ser una tarea difícil. Sin embargo, la semana pasada en _Black Hat USA_, **un equipo de investigación belga** [demostró](https://www.blackhat.com/us-24/briefings/schedule/#swipe-left-for-identity-theft-an-analysis-of-user-data-privacy-risks-on-location-based-dating-apps-39007) cómo algunas aplicaciones de citas filtraban inadvertidamente datos de ubicación exacta de los usuarios, con los **riesgos y violaciones a la privacidad** que esto significa.

_“Si bien ya se informó responsablemente del problema a las numerosas aplicaciones de citas afectadas y el problema se ha resuelto, este caso funciona como recordatorio de cómo los hábitos aparentemente inofensivos pueden poner en peligro la privacidad”_, comenta **Camilo Gutiérrez Amaya**, Jefe del **Laboratorio de Investigación** de **ESET Latinoamérica**.

Se demostró que a partir de los datos de “X millas de distancia” podían triangular una ubicación exacta del usuario. Seleccionando un perfil de destino, dibujaron un círculo con su ubicación en el centro, hasta la distancia de 23 millas. Luego falseando su ubicación dibujaron un segundo círculo superpuesto al anterior en algún punto. Con una tercera ubicación falseada, y un tercer círculo trazado en el lugar donde se encuentran los tres, pudieron determinar la ubicación exacta del usuario objetivo, que nunca se enteró de dicha filtración.

_“La misma técnica se puede utilizar cuando se establecen límites de ubicación; por ejemplo, seleccionando todos los perfiles a 8 km. Si repitiéramos el proceso anterior podrá identificarse la ubicación de un perfil. Solo las aplicaciones o servicios que utilizan la ubicación exacta tienen este problema, si la ubicación se redondea a, por ejemplo, una milla, entonces la ubicación exacta no se puede identificar utilizando este método”,_ complementa el investigador de ESET_._

Se examinaron 15 aplicaciones de citas en busca de problemas de privacidad, como el descrito anteriormente, a la vez que analizaban sus interfaces API, políticas de privacidad y otros datos. La [investigación](https://lepoch.at/files/dating-apps-usesec24.pdf) se centró específicamente en las aplicaciones de citas, pero muchos servicios y aplicaciones utilizan la ubicación de la misma manera. Por ejemplo, en las aplicaciones de juegos, ya que es posible en varias versiones encontrar a otros jugadores del mismo juego que estén cerca.

_“Destacar el problema utilizando las aplicaciones de citas como ejemplo hace el caso más llamativo, ya que todos entendemos el problema de [los](https://www.welivesecurity.com/2021/05/17/android-stalkerware-threatens-victims-further-exposes-snoopers-themselves/) **[acosadores](https://www.welivesecurity.com/2021/05/17/android-stalkerware-threatens-victims-further-exposes-snoopers-themselves/) y depredadores** que pueden utilizar estas plataformas. Sin embargo, es importante que todas las aplicaciones y servicios revisen el uso que hacen de la localización para asegurarse de que ocultan suficientes datos de localización como para que sea imposible calcular la ubicación exacta de alguien”_, advierte Gutiérrez Amaya.

#### ESET comparte algunas medidas para mitigar el problema y limitar la precisión con la que se comparte la ubicación al utilizar los dispositivos móviles

- Cuando una aplicación [pide permiso](https://www.welivesecurity.com/la-es/2019/10/10/permisos-necesitan-aplicaciones/) para utilizar la ubicación al instalarla, se puede cambiar el permiso para desactivar el uso compartido de la ubicación exacta. En iOS se utiliza una ubicación a **tres kilómetros** de la posición exacta, lo que **es una variante suficiente para evitar que alguien triangule la posición**.
- En los [dispositivos Apple](https://support.apple.com/en-us/102647), ir a “Ajustes”, “Privacidad y seguridad” y, a continuación, a “Servicios de localización”; cada aplicación y su permiso correspondiente pueden mostrarse y editarse según sea necesario.
- Si se utiliza un [dispositivo Android](https://support.google.com/accounts/answer/6179507?hl=en#:~:text=Stop%20an%20app%20from%20using%20your%20device%27s%20location), mantener pulsado el icono de la aplicación y en “Información de la aplicación” encontrar “Permisos”, incluido “Localización”, donde se podrá **seleccionar la opción adecuada**.

Coordenadas de contacto con ESET en Venezuela: [https://www.eset.com/ve/](https://www.eset.com/ve/). También sus redes sociales: Instagram ([@esetla](https://www.instagram.com/esetla/)) y Facebook: ([ESET](https://www.facebook.com/ESETLA))

El Sumario

Con información e imagen referencial suministradas por ESET y Comstat Rowland

_Visita nuestro canal de noticias en_ [**Google News**](https://news.google.com/publications/CAAqBwgKML7Ppgswptq-Aw?hl=es-419&gl=VE&ceid=VE%3Aes-419) _y síguenos para obtener información precisa, interesante y estar al día con todo. También en_ **[Twitter](https://twitter.com/el_sumario)** _e_ **[Instagram](https://www.instagram.com/el_sumario/?hl=es)** _puedes conocer diariamente nuestros contenidos_
