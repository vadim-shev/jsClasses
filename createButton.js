
class ElementManager {
    constructor(tagName, elementId, parentElement = document.body) {
        this.tagName = tagName
        this.elementId = elementId
        this.parentElement = parentElement
    }

    create() {
        const element = document.createElement(this.tagName)

        element.id = this.elementId

        this.parentElement.appendChild(element)
    }
    addCSSClass(classNames) { 
        const element = document.getElementById(this.elementId)

        if (element) {
            classNames.split(' ').forEach(className => {
                element.classList.add(className)
            })
        } else {
            console.error(`Element with ID ${this.elementId} not found.`)
        }
    }
    insertElementBefore(tag) {
        const element = document.getElementById(this.elementId)
        const newElement = document.createElement(tag) 

        if (this.parentElement && element) {
            this.parentElement.insertBefore(newElement, element) 
        } else {
            console.error(`Element with ID ${this.elementId} not found or parent element is not set.`)
        }
    }

    putInElement(tag) {
        const element = document.getElementById(this.elementId)
        const newElement = document.createElement(tag) 

        element.appendChild(newElement)
    }
    writeInText(text) {
        const element = document.getElementById(this.elementId)
        element.innerHTML = text
    }
}