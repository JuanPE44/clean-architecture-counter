# Ejercicio Introductorio: Clean Architecture sin frameworks

Queremos ver cómo la dirección de las dependencias mantiene al núcleo de negocio independiente de los detalles externos.

## Idea clave de Clean Architecture
- El núcleo (dominio + casos de uso) **no conoce detalles externos**.
- Las dependencias siempre apuntan hacia adentro: las capas externas dependen de las internas, nunca al revés.

## Premisa del ejercicio
- El sistema debe permitir registrar un usuario.
- La lógica de negocio no debe saber cómo ni dónde se guarda el usuario.
- La persistencia es un detalle intercambiable (memoria, archivo, base de datos, API, etc.).

## Capas involucradas (sin tecnicismos)
- **Dominio:** entidades y contratos (interfaces) que describen qué necesita la lógica.
- **Aplicación:** casos de uso que coordinan la lógica usando las interfaces del dominio.
- **Infraestructura:** implementaciones concretas de los contratos (persistencia, IO, etc.).
- **Composición:** punto de entrada que ensambla dependencias y pone todo a funcionar.

## Instrucciones para el ejercicio
- Separa el código en dominio, aplicación e infraestructura.
- Define interfaces para desacoplar la persistencia (`UserRepository`).
- Implementa la persistencia en memoria (`InMemoryUserRepository`) sin tocar dominio ni aplicación.
- No importes infraestructura dentro del dominio ni del caso de uso.
- Respeta la dirección de dependencias: aplicación depende de dominio; infraestructura depende de dominio; composición conoce a todos.
- Mantén el código simple, sin frameworks ni librerías externas.

## Estructura sugerida
```
src/
  domain/
  application/
  infrastructure/
  main.ts
```

## Comportamiento esperado
- Al ejecutar `ts-node src/main.ts` (o compilar y correr con `node`), se registra un usuario.
- El caso de uso devuelve el usuario creado y se imprime por consola.
- Desde la capa de aplicación no se sabe si el usuario quedó en memoria, archivo o base de datos.

## Preguntas de reflexión
1. ¿Qué pasaría si cambia la forma de persistir los datos?
2. ¿Qué parte del sistema debería permanecer estable?
3. ¿Quién depende de quién en esta solución?
