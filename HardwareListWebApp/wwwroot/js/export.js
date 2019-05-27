let btn = document.querySelector('#cpu_export')

btn.addEventListener('click', e => {

    var graph = document.querySelector('#myChart')
    var graphImageData = graph.toDataURL()

    var doc = new jsPDF()

    var imageProp = doc.getImageProperties(graphImageData)
    
    doc.text('Submitted CPU clock speed', 10, 10)
    doc.addImage(graphImageData, 'PNG', 15, 20, 180, 80)
    doc.save('a4.pdf')
})