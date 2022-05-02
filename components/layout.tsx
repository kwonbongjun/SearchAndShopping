import styles from "../styles/main.module.scss";
import { Dropdown, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'

export default function Layout({ children }) {
  // const [inputSearch, setInputSearch] = useState();
  const [text, setText] = useState('');
  const router = useRouter();

  const onChange = (event) => {
    setText(event.target.value);
  }
  const search = () => {
    router.push({
      pathname: '/productList', 
      query: {
          query: text,
      }
    })
  }
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  }
  return (
    <div className={styles.main}> 
        <div className={styles.header}>
          <span className={styles.category}>
              <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">    
                      <i className="fa-solid fa-bars"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                      <Dropdown.Item href="/productList/50000167">여성 패션</Dropdown.Item>
                      <Dropdown.Item href="/productList/50000001">남성 패션</Dropdown.Item>
                      <Dropdown.Item href="/productList/50000002">가구/인테리어</Dropdown.Item>
                      <Dropdown.Item href="/productList">화장품/미용</Dropdown.Item>
                      <Dropdown.Item href="/productList">식품</Dropdown.Item>
                      <Dropdown.Item href="/productList">출산/유아동</Dropdown.Item>
                      <Dropdown.Item href="/productList">반려동물용품</Dropdown.Item>
                      <Dropdown.Item href="/productList">생활/주방용품</Dropdown.Item>
                      <Dropdown.Item href="/productList">가전</Dropdown.Item>
                      <Dropdown.Item href="/productList">디지털</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
          </span>
          <span className={styles.title}><a href="/">봉준의 쇼핑몰</a></span>
          <span className={styles.search}>
              <input type="text" onChange={onChange} onKeyPress={onKeyPress}/>
              <Button variant="primary" onClick={search} className={`${styles['search-icon-btn']}`}>
                <i className={`fa-solid fa-magnifying-glass ${styles['search-icon']}`}></i>
              </Button>
          </span>
          <span className={styles.analysis}>
            <Button variant="primary" href="/analysis">쇼핑데이터 분석</Button>
          </span>
      </div>
      <div className={styles.contents}>{children}</div>
      <div className={styles.footer}>
          <div className={styles['footer-license']}>
              Copyright © (주)봉준 Corp. All Rights Reserved.
          </div>
      </div>
    </div>
  )
}