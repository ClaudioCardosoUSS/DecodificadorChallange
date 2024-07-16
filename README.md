# DecodificadorChallange

# Decodificador de Texto

## Descrição do Projeto

Este projeto é um decodificador de texto que permite criptografar e descriptografar mensagens usando um algoritmo simples de substituição. Foi desenvolvido como parte do Challenge Oracle ONE, utilizando HTML, CSS e JavaScript.

## Funcionalidades

- Criptografar texto
- Descriptografar texto
- Copiar texto criptografado/descriptografado para a área de transferência

## Como funciona a criptografia

O algoritmo de criptografia substitui determinadas vogais por sequências específicas de caracteres:

- 'e' é convertido para "enter"
- 'i' é convertido para "imes"
- 'a' é convertido para "ai"
- 'o' é convertido para "ober"
- 'u' é convertido para "ufat"

A descriptografia reverte este processo.

### Exemplos:

- Criptografar: "gato" => "gaitober"
- Descriptografar: "gaitober" => "gato"

- Criptografar: "hello world" => "henternllober woberrlד"
- Descriptografar: "henternllober woberrlד" => "hello world"

## Requisitos

- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizadas letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original

## Como usar

1. Abra o arquivo `index.html` em um navegador web.
2. Digite o texto que deseja criptografar ou descriptografar no campo de texto.
3. Clique no botão "Criptografar" ou "Descriptografar" conforme necessário.
4. O resultado aparecerá na área à direita.
5. Use o botão "Copiar" para copiar o resultado para a área de transferência.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Autor

CLAUDIO CARDOSO
https://github.com/ClaudioCardosoUSS


Figma: https://www.figma.com/design/tvFEYhVfZTjdJ5P24RGV21/Alura-Challenge---Desafio-1---L%C3%B3gica?node-id=0-1&t=wKQxb7kdsDDwohRO-0

Publicação: https://decodificador-challange.vercel.app/
