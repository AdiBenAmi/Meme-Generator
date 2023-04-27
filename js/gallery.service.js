'use strict'


var gImgs = [
    {id: 1, url: '/img/meme-imgs (square)/1.jpg', keywords: ['trump', 'men']},
    {id: 2, url: '/img/meme-imgs (square)/2.jpg', keywords: ['puppys', 'love']}
]

function getImages() {
    return gImgs
}

function getImageIdxById(imageId) {
    // console.log('gImgs:', gImgs)
    const imageIdx = imageId -1
    // console.log('imageIdx:', imageIdx)
    return imageIdx
}



function getImgById(imageId){
    const imageIdx = getImageIdxById(imageId)
    // console.log('imageIdx:', imageIdx)
    const image = gImgs[imageIdx]
    // console.log('image:', image)
    return image
}

