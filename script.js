// Função que captura os dados preenchidos no form e cadastra o pet
function cadastrarPet() {
  const nomeTutor = document.getElementById("nome-tutor").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const nomePet = document.getElementById("nome-pet").value.trim();
  const especie = document.getElementById("especie").value.trim();
  const observacoes = document.getElementById("observacoes").value.trim();

  // Captura todos os checkboxes marcados
  const checkboxesMarcados = document.querySelectorAll('input[name="servico"]:checked');
  const servicosSelecionados = Array.from(checkboxesMarcados).map(itemCheckbox => itemCheckbox.value); // map sempre espera uma função como argumento, que diz o que fazer com cada elemento do array, por isso devemos usar o => para declarar uma função.

  // Validação dos campos obrigatórios
  if (!nomeTutor || !email || !telefone || !nomePet || !especie) {
    alert("Por favor, preencha todos os campos antes de cadastrar o pet.");
    return;
  }

  if (servicosSelecionados.length === 0) {
    alert("Por favor, selecione ao menos um serviço desejado.");
    return;
  }

  // Exibe apenas os serviços selecionados
  alert(
    "O Pet foi cadastrado com sucesso!\n" +
    "Serviços selecionados: " + servicosSelecionados.join(", ") //join para separar os indices com uma "," + " "
  );

  // Redireciona para a página de feedback
  window.location.href = "feedback.html";
}
