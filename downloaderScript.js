class Downloader {
    constructor(elementId) {
        this.elementId = elementId
    }
    // Захват элемента
    async captureContent() {
        try {
            const element = document.getElementById(this.elementId)

            if (!element) {
                throw new Error(`Element with ID ${this.elementId} not found`)
            }
            const canvas = await html2canvas(element)
            return canvas.toDataURL('image/png')
        } catch (error) {
            console.error('Error capturing content:', error)
        }
    }

    async downloadPDF() {
        try {
            const imgData = await this.captureContent()
            const { jsPDF } = window.jspdf
            if (!jsPDF) {
                throw new Error('jsPDF is not loaded properly.')
            }
            const pdf = new jsPDF()
            pdf.addImage(imgData, 'PNG', -45, 0)
            pdf.save('sample.pdf')
        } catch (error) {
            console.error('Error generating PDF:', error)
        }
    }

    async downloadPNG(name) {
        try {
            const imgData = await this.captureContent()
            const link = document.createElement("a")
            link.download = name
            link.href = imgData
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        } catch (error) {
            console.error('Error generating URI:', error)
        }
    }

    initialize() {
        const downloadButton = document.getElementById('download')
        const downloadImageButton = document.getElementById('download1')

        if (downloadButton) {
            downloadButton.addEventListener('click', async () => {
                await this.downloadPDF()
            })
        } else {
            console.error('Download button not found')
        }

        if (downloadImageButton) {
            downloadImageButton.addEventListener('click', async () => {
                await this.downloadPNG('image.png')
            })
        } else {
            console.error('Download image button not found')
        }
    }
}