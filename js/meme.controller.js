'use strict'
let gElCanvas
let gCtx
let gCurrText = 'text'
const gStickers = ['😇', '😎' , '😍', '😘', '🥰', '⭐', '🌻', '🎁', '🥸', ' ❤️', '😊', '😋']
let gStickersToShow = 4
let gStickerIdx=0

function onInit() {
    // const elMainEditor = document.querySelector('.main-meme-editor')
    // elMainEditor.classList.add('hide')
    
    renderGallery()
    renderStickers(gStickerIdx,gStickersToShow)
    // console.log(gStickers)
    
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    
    // window.addEventListener('resize', resizeCanvas)
    // resizeCanvas()
}

function renderStickers(gStickerIdx,gStickersToShow){
    let strHTML
   
    const stickers = getStickers(gStickerIdx, gStickersToShow)
    console.log('stickers:', stickers)

    strHTML = stickers.map((sticker) => 
    `<a onclick="onAddSticker(this)" value="${sticker}">${sticker}</a>`).join('')

    const elEmojiContainer = document.querySelector('.imoji-container')
    elEmojiContainer.innerHTML= strHTML
}

function onChangeImoji(num){
    // console.log('gStickers.length:',gStickers.length )

    if (gStickerIdx<0){
        gStickerIdx=8
        gStickersToShow = 12
    }
    if (gStickerIdx===gStickers.length-4) {
        gStickerIdx = -1
        gStickersToShow = 3
    }
    // console.log('num:', num)
    gStickerIdx+= num
    gStickersToShow+=num
    console.log('gStickerIdx:', gStickerIdx) //1
    console.log('gStickersToShow:', gStickersToShow)
    
    // getStickers(gStickerIdx, gStickersToShow)
    renderStickers(gStickerIdx,gStickersToShow)
}

function onAddSticker(elSticker) {
    const emoji = elSticker.innerHTML
    console.log('emoji:', emoji)

    addSticker(emoji)
    renderMeme()
}

function renderMeme(elLink) {
    // console.log('gMeme:', gMeme)
    const selectedId = getSelectedImageId()
    const selectedImg = getImgById(selectedId)
    // console.log('selectedImg:', selectedImg)
    // console.log('selectedImgurl:', selectedImg.url)

    const selectedLineIdx = getSelectedLineIdx()
    if (selectedLineIdx >=0){
        var selectedLine = gMeme.lines[selectedLineIdx]
        //data for pos:
        var y = selectedLine.position.y
        var x = selectedLine.position.x
        // console.log('y:', y)
        var currTextFromLine = setLineTxt()
        // console.log('currTextFromLine:',currTextFromLine )
    }
   
    const elImg = new Image() // Create a new html img element
    elImg.src = `../img/meme-imgs (square)/${selectedId}.jpg` // Send a network req to get that image, define the img src
    console.log('elImg.src:',elImg.src )
    // console.log('elImg:', elImg)
    // When the image ready draw it on the canvas
    
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        if (selectedLineIdx >=0) {
            drawText(currTextFromLine, x, y)
            if(!gMeme.isDownload){
                drawRect(x-250, y-25, 500, selectedLine.size+10) //change it to be dynamicly
            }
            if(gMeme.isDownload){
                downloadCanvas(elLink)
            }
        }
    }
   
}

function drawRect(x, y, width, height) {
    // using the built in .fillRect() and .strokeRect() methods to directly
    // paint on the canvas, without using a path
    gCtx.strokeStyle = 'white'
    gCtx.strokeRect(x, y, width, height)
    // gCtx.globalAlpha = 0.4
    // gCtx.fillStyle = 'white'
    // gCtx.fillRect(x, y, width, height)
}

function onSetText(elText) {
    let lineTxt = setLineTxt()

    const elMeme = elText.value
    // console.log('elMeme:', elMeme)
    // gMeme = elMeme
    let currLineIdx = gMeme.selectedLineIdx
    gMeme.lines[currLineIdx].txt = elMeme
    // console.log('gMeme:', gMeme)


    renderMeme()
    // console.log('gMeme:', gMeme)
}

function drawText(text, x, y) {
    // const lineIndex = getSelectedLineIdx()
    // console.log('lineIndex:', lineIndex)
    const memeLines = gMeme.lines
    console.log('memeLines:', memeLines)
    memeLines.forEach((line) => {
        const textWidth= gCtx.measureText(line.txt)
        // console.log('textWidth:', textWidth.width)
        gCtx.lineWidth = 1.5
        gCtx.strokeStyle = line.strokColor
        gCtx.fillStyle = line.color
        gCtx.font = line.size+'px ' + line.fontFamily
        
        gCtx.textAlign = line.align
        
        gCtx.textBaseline = 'middle'
        // console.log('line.position.x:',line.position.x)
        gCtx.fillText(line.txt, x, line.position.y,250) // Draws (fills) a given text at the given (x, y) position.
        gCtx.strokeText(line.txt, x, line.position.y,250) // Draws (strokes) a given text at the given (x, y) position.  
    })  
}

function onSetFillClr(fillColor) {
    // console.log('fillColor:',fillColor)
    setFillColor(fillColor)
}

function onSetStrokeClr(strokColor) {
    console.log('strokColor:',strokColor)
    setStrokColor(strokColor)
}

function onIncreaseFontSize(){
    increaseFontSize()
    renderMeme()
}

function onDecreaseFontSize(){
    decreaseFontSize()
    renderMeme()
}

function onSwitchLine(){
    setSwitchLine()
    renderMeme()
}

function onSetFontFamily(fontFamily){
    // console.log('fontFamily:',fontFamily )
    setFontFamilyType(fontFamily)
    renderMeme()
}

function onTextAlign(alignDeraction) {
    console.log('alignDeraction:', alignDeraction)
    setTextAlignDeraction(alignDeraction)
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    renderMeme()
}

function onAddLine(){
    addLine()
    renderMeme()
}

function onDownloadCanvas(elLink) {
    //hide rect from canvas
    gMeme.isDownload = true    
    renderMeme(elLink)
}



//not working in my code
function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    // Note: changing the canvas dimension this way clears the canvas
    gElCanvas.width = elContainer.offsetWidth
    // Unless needed, better keep height fixed.
    // gElCanvas.height = elContainer.offsetHeight
}

// function draw(event) {
//     // const offsetX = ev.offsetX
//     // const offsetY = ev.offsetY
//     const { offsetX, offsetY } = event
//     console.log(' offsetX, offsetY', offsetX, offsetY)

//     switch (gCurrText) {
//         case 'text':
//             drawText('Hello', offsetX, offsetY)
//             break
//         case 'emoji':
//             drawLine(offsetX, offsetY)
//             break
//     }
// }