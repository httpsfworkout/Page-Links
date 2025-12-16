const el = document.querySelector('.freitas') // selecionar o freitas

el.addEventListener('mouseenter', () => { // quando passar o mouse
    const tip = document.createElement('div') // criar uma div
    tip.textContent = '“A virtude tem um preço alto, mas é o único pagamento que nunca empobrece quem o faz.”' // colocar esse texto
    tip.className = 'tooltip' // colocar essa classe
    document.body.appendChild(tip) // colocar no body

    const r = el.getBoundingClientRect() // pegar a posicao
    tip.style.left = r.left - -75 + 'px' // colocar na posicao
    tip.style.top = r.top - 50 + 'px' // colocar na posicao

    el._tip = tip // colocar no el
})

el.addEventListener('mouseleave', () => { // quando tirar o mouse
    el._tip.remove() // remover
})

document.addEventListener('click', (e) => { // quando clicar
    const t = e.target.closest('[data-link]') // closest pega o mais proximo
    if (!t) { // se nao tiver data-link
        return // nao faça nada
    }

    window.open(t.dataset.link, '_blank', 'noopener,noreferrer') // abrir link em outra aba
})