interface props{
    firstHover: HTMLImageElement;
    chainHover: HTMLImageElement;
}
const HoverBanner = ({firstHover, chainHover}: props) => {
    firstHover.addEventListener('mouseover', () => {
        chainHover.classList.add('chain-hover')
    })
    firstHover.addEventListener('mouseout', () => {
        chainHover.classList.remove('chain-hover')
    })
}

export default HoverBanner