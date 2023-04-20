import '@/components/Menu/menu.component.scss'

import { ReactComponent as Dropdown } from '@/assets/icons/dropdown.svg'
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import axios from '@/api/axios'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

function MenuHeader() {
  const items = [
    {
      id: 1,
      link: '/',
      title: 'Trang Chủ',
    },
    {
      id: 2,
      link: '/',
      title: 'Đi Chợ',
    },

    {
      id: 3,
      link: '/',
      title: 'Liên Hệ',
    },
  ]

  const [anchorEl, setAnchorEl] = React.useState(null)
  //another anchorEl
  const [anchorEl2, setAnchorEl2] = React.useState(null)

  const [categories, setCategories] = useState([])
  const [selectedItemId, setSelectedItemId] = useState(1)

  const open = Boolean(anchorEl)
  const open2 = Boolean(anchorEl2)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClose2 = () => {
    setAnchorEl2(null)
  }

  const navigate = useNavigate()

  const handleClickHomePage = () => {
    setSelectedItemId(item.id)
    navigate('/')
  }

  useEffect(() => {
    axios
      .get('/category/all')
      .then((res) => {
        setCategories(res.data)
      })

      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <ul className="menu">
      {items.map((item) => (
        <li
          key={item.id}
          className={`menu--item ${item.id === 1 ? 'active' : ''}`}
          onClick={() => {
            if (item.id === 1) {
              handleClickHomePage()
            } else if (item.id === 3) {
            }
          }}
        >
          {item.id === 2 ? (
            <div>
              <div
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                Đi chợ
                <KeyboardArrowDownIcon />
              </div>
              <Menu
                id="long-menu"
                MenuListProps={{
                  'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    width: '20ch',
                    marginTop: '10px',
                  },
                }}
              >
                {categories.map((category) => (
                  <MenuItem key={category.categoryId} onClick={handleClose}>
                    {category.categoryName}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          ) : item.id === 3 ? (
            <div>
              <div
                aria-label="more"
                id="short-button"
                aria-controls={open2 ? 'short-menu' : undefined}
                aria-expanded={open2 ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick2}
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                Liên hệ
                <KeyboardArrowDownIcon />
              </div>

              <Menu
                id="short-menu"
                MenuListProps={{
                  'aria-labelledby': 'short-button',
                }}
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose2}
                PaperProps={{
                  style: {
                    width: '450px',
                    marginTop: '10px',
                    padding: '10px',
                  },
                }}
              >
                <div className="menu--dropdown" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div>
                    <strong style={{ fontWeight: '700' }}>Email:</strong> freshveg@gmail.com
                  </div>
                  <div>
                    <strong style={{ fontWeight: '700' }}>Điện thoại:</strong> 09249494
                  </div>
                  <div>
                    <strong style={{ fontWeight: '700' }}>Email:</strong>: Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng
                    550000
                  </div>
                  <div>
                    <strong style={{ fontWeight: '700' }}>Hotline:</strong>: 1900 1080
                  </div>
                </div>
              </Menu>
            </div>
          ) : (
            <a href={item.link}>{item.title}</a>
          )}
        </li>
      ))}
    </ul>
  )
}

export default MenuHeader
