export function getRandomColor() {
    document.body.style.backgroundColor = `#${Math.random().toString(10).substring(2, 8)}`
}
