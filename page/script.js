const el = document.querySelector('.freitas')

el.addEventListener('mouseenter', () => {
    const tip = document.createElement('div')
    tip.textContent = '“A virtude tem um preço alto, mas é o único pagamento que nunca empobrece quem o faz.”'
    tip.className = 'tooltip'
    document.body.appendChild(tip)

    const r = el.getBoundingClientRect()
    tip.style.left = r.left - -75 + 'px'
    tip.style.top = r.top - 50 + 'px'

    el._tip = tip
})

el.addEventListener('mouseleave', () => {
    el._tip.remove()
})