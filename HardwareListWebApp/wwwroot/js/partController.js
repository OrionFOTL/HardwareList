class PartController {

    constructor() {
        this._addPartForm = new AddPartForm()
        this._addPartForm.addEventListener(new class {
            newPartAdded(e) {
                debugger
            }
        })
    }
}

( () => new PartController() )() 