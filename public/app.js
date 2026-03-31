/** @type {HTMLInputElement} */
const cream = document.getElementById('cream')
/** @type {HTMLInputElement} */
const blue = document.getElementById('blue')
/** @type {HTMLInputElement} */
const green = document.getElementById('green')

const ratios = {
    cream: 1,
    blue: 5,
    green: 2.5,
}

cream?.addEventListener('input', e => {
    const value = e.currentTarget.value
    if (isNaN(parseFloat(value))) return
    blue.value = ratios.blue * value / ratios.cream
    green.value = ratios.green * value / ratios.cream
})
blue?.addEventListener('input', e => {
    const value = e.currentTarget.value
    if (isNaN(parseFloat(value))) return
    cream.value = ratios.cream * value / ratios.blue
    green.value = ratios.green * value / ratios.blue
})
green?.addEventListener('input', e => {
    const value = e.currentTarget.value
    if (isNaN(parseFloat(value))) return
    cream.value = ratios.cream * value / ratios.green
    blue.value = ratios.blue * value / ratios.green
})

cream.dispatchEvent(new Event('input'))

// Heart spin animation
for (const heart of document.querySelectorAll('.pixelnheart')) {
    heart.addEventListener('click', () => {
        if (heart.classList.contains('spinning')) return
        heart.classList.add('spinning')
        setTimeout(() => {
            heart.classList.remove('spinning')
        }, 850)
    })
}
