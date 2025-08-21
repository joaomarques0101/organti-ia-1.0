// Funcionalidades básicas da interface de chat

document.addEventListener('DOMContentLoaded', function() {
    // Elementos da interface
    const actionButtons = document.querySelectorAll('.action-buttons button');
    const inputContainer = document.querySelector('.input-container');
    const conversationItems = document.querySelectorAll('.conversation-list li');
    
    // Adicionar interatividade aos botões de ação
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent;
            console.log(`Ação selecionada: ${action}`);
            
            // Simular feedback visual
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Aqui você pode adicionar lógica específica para cada ação
            handleActionClick(action);
        });
    });
    
    // Adicionar interatividade ao campo de entrada
    inputContainer.addEventListener('click', function() {
        // Simular foco no campo de entrada
        this.style.borderColor = '#6366f1';
        
        // Criar um input real quando clicado
        if (!this.querySelector('input')) {
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Pergunte qualquer coisa';
            input.style.cssText = `
                background: transparent;
                border: none;
                outline: none;
                color: #e5e7eb;
                font-size: 16px;
                flex-grow: 1;
            `;
            
            // Substituir o texto placeholder pelo input
            const placeholder = this.querySelector('p');
            placeholder.style.display = 'none';
            this.insertBefore(input, this.querySelector('.input-icons'));
            input.focus();
            
            // Adicionar evento de envio
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' && this.value.trim()) {
                    handleMessageSend(this.value.trim());
                    this.value = '';
                }
            });
            
            // Restaurar placeholder quando perder foco e estiver vazio
            input.addEventListener('blur', function() {
                if (!this.value.trim()) {
                    placeholder.style.display = 'block';
                    this.remove();
                    inputContainer.style.borderColor = '#4b5563';
                }
            });
        }
    });
    
    // Adicionar interatividade aos itens de conversa
    conversationItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remover seleção anterior
            conversationItems.forEach(i => i.classList.remove('selected'));
            
            // Adicionar seleção atual
            this.classList.add('selected');
            
            console.log(`Conversa selecionada: ${this.textContent}`);
        });
    });
    
    // Adicionar funcionalidade aos ícones do input
    const inputIcons = document.querySelectorAll('.input-icons span');
    inputIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (this.textContent === '+') {
                console.log('Botão de anexo clicado');
                // Aqui você pode adicionar funcionalidade de anexo
            } else if (this.textContent === '🎙️') {
                console.log('Botão de microfone clicado');
                // Aqui você pode adicionar funcionalidade de voz
            } else if (this.textContent.includes('Resposta rápida')) {
                console.log('Resposta rápida clicada');
                // Aqui você pode adicionar funcionalidade de resposta rápida
            }
        });
    });
});

// Função para lidar com cliques nos botões de ação
function handleActionClick(action) {
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
    console.log(message);
    
    // Aqui você pode adicionar lógica para mostrar a mensagem na interface
}

// Função para lidar com envio de mensagens
function handleMessageSend(message) {
    console.log(`Mensagem enviada: ${message}`);
    
    // Aqui você pode adicionar lógica para processar e responder à mensagem
    // Por exemplo, adicionar a mensagem ao histórico de chat
}

// Adicionar estilo para item selecionado
const style = document.createElement('style');
style.textContent = `
    .conversation-list li.selected {
        background-color: #4b5563 !important;
    }
`;
document.head.appendChild(style);

