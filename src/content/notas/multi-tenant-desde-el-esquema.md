---
title: Multi-tenancy se diseña en el esquema, no se parcha después
date: 2026-05-22
description: Pasar de "una app para un cliente" a "un SaaS para muchos" no es agregar un filtro por aquí y por allá. Es una decisión de modelo de datos que se toma el día uno.
tags: SaaS, base de datos, arquitectura
---

Biodont resolvía un consultorio odontológico. Cuando la idea creció hacia **DentalSaaS** —el mismo dominio, pero para muchos consultorios sobre un solo despliegue— la pregunta de fondo fue una: *¿cómo evito que los datos de un consultorio se crucen con los de otro?*

La respuesta no es "agrego un `WHERE consultorio_id = ?` en cada query". Eso es una bomba de tiempo.

## Por qué el filtro manual falla

Si el aislamiento entre clientes depende de que **cada consulta** recuerde filtrar por tenant, basta **una** que se te olvide para filtrar mal —y en un SaaS, "filtrar mal" significa mostrarle a un cliente los datos de otro. No hay bug más caro en términos de confianza.

El aislamiento no puede ser una convención que el desarrollador aplica con disciplina. Tiene que ser una **propiedad del sistema**.

## Dónde vive la decisión

Multi-tenancy es, ante todo, una decisión de **modelo de datos**. Las opciones principales:

- **Base por tenant** — aislamiento máximo, más costo operativo.
- **Esquema por tenant** — buen aislamiento, migraciones más complejas.
- **Fila por tenant (tenant_id compartido)** — más simple de operar, exige rigor para no filtrar de más.

Para DentalSaaS diseñé el esquema con el `tenant` como ciudadano de primera clase desde el modelo, no como una columna añadida a último momento. La clave: que la capa de acceso a datos **no pueda** devolver filas de otro tenant, aunque el código de arriba se equivoque.

## Lo que aprendí

- **El día uno importa.** Rediseñar el aislamiento con datos de producción encima es una migración de terror. Diseñarlo desde el esquema es casi gratis.
- **Reusa el dominio, rediseña la tenencia.** La lógica clínica de Biodont ya estaba validada; el trabajo nuevo fue exclusivamente la capa de multi-tenancy. Separar esas dos cosas hizo el salto manejable.
- **Aislamiento por diseño, no por disciplina.** Si depende de que alguien se acuerde, no es aislamiento.

Un SaaS no es una app con más usuarios. Es una app donde la frontera entre clientes es sagrada —y esa frontera se dibuja en el esquema.
