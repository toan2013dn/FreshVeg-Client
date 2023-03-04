import './socialmedia-sharing.styles.scss'

import { FacebookShareButton, TwitterShareButton, InstapaperShareButton } from 'react-share'
import { ReactComponent as Facebook2 } from '@/assets/icons/Facebook2.svg'
import { ReactComponent as Twitter } from '@/assets/icons/Twitter.svg'
import { ReactComponent as Telegram } from '@/assets/icons/Telegram.svg'
import { Link } from 'react-router-dom'
import React from 'react'

function SocialMediaSharing() {
  const url = window.location.href
  return (
    <div className="social-media">
      <h4 className="social-media--text">Chia sẻ qua: </h4>

      <div className="share">
        <FacebookShareButton quote="ogjeogjeog" hashtag="#toandeptrai" url="https://github.com">
          <Facebook2 />
        </FacebookShareButton>

        <TwitterShareButton quote="ogjeogjeog" hashtag="#toandeptrai" url="https://github.com">
          <Twitter />
        </TwitterShareButton>

        <InstapaperShareButton quote="ogjeogjeog" hashtag="#toandeptrai" url="https://github.com">
          <Telegram />
        </InstapaperShareButton>
      </div>
    </div>
  )
}

export default SocialMediaSharing
