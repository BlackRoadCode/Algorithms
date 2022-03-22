### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)
---
Given a sorted array of integers a, find an integer x from a such that the value of

Dada una matriz ordenada de enteros a, encuentre un entero x de tal que el valor de sea el menor posible (aquí abs denota el valor absoluto). Si hay varias respuestas posibles, da salida a la más pequeña.

Lo que se quiere encontrar en resumen es **el valor medio**.

    abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value).
If there are several possible answers, output the smallest one.

**Example**

For a = [2, 4, 7], the output should be
absoluteValuesSumMinimization(a) = 4.

For a = [2, 4, 7, 6], the output should be
absoluteValuesSumMinimization(a) = 4.

For a = [2, 4, 7, 6, 6], the output should be
absoluteValuesSumMinimization(a) = 7.

For a = [2, 4, 7, 6, 6, 8], the output should be
absoluteValuesSumMinimization(a) = 7.

**Hints**
-   Math.floor()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer a**

A non-empty array of integers, sorted in ascending order.

*Guaranteed constraints:*

1 ≤ a.length ≤ 200,

-106 ≤ a[i] ≤ 106.

- **[output] integer**


## Un poco más a fondo

### Math.floor

- Devuelve el máximo entero menor o igual a un número.
- Es un método del objeto estándar Math que redondea un número dado hacia el **número entero anterior**, Ejemplos:
  - 1.5 redondea a 1, 
  - 4.7 redondea a 4. 
  - -2.3 redondea a -3
  - -6.4 redondea a -7

Toma nota que para los **números negativos esto significa que el número será redondeado "lejos de 0"** en vez de el número de menor valor absoluto debido a que Math.