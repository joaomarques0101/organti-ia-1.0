# Changelog - Organti IA

## Versão 6.0.0 - Persistência do Histórico de Conversas 💾

### 🎉 **NOVA FUNCIONALIDADE**

- **Histórico Persistente**: O histórico de conversas agora é salvo automaticamente no `localStorage` do navegador, garantindo que as mensagens não sejam perdidas ao fechar ou recarregar a página. Isso proporciona uma experiência de usuário mais contínua e fluida.

### 🔧 **IMPACTO TÉCNICO**

- **`localStorage`**: Implementação de funções para `salvar` e `carregar` o `chatHistory` do `localStorage`.
- **Inicialização**: O histórico é carregado ao iniciar a página, e a interface é renderizada com as conversas anteriores.
- **Limpeza**: A opção "Nova Conversa" agora também limpa o histórico salvo no `localStorage`.

## Versão 5.0.0 - Refinamento do Input e Bordas ✨

### 🎨 **MELHORIAS VISUAIS NO INPUT**

- **Cor do Campo**: O campo de entrada agora possui um tom de cinza escuro (#424242) para maior harmonia com o tema.
- **Borda Clara**: A borda do input foi ajustada para um cinza mais claro (#505050), proporcionando um destaque sutil.
- **Raio Maior**: O `border-radius` foi aumentado para 28px, conferindo um formato mais arredondado e moderno.
- **Sombra Interna**: Adicionada uma leve sombra interna (`inset 0 1px 3px rgba(0, 0, 0, 0.3)`) para dar profundidade ao campo.
- **Foco Aprimorado**: Ao focar no input, a borda se torna branca (#ffffff) e uma sombra externa sutil é adicionada para melhor feedback visual.
- **Placeholder**: A cor do placeholder foi ajustada para #9ca3af para melhor legibilidade.
- **Padding**: O padding interno do `input-field` foi zerado para maior controle do espaçamento.

### 🔧 **IMPACTO TÉCNICO**

- **CSS Atualizado**: Modificações nas propriedades `background`, `border`, `border-radius`, `box-shadow` e `padding` nas classes `.input-wrapper` e `.input-field` no `index.html`.

## Versão 4.0.0 - Tema Cinza Escuro e Branco 🎨

### ✨ **NOVO ESQUEMA DE CORES**

- **Tema Principal**: Cinza escuro (#1a1a1a) para o fundo principal
- **Elementos Secundários**: Tons de cinza mais claros (#212121, #2b2b2b, #3a3a3a, #424242) para sidebar, inputs, mensagens da IA e botões
- **Destaques**: Branco puro (#ffffff) para texto principal, bordas de seleção e botão de envio
- **Hover States**: Efeitos de hover sutis com tons de cinza mais claros

### 🎨 **Melhorias Visuais**

- **Estilo Minimalista**: Design mais limpo e profissional
- **Contraste Aprimorado**: Melhor legibilidade com o uso de branco sobre cinza escuro
- **Consistência Visual**: Cores harmonizadas em toda a interface

### 🔧 **Impacto Técnico**

- **CSS Atualizado**: Modificações diretas nas propriedades de `background-color`, `color`, `border` e `box-shadow` no `index.html`
- **Remoção de Gradientes**: Substituição de gradientes por cores sólidas para um visual mais plano

## Versão 3.0.0 - Análise Inteligente de Imagens 🔥

### 🎉 **NOVAS FUNCIONALIDADES REVOLUCIONÁRIAS**

#### 🖼️ **Copiar e Colar Imagens**
- **Ctrl+V Instantâneo**: Cole qualquer imagem diretamente no chat
- **Feedback Visual**: Indicador "📋 Imagem colada com sucesso!"
- **Processamento Automático**: OCR inicia automaticamente após colar

#### 🎯 **Arrastar e Soltar (Drag & Drop)**
- **Interface Intuitiva**: Arraste imagens diretamente para o chat
- **Overlay Visual**: Área destacada quando arrastar arquivos
- **Múltiplos Arquivos**: Solte várias imagens de uma vez
- **Feedback Imediato**: Processamento instantâneo após soltar

#### 🔍 **OCR Avançado com Tesseract.js**
- **Extração de Texto**: Lê automaticamente texto em imagens
- **Bilíngue**: Suporte para português e inglês
- **Progresso Visual**: Indicador de progresso durante extração
- **Preview Inteligente**: Mostra texto extraído antes do envio

#### 🤖 **IA com Análise de Imagem**
- **Contexto Completo**: IA recebe texto extraído das imagens
- **Análise Inteligente**: Responde baseada no conteúdo visual
- **Interpretação Avançada**: Entende documentos, gráficos, textos

### 🎨 **Melhorias na Interface**

#### 📱 **Design Responsivo Aprimorado**
- **Drop Zones**: Áreas visuais para arrastar arquivos
- **Indicadores Coloridos**: Verde (sucesso), Amarelo (processando), Azul (drop)
- **Animações Suaves**: Transições elegantes para todas as interações
- **Mobile-First**: Otimizado para dispositivos móveis

#### 🎯 **Feedback Visual Avançado**
- **Paste Indicator**: Notificação quando imagem é colada
- **OCR Progress**: Barra de progresso para extração de texto
- **Drop Overlay**: Sobreposição visual durante drag & drop
- **Text Preview**: Preview do texto extraído em tempo real

### 🔧 **Funcionalidades Técnicas**

#### 📎 **Sistema de Anexos Aprimorado**
- **3 Métodos de Upload**: Clique, arrastar, colar
- **Preview Completo**: Visualização de imagem + texto extraído
- **Gerenciamento Inteligente**: Adicionar/remover arquivos facilmente
- **Limpeza Automática**: Remove anexos após envio

#### 🧠 **Integração IA Inteligente**
- **Contexto Enriquecido**: Mensagens incluem texto das imagens
- **Análise Contextual**: IA entende o conteúdo visual através do OCR
- **Respostas Precisas**: Feedback baseado no conteúdo real das imagens

### 🚀 **Casos de Uso Expandidos**

#### 📚 **Educação e Estudo**
- Foto de exercícios para explicação
- Screenshots de código para revisão
- Documentos para análise e resumo

#### 💼 **Trabalho e Produtividade**
- Gráficos e tabelas para interpretação
- Documentos para análise rápida
- Apresentações para feedback

#### 🔧 **Suporte Técnico**
- Screenshots de erros para diagnóstico
- Código em imagens para revisão
- Diagramas para explicação

## Versão 2.0.0 - Anexo de Arquivos e Rebranding

### 🎉 Novas Funcionalidades

#### 📎 **Sistema de Anexo de Arquivos**
- **Upload de Arquivos**: Suporte completo para anexar imagens, PDFs, documentos de texto
- **Preview Visual**: Visualização prévia de imagens anexadas
- **Múltiplos Formatos**: Suporte para `.jpg`, `.png`, `.gif`, `.pdf`, `.txt`, `.doc`, `.docx`
- **Gerenciamento de Arquivos**: Possibilidade de remover arquivos antes do envio
- **Informações Detalhadas**: Exibição de nome, tipo e tamanho dos arquivos

#### 🤖 **Integração com IA**
- **Processamento Inteligente**: A IA reconhece quando arquivos são anexados
- **Contexto Aprimorado**: Mensagens incluem informações sobre os anexos
- **Preparação Futura**: Estrutura pronta para análise completa de imagens

#### 🎨 **Rebranding para "Organti IA"**
- **Nome Atualizado**: Interface renomeada para "Organti IA"
- **Identidade Visual**: Mantém o design moderno e profissional
- **Documentação Atualizada**: Todos os arquivos refletem o novo nome

### 🔧 Melhorias Técnicas

#### 📱 **Interface Aprimorada**
- **Estilos para Anexos**: CSS específico para preview e exibição de arquivos
- **Responsividade**: Anexos se adaptam a diferentes tamanhos de tela
- **Feedback Visual**: Indicadores claros de arquivos anexados
- **Animações Suaves**: Transições elegantes para interações

#### 💻 **Funcionalidades JavaScript**
- **Conversão Base64**: Processamento de arquivos para envio
- **Validação de Tipos**: Verificação de formatos suportados
- **Gerenciamento de Estado**: Controle eficiente de arquivos anexados
- **Limpeza Automática**: Remoção de anexos após envio

### 🎯 Funcionalidades Existentes Mantidas

#### ✅ **Chat Funcional**
- Integração completa com API DeepSeek
- Respostas inteligentes em tempo real
- Indicador de "Pensando..." durante processamento

#### ✅ **Design Responsivo**
- Interface adaptável para desktop, tablet e mobile
- Sidebar colapsável com menu hambúrguer
- Layout otimizado para diferentes dispositivos

#### ✅ **Interatividade Avançada**
- 8 botões de ação pré-configurados
- Scroll suave para mensagens anteriores
- Nova conversa com limpeza de histórico

### 📋 Arquivos Atualizados

1. **`index.html`** - Interface principal com sistema de anexos
2. **`enhanced_script.js`** - Lógica JavaScript aprimorada
3. **`README.md`** - Documentação completa atualizada
4. **`CHANGELOG.md`** - Este arquivo de mudanças

### 🚀 Como Usar os Anexos

1. **Anexar Arquivo**:
   - Clique no ícone 📎 no campo de entrada
   - Selecione um ou múltiplos arquivos
   - Visualize o preview dos arquivos selecionados

2. **Gerenciar Anexos**:
   - Remova arquivos clicando no botão ×
   - Visualize informações detalhadas de cada arquivo
   - Preview automático para imagens

3. **Enviar com Anexos**:
   - Digite sua mensagem normalmente
   - Os anexos serão incluídos automaticamente
   - A IA reconhecerá os arquivos anexados

### 🔮 Próximas Funcionalidades

- **Análise Completa de Imagens**: Quando disponível na API DeepSeek
- **Reconhecimento de Texto**: OCR para documentos e imagens
- **Processamento de PDFs**: Extração e análise de conteúdo
- **Histórico Persistente**: Salvamento de conversas com anexos

### 🛠️ Requisitos Técnicos

- **Navegadores Suportados**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Formatos de Arquivo**: Imagens (JPG, PNG, GIF), Documentos (PDF, TXT, DOC, DOCX)
- **Tamanho Máximo**: Limitado pelo navegador (geralmente 25MB)
- **JavaScript**: ES6+ com suporte a Promises e async/await

---

**Desenvolvido com ❤️ para uma experiência de chat mais rica e interativa**

### 🎉 **NOVAS FUNCIONALIDADES REVOLUCIONÁRIAS**

#### 🖼️ **Copiar e Colar Imagens**
- **Ctrl+V Instantâneo**: Cole qualquer imagem diretamente no chat
- **Feedback Visual**: Indicador "📋 Imagem colada com sucesso!"
- **Processamento Automático**: OCR inicia automaticamente após colar

#### 🎯 **Arrastar e Soltar (Drag & Drop)**
- **Interface Intuitiva**: Arraste imagens diretamente para o chat
- **Overlay Visual**: Área destacada quando arrastar arquivos
- **Múltiplos Arquivos**: Solte várias imagens de uma vez
- **Feedback Imediato**: Processamento instantâneo após soltar

#### 🔍 **OCR Avançado com Tesseract.js**
- **Extração de Texto**: Lê automaticamente texto em imagens
- **Bilíngue**: Suporte para português e inglês
- **Progresso Visual**: Indicador de progresso durante extração
- **Preview Inteligente**: Mostra texto extraído antes do envio

#### 🤖 **IA com Análise de Imagem**
- **Contexto Completo**: IA recebe texto extraído das imagens
- **Análise Inteligente**: Responde baseada no conteúdo visual
- **Interpretação Avançada**: Entende documentos, gráficos, textos

### 🎨 **Melhorias na Interface**

#### 📱 **Design Responsivo Aprimorado**
- **Drop Zones**: Áreas visuais para arrastar arquivos
- **Indicadores Coloridos**: Verde (sucesso), Amarelo (processando), Azul (drop)
- **Animações Suaves**: Transições elegantes para todas as interações
- **Mobile-First**: Otimizado para dispositivos móveis

#### 🎯 **Feedback Visual Avançado**
- **Paste Indicator**: Notificação quando imagem é colada
- **OCR Progress**: Barra de progresso para extração de texto
- **Drop Overlay**: Sobreposição visual durante drag & drop
- **Text Preview**: Preview do texto extraído em tempo real

### 🔧 **Funcionalidades Técnicas**

#### 📎 **Sistema de Anexos Aprimorado**
- **3 Métodos de Upload**: Clique, arrastar, colar
- **Preview Completo**: Visualização de imagem + texto extraído
- **Gerenciamento Inteligente**: Adicionar/remover arquivos facilmente
- **Limpeza Automática**: Remove anexos após envio

#### 🧠 **Integração IA Inteligente**
- **Contexto Enriquecido**: Mensagens incluem texto das imagens
- **Análise Contextual**: IA entende o conteúdo visual através do OCR
- **Respostas Precisas**: Feedback baseado no conteúdo real das imagens

### 🚀 **Casos de Uso Expandidos**

#### 📚 **Educação e Estudo**
- Foto de exercícios para explicação
- Screenshots de código para revisão
- Documentos para análise e resumo

#### 💼 **Trabalho e Produtividade**
- Gráficos e tabelas para interpretação
- Documentos para análise rápida
- Apresentações para feedback

#### 🔧 **Suporte Técnico**
- Screenshots de erros para diagnóstico
- Código em imagens para revisão
- Diagramas para explicação

## Versão 2.0.0 - Anexo de Arquivos e Rebranding

### 🎉 Novas Funcionalidades

#### 📎 **Sistema de Anexo de Arquivos**
- **Upload de Arquivos**: Suporte completo para anexar imagens, PDFs, documentos de texto
- **Preview Visual**: Visualização prévia de imagens anexadas
- **Múltiplos Formatos**: Suporte para `.jpg`, `.png`, `.gif`, `.pdf`, `.txt`, `.doc`, `.docx`
- **Gerenciamento de Arquivos**: Possibilidade de remover arquivos antes do envio
- **Informações Detalhadas**: Exibição de nome, tipo e tamanho dos arquivos

#### 🤖 **Integração com IA**
- **Processamento Inteligente**: A IA reconhece quando arquivos são anexados
- **Contexto Aprimorado**: Mensagens incluem informações sobre os anexos
- **Preparação Futura**: Estrutura pronta para análise completa de imagens

#### 🎨 **Rebranding para "Organti IA"**
- **Nome Atualizado**: Interface renomeada para "Organti IA"
- **Identidade Visual**: Mantém o design moderno e profissional
- **Documentação Atualizada**: Todos os arquivos refletem o novo nome

### 🔧 Melhorias Técnicas

#### 📱 **Interface Aprimorada**
- **Estilos para Anexos**: CSS específico para preview e exibição de arquivos
- **Responsividade**: Anexos se adaptam a diferentes tamanhos de tela
- **Feedback Visual**: Indicadores claros de arquivos anexados
- **Animações Suaves**: Transições elegantes para interações

#### 💻 **Funcionalidades JavaScript**
- **Conversão Base64**: Processamento de arquivos para envio
- **Validação de Tipos**: Verificação de formatos suportados
- **Gerenciamento de Estado**: Controle eficiente de arquivos anexados
- **Limpeza Automática**: Remoção de anexos após envio

### 🎯 Funcionalidades Existentes Mantidas

#### ✅ **Chat Funcional**
- Integração completa com API DeepSeek
- Respostas inteligentes em tempo real
- Indicador de "Pensando..." durante processamento

#### ✅ **Design Responsivo**
- Interface adaptável para desktop, tablet e mobile
- Sidebar colapsável com menu hambúrguer
- Layout otimizado para diferentes dispositivos

#### ✅ **Interatividade Avançada**
- 8 botões de ação pré-configurados
- Scroll suave para mensagens anteriores
- Nova conversa com limpeza de histórico

### 📋 Arquivos Atualizados

1. **`index.html`** - Interface principal com sistema de anexos
2. **`enhanced_script.js`** - Lógica JavaScript aprimorada
3. **`README.md`** - Documentação completa atualizada
4. **`CHANGELOG.md`** - Este arquivo de mudanças

### 🚀 Como Usar os Anexos

1. **Anexar Arquivo**:
   - Clique no ícone 📎 no campo de entrada
   - Selecione um ou múltiplos arquivos
   - Visualize o preview dos arquivos selecionados

2. **Gerenciar Anexos**:
   - Remova arquivos clicando no botão ×
   - Visualize informações detalhadas de cada arquivo
   - Preview automático para imagens

3. **Enviar com Anexos**:
   - Digite sua mensagem normalmente
   - Os anexos serão incluídos automaticamente
   - A IA reconhecerá os arquivos anexados

### 🔮 Próximas Funcionalidades

- **Análise Completa de Imagens**: Quando disponível na API DeepSeek
- **Reconhecimento de Texto**: OCR para documentos e imagens
- **Processamento de PDFs**: Extração e análise de conteúdo
- **Histórico Persistente**: Salvamento de conversas com anexos

### 🛠️ Requisitos Técnicos

- **Navegadores Suportados**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Formatos de Arquivo**: Imagens (JPG, PNG, GIF), Documentos (PDF, TXT, DOC, DOCX)
- **Tamanho Máximo**: Limitado pelo navegador (geralmente 25MB)
- **JavaScript**: ES6+ com suporte a Promises e async/await

---

**Desenvolvido com ❤️ para uma experiência de chat mais rica e interativa**

### 🎉 Novas Funcionalidades

#### 📎 **Sistema de Anexo de Arquivos**
- **Upload de Arquivos**: Suporte completo para anexar imagens, PDFs, documentos de texto
- **Preview Visual**: Visualização prévia de imagens anexadas
- **Múltiplos Formatos**: Suporte para `.jpg`, `.png`, `.gif`, `.pdf`, `.txt`, `.doc`, `.docx`
- **Gerenciamento de Arquivos**: Possibilidade de remover arquivos antes do envio
- **Informações Detalhadas**: Exibição de nome, tipo e tamanho dos arquivos

#### 🤖 **Integração com IA**
- **Processamento Inteligente**: A IA reconhece quando arquivos são anexados
- **Contexto Aprimorado**: Mensagens incluem informações sobre os anexos
- **Preparação Futura**: Estrutura pronta para análise completa de imagens

#### 🎨 **Rebranding para "Organti IA"**
- **Nome Atualizado**: Interface renomeada para "Organti IA"
- **Identidade Visual**: Mantém o design moderno e profissional
- **Documentação Atualizada**: Todos os arquivos refletem o novo nome

### 🔧 Melhorias Técnicas

#### 📱 **Interface Aprimorada**
- **Estilos para Anexos**: CSS específico para preview e exibição de arquivos
- **Responsividade**: Anexos se adaptam a diferentes tamanhos de tela
- **Feedback Visual**: Indicadores claros de arquivos anexados
- **Animações Suaves**: Transições elegantes para interações

#### 💻 **Funcionalidades JavaScript**
- **Conversão Base64**: Processamento de arquivos para envio
- **Validação de Tipos**: Verificação de formatos suportados
- **Gerenciamento de Estado**: Controle eficiente de arquivos anexados
- **Limpeza Automática**: Remoção de anexos após envio

### 🎯 Funcionalidades Existentes Mantidas

#### ✅ **Chat Funcional**
- Integração completa com API DeepSeek
- Respostas inteligentes em tempo real
- Indicador de "Pensando..." durante processamento

#### ✅ **Design Responsivo**
- Interface adaptável para desktop, tablet e mobile
- Sidebar colapsável com menu hambúrguer
- Layout otimizado para diferentes dispositivos

#### ✅ **Interatividade Avançada**
- 8 botões de ação pré-configurados
- Scroll suave para mensagens anteriores
- Nova conversa com limpeza de histórico

### 📋 Arquivos Atualizados

1. **`index.html`** - Interface principal com sistema de anexos
2. **`enhanced_script.js`** - Lógica JavaScript aprimorada
3. **`README.md`** - Documentação completa atualizada
4. **`CHANGELOG.md`** - Este arquivo de mudanças

### 🚀 Como Usar os Anexos

1. **Anexar Arquivo**:
   - Clique no ícone 📎 no campo de entrada
   - Selecione um ou múltiplos arquivos
   - Visualize o preview dos arquivos selecionados

2. **Gerenciar Anexos**:
   - Remova arquivos clicando no botão ×
   - Visualize informações detalhadas de cada arquivo
   - Preview automático para imagens

3. **Enviar com Anexos**:
   - Digite sua mensagem normalmente
   - Os anexos serão incluídos automaticamente
   - A IA reconhecerá os arquivos anexados

### 🔮 Próximas Funcionalidades

- **Análise Completa de Imagens**: Quando disponível na API DeepSeek
- **Reconhecimento de Texto**: OCR para documentos e imagens
- **Processamento de PDFs**: Extração e análise de conteúdo
- **Histórico Persistente**: Salvamento de conversas com anexos

### 🛠️ Requisitos Técnicos

- **Navegadores Suportados**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Formatos de Arquivo**: Imagens (JPG, PNG, GIF), Documentos (PDF, TXT, DOC, DOCX)
- **Tamanho Máximo**: Limitado pelo navegador (geralmente 25MB)
- **JavaScript**: ES6+ com suporte a Promises e async/await

---

**Desenvolvido com ❤️ para uma experiência de chat mais rica e interativa**

