import './contact.styles.scss'

import ContactImage from '@/assets/images/contact-img.jpg'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

function Contact() {
  return (
    <div className="contact">
      <div className="contact__content">
        <div className="contact__content-image">
          <img src={ContactImage} alt="contact" />
        </div>
        <div className="contact__content-text">
          <h3 style={{ textTransform: 'uppercase' }}>Bạn gặp vấn đề về sản phẩm?</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <h4>Hãy liên hệ với chúng tôi để được giải đáp mọi thắc mắc của bạn.</h4>
            <h4>Chúng tôi luôn sẵn sàng hỗ trợ bạn.</h4>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <h4>
              <LocalPhoneOutlinedIcon />
            </h4>
            <h4>09249494</h4>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <h4>
              <EmailOutlinedIcon />
            </h4>
            <h4>freshveg@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
