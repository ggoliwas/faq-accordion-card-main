const questions = document.querySelectorAll('.faq__item')

questions.forEach(question => {
    question.addEventListener('click', () => {
        if(question.classList.contains('active')) {
            question.classList.toggle('active')

        } else {
            questions.forEach(question => 
                question.classList.remove('active'))
            
            question.classList.add('active');
        }
    })
});