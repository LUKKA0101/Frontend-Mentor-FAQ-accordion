const accordion_item = document.querySelectorAll('.question')
const body = document.querySelector('body')

accordion_item.forEach(accordion_item => {
    accordion_item.addEventListener('click', () =>{
        const question_answer = accordion_item.querySelector('.question-answer')
        question_answer.classList.toggle('active')
    })
})