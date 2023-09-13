import React, { useState } from 'react'
import {
  Button,
  TaskBar,
  List,
  ThemeProvider,
  GlobalStyle,
} from '@react95/core'
import {
  WindowsExplorer,
  ReaderClosed,
  BillAdd,
  Notepad,
  Desk100,
  RecycleFull,
  Gcdef100,
} from '@react95/icons'

import styled, { x } from '@xstyled/styled-components'

import '@react95/icons/icons.css'

/**
 * - Desktop Icons
 * - Windows
 * - MAYBE (NOT NOW): Intro like glassanimals
 */

const Desktop = styled.div`
  position: relative;
  flex: 1;
  box-sizing: border-box;
  padding: 8px;

  grid-column-start: 4;
  grid-gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  overflow: visible;
`

const Icon = React.memo(({ icon, title }) => (
  <x.div
    display='flex'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    // background='green'
  >
    {React.createElement(icon, {
      title,
      variant: '32x32_4',
    })}
    <x.div minWidth={80} textAlign='center'>
      {title}
    </x.div>
  </x.div>
))

const Background = React.memo(() => (
  <x.div
    position='absolute'
    top={0}
    bottom={0}
    right={0}
    left={0}
    // background='#6ba8a9'
  >
    <x.div
      width='100%'
      height='100%'
      backgroundImage='url(/background.png)'
      backgroundSize='cover'
      content=' '
      minHeight='100%'
      // opacity={0.2}
    />
  </x.div>
))

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Background />

        <Desktop>
          <Icon icon={Notepad} title='About' />
          <Icon icon={Desk100} title='Works' />
          <Icon icon={Gcdef100} title='Fun' />
          <Icon icon={RecycleFull} title='Trash' />
          <Icon icon={BillAdd} title='Contact' />
          {/* <IconContainer>testsd</IconContainer> */}
          {/* <WindowsExplorer variant='32x32_4' title='test' /> */}
          {/* ok */}
        </Desktop>
        <div style={{ background: '', flexShrink: 0, height: 28 }}>
          <TaskBar
            list={
              <List>
                <List.Item
                  icon={<ReaderClosed variant='32x32_4' />}
                  onClick={() => {}}
                >
                  Contact me
                </List.Item>
                <List.Item
                  icon={<WindowsExplorer variant='32x32_4' />}
                  onClick={() => {}}
                >
                  Windows Explorer
                </List.Item>
              </List>
            }
          />
        </div>
      </div>
    </ThemeProvider>
  )
}
export default App
