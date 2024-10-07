document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    let lista = document.createElement('li');
    let valorInput = document.querySelector('input');

    if (!valorInput.value || valorInput.value === ' ') {
        document.querySelector('#erro').innerHTML = 'Vazio, adicione alguma tarefa';
        setTimeout(() => {
            document.querySelector('#erro').innerHTML = ''
        }, 2000)

    } else {
        lista.innerHTML = `${valorInput.value} <div id="func">
            <span class="check" onclick="concluir(this)"><i class="fa-solid fa-square-check"></i></span>
            <span class="trash" onclick="apagar(this)"><i class="fa-solid fa-trash-can"></i></span>
        </div>`;

        document.querySelector('ul').appendChild(lista);

        valorInput.value = '';
    }

})

function apagar(elemento) {
    elemento.parentElement.parentElement.remove();
}

function concluir(elemento) {
    let item = elemento.parentElement.parentElement;
    item.classList.toggle('concluido')
    elemento.style.color = item.classList.contains('concluido') ? 'green' : ''
}

document.querySelector('#select').addEventListener('change', function () {
    let option = this.value

    document.querySelectorAll('li').forEach(e => {
        if (option === 'concluidas') {
            e.classList.contains('concluido') ? e.style.display = 'flex' : e.style.display = 'none'
        } else if (option === 'incompletas') {
            e.classList.contains('concluido') ? e.style.display = 'none' : e.style.display = 'flex'
        } else {
            e.style.display = 'flex'
        }
    })
})