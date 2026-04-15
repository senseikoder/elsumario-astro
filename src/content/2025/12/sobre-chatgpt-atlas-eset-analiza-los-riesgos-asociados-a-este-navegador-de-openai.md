---
title: "Sobre ChatGPT Atlas ESET analiza los riesgos asociados a este navegador de OpenAI"
date: 2025-12-15
categories: 
  - "comunidad"
  - "destacadas"
  - "innovacion"
tags: 
  - "analisis"
  - "chatgpt-atlas"
  - "ciberseguridad"
  - "consejos"
  - "daniel-cunha-barbosa"
  - "deteccion-proactiva-de-amenazas"
  - "eset"
  - "eset-latinoamerica"
  - "eset-venezuela"
  - "investigador-de-seguridad-informatica"
  - "mitigaciones"
  - "navegador-de-openai"
  - "precauciones"
  - "prevencion"
  - "prompts"
  - "recomendaciones"
  - "riesgos"
  - "seguridad-informatica"
  - "vulnerabilidades"
coverImage: "Imagen-referencial-ChatGPT-Atlas-riesgos-asociados-al-uso-del-navegador-de-OpenAI-Suministrada-por-ESET-y-Comstat-R.jpg"
---

**El Sumario** - En octubre de este año, **OpenAI** lanzó al público la primera versión de su navegador, **[ChatGPT Atlas](https://openai.com/es-419/index/introducing-chatgpt-atlas/)** que, por el momento, está disponible para _macOS_, aunque hay planes de ampliar a otras plataformas como _Windows_, _Android_ e _iOS_. El objetivo es hacer que la navegación sea directamente ChatGPT, eliminando la necesidad de copiar y pegar contenido para que la inteligencia artificial generativa (GenAI) pueda realizar acciones en él. **[ESET](https://www.eset.com/latam/)**, compañía líder en **detección proactiva de amenazas**, advierte que la propuesta, centrada en la practicidad y en instalaciones muy atractivas, **puede ocultar riesgos para la seguridad de sus usuarios**.

El presente análisis es un documento de máxima utilidad preventiva y para aprender; tanto en los casos de usuarios avanzados interesados en la materia, como para los básicos y ocasionales en ánimo o con propositos de enriquecer sus conocimientos, saber más y estar al día.

### **Principales riesgos y consecuencias asociados al uso del ChatGPT Atlas, según ESET**

**Inyección rápida:** La inyección de _prompts_ es uno de los principales riesgos en navegadores integrados con GenAI. El contenido malicioso puede ocultarse en la página visitada, en URL o incluso en imágenes manipuladas. Cuando el navegador interpreta esta información oculta, su comportamiento puede alterarse: desde proporcionar datos sensibles a atacantes, mostrar contenido distinto al esperado, hasta modificar sus ajustes para ser más permisivo en etapas posteriores del ataque.

**Filtración de datos sensibles:** Entre las funciones del navegador está el relleno de formularios de forma automatizada, lo que significa que, si una página maliciosa solicita datos que normalmente se solicitan en estos formularios, como nombre completo, teléfono, dirección, entre otros, el navegador puede proporcionarlos sin necesidad de validaciones adicionales.

**Acceso excesivo a datos personales:** Dado que el navegador está integrado de forma nativa con una GenAI, es posible que pueda acceder y procesar el contenido de todas las pestañas abiertas o que hayan estado abiertas. Por ejemplo, si se mantienen abiertas las cuentas de correo en distintos proveedores, una pestaña con el calendario para no perder citas o contactos, el navegador podría utilizar esa información para ejecutar acciones en esas herramientas. Esto puede ser útil en un uso legítimo, pero si se explota de manera maliciosa, podría implicar la **exposición de datos** sensibles a ciberdelincuentes.

> ### _Las integraciones pueden implicar riesgos de privacidad que muchos usuarios no anticipan, incluyendo el acceso a todos los archivos presentes en el dispositivo. De hecho, es posible enviar cualquier archivo como adjunto, y el navegador podría procesarlo sin aplicar controles adicionales, lo que aumenta la exposición de información sensible._ 
> 
> Destaca **Daniel Cunha Barbosa**,
> 
>           Investigador de **Seguridad Informática**
> 
>                  en **ESET Latinoamérica**

**Memoria del navegador:** Dado que el navegador puede interactuar con servicios autenticados, estas sesiones pueden permanecer abiertas indefinidamente. Si ocurre una interacción maliciosa y el navegador tiene varias sesiones activas, los atacantes podrían aprovecharlas para realizar acciones no autorizadas, incluyendo **ataques de secuestro de sesión**.

**Vulnerabilidad ante ataques de phishing:** Los ataques de phishing representan una amenaza significativa en navegadores que procesan contenido antes de mostrarlo en pantalla. Aunque existen ciertos indicadores para diferenciar un sitio legítimo de uno fraudulento, aún no se han identificado mecanismos eficientes para hacerlo. Esta falta de detección facilita la interacción con contenido malicioso, lo que beneficia a los ciberdelincuentes.

**Omnibox vulnerable a comandos maliciosos:** La Omnibox es la funcionalidad de la barra de direcciones que permite ingresar tanto URLs como términos de búsqueda, ofreciendo resultados relevantes en ambos casos. En el contexto de ChatGPT Atlas, existe el riesgo de que los usuarios sean engañados para hacer clic en comandos disfrazados de URLs. Estos comandos pueden alterar el comportamiento del navegador o redirigir a las víctimas hacia sitios web controlados por **ciberdelincuentes**.

**Falta de transparencia en la ejecución de las acciones:** Este punto resume la mayoría de las preocupaciones de seguridad relacionadas con este navegador. Al contar con capacidades automatizadas basadas en IA, muchas de las acciones que realiza no son visibles ni controlables por el usuario. Esto incluye desde interacciones con contenido malicioso en páginas web hasta el procesamiento de información personal o sensible, que incluso podría utilizarse como parte de modelos de entrenamiento o en respuestas futuras a otros usuarios. Idealmente, este tipo de navegador debería ofrecer configuraciones explícitas para cada funcionalidad que pueda comprometer la seguridad o privacidad del usuario.

**Ausencia de estándares de divulgación de vulnerabilidades:** Al igual que cualquier otro tipo de software, los navegadores integrados con IA pueden tener vulnerabilidades que afectan su funcionamiento. Esto hace necesario que la propia OpenAI disponga de formas de revelar estas vulnerabilidades para poder trabajar en una solución y actualización de software. Muchas vulnerabilidades permiten a los ciberdelincuentes **controlar los dispositivos sin tener que interactuar con sus víctimas**.

**Inyección en portapapeles:** La manipulación de portapapeles es un recurso utilizado por varios tipos de malware y suele estar destinada a robar información. Los troyanos suelen usar esta función al atacar carteras de criptomonedas; cuando la víctima copia la dirección de la cartera a la que quiere enviar fondos, el troyano la cambia y coloca la cartera de los ciberdelincuentes; **cuando la víctima va a pegar la información y completa la transferencia, los fondos se envían a los delincuentes**.

**Inyección de Reconocimiento Óptico de Caracteres (OCR):** La interpretación de texto oculto en imágenes como comandos válidos representa un riesgo emergente. Aunque la capacidad de reconocer contenido en imágenes no es nueva, el problema surge cuando esta función se utiliza con fines maliciosos. Es posible incrustar instrucciones ocultas en imágenes, invisibles para el ojo humano, que el navegador interprete como comandos válidos. Esto puede modificar su comportamiento de manera similar a una inyección de _prompts_.

## **Hay mejoras aplicadas**

\-Es importante conocer que, consciente de los riesgos asociados al nuevo producto, **OpenAI ha adoptado medidas para mejorar la seguridad del navegador Atlas**. Estableció limitaciones de agentes, Atlas no puede ejecutar código, descargar archivos, instalar extensiones, acceder a otras aplicaciones ni a información del dispositivo local sin acceso a contraseñas ni autocompletado. Además, el agente no puede acceder a contraseñas guardadas, datos autocompletados ni memorias internas fuera de su alcance. En cuanto al historial y control de navegación, el usuario puede borrar historial, memorias y definir qué sitios son visibles para ChatGPT, incluyendo la opción de bloquear la IA con un solo clic. Por otro lado, para que Atlas recuerde páginas visitadas, el usuario debe habilitar la función (desactivada por defecto). Asimismo, las interacciones no se usarán para entrenamiento de modelos, salvo que el usuario lo autorice explícitamente cuidando la privacidad. Y, finalmente, reforzaron la protección para sitios críticos y acciones en sitios sensibles (por ejemplo, bancos) requieren aprobación manual del usuario.

### **Resumen que concreta las recomendaciones de ESET en materia de ciberseguridad para reducir los riesgos**

- **No proporcionar datos para entrenamiento:** Evitar enviar información sensible que pueda aparecer en interacciones futuras.

- **Cumplir con leyes de protección de datos:** Especialmente en entornos corporativos (LGPD, GDPR).

- **Usar el agente con precaución:** Recordar que toma decisiones por / en nombre del usuario; no todas serán seguras.

- **Evitar sitios poco confiables:** Reduce riesgos de inyección de _prompts_ y otros ataques.

- **Utilizar entornos virtuales cuando sea posible:** Facilitar la recuperación ante fallos o ataques.

- **Capacitar a los usuarios:** La formación en seguridad es clave para minimizar riesgos.

_“La integración con GenAI es una tendencia inevitable, pero la seguridad debe evolucionar al mismo ritmo. Será responsabilidad de los profesionales y usuarios configurar y usar estas herramientas de forma consciente para reducir los riesgos”,_ agrega para finalizar **Cunha Barbosa** de **ESET Latinoamérica**.

ESET invita a conocer más sobre seguridad informática visitando: [https://www.welivesecurity.com/es/](https://www.welivesecurity.com/es/)

Para obtener otros útiles datos preventivos está igualmente disponible en Venezuela: [https://www.eset.com/ve/](https://www.eset.com/ve/), y sus redes sociales @eset\_ve. También _Instagram_ ([@esetla](https://www.instagram.com/esetla/)) y _Facebook_ ([ESET](https://www.facebook.com/ESETLA)).

El Sumario

Con información e imagen referencial suministradas por ESET y Comstat Rowland

_Visita nuestro canal de noticias en_ [**Google News**](https://news.google.com/publications/CAAqBwgKML7Ppgswptq-Aw?hl=es-419&gl=VE&ceid=VE%3Aes-419) _y síguenos para obtener información precisa, interesante y estar al día con todo. También en_ **[X/Twitter](https://twitter.com/el_sumario)** _e_ **[Instagram](https://www.instagram.com/el_sumario/?hl=es)** _puedes conocer diariamente nuestros contenidos_
