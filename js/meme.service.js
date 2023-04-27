'use strict'
let gMeme= _createMeme()
console.log('gMeme:', gMeme)


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
    if (gMeme.lines[lineIndex].size === 50) return
    gMeme.lines[lineIndex].size += 5 
    console.log('gMeme:', gMeme)
}

function decreaseFontSize(){
    const lineIndex = gMeme.selectedLineIdx
    if (gMeme.lines[lineIndex].size === 0) return
    gMeme.lines[lineIndex].size -= 5 
    console.log('gMeme:', gMeme)
}

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
    let selectedLine = getSelectedLineIdx()
    console.log('selectedLine:', selectedLine)
    if (!selectedLine) {
        gMeme.selectedLineIdx = 1
    } else {
        gMeme.selectedLineIdx = 0
    }
    console.log('gMeme.selectedLineIdx:', gMeme.selectedLineIdx)
}



function _createMeme(selectedImgId='', selectedLineIdx = 0, txt = 'write your text here', size = 40, align= 'center', color='white', strokColor='black', fontFamily='impact') {
    return { 
        selectedImgId, 
        selectedLineIdx, 
        lines: [ 
            {   txt: 'write your text here', 
                size, 
                align, 
                color,
                strokColor: 'black',
                fontFamily,
                position: {x: 250, y: 50}, 
            }, 
            {   txt: 'write more text here', 
                size, 
                align, 
                color,
                strokColor: 'black',
                fontFamily,
                position: {x: 250, y: 450}, 
            } 
        ] 
    }  
}
