// <script type="text/javascript" src="html2canvas.js"></script>
class InvoiceRenderer {
    constructor(elementId) {
        this.elementId = elementId
        this.canvas = null
    }

    captureElement() {
        return html2canvas(document.getElementById(this.elementId))
            .then(canvas => {
                this.canvas = canvas
                return canvas.toDataURL('image/png')
            });
    }

    appendCanvasToBody() {
        if (this.canvas) {
            document.body.appendChild(this.canvas)
        } else {
            console.error("Canvas is not created yet. Call captureElement first.")
        }
    }
}

const invoiceRenderer = new InvoiceRenderer('invoice')

invoiceRenderer.captureElement().then(dataUrl => {
    invoiceRenderer.appendCanvasToBody()
}).catch(error => console.error("Error capturing element:", error))
