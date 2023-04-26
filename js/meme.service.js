'use strict'

let gMeme=''
let gMemes

_createMemes()

function getMeme() {
    return gMeme
}




function _createMemes() {
    gMemes = _createMeme(1, 10, 'whats up')
    // console.log('gMemes:', gMemes)
    return gMemes
}

function _createMeme(selectedImgId, selectedLineIdx, txt, size = 20, align= 'center', color='white') {
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
