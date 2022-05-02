import img from '../assets/switch.png';
import switchImage from '../assets/switch.png';
import pocketmonBreadImage from '../assets/pocketmon-bread.png';

export const categories = [
{
    id: '50000167',
    name: '여성 패션'
},
{
    id: '50000001',
    name: '남성 패션'
},
{
    name: '가구/인테리어'
},
{
    name: '화장품/미용'
},
{
    name: '식품'
},
{
    name: '출산/유아동'
},
{
    name: '반려동물용품'
},
{
    name: '생활/주방용품'
},
{
    name: '가전'
},
{
    name: '디지털'
}];
export const productList = [
    {
        id: '1',
        category: '50000167',
        name: '스위치',
        img: img,
        cost: 300000,
        items: [{
            id: '11',
            name: '스위치 + 아르세우스',
            cost: 350000,
            img: img,
        }, {
            id: '12',
            name: '스위치 + 동물의숲',
            cost: 330000,
            img: img,
        }
        ],
        totRate: 3.6,
        reviews: [{
            id: '1',
            userId: 'a',
            rate: 4,
            review: '좋습니다.',
            date: new Date(),
            img: undefined
        },{
            id: '2',
            userId: 'a',
            rate: 5,
            review: '좋습니다.',
            date: new Date(),
            img: undefined
        },
        ]
    },
    {
        id: '2',
        category: '50000001',
        name: '스위치',
        img: img,
        cost: '300,000원',
        items: [{
            id: '11',
            name: '스위치 + 아르세우스',
            cost: '350,000원',
            img: img,
        }, {
            id: '12',
            name: '스위치 + 동물의숲',
            cost: '330,000원',
            img: img,
        }
        ],
        totRate: 4,
        reviews: [{
            id: '1',
            userId: 'a',
            rate: 4,
            review: '좋습니다.'
        },{
            id: '2',
            userId: 'a',
            rate: 5,
            review: '좋습니다.'
        },
        ]
    },
]
export const saleList = [
    {
        id: '1',
        name: '스위치',
        img: img,
        prevCost: '350000',
        cost: '300,000원',
        items: [{
            id: '11',
            name: '스위치 + 아르세우스',
            cost: '350,000원',
            img: img,
        }, {
            id: '12',
            name: '스위치 + 동물의숲',
            cost: '330,000원',
            img: img,
        }
        ],
        totRate: 4,
        reviews: [{
            id: '1',
            userId: 'a',
            rate: 4,
            review: '좋습니다.'
        },{
            id: '2',
            userId: 'a',
            rate: 5,
            review: '좋습니다.'
        },
        ]
    },
    {
        id: '2',
        name: '포켓몬빵',
        img: pocketmonBreadImage,
        prevCost: '1200',
        cost: '1,000',
        items: [{
            id: '11',
            name: '고오스빵',
            cost: '1,000',
            img: pocketmonBreadImage,
        }, {
            id: '12',
            name: '파이리빵',
            cost: '12,00원',
            img: pocketmonBreadImage,
        }
        ],
        totRate: 4,
        reviews: [{
            id: '1',
            userId: 'a',
            rate: 4,
            review: '좋습니다.'
        },{
            id: '2',
            userId: 'a',
            rate: 5,
            review: '좋습니다.'
        },
        ]
    },
]
export const advertisementList = [
    {
        id: '1',
        name: '스위치',
        img: img,
        cost: '300,000원',
        items: [{
            id: '11',
            name: '스위치 + 아르세우스',
            cost: '350,000원',
            img: img,
        }, {
            id: '12',
            name: '스위치 + 동물의숲',
            cost: '330,000원',
            img: img,
        }
        ],
        totRate: 4,
        reviews: [{
            id: '1',
            userId: 'a',
            rate: 4,
            review: '좋습니다.'
        },{
            id: '2',
            userId: 'a',
            rate: 5,
            review: '좋습니다.'
        },
        ]
    },
    {
        id: '2',
        name: '스위치',
        img: img,
        cost: '300,000원',
        items: [{
            id: '11',
            name: '스위치 + 아르세우스',
            cost: '350,000원',
            img: img,
        }, {
            id: '12',
            name: '스위치 + 동물의숲',
            cost: '330,000원',
            img: img,
        }
        ],
        totRate: 4,
        reviews: [{
            id: '1',
            userId: 'a',
            rate: 4,
            review: '좋습니다.'
        },{
            id: '2',
            userId: 'a',
            rate: 5,
            review: '좋습니다.'
        },
        ]
    },
]