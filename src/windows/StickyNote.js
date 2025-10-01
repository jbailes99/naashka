import React, { useState } from 'react'
import { Modal, Button } from '@react95/core'
import { FileText } from '@react95/icons'
import styled from '@xstyled/styled-components'

const StickyContent = styled.div`
  flex: 1;
  padding: 8px;
  overflow: auto;
`

const StickyImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border: 1px solid #000;
  background: white;
`

const StickyModal = styled(Modal)`
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3) !important;

  .react95-modal-content {
    background: #ffff99 !important;
    border: 2px outset #d4af37 !important;
    padding: 0 !important; /* <--- remove extra padding */
  }

  .react95-modal-titlebar {
    background: #ffff99 !important;
    border-bottom: 1px solid #d4af37 !important;
  }

  .react95-modal-titlebar-text {
    color: #333 !important;
  }

  .react95-modal-titlebar-button {
    background: #ffff99 !important;
  }
`

const StickyNote = ({ isOpen, onClose, imageData, title, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [noteText, setNoteText] = useState('')

  if (!isOpen) return null

  return (
    <StickyModal
      width='100%'
      height='100%'
      icon={FileText}
      title={title || 'Sticky Note'}
      defaultPosition={{ x: Math.random() * 400 + 100, y: Math.random() * 300 + 100 }}
      closeModal={onClose}
      resizable={true}
    >
      <StickyContent>
        {imageData ? (
          <StickyImage src={imageData} alt='Drawing' />
        ) : (
          <div>
            {isEditing ? (
              <textarea
                value={noteText}
                onChange={e => setNoteText(e.target.value)}
                style={{
                  width: '100%',
                  height: '100%',
                  border: '1px inset #c0c0c0',
                  background: '#ffff99',
                  resize: 'none',
                  fontFamily: 'inherit',
                  fontSize: '12px',
                }}
                placeholder='Type your note here...'
              />
            ) : (
              <div
                style={{
                  minHeight: '100%',
                  cursor: 'text',
                  padding: '4px',
                  border: '1px inset #c0c0c0',
                  background: '#ffff99',
                }}
                onClick={() => setIsEditing(true)}
              >
                {noteText || 'Click to add text...'}
              </div>
            )}
          </div>
        )}
      </StickyContent>
    </StickyModal>
  )
}

export default StickyNote
