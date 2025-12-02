# Escrevendo-as-classes-de-um-Jogo
Santander BC Fundamentos de logica de programacao



Este projeto implementa uma classe genérica que representa um **herói de uma aventura**, utilizando princípios fundamentais de programação orientada a objetos em JavaScript.  
O objetivo é exercitar **variáveis**, **funções**, **estruturas de decisão**, **laços**, **classes e objetos**.

---

## 🎮 Funcionalidades

A classe criada possui:

- **nome** — Nome do herói  
- **idade** — Idade do herói  
- **tipo** — Tipo do herói (ex: mago, guerreiro, monge, ninja)  

E um método:

### `atacar()`
Exibe a mensagem:

O {tipo} atacou usando {ataque}

yaml
Copiar código

O ataque muda automaticamente conforme o tipo do herói:

| Tipo       | Ataque              |
|------------|----------------------|
| mago       | magia                |
| guerreiro  | espada               |
| monge      | artes marciais       |
| ninja      | shuriken             |

---

## 📦 Pré-requisitos

- **Node.js** instalado  
  https://nodejs.org

- Biblioteca `prompt-sync` para entrada de dados pelo terminal

---

## 🔧 Instalação

1. Baixe ou clone este repositório.
2. Acesse a pasta do projeto no terminal.
3. Instale a dependência necessária:

```bash
npm install prompt-sync
```


▶️ Execução
Para executar:

```bash
node jogo.js
```

Informe:

Nome do herói

Idade

Tipo (mago, guerreiro, monge ou ninja)

Exemplo de saída:

```bash
O mago atacou usando magia
```