import React, { useState } from 'react'

const ResizeableDiv = ({ children }) => {
  const [size, setSize] = useState({x: 400, y: 500})

  const handler = (mouseDownEvent) => {
    const startSize = size
    const startPosition = {x: mouseDownEvent.pageX, y: mouseDownEvent.pageY}

    function onMouseMove(mouseMoveEvent) {
      setSize(currentSize => ({
        x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
        y: currentSize.y
      }))
    }

    function onMouseUp() {
      document.body.removeEventListener('mousemove', onMouseMove)
      document.body.removeEventListener('mouseup', onMouseUp)
    }

    document.body.addEventListener('mousemove', onMouseMove)
    document.body.addEventListener('mouseup', onMouseUp)
  }

  return (
    <div id='container' style={{ width: size.x, height: size.y}}>
      {children}
      <button id='draghandle' type='button' onMouseDown={handler} />
    </div>
  )
}

export default ResizeableDiv