'use strict'

let gStartPos
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

// function onInit() {
  

//   resizeCanvas()
//   //Calc the center of the canvas
//   const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
//   //Create the circle in the center
//   createCircle(center)
//   addListeners()
//   renderCanvas()
// }

// function renderCanvas() {
//   // Set the backgournd color to grey
//   // gCtx.fillStyle = '#ede5ff'
//   // // // Clear the canvas,  fill it with grey background
//   // gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
//   renderCircle()
// }

function renderCircle() {
  // Get the props we need from the circle
  const { pos, color, size } = getCircle()
  // Draw the circle
  drawArc(pos.x, pos.y, size, color)
}

// Handle the listeners
function addListeners() {
  addMouseListeners()
  addTouchListeners()
  // Listen for resize ev
  window.addEventListener('resize', () => {
    onInit()
  })
}

function addMouseListeners() {
  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
  gElCanvas.addEventListener('touchstart', onDown)
  gElCanvas.addEventListener('touchmove', onMove)
  gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
  // Get the ev pos from mouse or touch
  const pos = getEvPos(ev)
  // console.log('pos:', pos)
  if (!isCircleClicked(pos)) return

  // console.log('Down')
  setCircleDrag(true)
  //Save the pos we start from
  gStartPos = pos
  document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
  const { isDrag } = getCircle()
  if (!isDrag) return
  // console.log('Move')

  const pos = getEvPos(ev)
  // Calc the delta , the diff we moved
  const dx = pos.x - gStartPos.x
  const dy = pos.y - gStartPos.y
  moveCircle(dx, dy)
  // Save the last pos , we remember where we`ve been and move accordingly
  gStartPos = pos
  // The canvas is render again after every move
  renderCanvas()
}

function onUp() {
  // console.log('Up')
  setCircleDrag(false)
  document.body.style.cursor = 'grab'
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
}

function getEvPos(ev) {
  // Gets the offset pos , the default pos
  let pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }
  // console.log('pos:', pos)
  // Check if its a touch ev
  if (TOUCH_EVS.includes(ev.type)) {
    //soo we will not trigger the mouse ev
    ev.preventDefault()
    //Gets the first touch point
    ev = ev.changedTouches[0]
    //Calc the right pos according to the touch screen
    // console.log('ev.pageX:', ev.pageX)
    // console.log('ev.pageY:', ev.pageY)
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    }
    // console.log('pos:', pos)
  }
  return pos
}

function drawArc(x, y, size = 0, color = 'blue') {
  gCtx.beginPath()
  gCtx.lineWidth = '0'
  gCtx.arc(x, y, size, 0, 2 * Math.PI)
  gCtx.strokeStyle = color
  gCtx.stroke()
  gCtx.fillStyle = color
  gCtx.fill()
}
