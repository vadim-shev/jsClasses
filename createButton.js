

// const buttonManager = new ButtonManager(set ID, set innerHTML)


class ButtonManager {
    constructor(buttonId, buttonText, parentElement = document.body) {
        this.buttonId = buttonId
        this.buttonText = buttonText
        this.parentElement = parentElement
    }

    createButton() {
        const btn = document.createElement("button")

        btn.id = this.buttonId
        btn.innerHTML = this.buttonText

        this.parentElement.appendChild(btn)
    }

    addClickListener(callback) {
        const button = document.getElementById(this.buttonId)

        if (button) {
            button.addEventListener('click', callback)
        } else {
            console.error(`Button with ID ${this.buttonId} not found.`)
        }
    }
}
