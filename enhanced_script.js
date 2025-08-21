// Chat de IA com integração DeepSeek API
// Funcionalidades básicas da interface de chat com IA

// Configuração da API DeepSeek
const DEEPSEEK_API_KEY = 'sk-f976b2b7c2c24612a1c334d74d736549';
const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

// Estado do chat
let chatHistory = [];
let isLoading = false;
// Chave para localStorage
const LOCAL_STORAGE_KEY = 'organti_ia_chat_history';

// Função para carregar histórico do localStorage
function loadChatHistory() {
    const storedHistory = localStorage.getItem(LOCAL_STORAGE_KEY);
    const messagesContainer = document.getElementById("messages-container");
    if (storedHistory) {
        chatHistory = JSON.parse(storedHistory);
        // Limpar mensagens existentes na interface antes de re-renderizar
        if (messagesContainer) {
            messagesContainer.innerHTML = "";
        }
        // Re-renderizar mensagens carregadas
        chatHistory.forEach(msg => {
            // Re-criar URLs de objetos para anexos se existirem
            if (msg.attachments) {
                msg.attachments = msg.attachments.map(att => {
                    // Se o anexo for uma imagem e tiver dados base64, recriar a URL do objeto
                    if (att.type.startsWith('image/') && att.data) {
                        const byteCharacters = atob(att.data.split(',')[1]);
                        const byteNumbers = new Array(byteCharacters.length);
                        for (let i = 0; i < byteCharacters.length; i++) {
                            byteNumbers[i] = byteCharacters.charCodeAt(i);
                        }
                        const byteArray = new Uint8Array(byteNumbers);
                        const blob = new Blob([byteArray], { type: att.type });
                        att.url = URL.createObjectURL(blob);
                    }
                    return att;
                });
            }
            if (msg.role === 'user') {
                addMessage(msg.content, true, msg.attachments);
            } else if (msg.role === 'assistant') {
                addMessage(msg.content, false);
            }
        });
        showChatArea();
    }
}

// Função para salvar histórico no localStorage
function saveChatHistory() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(chatHistory));
}

// Chamar loadChatHistory ao carregar a página
document.addEventListener('DOMContentLoaded', loadChatHistory);

// Função para mostrar área de chat
function showChatArea() {
    const welcomeContent = document.getElementById('welcome-content');
    const messagesContainer = document.getElementById('messages-container');
    
    if (welcomeContent) {
        welcomeContent.style.display = 'none';
    }
    
    if (messagesContainer) {
        messagesContainer.style.display = 'flex';
    }
}

// Função para adicionar mensagem à interface
function addMessage(content, isUser = false, attachments = []) {
    const messagesContainer = document.getElementById('messages-container');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'ai'}${attachments.length > 0 ? ' with-attachment' : ''}`;
    
    // Adicionar anexos se existirem
    if (attachments.length > 0) {
        attachments.forEach(attachment => {
            const attachmentDiv = document.createElement('div');
            attachmentDiv.className = 'message-attachment';
            
            if (attachment.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = attachment.url;
                img.className = 'attachment-image';
                img.alt = attachment.name;
                img.onclick = () => window.open(attachment.url, '_blank');
                attachmentDiv.appendChild(img);
                
                // Mostrar texto extraído se disponível
                if (attachment.extractedText) {
                    const textDiv = document.createElement('div');
                    textDiv.style.cssText = `
                        margin-top: 8px; 
                        padding: 8px; 
                        background: rgba(16, 185, 129, 0.1); 
                        border-radius: 6px; 
                        border-left: 3px solid #10b981;
                        font-size: 12px;
                        color: #d1d5db;
                    `;
                    textDiv.innerHTML = `
                        <div style="color: #10b981; font-weight: 600; margin-bottom: 4px;">📝 Texto na imagem:</div>
                        <div>${attachment.extractedText}</div>
                    `;
                    attachmentDiv.appendChild(textDiv);
                }
            } else {
                attachmentDiv.innerHTML = `
                    <div class="attachment-file">
                        <span>${getFileIcon(attachment.type)}</span>
                        <span>${attachment.name}</span>
                        <span>(${formatFileSize(attachment.size)})</span>
                    </div>
                `;
            }
            
            messageDiv.appendChild(attachmentDiv);
        });
    }
    
    // Adicionar conteúdo de texto
    const textDiv = document.createElement('div');
    textDiv.textContent = content;
    messageDiv.appendChild(textDiv);
    
    messagesContainer.appendChild(messageDiv);
    
    // Scroll para a última mensagem
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Mostrar área de chat se ainda não estiver visível
    showChatArea();
}

// Função para mostrar indicador de carregamento
function showLoadingIndicator() {
    const messagesContainer = document.getElementById('messages-container');
    
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'loading-indicator';
    loadingDiv.className = 'loading-indicator';
    
    loadingDiv.innerHTML = `
        <div class="typing-animation">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
        <span style="margin-left: 8px;">Pensando...</span>
    `;
    
    messagesContainer.appendChild(loadingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Mostrar área de chat se ainda não estiver visível
    showChatArea();
}

// Função para remover indicador de carregamento
function removeLoadingIndicator() {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.remove();
    }
}

// Função para enviar mensagem para a API DeepSeek
async function sendToDeepSeek(message) {
    try {
        // Adicionar mensagem ao histórico
        chatHistory.push({ role: 'user', content: message });
        
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
        
        if (!response.ok) {
            throw new Error(`Erro da API: ${response.status}`);
        }
        
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        
        // Adicionar resposta da IA ao histórico
        chatHistory.push({ role: 'assistant', content: aiResponse });
        saveChatHistory(); // Salvar histórico após resposta da IA
        
        return aiResponse;
        
    } catch (error) {
        console.error('Erro ao comunicar com DeepSeek:', error);
        return 'Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente.';
    }
}

// Função para lidar com cliques nos botões de ação
async function handleActionClick(action) {
    const messages = {
        'Escrever um primeiro rascunho': 'Vou ajudar você a escrever um rascunho. Sobre qual tópico gostaria de escrever?',
        'Obter conselhos': 'Estou aqui para dar conselhos. Qual situação você gostaria de discutir?',
        'Aprender algo novo': 'Que interessante! O que você gostaria de aprender hoje?',
        'Criar uma imagem': 'Posso ajudar a criar uma imagem. Descreva o que você tem em mente.',
        'Fazer um plano': 'Vamos fazer um plano! Para qual objetivo ou projeto?',
        'Debate de ideias': 'Adoro debater ideias! Qual tópico você gostaria de explorar?',
        'Praticar um idioma': 'Ótima escolha! Qual idioma você gostaria de praticar?',
        'Faça um teste': 'Vamos fazer um teste! Sobre qual assunto você gostaria de ser testado?'
    };
    
    const message = messages[action] || `Você selecionou: ${action}`;
    
    // Adicionar mensagem da IA diretamente (não precisa chamar API para mensagens pré-definidas)
    addMessage(message, false);
    chatHistory.push({ role: 'assistant', content: message }); // Adicionar ao histórico
    saveChatHistory(); // Salvar histórico após ação pré-definida
}

// Função para lidar com envio de mensagens
async function handleMessageSend(message) {
    if (isLoading) return;
    
    console.log(`Mensagem enviada: ${message}`);
    
    // Preparar anexos
    const attachments = [];
    if (window.attachedFiles && window.attachedFiles.length > 0) {
        for (const file of window.attachedFiles) {
            attachments.push({
                name: file.name,
                type: file.type,
                size: file.size,
                url: URL.createObjectURL(file),
                data: await fileToBase64(file),
                extractedText: file.extractedText || null
            });
        }
    }
    
    // Adicionar mensagem do usuário à interface e ao histórico
    addMessage(message, true, attachments);
    chatHistory.push({ role: 'user', content: message, attachments: attachments.map(att => ({ name: att.name, type: att.type, size: att.size, url: att.url, extractedText: att.extractedText })) });
    saveChatHistory(); // Salvar histórico após mensagem do usuário
    
    // Limpar anexos após envio
    if (window.attachedFiles) {
        window.attachedFiles = [];
        updateFilePreview();
    }
    
    // Mostrar indicador de carregamento
    isLoading = true;
    showLoadingIndicator();
    
    // Preparar mensagem para API
    let apiMessage = message;
    
    if (attachments.length > 0) {
        // Adicionar informações sobre anexos
        const attachmentInfo = attachments.map(att => {
            let info = `[Anexo: ${att.name} (${att.type})]`;
            
            // Se há texto extraído, incluir na mensagem
            if (att.extractedText && att.extractedText.trim()) {
                info += `\n[Texto extraído da imagem "${att.name}"]: ${att.extractedText}`;
            }
            
            return info;
        }).join('\n');
        
        apiMessage = `${message}\n\n${attachmentInfo}`;
        
        // Adicionar contexto específico para imagens
        const imageAttachments = attachments.filter(att => att.type.startsWith('image/'));
        if (imageAttachments.length > 0) {
            const hasExtractedText = imageAttachments.some(att => att.extractedText && att.extractedText.trim());
            
            if (hasExtractedText) {
                apiMessage += '\n\nNota: Anexei imagem(s) e extraí o texto contido nelas usando OCR. Por favor, analise o conteúdo textual das imagens e responda com base nessas informações.';
            } else {
                apiMessage += '\n\nNota: Anexei imagem(s) mas não foi possível extrair texto legível. Por favor, informe que você pode ver que há imagens anexadas e que a análise visual completa será implementada em breve.';
            }
        }
    }
    
    // Enviar para DeepSeek e obter resposta
    const aiResponse = await sendToDeepSeek(apiMessage);
    
    // Remover indicador de carregamento
    removeLoadingIndicator();
    isLoading = false;
    
    // Adicionar resposta da IA à interface
    addMessage(aiResponse, false);
}

// Adicionar estilo para item selecionado
const style = document.createElement('style');
style.textContent = `
    .conversation-list li.selected {
        background-color: #4b5563 !important;
    }
    
    /* Estilo para scroll personalizado */
    #messages-container::-webkit-scrollbar {
        width: 6px;
    }
    
    #messages-container::-webkit-scrollbar-track {
        background: #1a1a2e;
    }
    
    #messages-container::-webkit-scrollbar-thumb {
        background: #4b5563;
        border-radius: 3px;
    }
    
    #messages-container::-webkit-scrollbar-thumb:hover {
        background: #6b7280;
    }
`;
document.head.appendChild(style);

