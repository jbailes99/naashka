import React, { useRef, useEffect, useState } from 'react'
import { Modal, Button } from '@react95/core'
import { Brush, Eraser, ArrowLeft, ArrowRight, Save, Open, Close } from '@react95/icons'
import styled from '@xstyled/styled-components'
import { FaPaintBrush, FaEraser } from 'react-icons/fa'

const PaintContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #c0c0c0;
  border: 2px inset #c0c0c0;
  box-sizing: border-box;
  overflow: hidden;
`

const ToolbarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  background: #c0c0c0;
  border-bottom: 1px solid #808080;
  gap: 4px;
  flex-shrink: 0;
  min-height: 32px;
`

const ColorPalette = styled.div`
  display: flex;
  gap: 2px;
  margin: 4px 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
`

const ColorButton = styled.button`
  width: 20px;
  height: 20px;
  border: 1px solid #808080;
  cursor: pointer;
  background: ${props => props.color};
  border-style: ${props => (props.selected ? 'inset' : 'outset')};

  &:hover {
    border-style: inset;
  }
`

const CanvasContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  margin: 4px;
  border: 1px inset #c0c0c0;
  overflow: hidden;
  min-height: 0;
  position: relative;
`

const Canvas = styled.canvas`
  cursor: crosshair;
  border: 1px solid #000;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const BrushIcon = styled.div`
  width: 16px;
  height: 16px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: ${props => (props.size === 'small' ? '8px' : '12px')};
    height: ${props => (props.size === 'small' ? '2px' : '3px')};
    background: #8b4513;
    top: ${props => (props.size === 'small' ? '8px' : '6px')};
    left: ${props => (props.size === 'small' ? '4px' : '2px')};
    border-radius: 1px;
  }

  &::after {
    content: '';
    position: absolute;
    width: ${props => (props.size === 'small' ? '1px' : '2px')};
    height: ${props => (props.size === 'small' ? '6px' : '8px')};
    background: #654321;
    top: ${props => (props.size === 'small' ? '2px' : '1px')};
    left: ${props => (props.size === 'small' ? '7px' : '7px')};
    border-radius: 1px;
  }
`

const EraserIcon = styled.div`
  width: 16px;
  height: 16px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 6px;
    background: #ffb6c1;
    top: 5px;
    left: 3px;
    border-radius: 1px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 8px;
    background: #8b4513;
    top: 2px;
    left: 7px;
    border-radius: 1px;
  }
`

const PaintWindow = ({ isOpen, onClose, onSaveAsSticky }) => {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [currentColor, setCurrentColor] = useState('#000000')
  const [brushSize, setBrushSize] = useState(5)
  const [isEraser, setIsEraser] = useState(false)
  const [brushType, setBrushType] = useState('brush') // 'brush' or 'pen'
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  const colors = [
    '#000000',
    '#800000',
    '#008000',
    '#808000',
    '#000080',
    '#800080',
    '#008080',
    '#C0C0C0',
    '#808080',
    '#FF0000',
    '#00FF00',
    '#FFFF00',
    '#0000FF',
    '#FF00FF',
    '#00FFFF',
    '#FFFFFF',
  ]

  const resizeCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const container = canvas.parentElement
    const containerRect = container.getBoundingClientRect()
    canvas.width = containerRect.width - 2 // Account for border
    canvas.height = containerRect.height - 2 // Account for border

    const ctx = canvas.getContext('2d')

    if (brushType === 'pen') {
      ctx.lineCap = 'square'
      ctx.lineJoin = 'miter'
      ctx.lineWidth = Math.max(1, brushSize * 0.5)
    } else {
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.lineWidth = brushSize
    }

    ctx.strokeStyle = currentColor
  }

  useEffect(() => {
    resizeCanvas()
    saveToHistory()

    // Add resize listener
    const handleResize = () => {
      resizeCanvas()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const saveToHistory = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const imageData = canvas.toDataURL()
    const newHistory = history.slice(0, historyIndex + 1)
    newHistory.push(imageData)
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
  }

  const startDrawing = e => {
    setIsDrawing(true)
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()

    // Scale coordinates to match canvas internal resolution
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    const x = (e.clientX - rect.left) * scaleX
    const y = (e.clientY - rect.top) * scaleY

    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = e => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()

    // Scale coordinates to match canvas internal resolution
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    const x = (e.clientX - rect.left) * scaleX
    const y = (e.clientY - rect.top) * scaleY

    const ctx = canvas.getContext('2d')

    if (isEraser) {
      ctx.globalCompositeOperation = 'destination-out'
      ctx.lineWidth = brushSize
    } else {
      ctx.globalCompositeOperation = 'source-over'
      ctx.strokeStyle = currentColor

      if (brushType === 'pen') {
        // Pen: sharp, precise lines
        ctx.lineCap = 'square'
        ctx.lineJoin = 'miter'
        ctx.lineWidth = Math.max(1, brushSize * 0.5) // Thinner for pen
      } else {
        // Brush: soft, rounded lines
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.lineWidth = brushSize
      }
    }

    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false)
      saveToHistory()
    }
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    saveToHistory()
  }

  const undo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1
      setHistoryIndex(newIndex)
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0)
      }
      img.src = history[newIndex]
    }
  }

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1
      setHistoryIndex(newIndex)
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0)
      }
      img.src = history[newIndex]
    }
  }

  const saveImage = () => {
    const canvas = canvasRef.current
    const imageData = canvas.toDataURL()
    const title = `Drawing ${new Date().toLocaleTimeString()}`

    if (onSaveAsSticky) {
      onSaveAsSticky(imageData, title)
    } else {
      // Fallback to download if no sticky handler
      const link = document.createElement('a')
      link.download = 'paint-drawing.png'
      link.href = imageData
      link.click()
    }
  }

  const changeBrushSize = size => {
    setBrushSize(size)
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    if (brushType === 'pen') {
      ctx.lineWidth = Math.max(1, size * 0.5)
    } else {
      ctx.lineWidth = size
    }
  }

  if (!isOpen) return null

  return (
    <Modal
      width='600'
      height='500'
      icon={Brush}
      title='Paint'
      defaultPosition={{ x: 100, y: 100 }}
      closeModal={onClose}
    >
      <PaintContainer>
        <ToolbarContainer>
          {/* Brush Tool */}
          <Button size='sm' onClick={() => setIsEraser(false)} active={!isEraser} title='Brush'>
            <FaPaintBrush />
          </Button>

          {/* Eraser Tool */}
          <Button size='sm' onClick={() => setIsEraser(true)} active={isEraser} title='Eraser'>
            <FaEraser />
          </Button>

          <div style={{ marginLeft: '6px', display: 'flex', alignItems: 'center', gap: '2px' }}>
            <span style={{ fontSize: '11px' }}>Size:</span>
            <Button size='sm' onClick={() => changeBrushSize(2)}>
              2
            </Button>
            <Button size='sm' onClick={() => changeBrushSize(5)}>
              5
            </Button>
            <Button size='sm' onClick={() => changeBrushSize(10)}>
              10
            </Button>
          </div>

          <div style={{ marginLeft: '6px' }}>
            <Button size='sm' onClick={undo} disabled={historyIndex <= 0}>
              ←
            </Button>
            <Button size='sm' onClick={redo} disabled={historyIndex >= history.length - 1}>
              →
            </Button>
          </div>

          <div
            className='flex flex-col items-center gap-2'
            style={{ width: '60px', display: 'flex', marginLeft: '6px' }}
          >
            <Button size='sm' onClick={clearCanvas}>
              Clear
            </Button>
            <Button size='sm' onClick={saveImage}>
              Save to Desktop
            </Button>
          </div>
        </ToolbarContainer>

        <ColorPalette>
          {colors.map((color, index) => (
            <ColorButton
              key={index}
              color={color}
              selected={currentColor === color}
              onClick={() => setCurrentColor(color)}
              title={color}
            />
          ))}
        </ColorPalette>

        <CanvasContainer>
          <Canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />
        </CanvasContainer>
      </PaintContainer>
    </Modal>
  )
}

export default PaintWindow
