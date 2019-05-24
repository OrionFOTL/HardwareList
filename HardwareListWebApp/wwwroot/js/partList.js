class PartList {
    addNewPart(part) {
        let grid = document.querySelector('#cpu_container')
        let newRow = grid.children[1].cloneNode(true)

        let vendorColumn = newRow.querySelector('div[data-column-type=\'vendor\']')
        let modelColumn = newRow.querySelector('div[data-column-type=\'model\']')
        let frequencyColumn = newRow.querySelector('div[data-column-type=\'frequency\']')
        let voltageColumn = newRow.querySelector('div[data-column-type=\'voltage\']')
        let cinesingleColumn = newRow.querySelector('div[data-column-type=\'cinesingle\']')
        let cinemultiColumn = newRow.querySelector('div[data-column-type=\'cinemulti\']')

        vendorColumn.innerText = part.vendor
        modelColumn.innerText = part.model
        frequencyColumn.innerText = part.frequency
        voltageColumn.innerText = part.voltage
        cinesingleColumn.innerText = part.cinesingle
        cinemultiColumn.innerText = part.cinemulti

        newRow.classList.remove('d-none')
        grid.appendChild(newRow)
    }
} 