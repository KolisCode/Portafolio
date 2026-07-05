---
title: Confirmar pagos por webhook, no por redirect
date: 2026-06-08
description: El error más común al integrar una pasarela de pago es marcar la orden como pagada cuando el usuario vuelve a tu página. Así se cuela dinero que nunca cobraste.
tags: e-commerce, backend, pagos
---

Al integrar **MercadoPago** en TiendaKit, la pregunta clave no fue *cómo cobrar*, sino *cómo saber con certeza que el cobro ocurrió*. De cómo la respondas depende que la caja te cuadre a fin de mes.

## El camino fácil (y roto)

El flujo intuitivo es:

1. El usuario paga en la pasarela.
2. La pasarela lo **redirige** de vuelta a tu `/success`.
3. Tu `/success` marca la orden como pagada.

El problema: el redirect **no es una confirmación de pago**. Es solo el navegador del usuario volviendo a tu sitio. Y el navegador:

- puede cerrarse antes de volver,
- puede quedarse sin internet a mitad de camino,
- puede ser manipulado para llegar a `/success` sin haber pagado nada.

Si tu orden depende del redirect, tienes órdenes "pagadas" que nunca se cobraron —y, peor, clientes que pagaron pero cuya orden quedó pendiente porque no volvieron.

## El camino correcto: webhook

La fuente de verdad del pago es el **webhook** que la pasarela envía a tu servidor, de servidor a servidor, independiente del navegador:

```
Pasarela ──(pago aprobado)──▶ POST /webhooks/mercadopago ──▶ marca orden pagada
```

El redirect solo sirve para **mostrarle algo bonito al usuario**. La orden cambia de estado únicamente cuando el webhook llega, lo verificas contra la API de la pasarela, y confirmas el monto.

## Reglas que sigo

- **La orden nace `pendiente`** y solo el webhook la mueve a `pagada`.
- **Verifico contra la fuente**, no confío en el payload a ciegas: consulto el pago por su id antes de dar nada por hecho.
- **El webhook es idempotente**: si llega dos veces (y llega), el segundo no duplica nada.
- **El redirect no toca el estado de la orden.** Cero excepciones.

Es una capa más de trabajo, pero es la que hace que la caja cuadre al final del día. Y ahí no hay margen para improvisar.
