// Registra os valores
function register() {
    const empresaNome = document.getElementById('empresaNome').value;
    const empresaDesignador = document.getElementById('empresaDesignador').value;
    const inputTime = document.getElementById('inputTime').value;
    const inputDate = document.getElementById('inputDate').value;

    if (inputValues(empresaNome, empresaDesignador, inputTime, inputDate)) {
        addPost(empresaNome, empresaDesignador, inputTime, inputDate);
        dateValidation(inputDate);
    }
}

// Certifica se todos os campos de entrada INPUT estão preenchidos 
async function inputValues(empresaNome, empresaDesignador, inputTime, inputDate) {
    if (empresaNome.trim() === '' || empresaDesignador.trim() === '' || inputTime.trim() === '' || inputDate.trim() === '') {
        alert('Preencha todas as informações corretamente para prosseguir com o registro do contrato.');
        return false;
    }
    return true;
}

// Formaliza a postagem para o HTML
async function addPost(empresaNome, empresaDesignador, inputTime, inputDate) {
    const post = document.getElementById('post');
    const postItem = document.createElement('div');
    postItem.className = 'post';
    postItem.innerHTML = `Manutenção: ${empresaNome} - contrato: ${empresaDesignador}. Finalização e/ou previsão ${inputTime} - mês ${inputDate}`;
    post.appendChild(postItem);
    dateValidation(inputDate) && postItem.classList.add('past-date');
}

// Adiciona instrução
function dateValidation(inputDate) {
    try {
        const selectedDate = new Date(inputDate);
        return selectedDate < new Date();
    } catch (error) {
        alert(`Ocorreu um erro ao processar a data. Por favor,  tente novamente. Erro: ${error}`)
    };
};