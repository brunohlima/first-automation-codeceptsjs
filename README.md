# 🚀 Automação de Testes - Login (CodeceptJS)

Este projeto marca minha primeira automação de testes utilizando **CodeceptJS**, focada na funcionalidade de login.

## 🧪 Cenários Automatizados

Foram implementados 4 cenários principais para validar o comportamento da tela de login:

1. ✅ **Login com sucesso**

   * Usuário informa e-mail e senha válidos
   * Espera-se acesso ao sistema

2. ⚠️ **Apenas e-mail preenchido**

   * Usuário informa somente o e-mail
   * Espera-se validação de campo obrigatório (senha)

3. ⚠️ **Nenhum campo preenchido**

   * Usuário tenta logar sem preencher dados
   * Espera-se validação de campos obrigatórios

4. ⚠️ **Apenas senha preenchida**

   * Usuário informa somente a senha
   * Espera-se validação de campo obrigatório (e-mail)

---

## 🛠️ Tecnologias Utilizadas

* JavaScript
* CodeceptJS
* Node.js

---

## ▶️ Como executar o projeto

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

2. Instale as dependências:

```bash
npm install
```

3. Execute os testes:

```bash
npx codeceptjs run
```
---

## 💡 Objetivo

Praticar automação de testes E2E, validação de formulários e entendimento de fluxos de login utilizando CodeceptJS.
