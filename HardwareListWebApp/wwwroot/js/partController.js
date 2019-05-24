class PartController {

    constructor() {
        this._addPartForm = new AddPartForm()
        this._partList = new PartList()

        let _this = this

        this._addPartForm.addEventListener(new class {
            newPartAdded(e) {
                _this._partList.addNewPart(e)
            }
        })
    }
}

( () => new PartController() )() 