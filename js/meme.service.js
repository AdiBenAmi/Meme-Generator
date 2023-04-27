'use strict'


let gMeme= _createMeme()
// console.log('gMeme:', gMeme)

// let gMemes
// _createMemes()

function getMeme() {
    return gMeme
}

function setImg(imageId) {
    //get the image by index
    gMeme.selectedImgId = imageId    //+ if i need a number
    // console.log('gMeme:', gMeme)   
}

function setLineTxt(){
    //update the text from selected line index
    let text = gMeme.lines[getSelectedLineIdx()].txt
    // console.log('text:', text)
    return text
}

function getSelectedLineIdx() {
    return gMeme.selectedLineIdx
}

// function _createMemes() {
//     gMemes = _createMeme(1, 10, 'whats up')
//     // console.log('gMemes:', gMemes)
//     return gMemes
// }

function _createMeme(selectedImgId='', selectedLineIdx = 0, txt = '', size = 20, align= 'center', color='white') {
    return { 
        selectedImgId, 
        selectedLineIdx, 
        lines: [ 
            {   txt, 
                size, 
                align, 
                color 
            } 
        ] 
    }
    
}
