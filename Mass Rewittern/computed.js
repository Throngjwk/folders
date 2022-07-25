let Computed = {
    onBrowserChanged:false,
    JSON:new JSONS(),
    node:"World"
}

function JSONS() {
    this.parse = (layout) => "JSON That " + layout
    this.layout = []
}