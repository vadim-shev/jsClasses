class FileDownloader {
    constructor(url, filename) {
        this.url = url
        this.filename = filename || "file-name"
    }

    createLinkElement() {
        const a = document.createElement("a")

        a.href = this.url
        a.download = this.filename

        return a
    }

    appendLinkToBody(linkElement) {
        document.body.appendChild(linkElement)
    }

    triggerDownload(linkElement) {
        linkElement.click()
    }

    removeLink(linkElement) {
        document.body.removeChild(linkElement)
    }

    downloadFile() {
        const linkElement = this.createLinkElement()

        this.appendLinkToBody(linkElement)
        this.triggerDownload(linkElement)
        this.removeLink(linkElement)
    }
}

const fileDownloader = new FileDownloader(dataUrl, 'invoice.png')

fileDownloader.downloadFile()