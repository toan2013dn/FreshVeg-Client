import axios from 'axios'
import { useState, useEffect } from 'react'

function Test() {
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)
  const [list, setList] = useState([])

  const handleIncreaseA = () => {
    setCountA(countA + 1)
  }

  const handleIncreaseB = () => {
    setCountB(countB + 2)
  }

  const handelClick = () => {
    // axios
    //   .get('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => {
    //     console.log(response.data)
    //   })
    //   .catch((err) => {
    //     console.log('Looix')
    //   })
    axios
      .post('https://jsonplaceholder.typicode.com/post')
      .then((response) => {
        // console.log(response)
      })
      .catch((err) => {
        console.log('err')
      })
  }

  useEffect(() => {
    let ignore = false
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!ignore) {
          setTimeout(() => {
            setList(response.data)
          }, 5000)
        }
      })
      .catch((err) => {
        console.log('err')
      })

    // clean up function
    return () => {
      ignore = true
    }
  }, [])

  // TH1: ko truyền thêm [], sẽ chạy khi component hắn re-render
  // useEffect(() => {
  //   console.log('re-render')
  // })

  // TH2: truyền [], sẽ chỉ chạy 1 lần khi lần đầu render xong
  // useEffect(() => {
  //   console.log('render')
  // }, [])

  // TH3: truyền [] với state, sẽ chạy khi mà dependency thay đổi
  // useEffect(() => {
  //   console.log('b thay doi')
  // }, [countB])

  return (
    <div>
      {list.length > 0 ? (
        <>
          {list.map((person, index) => (
            <div key={index}>{person.name}</div>
          ))}
        </>
      ) : (
        <div>...is loading</div>
      )}
    </div>
  )
}

export default Test
