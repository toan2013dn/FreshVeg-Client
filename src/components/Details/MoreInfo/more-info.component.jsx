import './more-info.styles.scss'

import React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

function MoreProductInfo() {
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab label="Thông Tin Sản Phẩm" value="1" />
              <Tab label="Cái Chi Đó" value="2" />
              <Tab label="Cái Chi Đó" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and
            scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will
            always be one of my favorites.
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
      <div className="line"></div>
    </div>
  )
}

export default MoreProductInfo
