'use strict'


var gImgs = [
    {id: 1, url: 'img/meme-squre/1.jpg', keywords: ['trump', 'men']},
    {id: 2, url: 'img/meme-squre/2.jpg', keywords: ['puppys', 'love']},
    {id: 3, url: 'img/meme-squre/3.jpg', keywords: ['puppys', 'baby']},
    {id: 4, url: 'img/meme-squre/4.jpg', keywords: ['cat', 'sleep']},
    {id: 5, url: 'img/meme-squre/5.jpg', keywords: ['baby', 'strong']},
    {id: 6, url: 'img/meme-squre/6.jpg', keywords: ['tie', 'think']},
    {id: 7, url: 'img/meme-squre/7.jpg', keywords: ['baby', 'surprise']},
    {id: 8, url: 'img/meme-squre/8.jpg', keywords: ['think', 'hat']},
    {id: 9, url: 'img/meme-squre/9.jpg', keywords: ['baby', 'devious']},
    {id: 10, url: 'img/meme-squre/10.jpg', keywords: ['obama', 'laugh']},
    {id: 11, url: 'img/meme-squre/11.jpg', keywords: ['fight', 'kiss']},
    {id: 12, url: 'img/meme-squre/12.jpg', keywords: ['haim', 'you']},
    {id: 13, url: 'img/meme-squre/13.jpg', keywords: ['cheers', 'leonardo']},
    {id: 14, url: 'img/meme-squre/14.jpg', keywords: ['sunglasses', 'space']},
    {id: 15, url: 'img/meme-squre/15.jpg', keywords: ['exactly', 'men']},
    {id: 16, url: 'img/meme-squre/16.jpg', keywords: ['funny', 'starwars']},
    {id: 18, url: 'img/meme-squre/17.jpg', keywords: ['toystory', 'woodi']},
    {id: 17, url: 'img/meme-squre/18.jpg', keywords: ['putin', 'two']},
]

function getImages() {
    return gImgs
}

function setImg(imageId) {
    //get the image by index
    gMeme.selectedImgId = imageId    //+ if i need a number
    // console.log('gMeme:', gMeme)   
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

