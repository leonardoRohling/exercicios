# ALGORITMOS & PROGRAMAÇÃO

### Nível 1

1. Fazer um algoritmo que leia um número inteiro e imprima seu sucessor e seu antecessor.

2. Escreva um algoritmo para ler o preço de um par de nadadeiras numa loja, e escrevê-lo com um desconto de X%.

3. Numa loja de materiais de construção, um azulejo estampado custa R$ 14,90. Faça um algoritmo para ler o comprimento e altura de uma parede (em metros), e depois escrever o valor gasto com a compra de azulejos. Considere que um metro quadrado é formado por 9 azulejos.

4. Fazer um algoritmo que entre com uma distância (km) e o tempo de viagem (horas) de um automóvel, e dizer se a velocidade média foi superior ao limite (110 km/h) ou não.

5. Escreva um algoritmo que leia um número inteiro e verifique se ele é par e divisível por 3.

6. Fazer um algoritmo que leia dois números inteiros e imprima a soma entre eles. Antes de apresentar o resultado, imprimir a mensagem: "Soma =".

7. Fazer um algoritmo que leia um ângulo em graus e imprima o seno, co-seno, tangente, secante, co-secante e cotangente deste ângulo. (Obs.: é necessário transformar o ângulo em radianos antes de aplicar as funções trigonométricas).

8. Fazer um algoritmo que leia o valor de `x` e `y`, calcule a função abaixo e escreva os valores de `x`, `y` e da função calculada:

$f(x,y) = \frac{ x^2 + 3x + y^2 }{ xy - 5y -3x + 15 }$

9. A energia potencial de um objeto devido à sua altura sobre a superfície da Terra é dada pela equação:

$EP =  m . g . h$

onde `m` é a massa do objeto, `g` é a aceleração da gravidade, e `h` é a altura sobre a superfície terrestre. A energia cinética de um objeto em movimento é dada pela equação:

$EFC = \frac{1}{2} m . v^2$

onde `m` é massa do objeto e `v` é a velocidade do mesmo. Sendo $g = 9,81 m/s^2$, escreva um algoritmo que leia `m`, `v` e `h`, calcule a energia total ($ET = EP + EC$) possuída por um objeto no campo gravitacional da Terra, e escreva os valores de `EP`, `EC` e `ET`.

10. Se uma bola parada é solta de um altura h acima da superfície da Terra, a velocidade da bola v quando ela atinge a Terra é dada pela equação

$v = \sqrt{2 . g . h}$

onde `g` é a aceleração devido a gravidade ($9,81 m/s^2$) e `h` é a altura sobre a superfície da Terra (assumindo que o ar não oferece resistência). Desenvolva um algoritmo que leia a altura h de onde a bola é liberada, calcule a velocidade que a mesma atinge a Terra e escreva `h` e `v`

11. Escreva um algoritmo que leia um peso na Terra e o número de um planeta e imprima o valor do seu peso neste planeta. A relação de planetas é dada a seguir juntamente com o valor das gravidades relativas à Terra:


| Numero | Gravidade relativa | Planeta |
|--------|--------------------|---------|
| 1 | 0,37 | Mercúrio |
| 2 | 0,88 | Vênus |
| 3 | 0,38 | Marte |
| 4 | 2,64 | Júpiter |
| 5 | 1,15 | Saturno |
| 6 | 1,17 | Urano |

Para calcular o peso no planeta use a fórmula, onde $g_r$ é a gravidade relativa:

$P_{planeta} = \frac{P_{Terra}}{10} . g_r$