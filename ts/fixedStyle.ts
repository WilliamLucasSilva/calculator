export function fixedStyle() : void{
    let body = document.querySelector('body')
    let main = document.querySelector('main')

    body!.style.width = "99%"
    body!.style.height = "98%"
    body!.style.position = "absolute"
    body!.style.display = "flex"
    body!.style.alignItems = "center"
    body!.style.justifyContent = "center"

    main!.style.display = "flex"
    main!.style.alignItems = "center"
    main!.style.justifyContent = "center"
    main!.style.flexDirection = "column"
}