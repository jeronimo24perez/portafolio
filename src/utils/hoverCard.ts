interface Props {
    cards: Element[];
    buttons: Element[];
}

export default function HoverCard({ cards, buttons }: Props) {
    cards.forEach((card: Element, index) => {
        const btnIndex = index * 2
        card.addEventListener('mouseover', () => {
            buttons[btnIndex].classList.add('hover-button-card')
            buttons[btnIndex+1].classList.add('hover-button-card')

            console.log(index)
        })
        card.addEventListener('mouseout', () => {
            buttons[btnIndex].classList.remove('hover-button-card')
            buttons[btnIndex+1].classList.remove('hover-button-card')

        })
    })
}

// Call site:
HoverCard({
    cards: Array.from(document.getElementsByClassName('card')),
    buttons: Array.from(document.querySelectorAll<HTMLButtonElement>('.btn'))
})