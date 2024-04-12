export function outPutWidth(n: number) {
    let size = n * 35

    let output = document.getElementById('output')

    output!.style.maxWidth = `${size}px`
}