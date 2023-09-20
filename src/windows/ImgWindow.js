import React from 'react'
import { Window } from './Window'

export const ImgWindow = React.memo(() => {
  return (
    <Window
      width="auto"
      height="auto"
      // icon={<Wangimg129 variant="32x32_4" />}
      title="test"
      defaultPosition={{ x: 100, y: 200 }}
      closeModal={() => closeWindow('imageDesktop1')}>
      <img
        src="/images/duo-coffee-made-by-naashka.gif"
        alt=""
        style={{
          maxWidth: '100%',
          maxHeight: '80%',
          display: 'block',
          margin: '0 auto',
        }}
      />
    </Window>
  )
})
