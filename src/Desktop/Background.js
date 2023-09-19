import React, { useState, useEffect } from 'react'
import {
  TaskBar,
  List,
  ThemeProvider,
  GlobalStyle,
  Modal,
  Video,
} from '@react95/core'
import {
  Wangimg129,
  WindowsExplorer,
  Notepad,
  Desk100,
  RecycleFull,
  Gcdef100,
  Earth,
  Progman19,
  Progman13,
  Mailnews19,
  Progman25,
  Shell3221,
  MediaCd,
  Awfext326049,
  Explorer100,
  Syncui120,
  FileText,
  Confcp118,
  Folder,
  Phone,
  Ulclient1235,
} from '@react95/icons'

import styled, { x } from '@xstyled/styled-components'

import '@react95/icons/icons.css'

import { Icon } from '@app/components'

const Background = React.memo(() => (
  <x.div
    position='absolute'
    top={0}
    bottom={0}
    right={0}
    left={0}
    pointerEvents={'none'}
    // background='#6ba8a9'
  >
    <x.div
      position='absolute'
      top={0}
      bottom={0}
      right={0}
      left={0}
      // background='black'
      // opacity={0.5}
    />

    <x.div
      width='100%'
      height='100%'
      backgroundImage='url(/images/background2.gif)'
      backgroundSize='cover'
      content=' '
      minHeight='100%'
      opacity={0.9}
    />
  </x.div>
))

export { Background }
