// Registra os valores
function register() {
    const empresaNome = document.getElementById('empresaNome').value;
    const empresaDesignador = document.getElementById('empresaDesignador').value;
    const inputTime = document.getElementById('inputTime').value;
    const inputDate = document.getElementById('inputDate').value;

    if (inputValues(empresaNome, empresaDesignador, inputTime, inputDate)) {
        addPost(empresaNome, empresaDesignador, inputTime, inputDate);
        clearInputField();
        recordContracts();
    };
};

// Certifica se todos os campos de entrada INPUT estão preenchidos 
function inputValues(empresaNome, empresaDesignador, inputTime, inputDate) {
    if (empresaNome.trim() === '' || empresaDesignador.trim() === '' || inputTime.trim() === '' || inputDate.trim() === '') {
        alert('Preencha todas as informações corretamente para prosseguir com o registro do contrato.');
        return false;
    };
    return true;
};

// Formaliza a postagem para o HTML
let count = 0;
function addPost(empresaNome, empresaDesignador, inputTime, inputDate) {
    count++;
    const post = document.getElementById('post');
    const postItem = document.createElement('div');
    postItem.className = 'post';
    postItem.innerHTML = `(${count}) - Empresa em manutenção: ${empresaNome}, contrato de identidicação: ${empresaDesignador}, data de finalização prevista para às  ${inputTime} do mês ${inputDate}`;
    post.appendChild(postItem);
    dateValidation(inputDate) && postItem.classList.add('past-date');
};

// Adiciona instrução
function dateValidation(inputDate) {
    try {
        const selectedDate = new Date(inputDate);
        return selectedDate < new Date();
    } catch (error) {
        alert(`Ocorreu um erro ao processar a data. Por favor,  tente novamente. Erro: ${error}`);
    };
};

// limpa os campos inputs pós-registro 
function clearInputField() {
    document.getElementById('empresaNome').value = '';
    document.getElementById('empresaDesignador').value = '';
    document.getElementById('inputTime').value = '';
    document.getElementById('inputDate').value = '';
};

// mostra o total de contratos registrados
let contractCount = 0;  // Inicializado com 0
recordContracts = () => {
    const countContracts = document.getElementById('countContracts');
    let newElement = document.createElement('p');
    contractCount++;
    countContracts.innerHTML = '';
    newElement.textContent = `Total de registros: ${contractCount}`;
    countContracts.appendChild(newElement);
};]