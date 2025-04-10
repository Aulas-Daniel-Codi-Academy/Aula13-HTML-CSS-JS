# 🌦️ App de Previsão do Tempo

Este é um aplicativo web simples de previsão do tempo utilizando HTML, CSS e JavaScript. Ele consome a API pública da OpenWeatherMap para buscar informações meteorológicas em tempo real.

## 🚀 Funcionalidades

- Busca de clima por cidade
- Exibe temperatura e condição atual (em português)
- Suporte à tecla Enter para buscar
- Interface amigável e responsiva
- Estilização com CSS puro

## 🧠 Tecnologias Usadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- API OpenWeatherMap

## 📦 Estrutura do Projeto

```
weather-app/
├── index.html       # Página principal
├── styles.css       # Estilização da interface
├── scripts.js       # Lógica JavaScript para consumir API
└── README.md        # Este arquivo
```

## 🔑 Como usar

1. Acesse https://openweathermap.org/api e crie uma conta gratuita.
2. Copie sua chave de API (API Key).
3. Substitua a variável `apiKey` no arquivo `scripts.js` pela sua chave:

```js
const apiKey = "SUA_CHAVE_AQUI";
```

4. Abra o arquivo `index.html` no navegador.
5. Digite o nome da cidade e veja a previsão!
