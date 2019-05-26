let btn = document.querySelector('#cpu_export')

btn.addEventListener('click', e => {
    var doc = new jsPDF()
    doc.text('Hello world!', 10, 10)
    doc.save('a4.pdf')
})