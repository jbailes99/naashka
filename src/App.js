import React, { useState, useEffect } from 'react'
import { TaskBar, List, ThemeProvider, GlobalStyle, Modal } from '@react95/core'
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
  '#FF5733',
  '#33FF57',
  '#5733FF',
  '#FF336E',
  '#6EFF33',
  '#336EFF',
  '#FFB533',
  '#33FFB5',
  '#B533FF',
  '#FF3357',
  '#57FF33',
  '#3357FF',
  '#FF33B5',
  '#B5FF33',
  '#33B5FF',
]

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
    imageDesktop2: true,
    imageDesktop1: true,
    imageDesktop: true,
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

        <Desktop>
          <BiographyIcon openWindow={openWindow} />
          <ResumeIcon openWindow={openWindow} />
          <ArtworkIcon openWindow={openWindow} />
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
                  onClick={() => openWindow('error')}
                >
                  Tomato Soup Recipe
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
      {/* <Test /> */}
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

      {openWindows.image1 && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='image'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('image1')}
        >
          <img
            src='/images/cat1.jpg'
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

      {openWindows.imageDesktop2 && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='naashka.png'
          defaultPosition={{
            x: 1250,
            y: 200,
          }}
          closeModal={() => closeWindow('imageDesktop2')}
        >
          <img
            src='/images/Me_Tash.png'
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

      {openWindows.imageDesktop1 && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='duo-coffee-made-by-naashka.gif'
          defaultPosition={{ x: 1500, y: 500 }}
          closeModal={() => closeWindow('imageDesktop1')}
        >
          <img
            src='/images/duo-coffee-made-by-naashka.gif'
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

      {openWindows.imageDesktop && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='cute_meow_meow.gif'
          defaultPosition={{ x: 1600, y: 20 }}
          closeModal={() => closeWindow('imageDesktop')}
        >
          <img
            src='/images/cute-cat.gif'
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

      {openWindows.image2 && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='image'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('image2')}
        >
          <img
            src='/images/cat1.jpg'
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
      {openWindows.image3 && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='my_cats.jpg'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('image3')}
        >
          <img
            src='/images/cat1.jpg'
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
      {openWindows.image4 && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='menace.jpg'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('image4')}
        >
          <img
            src='/images/cat1.jpg'
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
      {openWindows.image5 && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='click_me.png'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('image5')}
        >
          <img
            src='/images/cat1.jpg'
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
      {openWindows.image6 && (
        <Modal
          width='auto'
          height='auto'
          icon={<Wangimg129 variant='32x32_4' />}
          title='killua.gif'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('image6')}
        >
          <img
            src='/images/killua.gif'
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
          closeModal={() => closeWindow('archives')}
        >
          {<p></p>}
        </Modal>
      )}
      {openWindows.photos && (
        <Modal
          width='300'
          height='200'
          icon={<Progman13 variant='32x32_4' />}
          title='photos'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('photos')}
        >
          <Grid>
            <Icon
              icon={Wangimg129}
              title='my image.png'
              onClick={() => openWindow('image1')}
            />

            <Icon
              icon={Wangimg129}
              title='my image.jpg'
              onClick={() => openWindow('error')}
            />
            {/* <Icon
              icon={Wangimg129}
              title='photo3'
              onClick={() => openWindow('')}
            />
            <Icon
              icon={Wangimg129}
              title='photo4'
              onClick={() => openWindow('')}
            />
            <Icon
              icon={Wangimg129}
              title='photo5'
              onClick={() => openWindow('')}
            />

            <Icon
              icon={Wangimg129}
              title='photo6'
              onClick={() => openWindow('')}
            />
            <Icon
              icon={Wangimg129}
              title='photo7'
              onClick={() => openWindow('')}
            />
            <Icon
              icon={Wangimg129}
              title='photo8'
              onClick={() => openWindow('')}
            />
            <Icon
              icon={Wangimg129}
              title='photo9'
              onClick={() => openWindow('')}
            />

            <Icon
              icon={Wangimg129}
              title='photo10'
              onClick={() => openWindow('')}
            />
            <Icon
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
          {/* Include your image gallery here */}
          {/* <ul class='image-gallery'>
            <li>
              <img
                src='/cat1.jpg'
                alt='Image 1'
                style={{ width: '25%', height: 'auto' }}
              />
            </li>

            <li>
              <img
                src='/cat.jpg'
                alt='Image 1'
                style={{ width: '25%', height: 'auto' }}
              />
            </li> */}
          {/* <li>
              <img
                src='/cat2.jpg'
                alt='Image 3'
                style={{ width: '25%', height: 'auto' }}
              />
            </li> */}
          {/* Add more images as needed */}
          {/* </ul> */}
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
          width='300'
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
              title='My cats getting along.jpg'
              onClick={() => openWindow('image3')}
            />
            <Icon
              icon={FileText}
              title='MORE LYRICS.txt'
              onClick={() => openWindow('lyrics2')}
            />
            <Icon
              icon={FileText}
              title='Momas Taboule Recipe.txt'
              onClick={() => openWindow('recipesTaboule')}
            />

            <Icon
              icon={Wangimg129}
              title='KILLUA.GIF'
              onClick={() => openWindow('image6')}
            />
            <Icon
              icon={Wangimg129}
              title='click me.png'
              onClick={() => openWindow('image5')}
            />
            <Icon
              icon={Wangimg129}
              title='the menace.jpg'
              onClick={() => openWindow('image4')}
            />
            <Icon
              icon={FileText}
              title='Tomato Soup Recipe.txt'
              onClick={() => openWindow('recipes')}
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

      {openWindows.artwork && (
        <Modal
          width='300'
          height='200'
          icon={<Desk100 variant='32x32_4' />}
          title='artwork'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('artwork')}
        >
          {<p></p>}
        </Modal>
      )}
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
              title='case studies'
              onClick={() => handleClickLink()}
            />
            <Icon
              icon={FileText}
              title='case study 1'
              onClick={() => handleClickLink()}
            />
            <Icon
              icon={FileText}
              title='case study 2'
              onClick={() => handleClickLink()}
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
      {openWindows.recipes && (
        <Modal
          width='300'
          height='auto'
          icon={<Notepad variant='32x32_4' />}
          title='recipes'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('recipes')}
        >
          {
            <div
              style={{
                backgroundColor: 'white',
                padding: '16px',
                height: '260px',
                overflowY: 'auto',
              }}
            >
              <ul>
                <li>
                  Heat 2 tablespoons of olive oil in a large pot over medium
                  heat.
                </li>
                <li>
                  Add 1 chopped onion and sauté until translucent (about 5
                  minutes).
                </li>
                <li>
                  Sauté 2 cloves of minced garlic for 30 seconds to 1 minute.
                </li>
                <li>
                  Pour in 2 cans (28 ounces each) of diced tomatoes and 1 can
                  (14 ounces) of tomato sauce.
                </li>
                <li>Stir in 2 cups of vegetable or chicken broth.</li>
                <li>Optional: Add 1 teaspoon of sugar to balance acidity.</li>
                <li>
                  Season with 1 teaspoon of dried basil, 1 teaspoon of dried
                  oregano, salt, and pepper to taste. Mix well.
                </li>
                <li>
                  Bring to a boil, then reduce heat, cover, and simmer for 15-20
                  minutes.
                </li>
                <li>
                  If desired, add 1/2 cup of heavy cream for a creamy texture.
                  Heat through, but do not boil.
                </li>
              </ul>
            </div>
          }
        </Modal>
      )}

      {openWindows.recipesTaboule && (
        <Modal
          width='300'
          height='auto'
          icon={<Notepad variant='32x32_4' />}
          title='recipes'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('recipesTaboule')}
        >
          {
            <div
              style={{
                backgroundColor: 'white',
                padding: '16px',
                height: '260px',
                overflowY: 'auto',
              }}
            >
              <ul>
                <li>1 cup bulgur wheat</li>
                <li>2 cups boiling water</li>
                <li>3 cups finely chopped fresh parsley</li>
                <li>1 cup finely chopped fresh mint leaves</li>
                <li>2 medium tomatoes, finely chopped</li>
                <li>1/2 cup finely chopped green onions (about 4)</li>
                <li>1/4 cup finely chopped red onion</li>
                <li>1 cucumber, finely chopped</li>
                <li>1/4 cup extra-virgin olive oil</li>
                <li>1/4 cup fresh lemon juice (about 2 lemons)</li>
                <li>Salt and freshly ground black pepper to taste</li>
              </ul>
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
          height='200'
          icon={<Awfext326049 variant='32x32_4' />}
          title='fax'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('fax')}
        >
          <div
            style={{
              padding: '2%',
              maxHeight: '600px', // Set the white background height as a percentage
              overflowY: 'auto', // Add a vertical scrollbar when needed
            }}
          >
            {
              <p
                style={{
                  textAlign: 'center',
                  marginBottom: '10px',
                  fontWeight: 'bold',
                  fontSize: '24px',
                }}
              >
                👷 Under Construction 👷
              </p>
            }
          </div>
        </Modal>
      )}
      {openWindows.blog && (
        <Modal
          width='300'
          height='200'
          icon={<Progman25 variant='32x32_4' />}
          title='blog'
          defaultPosition={windowPosition}
          closeModal={() => closeWindow('blog')}
        >
          <Grid>
            <Icon
              icon={Folder}
              title='NAASHKA BLOG'
              onClick={() => handleClickLink()}
            />
            <Icon
              icon={FileText}
              title='blog title 1'
              onClick={() => handleClickLink()}
            />
            <Icon
              icon={FileText}
              title='blog title 2'
              onClick={() => handleClickLink()}
            />
          </Grid>
        </Modal>
      )}

      {openWindows.lyrics1 && (
        <Modal
          width='300'
          height='auto'
          icon={<FileText variant='32x32_4' />}
          title='artwork'
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
            <p>
              <p>Your boy boy b-b-b-b-b-boyfriend</p>
              <p>Your boy boy b-b-b-b-b-boyfriend</p>
              <p>Your boy boy b-b-b-b-b-boyfriend</p>
              <p>Your boy boy b-b-b-b-b-boyfriend</p>
              <p>
                Have you ever had the feeling you're drawn to someone?(Yeah)
              </p>
              <p>And there isn't anything they could have said or done?</p>
              <p>And every day I see you on your own</p>
              <p>Your boy boy b-b-b-b-b-boyfriend</p>
              <p>Your boy boy b-b-b-b-b-boyfriend</p>
              <p>Your boy boy b-b-b-b-b-boyfriend</p>
              <p>Your boy boy b-b-b-b-b-boyfriend</p>
              <p>
                Have you ever had the feeling you're drawn to someone?(Yeah)
              </p>
              <p>And there isn't anything they could have said or done?</p>
              <p>And every day I see you on your own</p>
              <p>Your boy boy b-b-b-b-b-boyfriend</p>
              <p>Your boy boy b-b-b-b-b-boyfriend</p>
              <p>Your boy boy b-b-b-b-b-boyfriend</p>
              <p>Your boy boy b-b-b-b-b-boyfriend</p>
              <p>
                Have you ever had the feeling you're drawn to someone?(Yeah)
              </p>
              <p>And there isn't anything they could have said or done?</p>
              <p>And every day I see you on your own</p>
            </p>
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
