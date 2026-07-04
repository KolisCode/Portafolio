---
title: Por qué le doy herramientas al modelo en vez de dejarlo escribir SQL
date: 2026-06-20
description: La diferencia entre un copiloto en el que puedes confiar y uno que inventa resultados está en dónde pones el límite entre el modelo y tus datos.
tags: IA, MCP, arquitectura
---

Cuando construí **GeoAgent** —un copiloto que responde preguntas geoestadísticas en lenguaje natural— la tentación obvia era la más directa: dejar que el modelo escribiera el SQL espacial y ejecutarlo contra PostGIS. Funciona en una demo. En producción es una mala idea.

## El problema de dejar que el modelo escriba SQL

Un modelo de lenguaje que genera SQL libre tiene tres problemas serios:

- **No es verificable.** Si el modelo devuelve "hay 1.240 lotes dentro del radio", ¿cómo sabes que la consulta que corrió es la que dice que corrió? El texto y la ejecución pueden divergir.
- **No es seguro.** SQL arbitrario contra tu base es exactamente lo que pasas años aprendiendo a **no** permitir.
- **No es acotado.** El espacio de consultas posibles es infinito; el de operaciones que tu dominio necesita es pequeño y conocido.

## La alternativa: exponer herramientas

En vez de una llave a toda la base, le doy al modelo un **conjunto de herramientas** —vía MCP (Model Context Protocol)— que representan operaciones espaciales concretas: *buffer*, *intersección*, *conteo por zona*, *distancia entre capas*. Cada herramienta:

1. Tiene una firma tipada: entradas validadas, salida predecible.
2. Ejecuta una consulta **que yo escribí y revisé**, no una que el modelo improvisó.
3. Devuelve datos reales que el modelo luego explica en lenguaje natural.

El modelo deja de ser quien *hace* y pasa a ser quien *decide qué hacer*. Elige la herramienta, la encadena con otras, interpreta el resultado. Pero cada dato que sale de su boca proviene de una consulta real y auditable.

> El modelo razona; las herramientas ejecutan. Esa separación es toda la diferencia.

## Lo que ganas

Con este diseño, la respuesta de un copiloto se vuelve **defendible**: puedes trazar cada número hasta la operación que lo produjo. Y agregar una capacidad nueva es agregar una herramienta bien acotada, no ampliar la superficie de ataque.

Es más trabajo por adelantado que un `prompt → SQL → ejecutar`. Pero es la diferencia entre una demo y algo en lo que un profesional confía para tomar decisiones.
