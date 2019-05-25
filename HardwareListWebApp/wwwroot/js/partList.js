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