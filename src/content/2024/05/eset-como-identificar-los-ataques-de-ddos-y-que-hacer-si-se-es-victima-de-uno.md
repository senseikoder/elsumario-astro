---
title: "ESET: Cómo identificar los ataques de DDoS y qué hacer si se es víctima de uno"
date: 2024-05-13
categories: 
  - "comunidad"
  - "curiosidades"
  - "destacadas"
  - "dinero"
  - "innovacion"
tags: 
  - "ataque-de-denegacion-de-servicio"
  - "daniel-cunha-barbosa"
  - "ddos"
  - "eset"
  - "eset-latinoamerica"
  - "prevencion"
  - "resguardo"
coverImage: "Imagen-referencial-Ataques-de-DDoS-Como-identificarlos-y-que-hacer-si-se-es-victima-de-uno-ESET-Comstat-R.jpg"
---

**El Sumario** - Un **ataque de denegación de servicio** (**DDoS**, por sus siglas en inglés) se realiza por el envío de solicitudes ilegítimas masivas a un servidor, servicio web o red, para sobrepasar su capacidad y dejarlo inhabilitado para sus usuarios. **[ESET](https://www.eset.com/latam/)**, empresa líder en detección proactiva de amenazas, advierte que a pesar de que las siglas pueden imponer respeto, los ataques _DDoS_ son bastante sencillos de llevar a cabo y los delincuentes los utilizan mucho. Es por ello que la compañía analiza cómo identificarlos y responder a los mismos.

_“A lo largo de los años en el mercado de la seguridad la postura sobre este tipo de ataques ha cambiado significativamente. Antes, las empresas se preocupaban muy poco por pensar en soluciones que los eviten, pero actualmente la mayoría de los entornos están en alerta por este tipo de amenazas. Este cambio fue provocado por varios factores, entre ellos, la evolución de la madurez de la seguridad, tanto de los entornos como de los profesionales que trabajan en el área, y el cambio en la forma en que este ataque es utilizado por los delincuentes”,_ comenta **Daniel Cunha Barbosa**, Investigador de Seguridad Informática de **ESET Latinoamérica**.

Actualmente, los ataques **DDoS** se pueden utilizar de forma aislada, pero suelen utilizarse como complemento de otros ataques, por ejemplo para hacer más convincente la demanda de pago de un ransomware, afectando gravemente a los servicios de la empresa objetivo y causando un impacto directo en la percepción de los clientes que intentan comunicarse con esto(s) servicio(s). Otro punto de cambio se refiere a las protecciones, actualmente es posible adoptar protecciones para este fin con inversiones significativamente menores que hace unos años, estas protecciones pueden incluso estar disponibles en algunos entornos y solo es necesario habilitarlas.

La detección de este ataque no es una tarea trivial cuando el entorno no es motorizado mediante soluciones preconfiguradas para monitorizarlo. Generalmente, los ataques se notan cuando alguien intenta hacer uso del servicio e identifica lentitud o falta de disponibilidad. Idealmente, la detección más adecuada se basa en dos pilares principales: un equipo técnico capaz de identificar periodos de estabilidad y la parametrización de las soluciones de seguridad en función del resultado de esta identificación.

## Existen muchos tipos de soluciones que permiten afrontar el ataque con una tasa de éxito muy alta

Entre las soluciones destacadas por **ESET**, se encuentran:

**Filtrado de tráfico:** Un claro ejemplo de esta posibilidad de adaptar las soluciones existentes para frenar los ataques _DDoS_ es el filtrado de tráfico, ya sea realizado por firewalls que las empresas comúnmente ya tienen en sus entornos o por equipos específicos destinados a este fin.

Por lo general, los filtros utilizan reglas predefinidas para evitar que se permitan ciertos tipos de tráfico, evitando así solicitudes excesivas de una o más fuentes, formatos de solicitud no convencionales para ciertos tipos de servicios, tamaños de paquetes excesivos y otros tipos de enfoques maliciosos. Una ayuda valiosa en bloqueos de este tipo es apoyarse en soluciones basadas en el comportamiento para realizar los bloqueos, esto permitirá que los usuarios legítimos puedan acceder al servicio mientras bloquean a los atacantes.

**Equilibrio de carga:** El equilibrio puede producirse de varias maneras, ya sea haciendo que más de un enlace de Internet esté disponible y alternando su acceso a través de la configuración de DNS, o mediante el uso de un clúster de alta disponibilidad que dirija el servicio a uno de los otros nodos si el nodo actual no responde correctamente.

**Servicios expertos de protección DDoS:** También conocidos como Content Delivery Networks (CDN), estos servicios reúnen una serie de características útiles a la hora de detener los ataques _DDoS_. Entre las más valiosas se encuentran la segregación de tipos de acceso -mencionada en el filtrado de tráfico- permitiendo que solo se evite que los atacantes se comuniquen con el servicio, además de una estructura de red extremadamente robusta capaz de soportar ataques que pueden alcanzar más de 1 Terabit por segundo, algo difícil de lograr sin una estructura especializada.

**Adopción de servicios en la nube:** La transferencia de puntos críticos de la estructura interna a servidores o servicios en la nube ayuda a resistir los ataques DDoS, sin embargo, desde ESET señalan que no existe una solución mágica. El punto beneficioso es que suele ser más capaz de manejar una mayor cantidad de tráfico, sin embargo, es necesario asegurarse de contratar servicios que ofrezcan protección específica contra _DDoS_ o que permitan la contratación de servicios de terceros que sean capaces de realizarlo. Es muy importante leer detenidamente los contratos de servicios para entender hasta dónde llegará la responsabilidad del proveedor de servicios en caso de incidencia y, sobre todo, ser conscientes de que la contratación de la nube no suele eximir a los contratistas de las responsabilidades.

**Inteligencia de amenazas:** Entre la posible información que aporta un proceso de inteligencia de amenazas se encuentran IPs relacionadas con botnets, servidores vulnerables asociados a ciberdelincuentes, vulnerabilidades utilizadas para el acceso inicial o el movimiento lateral, entre muchas otras TTP. Esta información puede ser utilizada como indicadores de compromiso (IoC) o ataque (IoA), y puede ser insertada en soluciones de seguridad con el fin de evitar cualquier interacción de estos orígenes de antemano; además de servir como guía para priorizar qué vulnerabilidades deben abordarse primero para prevenir ataques.

**Monitoreo continuo:** La protección contra ataques DDoS, o cualquier otro ataque, no depende únicamente de la inserción de alguna herramienta avanzada en el entorno o de la contratación de algún servicio extremadamente especializado. Es necesario que exista una o varias personas capacitadas que realicen un monitoreo constante de las herramientas y servicios disponibles para evitar que ocurra un ataque. Desde **ESET** recomiendan  entender cómo funciona el entorno en su normalidad y así establecer líneas de base para la detección de anomalías, si bien la tarea se facilita con buenas herramientas, es fundamental que haya una persona ajustando y mejorando el rendimiento de las soluciones.

**Respuesta a incidentes:** Definir cuáles serán los primeros pasos a dar, quién será el responsable de cada uno de ellos y qué acciones tomará cada uno, quiénes serán los tomadores de decisiones contactados en caso de ser necesario, acciones de contención y recuperación, proveedores a los que se puede contactar para soporte y todas las demás características que se hayan planificado de acuerdo a las necesidades del negocio. ESET recomienda realizar pruebas sobre el plan de respuesta a incidentes para que las personas involucradas estén capacitadas y puedan llevarlo a cabo adecuadamente en caso de un incidente real.

También ESET invita a conocer **[Conexión Segura](https://www.eset.com/latam/podcast/)**, su podcast para saber qué está ocurriendo en el mundo de la seguridad informática. Para escucharlo puede ingresar a: [https://open.spotify.com/show/0Q32tisjNy7eCYwUNHphcw](https://open.spotify.com/show/0Q32tisjNy7eCYwUNHphcw)

**_De interés:_** [_**¿Qué es la huella digital y por qué debemos prestarle atención?**_](https://elsumario.com/que-es-la-huella-digital-y-por-que-debemos-prestarle-atencion/)

El Sumario

Con información e imagen referencial suministrada por ESET y Comstat Rowland

_Visita nuestro canal de noticias en_ [**Google News**](https://news.google.com/publications/CAAqBwgKML7Ppgswptq-Aw?hl=es-419&gl=VE&ceid=VE%3Aes-419) _y síguenos para obtener información precisa, interesante y estar al día con todo. También en_ **[Twitter](https://twitter.com/el_sumario)** _e_ **[Instagram](https://www.instagram.com/el_sumario/?hl=es)** _puedes conocer diariamente nuestros contenidos_
