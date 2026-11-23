const processosBaristando = {
    navegacao: "<strong>Consulta e Navegação no Mapa:</strong> Ao acessar o website, o usuário visualiza o mapa da cidade do Rio de Janeiro com marcadores indicando pontos de venda de café. O sistema permite filtrar as buscas por bairro/proximidade, faixa de preço e nota de qualidade do café. Ao clicar em um marcador, o sistema exibe a ficha do local com endereço, horário de funcionamento, fotos e a média das avaliações da comunidade.",
    cadastro: "<strong>Cadastro de Novo Local:</strong> Caso o usuário visite um estabelecimento que ainda não esteja no mapa, ele pode realizar o cadastro de um novo ponto. O processo exige informar o nome do local, endereço (ou marcação direta no mapa), fotos, faixa média de preço e os tipos de café servidos (ex.: expressos, coados especiais, grãos de origem).",
    verificacao: "<strong>Confirmação ou Contestação de Informações:</strong> Para manter a base de dados precisa e atualizada, qualquer pessoa que vá a um local cadastrado pode realizar uma transação de verificação: confirmar que o estabelecimento continua ativo e correto ou contestar informações desatualizadas (como mudança de endereço, alteração de horário ou encerramento permanente das atividades).",
    avaliacao: "<strong>Votação e Avaliação da Experiência:</strong> Após consumir no local, o usuário faz o registro de sua avaliação. Ele vota atribuindo notas específicas e independentes para a qualidade do café e para o preço/custo-benefício, além de poder adicionar comentários sobre o ambiente, métodos de preparo disponíveis e fotos do produto consumido."
};

const botoes = document.querySelectorAll('.tab-btn');
const infoTexto = document.getElementById('info-texto');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões
        botoes.forEach(b => b.classList.remove('active'));
        // Adiciona a classe 'active' no botão clicado
        botao.classList.add('active');
        
        // Atualiza o texto com base no atributo data-tab
        const tab = botao.getAttribute('data-tab');
        infoTexto.innerHTML = processosBaristando[tab];
    });
});
