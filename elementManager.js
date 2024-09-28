class ElementManager {
    constructor(elementId) {
        this.elementId = elementId
        this.parentElement = document.body
        this.element = null // Добавляем свойство для хранения ссылки на элемент
    }
    
    create(tagName) {
        // Проверяем, существует ли элемент с таким ID
        let element = document.getElementById(this.elementId)

        // Добавляем проверку, чтобы убедиться, что элемент существует, прежде чем использовать tagName
        if (element) {
            console.log(element.tagName)
        }

        if (element && tagName !== element.tagName) {
            // Если элемент существует, сохраняем его
            this.element = element
        } else if (!element) {
            // Если элемент не существует, создаем его
            element = document.createElement(tagName)
            element.id = this.elementId
            this.parentElement.appendChild(element)
            this.element = element
        } else {
            console.error(`Tag mismatch: expected ${tagName}, but got ${element.tagName}`)
        }
    }

    addCSSClass(classNames) { 
        if (this.element) {
            classNames.split(' ').forEach(className => {
                this.element.classList.add(className)
            })
        } else {
            console.error(`Element with ID ${this.elementId} not found.`)
        }
    }

    removeCSSClass(classNames) {
        if (this.element) {
            classNames.split(' ').forEach(className => {
                this.element.classList.remove(className)
            })
        } else {
            console.error(`Element with ID ${this.elementId} not found.`)
        }
    }

    insertElementBefore(tag) {
        const newElement = document.createElement(tag)

        if (this.parentElement && this.element) {
            this.parentElement.insertBefore(newElement, this.element)
        } else {
            console.error(`Element with ID ${this.elementId} not found or parent element is not set.`)
        }
    }

    putInElement(tag) {
        const newElement = document.createElement(tag)

        if (this.element) {
            this.element.appendChild(newElement)
        } else {
            console.error(`Element with ID ${this.elementId} not found.`)
        }
    }

    writeInText(text) {
        if (this.element) {
            this.element.innerHTML = text
        } else {
            console.error(`Element with ID ${this.elementId} not found.`)
        }
    }
}
