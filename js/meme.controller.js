'use strict'
let gElCanvas
let gCtx
let gCurrText = 'text'



function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    console.log('gCtx', gCtx)

    renderMeme()

}

function renderMeme() {
    let meme = getMeme()
    drawImg(gMeme)
    drawText(gMeme, 250, 50)

    // resizeCanvas()
    // window.addEventListener('resize', resizeCanvas)
}

function drawImg() {
    const elImg = new Image() // Create a new html img element
    elImg.src = '/img/meme-imgs (square)/1.jpg' // Send a network req to get that image, define the img src
    // console.log('elImg:', elImg)
    // When the image ready draw it on the canvas
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(gMeme, 250, 50)
    }
}

function onSetText(elText) {
    // console.log(elMeme)
    const elMeme = elText.value
    console.log('elMeme:', elMeme)
    gMeme = elMeme

    renderMeme()
    // console.log('gMeme:', gMeme)
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'white'
    gCtx.fillStyle = 'white'
    gCtx.font = '40px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.

    
}



// function setShape(shape) {
//     gCurrText = 'text'
// }

function draw(event) {
    // const offsetX = ev.offsetX
    // const offsetY = ev.offsetY
    const { offsetX, offsetY } = event
    console.log(' offsetX, offsetY', offsetX, offsetY)

    switch (gCurrText) {
        case 'text':
            drawText('Hello', offsetX, offsetY)
            break
        case 'emoji':
            drawLine(offsetX, offsetY)
            break
    }
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    // Note: changing the canvas dimension this way clears the canvas
    gElCanvas.width = elContainer.offsetWidth
    // Unless needed, better keep height fixed.
    // gElCanvas.height = elContainer.offsetHeight
}





function clearCanvas() {
    // Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height)
    // to transparent black, erasing any previously drawn content.
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    // You may clear part of the canvas
    // gCtx.clearRect(0, 0, gElCanvas.width / 2, gElCanvas.height / 2)
}

//צריך לשנות בדום שלי את הכפתור של ההורדה לתגית a
function onDownloadCanvas(elLink) {
    // Gets the canvas content and convert it to base64 data URL that can be save as an image
    const data = gElCanvas.toDataURL() // Method returns a data URL containing a representation of the image in the format specified by the type parameter.
    // console.log('data', data) // Decoded the image to base64

    elLink.href = data // Put it on the link
    elLink.download = 'my-img' // Can change the name of the file
}

