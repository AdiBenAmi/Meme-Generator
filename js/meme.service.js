'use strict'
let gMeme= _createMeme()
// console.log('gMeme:', gMeme)


function getMeme() {
    return gMeme
}

function setImg(imageId) {
    //get the image by index
    gMeme.selectedImgId = imageId    //+ if i need a number
    // console.log('gMeme:', gMeme)   
}

function getSelectedImageId(){
    return gMeme.selectedImgId
}

function setFillColor(fillColor) {
    const lineIndex = gMeme.selectedLineIdx
    // console.log('lineIndex:', lineIndex)
    gMeme.lines[lineIndex].color = fillColor
    // console.log('gMeme:', gMeme)
}

function setStrokColor(strokClr){
    // console.log('strokClr:',strokClr )
    const lineIndex = gMeme.selectedLineIdx
    // console.log('lineIndex:', lineIndex)
    gMeme.lines[lineIndex].strokColor = strokClr
}

function increaseFontSize(){
    const lineIndex = gMeme.selectedLineIdx
    if (gMeme.lines[lineIndex].size === 100) return
    gMeme.lines[lineIndex].size += 5 
    console.log('gMeme:', gMeme)
}

function decreaseFontSize(){
    const lineIndex = gMeme.selectedLineIdx
    if (gMeme.lines[lineIndex].size === 0) return
    gMeme.lines[lineIndex].size -= 5 
    console.log('gMeme:', gMeme)
}

function setFontFamilyType(fontFamilyType) {
    const lineIndex = gMeme.selectedLineIdx
    // console.log('lineIndex:', lineIndex)
    gMeme.lines[lineIndex].fontFamily = fontFamilyType
    // console.log('gMeme:', gMeme)
}

function setTextAlignDeraction(alignDeraction){
    console.log('hello:')
    // console.log('alignDeraction:', alignDeraction)
    const lineIndex = gMeme.selectedLineIdx
    gMeme.lines[lineIndex].align = alignDeraction
    if (alignDeraction === 'start') {
        gMeme.lines[lineIndex].position.x = 5
    } else if (alignDeraction === 'center') {
        gMeme.lines[lineIndex].position.x = gElCanvas.width/2
    } else if (alignDeraction === 'end') {
        gMeme.lines[lineIndex].position.x = gElCanvas.width -5
    }
    console.log('gMeme:', gMeme)    
}

// function setAlign(align) {
//     if (gMeme.selectedLineIdx < 0) return;
//     getSelectedLine().align = align;
//     let x;
//     if (align === 'start') x = 10;
//     else if (align === 'center') x = gCanvas.width / 2;
//     else if (align === 'end') x = gCanvas.width - 10;
//     getSelectedLine().pos.x = x;
//  }

function setLineTxt(){
    //update the text from selected line index
    let text = gMeme.lines[getSelectedLineIdx()].txt
    // console.log('text:', text)
    return text
}

function getSelectedLineIdx() {
    // console.log('gMeme.selectedLineIdx:', gMeme.selectedLineIdx)
    return gMeme.selectedLineIdx
}

function setSwitchLine() {
    const selectedLine = getSelectedLineIdx()
    console.log('selectedLine:', selectedLine)
    console.log('gMeme.selectedLineIdx.length:', gMeme.selectedLineIdx.length)
    if (selectedLine === gMeme.lines.length-1) { //0
        gMeme.selectedLineIdx = 0
    } else if (selectedLine < gMeme.lines.length-1){
        gMeme.selectedLineIdx++
    }
    console.log('gMeme.selectedLineIdx:', gMeme.selectedLineIdx)
}

function deleteLine(){
    if(gMeme.selectedLineIdx<0) return
    const selectedLine = getSelectedLineIdx()
    // console.log('selectedLine:', selectedLine)
    gMeme.lines.splice(selectedLine,1)
    gMeme.selectedLineIdx-- 
    if (!gMeme.lines.length) gMeme.selectedLineIdx = - 1
}

function addLine(txt='meme text', fontFamily='impact',color='white'){
    console.log('hello')
    const newLine = {   
        txt, 
        size: 40, 
        align:'center', 
        color,
        strokColor: 'black',
        fontFamily,
        position: {x: gElCanvas.width/2, y: gElCanvas.height/2}, 
    }
    gMeme.lines.push(newLine)
    // console.log('gMeme:', gMeme)
    gMeme.selectedLineIdx = gMeme.lines.length-1
    console.log('gMeme.selectedLineIdx:', gMeme.selectedLineIdx)
}


function addSticker(txt='', fontFamily='impact',color='white'){
    console.log('hello')
    const newLine = {   
        txt, 
        size: 40, 
        align:'center', 
        color,
        strokColor: 'black',
        fontFamily,
        position: {x: gElCanvas.width/2, y: gElCanvas.height/2}, 
    }
    gMeme.lines.push(newLine)
    // console.log('gMeme:', gMeme)
    gMeme.selectedLineIdx = gMeme.lines.length-1
    console.log('gMeme.selectedLineIdx:', gMeme.selectedLineIdx)
}

function downloadCanvas(elLink){
         // Gets the canvas content and convert it to base64 data URL that can be save as an image
         const data = gElCanvas.toDataURL() // Method returns a data URL containing a representation of the image in the format specified by the type parameter.
         // console.log('data', data) // Decoded the image to base64
         elLink.href = data // Put it on the link
         elLink.download = 'my-meme' // Can change the name of the file

         gMeme.isDownload = false 
}


function _createMeme(selectedImgId='',isDownload=false, selectedLineIdx = 0, txt = 'write your text here', size = 40, align= '', color='white', strokColor='black', fontFamily='impact') {
    return { 
        selectedImgId, 
        selectedLineIdx, 
        isDownload,
        lines: [ 
            {   txt: 'write your text here', 
                size, 
                align:'center', 
                color,
                strokColor: 'black',
                fontFamily,
                position: {x: 250, y: 50}, 
            }, 
            {   txt: 'write more text here', 
                size, 
                align:'center', 
                color,
                strokColor: 'black',
                fontFamily,
                position: {x: 250, y: 450}, 
            } 
        ] 
    }  
}
//  STICKERS

function getStickers(gStickerIdx,gStickersToShow) {
// console.log('gStickers:', gStickers)
// console.log('gStickersToShow:', gStickersToShow)
    const stickers = gStickers.slice(gStickerIdx, gStickersToShow)
    // console.log('stickers:', stickers)
    
    return stickers
}