'use strict'


var gImgs = [
    {id: 1, url: '/img/meme-imgs (square)/1.jpg', keywords: ['trump', 'men']},
    {id: 2, url: '/img/meme-imgs (square)/2.jpg', keywords: ['puppys', 'love']},
    {id: 3, url: '/img/meme-imgs (square)/3.jpg', keywords: ['puppys', 'love']},
    {id: 4, url: '/img/meme-imgs (square)/4.jpg', keywords: ['puppys', 'love']},
    {id: 5, url: '/img/meme-imgs (square)/5.jpg', keywords: ['puppys', 'love']},
    {id: 6, url: '/img/meme-imgs (square)/6.jpg', keywords: ['puppys', 'love']},
    {id: 7, url: '/img/meme-imgs (square)/7.jpg', keywords: ['puppys', 'love']},
    {id: 8, url: '/img/meme-imgs (square)/8.jpg', keywords: ['puppys', 'love']},
    {id: 9, url: '/img/meme-imgs (square)/9.jpg', keywords: ['puppys', 'love']},
    {id: 10, url: '/img/meme-imgs (square)/10.jpg', keywords: ['puppys', 'love']},
    {id: 11, url: '/img/meme-imgs (square)/11.jpg', keywords: ['puppys', 'love']},
    {id: 12, url: '/img/meme-imgs (square)/12.jpg', keywords: ['puppys', 'love']},
    {id: 13, url: '/img/meme-imgs (square)/13.jpg', keywords: ['puppys', 'love']},
    {id: 14, url: '/img/meme-imgs (square)/14.jpg', keywords: ['puppys', 'love']},
    {id: 15, url: '/img/meme-imgs (square)/15.jpg', keywords: ['puppys', 'love']},
    {id: 16, url: '/img/meme-imgs (square)/16.jpg', keywords: ['puppys', 'love']},
    {id: 18, url: '/img/meme-imgs (square)/17.jpg', keywords: ['puppys', 'love']},
    {id: 17, url: '/img/meme-imgs (square)/18.jpg', keywords: ['puppys', 'love']},
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

