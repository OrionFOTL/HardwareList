class AddPartForm {

    constructor() {
        this._listeners = []
        this._initButtons()
    }

    addEventListener(listener) {
        this._listeners.push(listener)
    }

    _initButtons() {
        let vendorSelect = document.querySelector('#cpu_vendorSelect')
        let modelInput = document.querySelector('#cpu_modelInput')
        let frequencyInput = document.querySelector('#cpu_frequencyInput')
        let voltageInput = document.querySelector('#cpu_voltageInput')
        let cinesingleInput = document.querySelector('#cpu_cinesingleInput')
        let cinemultiInput = document.querySelector('#cpu_cinemultiInput')

        let addBtn = document.querySelector('#cpu_addBtn')
        addBtn.addEventListener('click', e => {   //to zamiasat function(e) = {}
            let obj = {
                vendor: vendorSelect.value,
                model: modelInput.value,
                frequency: frequencyInput.value,
                voltage: voltageInput.value,
                cinebenchSingleCore: cinesingleInput.value,
                cinebenchMultiCore: cinemultiInput.value
            }

            modelInput.value = ''
            frequencyInput.value = ''
            voltageInput.value = ''
            cinesingleInput.value = ''
            cinemultiInput.value = ''

            this._raiseNewPartAdded(obj)
        })

        let saveBtn = document.querySelector('#cpu_saveBtn')
        saveBtn.addEventListener('click', e => {
            this._raisePartModifiedEvent({
                vendor: vendorSelect.value,
                model: modelInput.value,
                frequency: frequencyInput.value,
                voltage: voltageInput.value,
                cinebenchSingleCore: cinesingleInput.value,
                cinebenchMultiCore: cinemultiInput.value
            })

            this._showAddBtn()
        })

        let cancelBtn = document.querySelector('#cpu_cancelBtn')
        cancelBtn.addEventListener('click', e => {
            this._showAddBtn()
            this._raiseEditingCanceledEvent({})
        })
    }

    editPart(part) {
        let vendorSelect = document.querySelector('#cpu_vendorSelect')
        let modelInput = document.querySelector('#cpu_modelInput')
        let frequencyInput = document.querySelector('#cpu_frequencyInput')
        let voltageInput = document.querySelector('#cpu_voltageInput')
        let cinesingleInput = document.querySelector('#cpu_cinesingleInput')
        let cinemultiInput = document.querySelector('#cpu_cinemultiInput')

        let addBtn = document.querySelector('#cpu_addBtn')
        let saveBtn = document.querySelector('#cpu_saveBtn')
        let cancelBtn = document.querySelector('#cpu_cancelBtn')

        vendorSelect.value = part.vendor
        modelInput.value = part.model
        frequencyInput.value = part.frequency
        voltageInput.value = part.voltage
        cinesingleInput.value = part.cinebenchSingleCore
        cinemultiInput.value = part.cinebenchMultiCore

        addBtn.classList.add('d-none')
        saveBtn.classList.remove('d-none')
        cancelBtn.classList.remove('d-none')
    }

    _showAddBtn() {
        let vendorSelect = document.querySelector('#cpu_vendorSelect')
        let modelInput = document.querySelector('#cpu_modelInput')
        let frequencyInput = document.querySelector('#cpu_frequencyInput')
        let voltageInput = document.querySelector('#cpu_voltageInput')
        let cinesingleInput = document.querySelector('#cpu_cinesingleInput')
        let cinemultiInput = document.querySelector('#cpu_cinemultiInput')

        let addBtn = document.querySelector('#cpu_addBtn')
        let saveBtn = document.querySelector('#cpu_saveBtn')
        let cancelBtn = document.querySelector('#cpu_cancelBtn')

        vendorSelect.value = ''
        modelInput.value = ''
        frequencyInput.value = ''
        voltageInput.value = ''
        cinesingleInput.value = ''
        cinemultiInput.value = ''

        addBtn.classList.remove('d-none')
        saveBtn.classList.add('d-none')
        cancelBtn.classList.add('d-none')
    }

    _raiseNewPartAdded(e) {
        this._listeners.forEach(l => {
            l.newPartAdded(e)
        })
    }

    _raisePartModifiedEvent(e) {
        this._listeners.forEach(l => {
            l.partModified(e)
        })
    }

    _raiseEditingCanceledEvent(e) {
        this._listeners.forEach(l => {
            l.editingCanceled(e)
        })
    }
}