# Organti IA - Chat

Um chat de inteligência artificial moderno e responsivo integrado com a API do DeepSeek, desenvolvido com HTML, CSS e JavaScript puro.

## 🚀 Funcionalidades

### ✅ Funcionalidades Implementadas
- **Chat de IA Funcional**: Integração completa com a API DeepSeek
- **Interface Responsiva**: Adaptável para desktop, tablet e mobile
- **Scroll Inteligente**: Rolagem suave para mensagens anteriores
- **Botões de Ação**: 8 botões pré-configurados para iniciar conversas
- **Sidebar Interativa**: Lista de conversas com seleção visual
- **Indicador de Carregamento**: Animação "Pensando..." durante respostas
- **Nova Conversa**: Funcionalidade para limpar chat e começar novo
- **Histórico Persistente**: O histórico de conversas agora é salvo automaticamente no `localStorage` do navegador, garantindo que as mensagens não sejam perdidas ao fechar ou recarregar a página.
- **Design Moderno**: Interface escura com gradientes e animações

### 🎨 Características Visuais
- **Tema Escuro**: Cores modernas e profissionais
- **Animações Suaves**: Transições e efeitos visuais
- **Tipografia Responsiva**: Fontes que se adaptam ao dispositivo
- **Scroll Personalizado**: Barras de rolagem estilizadas
- **Feedback Visual**: Hover effects e estados ativos

### 📱 Responsividade
- **Desktop**: Layout completo com sidebar fixa
- **Tablet**: Sidebar colapsável com overlay
- **Mobile**: Interface otimizada para toque
- **Menu Hambúrguer**: Navegação mobile intuitiva

## 🔧 Configuração

### Chave API
A chave API do DeepSeek está configurada no arquivo `enhanced_script.js`:
```javascript
const DEEPSEEK_API_KEY = 'sk-f976b2b7c2c24612a1c334d74d736549';
```

### Arquivos Principais
- `index.html` - Interface principal do chat
- `enhanced_script.js` - Lógica e integração com API
- `README.md` - Esta documentação

## 🚀 Como Usar

### 1. Abrir o Chat
- Abra o arquivo `index.html` em qualquer navegador moderno
- A interface será carregada automaticamente

### 2. Iniciar Conversa
**Opção 1 - Botões de Ação:**
- Clique em qualquer um dos 8 botões disponíveis
- O chat iniciará com uma mensagem pré-definida

**Opção 2 - Digite Diretamente:**
- Clique no campo de entrada na parte inferior
- Digite sua pergunta e pressione Enter
- A IA responderá automaticamente

### 3. Funcionalidades Adicionais
- **Nova Conversa**: Clique no botão "+ Nova Conversa"
- **Scroll**: Use o mouse para rolar mensagens anteriores
- **Mobile**: Use o menu ☰ para acessar a sidebar

## 🎯 Botões de Ação Disponíveis

1. **📝 Escrever um primeiro rascunho**
2. **💡 Obter conselhos**
3. **🎓 Aprender algo novo**
4. **🎨 Criar uma imagem**
5. **📋 Fazer um plano**
6. **💭 Debate de ideias**
7. **🌍 Praticar um idioma**
8. **✅ Faça um teste**

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **CSS3**: Flexbox, Grid, animações e responsividade
- **JavaScript ES6+**: Fetch API, async/await, DOM manipulation
- **DeepSeek API**: Integração com modelo de IA avançado

## 🔧 Funcionalidades Técnicas

### API Integration
```javascript
// Envio para DeepSeek API
const response = await fetch(DEEPSEEK_API_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
    },
    body: JSON.stringify({
        model: 'deepseek-chat',
        messages: chatHistory,
        temperature: 0.7,
        max_tokens: 1000
    })
});
```

### Responsividade
```css
@media (max-width: 768px) {
    .sidebar {
        position: fixed;
        transform: translateX(-100%);
    }
    .action-buttons {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

### Scroll Personalizado
```css
#messages-container::-webkit-scrollbar {
    width: 6px;
}
#messages-container::-webkit-scrollbar-thumb {
    background: #4b5563;
    border-radius: 3px;
}
```

## 🎨 Paleta de Cores

- **Fundo Principal**: `#1a1a2e`
- **Sidebar**: `#16213e`
- **Mensagens IA**: `#374151`
- **Mensagens Usuário**: Gradiente `#6366f1` → `#8b5cf6`
- **Texto Principal**: `#ffffff`
- **Texto Secundário**: `#d1d5db`
- **Placeholder**: `#9ca3af`

## 📱 Compatibilidade

### Navegadores Suportados
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Dispositivos Testados
- ✅ Desktop (1920x1080+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

## 🚀 Melhorias Futuras

### Funcionalidades Planejadas
- [ ] Histórico de conversas persistente
- [ ] Upload de arquivos
- [ ] Reconhecimento de voz
- [ ] Temas personalizáveis
- [ ] Exportar conversas
- [ ] Modo offline

### Otimizações Técnicas
- [ ] Service Worker para cache
- [ ] Lazy loading de mensagens
- [ ] Compressão de imagens
- [ ] PWA (Progressive Web App)

## 🔒 Segurança

- **HTTPS**: Recomendado para produção
- **API Key**: Manter segura em variáveis de ambiente
- **CORS**: Configurado para requisições cross-origin
- **Sanitização**: Entrada de usuário tratada adequadamente

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique o console do navegador para erros
2. Confirme se a chave API está válida
3. Teste em navegador atualizado
4. Verifique conexão com internet

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais e comerciais.

---

**Desenvolvido com ❤️ usando tecnologias web modernas**

