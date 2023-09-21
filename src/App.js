import React, { useState, useEffect } from 'react'
import { TaskBar, List, ThemeProvider, GlobalStyle, Modal } from '@react95/core'
import {
  Wangimg129,
  WindowsExplorer,
  Notepad,
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
} from '@react95/icons'

import styled, { overflow } from '@xstyled/styled-components'

import '@react95/icons/icons.css'

import { Icon } from '@app/components'
import { ImgWindow } from '@app/windows'

import {
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
} from './Desktop/DesktopContent'
import {
  Background, // Background image
} from './Desktop/Background'

const windowOffset = 20

const calculateCenterPosition = () => {
  const screenWidth = window.innerWidth
  const taskbarHeight = 28
  const screenHeight = window.innerHeight
  const centerX = (screenWidth - 300) / 2 // Adjust for the window width
  const centerY = (screenHeight - taskbarHeight - 200) / 3 // Adjust for the window height
  return { x: centerX, y: centerY }
}

const colors = [
  '#FF6347', // Tomato
  '#C93212', // Chartreuse
  '#8A2BE2', // Blue Violet
  '#FF4500', // Orange Red
  '#32CD32', // Lime Green
  '#4169E1', // Royal Blue
  '#FFA500', // Orange
  '#40E0D0', // Turquoise
  '#9932CC', // Dark Orchid
  '#FF1493', // Deep Pink
  '#228B22', // Forest Green
  '#800080', // Purple
  '#FF69B4', // Hot Pink
  '#00CED1', // Dark Turquoise
  '#8B4513', // Saddle Brown
]

const DesktopContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  justify-content: flex-start;
  max-height: 100%;
`

const Tag = styled.div`
  display: inline-block;
  margin: 4px;
  padding: 4px 8px;
  background: ${(props) => colors[props.index % colors.length]};
  color: white;
  border-radius: 4px;
  font-weight: bold;
  font-size: 18px;
`

const App = () => {
  const tags = [
    'Figma',
    'UX Design',
    'Brand Design',
    'Graphic Design',
    'HTML/CSS',
    'Animation',
    'Video Editing',
    'Marketing',
    'Adobe Creative Suite',
    'Illustration',
    'Web Design',
    'Aseprite',
    'Product Design',
    'Project Managing',
    'Wireframing',
    // Add more tags here
  ]

  const emailAddress = 'naashka.isk@gmail.com'
  const [openWindows, setOpenWindows] = useState({
    CuteCat: true,
    Tired: true,
    DuoCoffee: true,
    MeTash: true,
  })

  const [windowPosition, setWindowPosition] = useState(calculateCenterPosition) // Initialize with default values

  useEffect(() => {
    // Handle screen resizing to keep the window centered
    const handleResize = () => {
      setWindowPosition(calculateCenterPosition())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const openResume = () => {
    const resumeURL = '/Natasha_Resume.pdf' // Replace with the actual path to your resume PDF
    const resumeWindow = window.open(resumeURL, '_blank')
    if (resumeWindow) {
      resumeWindow.focus()
    }
  }

  const openWindow = (windowId) => {
    if (!openWindows[windowId]) {
      const newPosition = {
        x: windowPosition.x + windowOffset,
        y: windowPosition.y + windowOffset,
      }
      setWindowPosition(newPosition)

      setOpenWindows((prevOpenWindows) => ({
        ...prevOpenWindows,
        [windowId]: true,
      }))
    }
  }

  const closeWindow = (windowId) => {
    setOpenWindows((prevOpenWindows) => ({
      ...prevOpenWindows,
      [windowId]: false,
    }))
  }

  const instagramURL = 'https://www.instagram.com/naashka__/'
  const linkedInURL = 'https://www.linkedin.com/in/naashka/'

  const handleClickLink = (url) => {
    window.open(url, '_blank')
  }
  return (
    <ThemeProvider theme='eggplant'>
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

        <DesktopContainer>
          <Desktop>
            <BiographyIcon openWindow={openWindow} />
            <ResumeIcon openWindow={openWindow} />
            <ArtworkIcon handleClickLink={handleClickLink} />
            <CaseStudiesIcon openWindow={openWindow} />
            <BlogIcon openWindow={openWindow} />
            <ArchivesIcon openWindow={openWindow} />
            <TrashIcon openWindow={openWindow} />
            <MusicIcon handleClickLink={handleClickLink} />
            <PhotosIcon openWindow={openWindow} />
            <VideosIcon openWindow={openWindow} />
            <ContactIcon openWindow={openWindow} />
            <FaxIcon openWindow={openWindow} />
          </Desktop>
        </DesktopContainer>

        <div style={{ background: '', flexShrink: 0, height: 28 }}>
          <TaskBar
            list={
              <List>
                <List.Item
                  icon={<Earth variant='32x32_4' />}
                  onClick={() => {
                    handleClickLink(instagramURL)
                  }}
                >
                  Instagram
                </List.Item>

                <List.Item
                  icon={<Earth variant='32x32_4' />}
                  onClick={() => {
                    handleClickLink(linkedInURL)
                  }}
                >
                  Linkedin
                </List.Item>

                <List.Item
                  icon={<Mailnews19 variant='32x32_4' />}
                  onClick={() => openWindow('resume')}
                >
                  Résumé
                </List.Item>

                <List.Item
                  icon={<Notepad variant='32x32_4' />}
                  onClick={() => openWindow('recipesTaboule')}
                >
                  Mama's Taboule Recipe
                </List.Item>

                <List.Item
                  icon={<Progman13 variant='32x32_4' />}
                  onClick={() => openWindow('photos')}
                >
                  Photos
                </List.Item>
              </List>
            }
          />
        </div>
      </div>
      <ImgWindow />
      {openWindows.resume && (
        <Modal
          width='800'
          height='800'
          icon={Mailnews19} // Replace with your resume icon
          title='Resume'
          closeModal={() => closeWindow('resume')}
        >
          <div>
            <button onClick={openResume}>Open in New Tab</button>
            <a href='/Natasha_Resume.pdf' download>
              <button>Download</button>
            </a>
          </div>
          <iframe
            src='/Natasha_Resume.pdf' // Replace with the actual path to your resume PDF
            width='100%'
            height='100%'
            title='resume'
          ></iframe>
        </Modal>
      )}
      {openWindows.biography && (
        <Modal
          width='650'
          height='auto'
          icon={<Explorer100 variant='32x32_4' />}
          title='biography'
          defaultPosition={{ x: 150, y: 200 }}
          closeModal={() => closeWindow('biography')}
          className='custom-modal'
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '2%',
              maxHeight: '600px', // Set the white background height as a percentage
              overflowY: 'auto', // Add a vertical scrollbar when needed
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginTop: '20px',
                }}
              >
                Natasha Iskayne [ tash ]
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                Branding & User Experience designer for ESDC, Government of
                Canada.
              </p>
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
                📍 Ottawa, Canada
              </p>
            </div>
            <div
              style={{
                listStyleType: 'none',
                padding: '5px',
                fontWeight: 'bold',
                fontSize: '18px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {tags.map((tag, index) => (
                  <Tag key={tag} index={index}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '20px', fontWeight: 'bold' }}>About me</p>
            </div>
            <div style={{ fontSize: '20px' }}>
              <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                Hey there 👋🏼 I’m Natasha. I’m an Ottawa based designer
                specializing in brand design, user experience design, and
                illustrations that emphasize functionality, creativity, and
                jubilation.
              </p>
              <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                My professional focus centers around collaborative artistry and
                the joy of exploring various creative avenues. My fascination
                with technology stems from its ability to foster connections,
                empower individuals, and broaden our creative playground. My
                philosophy centers around crafting design products and solutions
                that prioritize the human experience. What drives me is the
                vision of creating meaningful and intuitive experiences that
                cater to the needs and preferences of users.
              </p>
              <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                With a solid background of 5+ years designing and illustrating
                for both the public and private sectors, I hope to co-create
                with curious people who share my passion for creativity,
                community, and culture, and to have fun, of course.
              </p>
              <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                If I'm not practicing my craft, you'll find me catching up on my
                favorite anime, learning some code, running some League of
                Legends, mastering a new language, clumsily practicing some
                latte art, or managing my sticker shop.
              </p>
              <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                Pleased to e-meet you! 😊
              </p>
            </div>
          </div>
        </Modal>
      )}
      {/*IMAGES*/} {/*IMAGES*/} {/*IMAGES*/} {/*IMAGES*/} {/*IMAGES*/}
      {openWindows.image && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='image'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('image')}
        >
          <img
            src='/images/cat.jpg'
            alt='Image'
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.biographyImage && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='me'
          defaultPosition={{ x: 700, y: 300 }}
          closeModal={() => closeWindow('biographyImage')}
        >
          <img
            src='/images/me_sitting_sbux.png'
            alt='Image'
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.MeTash && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='naashka.png'
          defaultPosition={{
            x: window.innerWidth * 0.56,
            y: window.innerHeight * 0.17,
          }}
          closeModal={() => closeWindow('MeTash')}
        >
          <img
            src='/images/DesktopMedia/Me_Tash.png'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.Tired && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='zzzz.jpg'
          defaultPosition={{
            x: window.innerWidth * 0.82,
            y: window.innerHeight * 0.36,
          }}
          closeModal={() => closeWindow('Tired')}
        >
          <img
            src='/images/DesktopMedia/tired.jpg'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.DuoCoffee && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='duo-coffee-made-by-naashka.gif'
          defaultPosition={{
            x: window.innerWidth * 0.7,
            y: window.innerHeight * 0.5,
          }}
          closeModal={() => closeWindow('DuoCoffee')}
        >
          <img
            src='/images/DesktopMedia/duo-coffee-made-by-naashka.gif'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.CuteCat && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='cute_meow_meow.gif'
          defaultPosition={{
            x: window.innerWidth * 0.8,
            y: window.innerHeight * 0.01,
          }}
          closeModal={() => closeWindow('CuteCat')}
        >
          <img
            src='/images/DesktopMedia/cute-cat.gif'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.MeowdyPartner && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='image'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('MeowdyPartner')}
        >
          <img
            src='/images/ArchiveMedia/Meowdy_Partner.jpg'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.SnorlaxEat && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='Me_Core.jpg'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('SnorlaxEat')}
        >
          <img
            src='/images/ArchiveMedia/snorlax-eat.gif'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.DuoXP && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='Duo_XP_by_Naaskha.gif'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('DuoXP')}
        >
          <img
            src='/images/ArchiveMedia/duo-coffee-made-by-naashka.gif'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.babyNaashka && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='baby_naashka.jpg'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('babyNaashka')}
        >
          <img
            src='/images/ArchivePhoots/Baby_Naaskha.png'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.SomethingSuspicious && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='something_suspicious.gif'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('SomethingSuspicious')}
        >
          <img
            src='/images/ArchiveMedia/ichigo_and_jajjangmyun_1.gif'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.worldPeace && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='world_peace.jpg'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('worldPeace')}
        >
          <img
            src='/images/ArchiveMedia/world_peace.png'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.killua && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='world_peace.jpg'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('killua')}
        >
          <img
            src='/images/ArchiveMedia/killua.gif'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.videos && (
        <Modal
          width='300'
          height='200'
          icon={<Progman19 variant='32x32_4' />}
          title='videos'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('videos')}
        >
          {<p></p>}
        </Modal>
      )}
      {openWindows.photos && (
        <Modal
          width='320'
          height='200'
          icon={<Progman13 variant='32x32_4' />}
          title='photos'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('photos')}
        >
          <Grid>
            <Icon
              icon={Wangimg129}
              title='ssense_mtl.jpg'
              onClick={() => openWindow('Ssense')}
            />

            <Icon
              icon={Wangimg129}
              title='those_who_hesitate.jpg'
              onClick={() => openWindow('ThoseWhoHesitate')}
            />
            <Icon
              icon={Wangimg129}
              title='empire_state.jpg'
              onClick={() => openWindow('WhatsGoodNyc')}
            />
            <Icon
              icon={Wangimg129}
              title='streets_is talking.jpg'
              onClick={() => openWindow('StreetsTalking')}
            />
            <Icon
              icon={Wangimg129}
              title='idek.jpg'
              onClick={() => openWindow('Idek')}
            />

            <Icon
              icon={Wangimg129}
              title='happy_girl.jpg'
              onClick={() => openWindow('HappyGirl')}
            />
            <Icon
              icon={Wangimg129}
              title='ski_trip.jpg'
              onClick={() => openWindow('SkiTrip')}
            />
            <Icon
              icon={Wangimg129}
              title='tea time.jpg'
              onClick={() => openWindow('TeaTime')}
            />

            <Icon
              icon={Folder}
              title='ALL PICTURES'
              onClick={() =>
                handleClickLink(
                  'https://tashie0310.wixsite.com/naashka-studio/naashka-gallery'
                )
              }
            />
            {/* <Icon
              icon={Wangimg129}
              title='photo11'
              onClick={() => openWindow('')}
            />
            <Icon
              icon={Wangimg129}
              title='photo12'
              onClick={() => openWindow('')}
            /> */}
          </Grid>
        </Modal>
      )}
      {openWindows.error && (
        <Modal
          width='250'
          height='150'
          icon={<Shell3221 variant='32x32_4' />}
          title='error'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('error')}
        >
          <Icon icon={Confcp118} />

          {
            <p
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '24px',
              }}
            >
              Not Found
            </p>
          }
        </Modal>
      )}
      {
        // ALL PHOTOS FOLDER WINDOWS HERE
      }
      {openWindows.Ssense && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='ssense_mtl.jpg'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('Ssense')}
        >
          <img
            src='/images/PhotosMedia/IMG_4429.jpg'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.ThoseWhoHesitate && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='those_who_hesitate.jpg'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('ThoseWhoHesitate')}
        >
          <img
            src='/images/PhotosMedia/ny_street_trip.png'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.WhatsGoodNyc && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='whats_good_nyc.jpg'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('WhatsGoodNyc')}
        >
          <img
            src='/images/PhotosMedia/naashka_empire_state.png'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.StreetsTalking && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='streets_is_talking.jpg'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('StreetsTalking')}
        >
          <img
            src='/images/PhotosMedia/Ny.png'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.Idek && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='idek.jpg'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('Idek')}
        >
          <img
            src='/images/PhotosMedia/eHHHHHHhhh.png'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.HappyGirl && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='happy_naashka.jpg'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('HappyGirl')}
        >
          <img
            src='/images/PhotosMedia/happy_naashkaa.jpg'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.SkiTrip && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='ski_trip.jpg'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('SkiTrip')}
        >
          <img
            src='/images/PhotosMedia/Ski_Trip_Quebec.jpg'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.TeaTime && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='tea_time.jpg'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('TeaTime')}
        >
          <img
            src='/images/PhotosMedia/Tea_Time.png'
            alt=''
            style={{
              maxWidth: '100%',
              maxHeight: '80%',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Modal>
      )}
      {openWindows.error1 && (
        <Modal
          width='250'
          height='150'
          icon={<Shell3221 variant='32x32_4' />}
          title='error'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('error1')}
        >
          <Icon icon={Confcp118} />

          {
            <p
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '24px',
              }}
            >
              Not Found
            </p>
          }
        </Modal>
      )}
      {openWindows.error2 && (
        <Modal
          width='250'
          height='150'
          icon={<Shell3221 variant='32x32_4' />}
          title='error'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('error2')}
        >
          <Icon icon={Confcp118} />

          {
            <p
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '24px',
              }}
            >
              Not Found
            </p>
          }
        </Modal>
      )}
      {openWindows.archives && (
        <Modal
          width='320'
          height='200'
          icon={<Shell3221 variant='32x32_4' />}
          title='archives'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('archives')}
        >
          <Grid>
            <Icon
              icon={FileText}
              title='LYRICS.txt'
              onClick={() => openWindow('lyrics1')}
            />

            <Icon
              icon={Wangimg129}
              title='Meowdy Partner.jpg'
              onClick={() => openWindow('MeowdyPartner')}
            />
            <Icon
              icon={FileText}
              title='Momas Taboule Recipe.txt'
              onClick={() => openWindow('recipesTaboule')}
            />

            <Icon
              icon={FileText}
              title='Me_Core.jpg'
              onClick={() => openWindow('SnorlaxEat')}
            />

            <Icon
              icon={Wangimg129}
              title='Duo_XP by_Naashka .gif'
              onClick={() => openWindow('DuoXP')}
            />

            <Icon
              icon={Wangimg129}
              title='baby naashka .jpg'
              onClick={() => openWindow('babyNaashka')}
            />
            <Icon
              icon={Wangimg129}
              title='Something_Suspicious.gif'
              onClick={() => openWindow('SomethingSuspicious')}
            />
            <Icon
              icon={FileText}
              title='world peace museum.jpg'
              onClick={() => openWindow('worldPeace')}
            />
            <Icon
              icon={FileText}
              title='Tomato Soup Recipe.txt'
              onClick={() => openWindow('TomatoRecipe')}
            />
            <Icon
              icon={Wangimg129}
              title='KILLUA.GIF'
              onClick={() => openWindow('killua')}
            />
          </Grid>
        </Modal>
      )}
      {openWindows.videoFolder && (
        <Modal
          width='300'
          height='200'
          icon={<Progman19 variant='32x32_4' />}
          title='videos'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('videoFolder')}
        >
          <Grid>
            <Icon
              icon={Progman19}
              title='watch_me.mov'
              onClick={() =>
                handleClickLink('https://www.youtube.com/shorts/F2Ostp99Jj4')
              }
            />
          </Grid>
        </Modal>
      )}
      {/* {openWindows.artwork && (
        <Modal
          width='300'
          height='200'
          icon={<Desk100 variant='32x32_4' />}
          title='artwork'
          defaultPosition={windowPosition}
          closeModal={() =>
            handleClickLink('( https://tashie0310.wixsite.com/naashka-studio )')
          }
        >
          {<p></p>}
        </Modal> */}
      {/* )} */}
      {openWindows.caseStudies && (
        <Modal
          width='300'
          height='200'
          icon={<Syncui120 variant='32x32_4' />}
          title='case studies'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('caseStudies')}
        >
          <Grid>
            <Icon
              icon={Folder}
              title='ALL CASE STUDIES'
              onClick={() =>
                handleClickLink(
                  'https://tashie0310.wixsite.com/naashka-studio/case-studies'
                )
              }
            />
            <Icon
              icon={FileText}
              title='Duolingo Case Study'
              onClick={() =>
                handleClickLink(
                  'https://tashie0310.wixsite.com/naashka-studio/case-studies'
                )
              }
            />
            <Icon
              icon={FileText}
              title='Humane Society Case Study'
              onClick={() =>
                handleClickLink(
                  'https://tashie0310.wixsite.com/naashka-studio/case-studies'
                )
              }
            />
          </Grid>
        </Modal>
      )}
      {openWindows.trash && (
        <Modal
          width='300'
          height='200'
          icon={<RecycleFull variant='32x32_4' />}
          title='trash'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('trash')}
        >
          <Grid>
            <Icon
              icon={FileText}
              title='REMAINING BRAIN CELLS'
              onClick={() => openWindow('error')}
            />
            <Icon
              icon={FileText}
              title='CAT WORLD DOMINATION PLAN'
              onClick={() => openWindow('error1')}
            />
            <Icon
              icon={Gcdef100}
              title='League of Legends'
              onClick={() => openWindow('error2')}
            />

            <Icon
              icon={WindowsExplorer}
              title='KRABBY PATTY SECRET FORUMLA'
              onClick={() => openWindow('error')}
            />
          </Grid>
        </Modal>
      )}
      {openWindows.TomatoRecipe && (
        <Modal
          width='500'
          height='auto'
          icon={<Notepad variant='32x32_4' />}
          title='tomate_soup_recipe.txt'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('TomatoRecipe')}
        >
          {
            <div
              style={{
                backgroundColor: 'white',
                padding: '16px',
                height: '600px',
                overflowY: 'auto',
              }}
            >
              <body style={{ backgroundColor: 'white' }}>
                <h1>Naashka’s Tomato and Feta Cheese Soup</h1>
                <p>Makes a whole big pot 😊</p>

                <h2>Ingredients:</h2>
                <ul>
                  <li>10 Tomatoes</li>
                  <li>5 cans tomato paste</li>
                  <li>Feta Cheese</li>
                  <li>3-4 Packs Fresh Basil</li>
                  <li>5 cloves garlic</li>
                  <li>5 Large onions</li>
                  <li>½ tsp Salt</li>
                  <li>1 tsp Dried Oregano</li>
                  <li>3 tsp Dried Basil</li>
                  <li>Black Pepper</li>
                  <li>2 tsp Honey</li>
                  <li>1 cup Heavy Cream</li>
                  <li>1 Box Veg Stock (Or use your own!)</li>
                  <li>4 TBS Olive Oil or butter</li>
                  <li>4 TBP Pesto Sauce (Will list my recipe below!)</li>
                </ul>

                <h2>Ingredients for Pesto Sauce:</h2>
                <ul>
                  <li>2 cups fresh basil leaves (packed)</li>
                  <li>1/2 cup grated Parmesan cheese</li>
                  <li>1/2 cup extra virgin olive oil</li>
                  <li>
                    1/3 cup pine nuts (can sub with cashews or sunflower seeds
                    for a nut-free pesto!)
                  </li>
                  <li>3 cloves garlic, minced</li>
                  <li>1/4 teaspoon salt, or more to taste</li>
                  <li>
                    1/4 teaspoon freshly ground black pepper, or more to taste
                  </li>
                  <li>1 TSP Honey</li>
                  <li>¼ TSP Lemon</li>
                </ul>

                <ol>
                  <li>
                    Wash about 10 tomatoes, cut off the stems and make a slit
                    into each one. Place in a pot of water to boil.
                  </li>
                  <li>
                    Once the tomatoes are soft, drain them from the pot and
                    rinse off with cold water.
                  </li>
                  <li>
                    Place tomatoes in a blender and blend until they reach a
                    liquid state.
                  </li>
                  <li>
                    Place the blended tomatoes into a large pot (this is what
                    you’ll use for the soup!)
                  </li>
                  <li>
                    Heat olive oil/butter over medium heat in a frying pan and
                    add onion. Cook for 2 minutes.
                  </li>
                  <li>
                    Add the garlic to the pan and cook for another minute.
                  </li>
                  <li>
                    Place the now lightly fried onions and garlic into the soup
                    pot along with the tomatoes.
                  </li>
                  <li>
                    Add 2-3 cups of water, 2 cups of veggie stock, pepper, salt,
                    oregano, and tomato paste to the pot. (Should not be too
                    thick or too watery, add more water/stock if needed).
                  </li>
                  <li>Bring to a boil, then reduce to a simmer.</li>
                  <li>Add sweetener (honey)</li>
                  <li>
                    Cook on Medium heat for 30 minutes until the mixture is well
                    blended and has achieved a smooth consistency.
                  </li>
                  <li>Add the heavy cream and Feta Cheese (crumble it!)</li>
                  <li>Add More salt/pesto/fresh basil if needed.</li>
                  <li>Serve warm with a dinner roll or garlic bread.</li>
                </ol>

                <h2>Basil Pesto Sauce Recipe</h2>
                <p>
                  (Inspired by Elise Baur’s recipe with my own modifications 😊)
                </p>
                <p>
                  <em>
                    Equipment: Food Processor or anything that does the job
                    really
                  </em>
                </p>
                <ul>
                  <li>2 cups fresh basil leaves (packed)</li>
                  <li>1/2 cup grated Parmesan cheese</li>
                  <li>1/2 cup extra virgin olive oil</li>
                  <li>
                    1/3 cup pine nuts (can sub with cashews or sunflower seeds
                    for a nut-free pesto! :D allergy friendly woo)
                  </li>
                  <li>3 cloves garlic, minced.</li>
                  <li>1/4 teaspoon salt, or more to taste</li>
                  <li>
                    1/4 teaspoon freshly ground black pepper, or more to taste.
                  </li>
                  <li>1 TBS Honey</li>
                </ul>

                <ol>
                  <li>
                    Pulse the basil and pine nuts: Place the basil leaves and
                    pine nuts into the bowl of a food processor and pulse
                    several times.
                  </li>
                  <li>
                    Add the cheese and garlic! Add the garlic and Parmesan
                    cheese and pulse a few more times. Scrape down the sides of
                    the food processor with a rubber spatula, you want that even
                    mixture ya know.
                  </li>
                  <li>
                    Gradually Pour in the olive oil: If you can do it while the
                    food processor is running that’s great, it helps the mixture
                    emulsify. But if you’re like me and have a dusty one, you
                    gotta gradually stop pulsing and add a bit of oil at a time!
                    Don’t forget to occasionally scrape down the sides.
                  </li>
                  <li>
                    Time to season your pesto sauce: Add salt and freshly ground
                    black pepper to taste. Add lemon and honey to taste (don’t
                    overdo it with these two!) Pulse.
                  </li>
                  <li>You now have your own pesto 😊</li>
                </ol>
                <p>Enjoy : D</p>
              </body>
            </div>
          }
        </Modal>
      )}
      {openWindows.recipesTaboule && (
        <Modal
          width='500'
          height='auto'
          icon={<Notepad variant='32x32_4' />}
          title='Mamas_Taboule_Recipe.txt'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('recipesTaboule')}
        >
          {
            <div
              style={{
                backgroundColor: 'white',
                padding: '16px',
                height: '600px',
                overflowY: 'auto',
              }}
            >
              <body style={{ backgroundColor: 'white' }}>
                <h1>Mama’s Tabouleh Recipe</h1>
                <p>Good for 4 people! Recipe taken from my mother.</p>

                <h2>Ingredients:</h2>
                <ul>
                  <li>3 large Italian parsley</li>
                  <li>3 Large tomatoes</li>
                  <li>1 bunch green onion</li>
                  <li>Small cooking onion (optional)</li>
                  <li>1 fresh mint bunch</li>
                  <li>Olive oil (based on preference)</li>
                  <li>1 ½ fresh lemon juice</li>
                  <li>1-2 teaspoon dry mint</li>
                  <li>1 Tsp Salt</li>
                  <li>1 tbsp Fine burghul - must be fine, not coarse.</li>
                  <li>
                    Cabbage leaves, cleaned, chopped or romaine lettuce to serve
                    with or without
                  </li>
                  <li>
                    Tiny pinch of black pepper (optional) - my mom doesn’t
                    typically add it but mentioned that this is a popular extra.
                  </li>
                </ul>

                <h2>Steps:</h2>
                <ol>
                  <li>
                    Soak parsley, green onion, fresh mint, and tomatoes in a big
                    bowl of water and a little bit of salt and white vinegar. To
                    clean, eliminate bacteria and allow dirt to sink. Leave them
                    soaking for 20-25 minutes.
                  </li>
                  <li>
                    Wash each piece of vegetable VERY well (greens hold a lot of
                    dirt!)
                  </li>
                  <li>
                    Allow veggies to dry. They must be fully dried prior to
                    chopping.
                  </li>
                  <li>
                    Chop the parsley very finely. Make sure they don’t hold any
                    water.
                  </li>
                  <li>Chop/dice the onion very finely.</li>
                  <li>Pick leaves off fresh mint and finely chop.</li>
                  <li>Next, finely dice the tomatoes.</li>
                  <li>Add all veggies to a large/steep bowl.</li>
                  <li>
                    Mix all the veggies together until everything is evenly
                    dispersed. The parsley should be the main ingredient and
                    mostly present. If you find the ratio is off, add more
                    parsley.
                  </li>
                  <li>Once properly mixed, squeeze 1 lemon into the bowl.</li>
                  <li>Add salt, dry mint, fine burghul. Mix again.</li>
                  <li>
                    Gradually add teaspoons of olive oil. You want the parsley
                    to remain quite dry; you don’t want too much oil. Add as you
                    go. Feel free to add more lemon juice or pepper. Make sure
                    to keep tasting and not add too much!
                  </li>
                  <li>Mix again.</li>
                  <li>
                    Serve with washed lettuce or cabbage leaves or eat with just
                    a spoon.
                  </li>
                </ol>

                <p>Enjoy my mama’s tabouleh recipe 😊</p>

                <h1 dir='rtl'>وصفه التبوله لماما</h1>
                <p dir='rtl'>عدد ٤ اشخاص</p>

                <h2 dir='rtl'>المقادير:</h2>
                <ul dir='rtl'>
                  <li>٤ ضمات بقدونس كبار</li>
                  <li>٣ حبات بندوره كبار</li>
                  <li>١ ضمه بصل اخضر</li>
                  <li>١ بصله زغيره يابسه (اختياري)</li>
                  <li>١ ضمه نعنع</li>
                  <li>زيت زيتون (المقدار حسب الاختيار)</li>
                  <li>١حامضه ونصف</li>
                  <li>١ ملعقه صغيره نعنع يابس</li>
                  <li>١ ملعقه كبيره ملح</li>
                  <li>١ ملعقه كبيره برغل ناعم</li>
                  <li>ورق ملفوف او ورق خس لاكل التبوله (حسب الاختيار)</li>
                  <li>
                    قرصه بسيطه من الفلفل الاسود (اختياري) - امي عادة لا تضيفه
                    ولكنها ذكرت ان هذا شائع.
                  </li>
                </ul>

                <h2 dir='rtl'>الطريقه:</h2>
                <ol dir='rtl'>
                  <li>
                    ينقع البقدونس والبصل الاخضر والنعناع والبندوره في وعاء كبير
                    من الماء ويضاف قليل من الملح والخل الابيض لتنظيف الخضار من
                    الاوساخ وتركهم منقوعين لمده ٢٠ او ٢٥ دقيقه
                  </li>
                  <li>
                    ثم تغسل الخضار ورقه ورقه جيدا لان الخضار يحمل اوساخ كثيره
                  </li>
                  <li>نترك مجال للخضار حتى تنشف جيدا قبل التقطيع</li>
                  <li>
                    نبداء بتقطيع البقدونس ناعما جدا ونتاكد بان البقدونس لا يحمل
                    كثير من الماء اثناء التقطيع
                  </li>
                  <li>تقطع البصل ناعما</li>
                  <li>تاخد اوراق النعناع وتقطعها ناعما</li>
                  <li>واخيرا تقطع البندوره ناعما</li>
                  <li>خلط جميع</li>
                  <li>
                    خلط جميع الخضار مع بعض في جاط كبير ونتاكد بان البقدونس يجب
                    ان يكون هو الاكثر كمية بين الخضار
                  </li>
                  <li>من بعد الخلط اضافه عصير الحامض</li>
                  <li>
                    اضافه الملح والنعناع اليابس والبرغل وخلطهم جيدا ثم اضافه زيت
                    الزيتون حسب الرغبه والاهم ان يبقى خليط البقدونس ناشفا نوعا
                    ما ولا يضاف اليه الكثير من الزيت
                  </li>
                  <li>ثم خلطهم جيدا</li>
                  <li>
                    ويقدمو مع ورق الخس المغسول او ورق الملفوف المغسول او تاكل
                    التبوله بالملعقه.
                  </li>
                </ol>

                <p dir='rtl'>Enjoy my mama’s tabouleh recipe 😊</p>
              </body>
            </div>
          }
        </Modal>
      )}
      {openWindows.contact && (
        <Modal
          width='400'
          height='auto'
          icon={<Phone variant='32x32_4' />}
          title='contact'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('contact')}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '2%',
              maxHeight: '600px', // Set the white background height as a percentage
              overflowY: 'auto', // Add a vertical scrollbar when needed
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            <p style={{ fontSize: '20px' }}>
              Have any questions, or simply want to share the vibe?
              <br />
              I'm always down to chat!
              <br />
              Reach me at <br />
              <br />
              <span style={{ fontWeight: 'bold' }}>
                <a
                  href={`mailto:${emailAddress}`}
                  style={{ color: 'blue', textDecoration: 'underline' }}
                >
                  {emailAddress}
                </a>
              </span>
              <br />
              <br />
              Bonus karma if you include pictures of your pets~
            </p>
          </div>
        </Modal>
      )}
      {openWindows.music && (
        <Modal
          width='300'
          height='200'
          icon={<MediaCd variant='32x32_4' />}
          title='music'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('music')}
        >
          {<p></p>}
        </Modal>
      )}
      {openWindows.fax && (
        <Modal
          width='300'
          height='auto'
          icon={<Awfext326049 variant='32x32_4' />}
          title='fax'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('fax')
        }
        >
          <div
              style={{
                backgroundColor: 'white',
                padding: '0px',
                height: '400px',
                overflowY: 'auto',
                fontSize: '14px'
              }}
            >
            {
                 <ul>
        <li>INFJ</li>
        <li>Polyglot in training</li>
        <li>All around designer</li>
        <li>Tech wizard</li>
        <li>Coffee enthusiast</li>
        <li>Love building PCs</li>
        <li>Professional Multitasker</li>
        <li>Can fix the wifi reset the modem in under 30 seconds</li>
        <li>Volunteered at:</li>
        <ul>
          <li>Animal shelters</li>
          <li>Animation festival</li>
          <li>Aiding at soccer clubs for low income families</li>
          <li>Tutoring assistance to communities facing resource constraints through local centers</li>
        </ul>
        <li>Fav manga: Mushoku Tensei, HxH</li>
        <li>Fav Pokemon: Clefairy, Bulbasaur, Latios</li>
        <li>Best League of Legends Player (Zed Main)</li>
        <li>I collect:</li>
        <ul>
          <li>Manga</li>
          <li>Keyboards</li>
          <li>Perfume</li>
          <li>Lego sets</li>
          <li>Sneakers</li>
          <li>Figures</li>
          <li>Prints</li>
          <li>PC parts</li>
        </ul>
        <li>Learning the piano, guitar, and violin</li>
        <li>Culinary Adventurer</li>
        <li>Tetris Master</li>
        <li>Soccer Player</li>
        <li>Pixel Artist</li>
        <li>Perfectionist</li>
      </ul>
            }
          </div>
        </Modal>
      )}
      {openWindows.blog && (
        <Modal
          width='300'
          height='200'
          icon={<Progman25 variant='32x32_4' />}
          title='Blog'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('blog')}
        >
          <Grid>

          <Icon
              icon={Folder}
              title='All Naashka Articles'
              onClick={() =>
                handleClickLink(
                  'https://tashie0310.wixsite.com/naashka-studio/naashka-blog'
                )
              }
            />

            <Icon
              icon={FileText}
              title='Accessiblity Within Design'
              onClick={() =>
                handleClickLink(
                  'https://tashie0310.wixsite.com/naashka-studio/naashka-blog'
                )
              }
            />
            <Icon
              icon={FileText}
              title='The AI Integrated World'
              onClick={() =>
                handleClickLink(
                  'https://tashie0310.wixsite.com/naashka-studio/naashka-blog'
                )
              }
            />
            <Icon
              icon={FileText}
              title='Design Helping Animals in Need'
              onClick={() =>
                handleClickLink(
                  'https://tashie0310.wixsite.com/naashka-studio/naashka-blog'
                )
              }
            />
          </Grid>
        </Modal>
      )}
      {openWindows.lyrics1 && (
        <Modal
          width='300'
          height='auto'
          icon={<FileText variant='32x32_4' />}
          title='lyrics.txt'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('lyrics1')}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '2%',
              height: '260px', // Set the white background height as a percentage
              overflowY: 'auto', // Add a vertical scrollbar when needed
            }}
          >
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
            <p>Have you ever had the feeling you're drawn to someone? (Yeah)</p>
            <p>And there isn't anything they could have said or done?</p>
            <p>And every day I see you on your own</p>
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
            <p>Have you ever had the feeling you're drawn to someone? (Yeah)</p>
            <p>And there isn't anything they could have said or done?</p>
            <p>And every day I see you on your own</p>
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
            <p>Have you ever had the feeling you're drawn to someone? (Yeah)</p>
            <p>And there isn't anything they could have said or done?</p>
            <p>And every day I see you on your own</p>
            <p>If you tell me where, I'm waiting here</p>
            <p>Everyday like Slumdog Millionaire</p>
            <p>Bigger than the Twilight love affair</p>
            <p>I'll be here, Girl, I swear</p>
            <p>Looking for a, looking for a</p>
            <p>That you're looking for a boyfriend (yeah)</p>
            <p>I see that, give me time, you know I'm gonna be that</p>
            <p>Don't be scared to come put your trust in me</p>
            <p>
              Can't you see all I really want to be is your boyfriend (yeah)
            </p>
            <p>Can't fight that</p>
            <p>Knock me down you know I'm coming right back</p>
            <p>I don't care at all what you've done before</p>
            <p>All I really want is to be your</p>
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
            <p>Your boy boy b-b-b-b-b-boyfriend</p>
          </div>
        </Modal>
      )}
      {openWindows.lyrics2 && (
        <Modal
          width='300'
          height='auto'
          icon={<FileText variant='32x32_4' />}
          title='lyrics2.txt'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('lyrics2')}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '2%',
              height: '260px', // Set the white background height as a percentage
              overflowY: 'auto', // Add a vertical scrollbar when needed
            }}
          >
            <p>Yo te doy lo que quieras</p>
            <p>Yo me voy donde quieras</p>
            <p>Y si me voy</p>
            <p>Quiero que tu amor esté conmigo hoy</p>
            <p>Si me voy</p>
            <p>Yo te doy lo que quieras porque es mi destino</p>
            <p>Soy Por ti, yo soy</p>
            <p>No te agaches y no llores</p>
            <p>Que no quiero verte así</p>
            <p>Esos tiempos no se acaban</p>
            <p>La alegría no es amarga</p>
            <p>Cuéntame lo tuyo</p>
            <p>Siempre llévame a tu mundo</p>
            <p>Yo te doy las llaves</p>
            <p>Acompáñame en mi nave</p>
            <p>Para de pensar, empieza a disfrutar</p>
            <p>Vamos a brindar, pisamos en el mar</p>
            <p>Soon pronto, voy a estar</p>
            <p>De tu lado hasta allá</p>
            <p>No vayas a dudar</p>
            <p>Que soy tuyo hasta el final</p>
            <p>Si me voy</p>
            <p>Quiero que tu amor esté conmigo hoy</p>
            <p>Si me voy</p>
            <p>Yo te doy lo que quieras porque es mi destino</p>
            <p>Soy</p>
            <p>Por ti, yo soy</p>
            <p>Tu risa</p>
            <p>Que me llega a este mar</p>
            <p>Tú me miras</p>
            <p>Y tus ojos me hablan</p>
            <p>Me dices</p>
            <p>"Aunque estés lejos de mí</p>
            <p>No olvides</p>
            <p>Tú me haces tan feliz"</p>
            <p>Yo te doy lo que quieras</p>
            <p>Yo te doy lo que quieras</p>
            <p>Yo me voy donde quieras</p>
            <p>Voy, voy, voy, voy</p>
            <p>Yo te doy lo que quieras</p>
            <p>Yo te doy lo que quieras</p>
            <p>Yo me voy donde quieras</p>
            <p>Voy, voy, voy, voy</p>
          </div>
        </Modal>
      )}
    </ThemeProvider>
  )
}

export default App
