// Criar variáveis para armazenar os produtos e seus preços
const produtos = [
    { nome: 'Fini', preco: 6.00 },
    { nome: 'Trento', preco: 7.00 },
    { nome: 'Ouro-Branco', preco: 8.00 }
  ];
  
  // Criar variável para armazenar o dinheiro inserido
  let dinheiroInserido = 0;
  
  // Atualizar o valor do dinheiro inserido na tela
  function atualizarDinheiroInserido() {
    const dinheiroInseridoElemento = document.getElementById('dinheiro-inserido-valor');
    dinheiroInseridoElemento.textContent = `R$ ${dinheiroInserido.toFixed(2)}`;
  }
  
  // Adicionar evento de clique para cada botão de nota
  const notas = document.querySelectorAll('.notas button');
  
  notas.forEach(nota => {
    nota.addEventListener('click', () => {
      const valorNota = Number(nota.value);
      dinheiroInserido += valorNota;
      atualizarDinheiroInserido();
    });
  });
  
  // Adicionar evento de clique para cada botão de produto
  const botoesProdutos = document.querySelectorAll('.produto button');
  
  botoesProdutos.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
      const produtoSelecionado = produtos[indice];
      if (dinheiroInserido >= produtoSelecionado.preco) {
        const troco = dinheiroInserido - produtoSelecionado.preco;
        alert(`Você comprou um ${produtoSelecionado.nome} por R$ ${produtoSelecionado.preco.toFixed(2)}.\nTroco: R$ ${troco.toFixed(2)}`);
        dinheiroInserido = 0;
        atualizarDinheiroInserido();
      } else {
        alert('Dinheiro insuficiente.');
      }
    });
  });
  
  // Adicionar evento de clique para o botão PAGAR
  const botaoPagar = document.getElementById('pagar');
  
  botaoPagar.addEventListener('click', () => {
    alert(`Dinheiro inserido: R$ ${dinheiroInserido.toFixed(2)}`);
    dinheiroInserido = 0;
    atualizarDinheiroInserido();
  });
  