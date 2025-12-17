# Configuração do Site - Estrutura JSON

Este documento descreve quais elementos foram movidos para o arquivo de configuração JSON e quais permanecem no código.

## ✅ Todas as Seções Configuradas

### Header (Cabeçalho)
**No JSON:**
- Logo (letra, texto, cores)
- Itens de navegação (labels e hrefs)

**No Código:**
- Estados React, lógica de scroll, classes CSS condicionais, estrutura HTML

---

### Hero (Seção Principal)
**No JSON:**
- Badge ("Fundado em 1980")
- Título (linha 1, linha 2, cor da linha 2)
- Descrição
- Botões (labels, hrefs, variantes, ícones)
- Estatísticas (números e labels)
- Imagem (src, alt)

**No Código:**
- Estrutura HTML, classes CSS, animações, grid pattern

---

### Services (Serviços)
**No JSON:**
- Badge, título, descrição
- Lista de serviços (título e descrição de cada um)

**No Código:**
- Estrutura de cards, hover effects, classes CSS

---

### Why Choose Us (Por Que Nos Escolher)
**No JSON:**
- Badge, título, descrição
- Lista de valores (título e descrição de cada um)

**No Código:**
- Layout de duas colunas, elementos decorativos, animações

---

### Process (Processo)
**No JSON:**
- Badge, título, descrição
- Lista de passos (número, título, descrição)

**No Código:**
- Grid layout, cards, elementos decorativos

---

### Consultation (Consulta)
**No JSON:**
- Imagem (src, alt, overlay com badge e título)
- Badge, título, descrição
- Lista de features (título e descrição)
- Botão (label, href, ícone)

**No Código:**
- Layout de duas colunas, imagem com overlay, estrutura HTML

---

### FAQ (Perguntas Frequentes)
**No JSON:**
- Badge, título, descrição
- Lista de perguntas e respostas

**No Código:**
- Componente Accordion, estrutura HTML, classes CSS

---

### Footer (Rodapé)
**No JSON:**
- Logo (letra, texto)
- Descrição
- Endereço (rua, cidade)
- Contato (telefone, email)
- Links rápidos (título e itens)
- Newsletter (título, descrição, placeholder)
- Copyright
- Links legais

**No Código:**
- Grid layout, estrutura HTML, classes CSS

---

## 📝 Resumo Geral

**No JSON (`config/site.config.ts`):**
- ✅ Todos os textos editáveis
- ✅ Todas as imagens (src, alt)
- ✅ Todos os links e hrefs
- ✅ Todas as cores configuráveis
- ✅ Todas as listas de itens (serviços, valores, passos, etc.)

**No Código (Componentes):**
- 🔧 Estrutura HTML/JSX
- 🔧 Lógica e estados React
- 🔧 Classes CSS e estilos
- 🔧 Animações e transições
- 🔧 Event handlers
- 🔧 Layouts e grids

---

## 🎯 Como Usar

Para alterar qualquer conteúdo do site, edite apenas o arquivo `config/site.config.ts`. O template lerá automaticamente os dados e renderizará o conteúdo.

Para a IA gerar apenas o JSON no futuro, ela precisará apenas criar/atualizar o arquivo `site.config.ts` com a estrutura correta.
