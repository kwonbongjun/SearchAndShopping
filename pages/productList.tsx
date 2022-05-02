import { useCallback } from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; 
import * as counterActions from '../store/modules/counter'; 
import style from '../styles/productionList.module.scss';
import axios from 'axios'
import * as Data from '../util/data';
import Image from 'next/image';
import switchImage from '../assets/switch.png';
import pocketmonBreadImage from '../assets/pocketmon-bread.png';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ProductList() { 
    const dispatch = useDispatch(); 
    const router = useRouter();
    const item: any = router.query.query;
    const products = Data.productList.filter(product => product.name.includes(item));
    const categoriesEl = 
    Data.categories.map(category => {
        return (
            <span 
                className={style.category} key={category.name}
            >
                <a href="/productList">{category.name}</a>
            </span>
        )
    })
    const handleClick = (e, data?: any) => {
        e.preventDefault();
        router.push({
            pathname: '/product', 
            query: {
                ...data
            }
        })
      }
    const productEl = products.map(product => {
        return (
            <div key={product.id} className={style['product-item']}>
                {/* <Link href='/product'> */}
                    <a onClick={(e) => handleClick(e, product)}>
                    <div className={style['product-item-img']}>
                        <Image 
                            src={product.img}
                            // layout='responsive'
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className={style['product-item-info']}>
                        <div className={style['product-item-list']}>
                            {product.name}
                        </div>
                        <div className={style['product-item-list']}>
                            {product.cost}
                        </div>
                    </div>
                    </a>
                {/* </Link> */}
            </div>
        )
    })
    return ( 
    <div className={style['production-container']}> 
        <div className={style.categories}>
            category: {categoriesEl}
        </div>
        <div className={style['production-list']}>
            {productEl}
        </div>
    </div> 
    ); 
}
// export function getData(id) {
//     // Combine the data with the id
//     return {
//       id,
//     }
//   }
// export function getStaticProps({params}) {
//     const postData = getData(params.id)
//     return {
//         props: {
//             postData
//         }
//     }
// }
// export async function getStaticPaths() {
//     const paths = ['50000000'];
//     return {
//       paths,
//       fallback: false
//     }
//   }
