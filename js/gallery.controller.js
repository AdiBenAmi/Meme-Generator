'use strict'

function renderGallery() {
    let strHTML
    const images = getImages()
    console.log('images:', images)
    //render gallery with 2 img
    strHTML = images.map((image) => 
    `<img onclick=onImgSelect('${image.id}') src="/img/meme-imgs (square)/${image.id}.jpg">`
    ).join('')

    const elImgGalleryContainer = document.querySelector('.img-grid-container')
    // console.log('elImgGalleryContainer:', elImgGalleryContainer)
    elImgGalleryContainer.innerHTML = strHTML
}

function onImgSelect(imageId) {
    console.log('imageId:', imageId)
    setImg(imageId)
    //now gMeme.selectedImgId = imageId
    
    //hide and show 
    const elMainEditor = document.querySelector('.main-meme-editor')
    elMainEditor.classList.remove('hide')
    const elGallery = document.querySelector('.gallery-section')
    elGallery.classList.add('hide')
    
    //render img selected
    renderMeme() //renderMeme
}