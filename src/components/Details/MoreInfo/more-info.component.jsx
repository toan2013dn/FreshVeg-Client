import './more-info.styles.scss'

import React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

function MoreProductInfo({ content }) {
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="more-info">
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab label="Thông Tin Sản Phẩm" value="1" />
              <Tab label="Miễn Phí Vận Chuyển" value="2" />
              <Tab label="Cái Chi Đó" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">{content.description}</TabPanel>
          <TabPanel value="2">
            <ul>
              <li>
                Để tri ân quý khách hàng đã luôn tin tưởng và sử dụng sản phẩm của chúng tôi, chúng tôi xin gửi đến quý
                khách chương trình freeship đặc biệt.
              </li>
              <li>
                Khi quý khách đặt hàng trên fanpage của chúng tôi, quý khách sẽ được tặng kèm dịch vụ{' '}
                <span style={{ fontSize: '16px', color: '#4caf50', fontWeight: '700' }}>giao hàng miễn phí</span>.
              </li>
              <li>Chúng tôi cam kết sẽ giao hàng tận nơi đến tất cả các khu vực trên địa bàn Việt Nam.</li>
              <li>
                Cảm ơn quý khách hàng đã đồng hành cùng chúng tôi và mong nhận được sự ủng hộ của quý khách hàng trong
                thời gian tới.
              </li>
            </ul>
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  )
}

export default MoreProductInfo
