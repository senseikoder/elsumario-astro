---
title: "ESET detectó phishing que utilizaba WinRAR para desfalco informativo"
date: 2025-08-16
categories: 
  - "comunidad"
  - "destacadas"
  - "innovacion"
tags: 
  - "anton-cherepanov"
  - "camilo-gutierrez-amaya"
  - "ciberdelincuencia"
  - "ciberseguridad"
  - "eset"
  - "eset-latinoamerica"
  - "espionaje"
  - "inteligencia"
  - "laboratorio-de-investigacion"
  - "winrar"
coverImage: "moritz-kindler-hh8l-uq5L48-unsplash.jpg"
---

**El Sumario** - El equipo de investigación de **[ESET](https://www.eset.com/latam/)**, compañía líder en detección proactiva de amenazas, descubrió una vulnerabilidad de _zero-day_ (nueva, previamente desconocida) en **WinRAR** que está siendo explotada **bajo la apariencia de documentos de solicitud de empleo**. Esta campaña está siendo dirigida por el grupo _RomCom_, alineado con Rusia, y está **dirigida a empresas financieras, de fabricación, defensa y logística de Europa y Canadá**. Información de indudable interés sobre algo ocurrido para usuarios tanto básicos como avanzados.

_“Se recomienda a los usuarios de WinRAR que instalen la última versión lo antes posible para mitigar el riesgo. Además, es importante tener en cuenta que las soluciones de software que dependen de versiones de Windows disponibles públicamente de UnRAR.dll o su código fuente correspondiente también están afectadas, especialmente aquellas que no han actualizado sus dependencias”_, comenta **Camilo Gutiérrez Amaya**, Jefe del **Laboratorio de Investigación** de **ESET Latinoamérica**.

## **Puntos clave de este hallazgo de ESET**

- Si se utiliza WinRAR u otros componentes afectados, como las versiones para Windows de sus utilidades de línea de comandos, UnRAR.dll o el código fuente portable de UnRAR, es importante actualizarlos inmediatamente a la última versión.

- El **18 de julio de 2025**, el equipo de ESET descubrió una vulnerabilidad de día cero, desconocida hasta entonces, que estaba siendo explotada en WinRAR.

- El análisis del exploit llevó al descubrimiento de una vulnerabilidad de path traversal, posible gracias al uso de flujos de datos alternativos.

- Tras una notificación inmediata, **WinRAR publicó una versión parcheada el 30 de julio de 2025**.

- La vulnerabilidad permite ocultar archivos maliciosos en un archivo comprimido, que se despliegan silenciosamente al extraerlo.

- Esta campaña se dirigió a empresas financieras, de fabricación, defensa y logística de Europa y Canadá.

Así, el equipo de investigación de ESET identificó tal vulnerabilidad en WinRAR que está siendo explotada por el grupo RomCom. Este grupo (también conocido como _Storm-0978_, _Tropical Scorpius_ o _UNC2596_) está alineado con Rusia y lleva a cabo tanto campañas oportunistas contra determinados sectores empresariales como operaciones de espionaje selectivo. El enfoque del grupo ha cambiado para incluir **operaciones de espionaje que recopilan inteligencia, en paralelo con sus operaciones de ciberdelincuencia más convencionales**.

**El backdoor utilizado habitualmente por el grupo es capaz de ejecutar comandos y descargar módulos adicionales en la máquina de la víctima**. Esta es al menos la tercera vez que _RomCom_ ha sido descubierto explotando alguna vulnerabilidad importante de zero-day. Los ejemplos anteriores incluyen una de Microsoft Word en [junio de 2023](https://www.microsoft.com/en-us/security/blog/2023/07/11/storm-0978-attacks-reveal-financial-and-espionage-motives/), y las dirigidas a versiones de Firefox, Thunderbird y el navegador Tor, en [octubre de 2024](https://www.welivesecurity.com/en/eset-research/romcom-exploits-firefox-and-windows-zero-days-in-the-wild/).

<figure>

![](https://tu-r2-bucket.r2.cloudflarestorage.com/images/Referencial-Ilustrativa-B.png)

<figcaption>

Mensaje de correo electrónico observado por ESET

</figcaption>

</figure>

El equipo de ESET identificó el archivo RAR que contenía rutas inusuales que llamaron su atención. Tras un análisis más detallado, descubrió que los atacantes estaban explotando una vulnerabilidad desconocida hasta entonces que afectaba a [WinRAR](https://www.win-rar.com/). Al confirmarlo, se pusieron en contacto con el desarrollador de WinRAR y, ese mismo día, se corrigió la vulnerabilidad, publicándose la actualización WinRAR 7.13 beta 1. WinRAR 7.13, el 30 de julio de 2025.

Los atacantes crearon especialmente el archivo que adjuntaban a los correos para que en apariencia sólo contuviera un archivo benigno, mientras que contenía muchos ADS maliciosos (aunque no hay indicación de ellos desde el punto de vista del usuario).

<figure>

![](https://tu-r2-bucket.r2.cloudflarestorage.com/images/Referencial-Ilustrativa-C.png)

<figcaption>

Eli\_Rosenfeld\_CV2 - Copia (10).rar abierto en WinRAR

</figcaption>

</figure>

Una vez que la víctima abría este archivo aparentemente benigno, WinRAR lo desempaquetaba junto con todos sus ADS. Por ejemplo, para Eli\_Rosenfeld\_CV2 - Copy (10).rar, se despliega una DLL maliciosa en %TEMP%. Del mismo modo, se despliega un archivo LNK malicioso en el directorio de inicio de Windows, con lo que se consigue la persistencia mediante la ejecución en el inicio de sesión del usuario.

Según la telemetría de ESET, estos archivos se utilizaron en campañas de spearphishing (tipo de ataque de phishing dirigido a puntos específicos, **con el objetivo de obtener información confidencial o acceso a sistemas**) del 18 al 21 de julio de 2025, dirigidas a empresas financieras, de fabricación, defensa y logística de Europa y Canadá. En todos los casos, los atacantes enviaron un CV con la esperanza de que un objetivo curioso lo abriera. Según la telemetría de ESET, ninguno de los objetivos se vio comprometido.

_“Al explotar una vulnerabilidad de zero-day previamente desconocida en WinRAR, el grupo RomCom ha demostrado que está dispuesto a invertir grandes esfuerzos y recursos en sus ciberoperaciones. Esta es al menos la tercera vez que RomCom utiliza una vulnerabilidad de zero-day in the wild, lo que pone de manifiesto su constante interés en adquirir y utilizar exploits para ataques selectivos. La campaña descubierta se dirigió a sectores que coinciden con los intereses típicos de los grupos APT alineados con Rusia, lo que sugiere una motivación geopolítica detrás de la operación. Queremos agradecer al equipo de WinRAR su cooperación y rápida respuesta”,_ comentó **Anton Cherepanov**, Senior Malware Researcher de ESET y parte del equipo que llevó adelante la investigación.

ESET invita a conocer más sobre seguridad informática visitando: [https://www.welivesecurity.com/es/](https://www.welivesecurity.com/es/)

Para obtener otros útiles datos preventivos está igualmente disponible en Venezuela: [https://www.eset.com/ve/](https://www.eset.com/ve/), y sus redes sociales @eset\_ve. También _Instagram_ ([@esetla](https://www.instagram.com/esetla/)) y _Facebook_ ([ESET](https://www.facebook.com/ESETLA)).

El Sumario

Con información e imágenes complementarias suministradas por ESET y Comstat Rowland

_Visita nuestro canal de noticias en_ [**Google News**](https://news.google.com/publications/CAAqBwgKML7Ppgswptq-Aw?hl=es-419&gl=VE&ceid=VE%3Aes-419) _y síguenos para obtener información precisa, interesante y estar al día con todo. También en_ **[X/Twitter](https://twitter.com/el_sumario)** _e_ **[Instagram](https://www.instagram.com/el_sumario/?hl=es)** _puedes conocer diariamente nuestros contenidos_
