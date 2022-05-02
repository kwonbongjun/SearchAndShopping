import styles from "../styles/main.module.scss";
import Image from 'next/image';
import switchImage from '../assets/switch.png';
import pocketmonBreadImage from '../assets/pocketmon-bread.png';
import * as Data from '../util/data';
import { useRouter } from 'next/router'
// 쇼핑몰
// 메인 이름 
// 할인 인기 광고(이벤트)
// 내용
// 상세정보
// 리뷰
export default function Main() { 
    const router = useRouter();
    const handleClick = (e, data) => {
        e.preventDefault();
        router.push({
            pathname: '/product', 
            query: {
                ...data
            }
        })
    }
    const saleList = 
    Data.saleList.map(saleItem => {
        return (
            <a key={saleItem.id} onClick={(e) => handleClick(e,saleItem)}>
                <Image 
                    src={saleItem.img}
                    // layout='responsive'
                    width={500}
                    height={500}
                />
                <div>{saleItem.name}</div>
                <span className={styles['prev-cost']}>{saleItem.prevCost}</span>
                <span>{saleItem.cost}</span>
            </a>
        )
    })

    const advertisementEl = 
    Data.advertisementList.map(saleItem => {
        return (
            <a key={saleItem.id} onClick={(e) => handleClick(e,saleItem)}>
                <Image 
                    src={saleItem.img}
                    // layout='responsive'
                    width={500}
                    height={500}
                />
                <div>{saleItem.name}</div>
            </a>
        )
    })

    return ( 
        <>
            <div className={styles['left-contents']}>
                <div className={styles['main-img']}>
                    <div>
                        할인중
                    </div>
                    {saleList}
                </div>
            </div>
            <div className={styles['left-contents']}>
                <div className={styles['main-img']}>
                    <div>
                        [광고]
                    </div>
                    {advertisementEl}
                </div>
            </div>
        </>
    ); 
}