window.addEventListener('mousemove', e => {
    console.log(e.clientX + " " + e.clientY)
    document.body.style.cssText += `--mousePositionX:${e.clientX/100}px; --mousePositionY:${e.clientY/100}px; `

})