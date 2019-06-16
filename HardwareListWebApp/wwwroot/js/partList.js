class PartList {

    constructor() {
        this._counter = 0
        this._listeners = []
    }

    addNewPart(part) {
        let grid = document.querySelector('#cpu_container')
        let newRow = grid.children[1].cloneNode(true)

        let idColumn = newRow.querySelector('div[data-column-type=\'id\']')
        let vendorColumn = newRow.querySelector('div[data-column-type=\'vendor\']')
        let modelColumn = newRow.querySelector('div[data-column-type=\'model\']')
        let frequencyColumn = newRow.querySelector('div[data-column-type=\'frequency\']')
        let voltageColumn = newRow.querySelector('div[data-column-type=\'voltage\']')
        let cinesingleColumn = newRow.querySelector('div[data-column-type=\'cinesingle\']')
        let cinemultiColumn = newRow.querySelector('div[data-column-type=\'cinemulti\']')

        newRow.dataset['rowType'] = 'data'
        newRow.dataset['internalId'] = this._counter++

        idColumn.innerText = part.id
        vendorColumn.innerText = part.vendor
        modelColumn.innerText = part.model
        frequencyColumn.innerText = part.frequency
        voltageColumn.innerText = part.voltage
        cinesingleColumn.innerText = part.cinebenchSingleCore
        cinemultiColumn.innerText = part.cinebenchMultiCore

        let removeLink = newRow.querySelector('a[data-action=\'remove\']')

        removeLink.addEventListener('click', e => {
            let idColumn = removeLink.parentElement.parentElement.querySelector("div[data-column-type=\'id\']")
            this._raisePartRemovedEvent({
                id: idColumn.innerText
            })

            removeLink.parentElement.parentElement.remove()
        })

        let editLink = newRow.querySelector('a[data-action=\'edit\']')
        editLink.addEventListener('click', e => {
            let row = editLink.parentElement.parentElement
            let idColumn = newRow.querySelector('div[data-column-type=\'id\']')
            let vendorColumn = newRow.querySelector('div[data-column-type=\'vendor\']')
            let modelColumn = newRow.querySelector('div[data-column-type=\'model\']')
            let frequencyColumn = newRow.querySelector('div[data-column-type=\'frequency\']')
            let voltageColumn = newRow.querySelector('div[data-column-type=\'voltage\']')
            let cinesingleColumn = newRow.querySelector('div[data-column-type=\'cinesingle\']')
            let cinemultiColumn = newRow.querySelector('div[data-column-type=\'cinemulti\']')

            this._raisePartEditingEvent({
                internalId: row.dataset['internalId'],
                id: idColumn.innerText,
                vendor: vendorColumn.innerText,
                model: modelColumn.innerText,
                frequency: frequencyColumn.innerText,
                voltage: voltageColumn.innerText,
                cinebenchSingleCore: cinesingleColumn.innerText,
                cinebenchMultiCore: cinemultiColumn.innerText
            })
        })

        newRow.classList.remove('d-none')
        grid.appendChild(newRow)
    }

    editPart(part) {
        let grid = document.querySelector('#cpu_container')
        let row = grid.querySelector('div[data-internal-id=\'' + part.internalId + '\']')
        let vendorColumn = row.querySelector('div[data-column-type=\'vendor\']')
        let modelColumn = row.querySelector('div[data-column-type=\'model\']')
        let frequencyColumn = row.querySelector('div[data-column-type=\'frequency\']')
        let voltageColumn = row.querySelector('div[data-column-type=\'voltage\']')
        let cinesingleColumn = row.querySelector('div[data-column-type=\'cinesingle\']')
        let cinemultiColumn = row.querySelector('div[data-column-type=\'cinemulti\']')

        vendorColumn.innerText = part.vendor
        modelColumn.innerText = part.model
        frequencyColumn.innerText = part.frequency
        voltageColumn.innerText = part.voltage
        cinesingleColumn.innerText = part.cinebenchSingleCore
        cinemultiColumn.innerText = part.cinebenchMultiCore
    }

    getPart(internalId) {
        let grid = document.querySelector('#cpu_container')
        let row = grid.querySelector('div[data-internal-id=\'' + internalId + '\']')
        let idColumn = row.querySelector('div[data-column-type=\'id\']')
        let vendorColumn = row.querySelector('div[data-column-type=\'vendor\']')
        let modelColumn = row.querySelector('div[data-column-type=\'model\']')
        let frequencyColumn = row.querySelector('div[data-column-type=\'frequency\']')
        let voltageColumn = row.querySelector('div[data-column-type=\'voltage\']')
        let cinesingleColumn = row.querySelector('div[data-column-type=\'cinesingle\']')
        let cinemultiColumn = row.querySelector('div[data-column-type=\'cinemulti\']')

        return {
            id: idColumn.innerHTML,
            vendor: vendorColumn.innerText,
            model: modelColumn.innerText,
            frequency: frequencyColumn.innerText,
            voltage: voltageColumn.innerText,
            cinebenchSingleCore: cinesingleColumn.innerText,
            cinebenchMultiCore: cinemultiColumn.innerText
        } 
    }

    cleanParts() {
        let grid = document.querySelector('#cpu_container')
        while (grid.children.length > 2) {
            grid.removeChild(grid.lastChild)
        }
        this._counter = 0
    }

    makeGraph() {
        let rows = document.querySelectorAll('div[data-row-type=\'data\']')
        let myLabels = []
        let freqValue = []

        rows.forEach(l => {
            myLabels.push(l.children[2].innerText)
            freqValue.push(l.children[3].innerText)
        })

        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: myLabels,
                datasets: [{
                    label: 'CPU Frequency',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: freqValue
                }]
            },

            // Configuration options go here
            options: {
                animation: {
                    duration: 0
                }
            }
        });

    }

    addEventListener(listener) {
        this._listeners.push(listener);
    }

    _raisePartRemovedEvent(e) {
        this._listeners.forEach(i => {
            i.partRemoved(e)
        })
    }

    _raisePartEditingEvent(e) {
        this._listeners.forEach(i => {
            i.partEditing(e)
        })
    }
} 