import React from 'react'
import { Icon } from '@app/components'
import {
  Desk100,
  RecycleFull,
  Progman19,
  Progman13,
  Mailnews19,
  Progman25,
  Shell3221,
  MediaCd,
  Awfext326049,
  Explorer100,
  Syncui120,
  Phone,
} from '@react95/icons'
import styled from '@xstyled/styled-components'

const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-height: 100%;
  grid-gap: 5px;

  position: relative;
  // flex: 1;
  box-sizing: border-box;
  padding: 32px;
  // grid-template-columns: repeat(1, 1fr);

  // display: grid;
  // flex-wrap: wrap;
  // justify-items: start;
  // overflow: visible;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;
  padding: 10px;
  max-height: 170px;
  overflow-y: auto;
`

const spotifyURL = 'https://open.spotify.com/playlist/77JUipFLchNc0lLDR5toAW?si=31db6ab477ea4b7c'

const BiographyIcon = ({ openWindow }) => {
  return (
    <Icon
      icon={Explorer100}
      title={<span style={{ color: 'white' }}>Biography</span>}
      onClick={() => {
        openWindow('biography')
        openWindow('biographyImage')
      }}
    />
  )
}

const ResumeIcon = ({ openWindow }) => {
  return (
    <Icon
      icon={Mailnews19}
      title={<span style={{ color: 'white' }}>Résumé</span>}
      onClick={() => {
        openWindow('resume')
        openWindow('resumeImage')
      }}
    />
  )
}

const ArtworkIcon = ({ handleClickLink }) => {
  return (
    <Icon
      icon={Desk100}
      title={<span style={{ color: 'white' }}>Artwork</span>}
      onClick={() => handleClickLink('https://tashie0310.wixsite.com/naashka-studio')}
    />
  )
}

const CaseStudiesIcon = ({ openWindow }) => {
  return (
    <Icon
      icon={Syncui120}
      title={<span style={{ color: 'white' }}>Case Studies</span>}
      onClick={() => openWindow('caseStudies')}
    />
  )
}

const BlogIcon = ({ openWindow }) => {
  return (
    <Icon icon={Progman25} title={<span style={{ color: 'white' }}>Blog</span>} onClick={() => openWindow('blog')} />
  )
}

const ArchivesIcon = ({ openWindow }) => {
  return (
    <Icon
      icon={Shell3221}
      title={<span style={{ color: 'white' }}>Archives</span>}
      onClick={() => openWindow('archives')}
    />
  )
}

const TrashIcon = ({ openWindow }) => {
  return (
    <Icon
      icon={RecycleFull}
      title={<span style={{ color: 'white' }}>Trash</span>}
      onClick={() => openWindow('trash')}
    />
  )
}

const MusicIcon = ({ handleClickLink }) => {
  return (
    <Icon
      icon={MediaCd}
      title={<span style={{ color: 'white' }}>Music</span>}
      onClick={() => handleClickLink(spotifyURL)}
    />
  )
}

const PhotosIcon = ({ openWindow }) => {
  return (
    <Icon
      icon={Progman13}
      title={<span style={{ color: 'white' }}>Photos</span>}
      onClick={() => openWindow('photos')}
    />
  )
}

const VideosIcon = ({ openWindow }) => {
  return (
    <Icon
      icon={Progman19}
      title={<span style={{ color: 'white' }}>Videos</span>}
      onClick={() => openWindow('videoFolder')} // Specify the video ID here
    />
  )
}

const ContactIcon = ({ openWindow }) => {
  return (
    <Icon icon={Phone} title={<span style={{ color: 'white' }}>Contact</span>} onClick={() => openWindow('contact')} />
  )
}

const FaxIcon = ({ openWindow }) => {
  return (
    <Icon icon={Awfext326049} title={<span style={{ color: 'white' }}>Fax</span>} onClick={() => openWindow('fax')} />
  )
}

// Non-Desktop Icons

export {
  BiographyIcon,
  ResumeIcon,
  ArtworkIcon,
  CaseStudiesIcon,
  BlogIcon,
  ArchivesIcon,
  TrashIcon,
  MusicIcon,
  PhotosIcon,
  VideosIcon,
  ContactIcon,
  FaxIcon,
  Desktop,
  Grid,
}
