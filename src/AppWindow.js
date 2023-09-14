import React from 'react'
import { Modal } from '@react95/core'

const AppWindow = ({ title, children, onClose }) => (
  <Modal>
    {/* <WindowContent>
      <WindowHeader>
        <span>{title}</span>
        <button
          onClick={onClose}
          style={{ marginLeft: 'auto', marginRight: '8px' }}
        >
          <span>✕</span>
        </button>
      </WindowHeader>
      {children}
    </WindowContent> */}
  </Modal>
)

export default AppWindow
