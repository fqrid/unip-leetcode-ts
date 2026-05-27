# Soluciones Easy de LeetCode en TypeScript

Este repositorio contiene cinco problemas clásicos de nivel easy de LeetCode resueltos en TypeScript estricto, con una solución por archivo.

## Problemas Incluidos

- [01-two-sum.ts](01-two-sum.ts)
- [02-valid-parentheses.ts](02-valid-parentheses.ts)
- [03-merge-two-sorted-lists.ts](03-merge-two-sorted-lists.ts)
- [04-climbing-stairs.ts](04-climbing-stairs.ts)
- [05-maximum-subarray.ts](05-maximum-subarray.ts)

## Notas

- Cada solución está fuertemente tipada y pensada para ser fácil de enviar a LeetCode.
- Cada función principal incluye un comentario técnico breve con la complejidad de tiempo y espacio.
- La solución de listas enlazadas define una clase mínima `ListNode` en el mismo archivo para que sea autocontenida.

## Configuración del Proyecto

- Lenguaje: TypeScript
- Verificación de tipos: modo estricto habilitado
- Tipo de paquete: CommonJS

## Cómo Usarlo

1. Abre el archivo del problema que quieras revisar.
2. Copia la función en LeetCode o adapta el export a la firma que pida la plataforma.
3. Si lo necesitas, ejecuta la verificación de TypeScript localmente:

```bash
npx tsc --noEmit
```

## Resumen de Problemas

- `Two Sum`: usa una tabla hash para encontrar el complemento en tiempo lineal.
- `Valid Parentheses`: usa una pila para validar el orden de los paréntesis.
- `Merge Two Sorted Lists`: combina dos listas enlazadas de forma iterativa.
- `Climbing Stairs`: usa programación dinámica iterativa con espacio constante.
- `Maximum Subarray`: usa el algoritmo de Kadane.