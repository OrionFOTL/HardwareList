class PartController {

    constructor() {

        this._service = new PartService('http://localhost:42069/')
        this._addPartForm = new AddPartForm()
        this._partList = new PartList() 

        let _this = this

        this._addPartForm.addEventListener(new class {
            newPartAdded(e) {
                _this._service.post(e)
            }
        })

        this._service.addEventListener(new class {
            getResponseReady(e) {
                JSON.parse(e.data).forEach(i => {
                    _this._partList.addNewPart({
                        vendor: i.vendor,
                        model: i.model,
                        frequency: i.frequency,
                        voltage: i.voltage,
                        cinesingle: i.cinebenchSingleCore,
                        cinemulti: i.cinebenchMultiCore
                    })
                })
            }

            postResponseReady(e) {
                _this._partList.addNewPart(JSON.parse(e.part))
            }
        })

        this._service.get()
    }
}

( () => new PartController() )() 