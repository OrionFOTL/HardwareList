class PartController {

    constructor() {

        this._service = new PartService('http://localhost:42069/')
        this._addPartForm = new AddPartForm()
        this._partList = new PartList() 

        this._editedRowInternalId = -1
        this._editedRowId = -1

        let _this = this

        this._addPartForm.addEventListener(new class {
            newPartAdded(e) {
                _this._service.post(e)
            }

            partModified(e) {
                e.internalId = _this._editedRowInternalId
                _this._partList.editPart(e)
                _this._service.put(_this._editedRowId, _this._partList.getPart(_this._editedRowInternalId))
                _this._editedRowInternalId = -1
                _this._editedRowId = -1
            }

            editingCanceled(e) {
                _this._editedRowInternalId = -1
                _this._editedRowId = -1
            }
        })

        this._partList.addEventListener(new class {
            partEditing(e) {
                _this._editedRowId = e.id
                _this._editedRowInternalId = e.internalId
                _this._addPartForm.editPart(e)
            }

            partRemoved(e) {
                _this._service.delete(e.id)
            }
        })

        this._service.addEventListener(new class {
            getResponseReady(e) {
                JSON.parse(e.data).forEach(i => {
                    _this._partList.addNewPart({
                        id: i.id,
                        vendor: i.vendor,
                        model: i.model,
                        frequency: i.frequency,
                        voltage: i.voltage,
                        cinebenchSingleCore: i.cinebenchSingleCore,
                        cinebenchMultiCore: i.cinebenchMultiCore
                    })
                })
            }

            postResponseReady(e) {
                _this._partList.addNewPart(JSON.parse(e.part))
            }

            deleteResponseReady(e) {

            }

            putResponseReady(e) {

            }
        })

        this._service.get()
    }
}

( () => new PartController() )() 