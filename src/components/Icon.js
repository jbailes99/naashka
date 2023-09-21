// const CursorItem = styled(Frame)<{ type: keyof typeof Cursor }>`
import React, { useState } from 'react'
import styled, { x } from '@xstyled/styled-components'
import { Cursor, Button } from '@react95/core'

// const CursorItem = styled(Frame)<{ type: keyof typeof Cursor }>`
//   ${({ type }) => Cursor[type]};
// `;

const CursorIcon = styled.div`
  ${Cursor.Pointer}

  > div {
    cursor: inherit !important;
  }
`

const IconText = styled.div`
  width: 80px;
  text-align: center;
  word-break: break-word;
  font-size: 16px;
`

export const Icon = React.memo(({ icon, title, onClick, iconSize }) => {
  const size = iconSize || '32x32_4' // Default size
  console.log('test')
  console.log(Cursor)

  const [clickCount, setClickCount] = React.useState(0)
  const handleClick = () => {
    setClickCount(clickCount + 1)

    if (clickCount === 0) {
      return
    }

    if (clickCount === 1) {
      onClick()
      setClickCount(0)
    }
  }

  const highlightStyles = {
    backgroundColor: 'lightblue',
  }
  return (
    <CursorIcon>
      <x.div
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        onClick={onClick}
        cursor='inherit'
        marginLeft='5'
        marginBottom='5'
        // marginTop='15'
        style={clickCount === 0 ? {} : highlightStyles}
      >
        {React.createElement(icon, {
          title,
          variant: size,
          style: { width: 40, height: 40, cursor: 'inherit' },
        })}
        <IconText>{title}</IconText>
      </x.div>
    </CursorIcon>
  )
})
