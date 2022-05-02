import { useCallback, useEffect, useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; 
import * as counterActions from '../store/modules/counter'; 
import style from '../styles/product.module.scss';
import axios from 'axios'
import * as Data from '../util/data';
import Image from 'next/image';
import switchImage from '../assets/switch.png';
import img from '../assets/pocketmon-bread.png';
import { useRouter } from 'next/router'
import { Dropdown, Button } from "react-bootstrap";
import WriteModal from '../components/WriteModal';

//구매
//상품선택
//구매하기
//장바구니
//액수

//제품정보
//평점
//리뷰

export default function Product() { 
    const router = useRouter()
    const item = router.query;
    // const [product , setProduct]: any = useState();
    const product = Data.productList.find(product => product.id === item.id);
    const [review, setReviews] = useState([]);
    const [reviewEl, setReviewsEl] = useState([]);
    // const product = Data.productList.find(product => product.id === item.id);
    const p = Data.productList.find(product => product.id === item.id);
    // const [productList, setProductList] = useState(p.reviews);

    const [selectedProductList, setSelectedProductList] = useState([]);
    const [cost, setCost] = useState(0);
    const selectProduct = (product) => {
        if (! selectedProductList.find(item => item.id === product.id)) {
            selectedProductList.push(product);
            setCost(cost + product.cost);
        }
    };
    const removeProduct = (i, product: any) => {
        selectedProductList.splice(i,1);
        setCost(cost - product.cost);
    }
    useEffect(() => {
        if (product)
    setReviews(product.reviews);
    function dateToDateStr(date: Date) {
        let str = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
        return str;
    }
    let reviewEle = product? product.reviews.map(product => {
        return (
            <div key={product.id} className={style['product-item']}
                onClick={() => {}}
            >
                <div>
                    <span className={style['product-item-review-info']}>
                        {product.rate}
                    </span>
                    <span className={style['product-item-review-info']}>
                        {product.id}
                    </span>
                    <span className={style['product-item-review-info']}>
                        {dateToDateStr(product.date)}
                    </span>
                </div>
                <div>
                    {product.review}
                </div>
                <div className={style['product-review-item']}></div>
            </div>
        )
    }): [];
    setReviewsEl(reviewEle);
    }, [product])
    const onCallback = async (data) => {
        // console.log(data);
        product.reviews.push(data);
        setReviews(product.reviews);
        const myLoader = ({ src, width, quality }) => {
            return `https://example.com/${src}?w=${width}&q=${quality || 75}`
          }
          
        let reviewEl = product? product.reviews.map(product => {
            return (
                <div key={product.id} className={style['product-item']}
                    onClick={() => {}}
                >
                    <div>
                        <span className={style['product-item-review-info']}>
                            {product.rate}
                        </span>
                        <span className={style['product-item-review-info']}>
                            {product.id}
                        </span>
                        <span className={style['product-item-review-info']}>
                            {product.date.toString()}
                        </span>
                    </div>
                    <div>
                        {product.review}
                    </div>
                        {
                            product.img &&
                            <div id={`product_img_${product.id}`}>
                                {/* {`${getImg(product.id)}`} */}
                            </div>
                        }
                    <div className={style['product-review-item']}></div>
                </div>
            )
        }): [];
        setReviewsEl(reviewEl);
        // function getImg(productId) {
            // if (productId === data.id) {
                // const img: any = document.createElement("img");
                // img.file = data.img[0].file;
                // const preview = document.querySelector(`#product_img_${product.id}`);
                // console.log(preview);
                // preview.appendChild(img); // "preview"가 결과를 보여줄 div 출력이라 가정.
            
                // const reader = new FileReader();
                // reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
                // reader.readAsDataURL(data.img[0].file);
                // img.src = window.URL.createObjectURL(data.img[0].file).replace('blob:','');
                // return data.img[0].file;
            // }
                
        // }
        
    }
    useEffect(() => {
        if (product) {
            product.reviews.forEach(data => {
                if (data.img) {
                    const img: any = document.createElement("img");
                    img.width = 100;
                    img.height = 100;
                    // img.file = data.img[0].file;
                    const preview = document.querySelector(`#product_img_${data.id}`);
                    if (preview) {
                        preview.appendChild(img); // "preview"가 결과를 보여줄 div 출력이라 가정.
                
                        const reader = new FileReader();
                        reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
                        reader.readAsDataURL(data.img[0].file);
                    }
                }
            })
            const totRateEl = product?product.totRate: undefined
            let totRate = 2.9;
          
            makeStars(totRate);
        }
    },[reviewEl])
    const productEl = product? product.items.map(product => {
        return (
            <Dropdown.Item key={product.id} className={style['product-item']}
                onClick={() => selectProduct(product)}
            >
                {product.name}
            </Dropdown.Item>
        )
    }): [];
    const selectedProductEl = selectedProductList.map((product, i) => {
        return (
            <div key={product.id} className={style['product-item']}
                onClick={() => {}}
            >
                {product.name} 
                <span onClick={() => removeProduct(i, product)}>
                    <i className={`fa-solid fa-xmark ${style['close']}`}></i>
                </span>
            </div>
        )
    });
    function makeStars(totRate) {
        let num = Math.floor(totRate);
        let remain = +totRate.toFixed(1) - Math.floor(totRate);
        const starEl = Array.from(Array(5)).map((arr,i) => {
            let icon = style['icon-default'];
            if ( i <= num - 1) {
                icon = style['icon-yellow'];
                if (i === num - 1) {
                    icon = style['icon-part'];
                }
            }
            return <span><i className={`fa-solid fa-star ${icon}`}></i></span>
        })
        console.log(totRate, starEl);
        return starEl;
    }
    function ratingToPercent(product) {
        if (! product)
            return;
        const score = product.totRate * 20;
        return score;
   }
    return (
        <div className={style.product}>
            <div className={style['product-header']}>
                <div className={style['product-header-img-wrapper']}>
                    <div className={style['product-header-img']}>
                        <Image
                            src={img}
                            // layout='responsive'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
                <div className={style['product-header-pay-container']}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">    
                            상품선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {productEl}
                        </Dropdown.Menu>
                        {selectedProductEl}
                    </Dropdown>
                    <div>
                        총액: {cost}
                    </div>
                    <span>
                        <Button variant="primary">장바구니</Button>{' '}
                    </span>
                    <span>
                        <Button variant="secondary">구매하기</Button>{' '}
                    </span>
                </div>
            </div>
            <div className={style['product-line']}></div>
            <div className={style['product-main']}>
                <div className={style['product-main-info']}>
                    <div>상세설명</div>
                    <Image 
                        src={img}
                        // layout='responsive'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            <div className={style['product-line']}></div>
            <div className={style['product-footer']}>
                <div className={style['product-review-write']}>
                    {
                        product &&
                        <WriteModal productId={`${product.id}`} onCallback={onCallback}></WriteModal>
                    }
                </div>
                <div className={style['product-tot-rate']}>
                    평점
                    <div className={style['star-ratings']}>
                        <div 
                            className={style[`star-ratings-fill`]}
                            style={{ width: `${ratingToPercent(product)}` + '%' }}
                        >
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <div className={style['star-ratings-base']}>
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                    </div>
                    {/* 평점: {product?makeStars(product.totRate): undefined} */}
                </div>
                <div  className={style['product-tot-rate']}>
                    리뷰
                </div>
                <div className={style['product-footer-reviews']}>
                    {reviewEl}
                </div>
            </div>
        </div>
    )
}

// export function getData(id) {
//     // Combine the data with the id
//     return {
//       id,
//     }
//   }
// export async function getStaticProps(context) {
//     console.log(context.params); // return { title: 'Mortal Kombat' }
//     return {
//       props: {}, // will be passed to the page component as props
//     }
// } 
// export async function getStaticPaths() {
//     const paths = ['productList', 'product','a','b','c'];
//     return {
//       paths,
//       fallback: false
//     }
//   }
