class AddPartForm {

    constructor() {
        this._listeners = []
        let addBtn = document.querySelector('#cpu_addBtn')
        addBtn.addEventListener('click', e => {   //to zamiasat function(e) = {}
            let vendorSelect = document.querySelector('#cpu_vendorSelect')
            let modelInput = document.querySelector('#cpu_modelInput')
            let frequencyInput = document.querySelector('#cpu_frequencyInput')
            let voltageInput = document.querySelector('#cpu_voltageInput')
            let cinesingleInput = document.querySelector('#cpu_cinesingleInput')
            let cinemultiInput = document.querySelector('#cpu_cinemultiInput')
            let obj = {
                vendor: vendorSelect.value,
                model: modelInput.value,
                frequency: frequencyInput.value,
                voltage: voltageInput.value,
                cinesingle: cinesingleInput.value,
                cinemulti: cinemultiInput.value
            }

            modelInput.value = ''
            frequencyInput.value = ''
            voltageInput.value = ''
            cinesingleInput.value = ''
            cinemultiInput.value = ''

            this._raiseNewPartAdded(obj)
        })
    }

    addEventListener(listener) {
        this._listeners.push(listener)
    }

    _raiseNewPartAdded(e) {
        this._listeners.forEach(l => {
            l.newPartAdded(e)
        })
    }
}