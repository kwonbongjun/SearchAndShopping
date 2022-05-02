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
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/analysis.module.scss";

import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )
const analysisList = [{
    id: '1',
    name: '쇼핑인사이트 분야별 트렌드 조회',
    url: '/v1/datalab/shopping/categories',
},
{
    id: '2',
    name: '쇼핑인사이트 분야 내 기기별 트렌드 조회',
    url: '/v1/datalab/shopping/category/device',
},
{
    id: '3',
    name: '쇼핑인사이트 분야 내 성별 트렌드 조회',
    url: '/v1/datalab/shopping/category/gender',
},
{
    id: '4',
    name: '쇼핑인사이트 분야 내 연령별 트렌드 조회',
    url: '/v1/datalab/shopping/category/age',
},
{
    id: '5',
    name: '쇼핑인사이트 키워드별 트렌드 조회',
    url: '/v1/datalab/shopping/category/keywords',
},
{
    id: '6',
    name: '쇼핑인사이트 키워드 기기별 트렌드 조회',
    url: '/v1/datalab/shopping/category/keyword/device',
},
{
    id: '7',
    name: '쇼핑인사이트 키워드 성별 트렌드 조회',
    url: '/v1/datalab/shopping/category/keyword/gender',
},
{
    id: '8',
    name: '쇼핑인사이트 키워드 연령별 트렌드 조회',
    url: '/v1/datalab/shopping/category/keyword/age',
},
]
const timeUnitList = [{
    id: 'date', name: 'date'},
    {id: 'week', name: 'week'},
    {id: 'month', name: 'month'}
];
const categories = [
    {'id': 'femaleClothes', 'name': '여성의류', 'param': ['50000167']},
    {'id': 'fashion', "name": "패션의류", "param": ["50000000"]},
    {'id': 'beauty', "name": "화장품/미용", "param": ["50000002"]}
]
const devices = [
    {
        id: 'mo',
        name: 'mo',
    },
    {
        id: 'pc',
        name: 'pc',
    }
];
const ages = [
    {
        id: '10',
        name: '10',
    },
    {
        id: '20',
        name: '20',
    },
    {
        id: '30',
        name: '30',
    },
    {
        id: '40',
        name: '40',
    },
    {
        id: '50',
        name: '50',
    },
    {
        id: '60',
        name: '60',
    },
] 
const genders = [
    {
        id: 'm',
        name: 'm',
    },
    {
        id: 'f',
        name: 'f'
    }
]
const colorList = [
    'rgba(255, 99, 132, 0.5)',
    'rgba(53, 162, 235, 0.5)',
    'rgba(0,0,0,0.5)',
]
export default function Product() { 
    const [analysisCategory,setAnalysisCategory]: any = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [timeUnit,setTimeUnit] = useState('선택');
    const [categoryList,setCategoryList] = useState([]);
    const [device,setDevice] = useState('선택');
    const [gender,setGender] = useState('선택');
    const [ageList,setAgeList] = useState([]);
    const [selectedCategory, setselectedCategory] = useState('선택');
    const [selectedAge, setselectedAge] = useState('선택');
    const [chartData, setChartData]: any = useState({});
    useEffect(() => {
        // getData();
    })
    const DatePickerEl = (type) => {
        return (
            <DatePicker className={styles['react-datepicker-wrapper']} 
            selected={startDate} onChange={(date:Date) => setStartDate(date)} />
            );
    };
    const EndDatePickerEl = () => {
        return (
            <DatePicker className={styles['react-datepicker-wrapper']} 
            selected={endDate} onChange={(date:Date) => setEndDate(date)} />
          );
    }
    const analysisListEl = analysisList.map(analysis => {
        return (
            <Dropdown.Item key={analysis.id} className={style['analysis-item']}
                onClick={() => setAnalysisCategory(analysis)}
            >
                {analysis.name}
            </Dropdown.Item>
        )
    });
    const timeListEl = timeUnitList.map(timeUnit => {
        return (
            <Dropdown.Item key={timeUnit.id} className={style['analysis-item']}
                onClick={() => setTimeUnit(timeUnit.name)}
            >
                {timeUnit.name}
            </Dropdown.Item>
        )
    });
    const categoryListEl = categories.map(category => {
        return (
            <Dropdown.Item key={category.id} className={style['analysis-item']}
                onClick={() => {
                    setselectedCategory(category.name)
                    setCategoryList(categories);
                }}
            >
                {category.name}
            </Dropdown.Item>
        )
    });
    const deviceEl = devices.map(timeUnit => {
        return (
            <Dropdown.Item key={timeUnit.id} className={style['analysis-item']}
                onClick={() => setDevice(timeUnit.name)}
            >
                {timeUnit.name}
            </Dropdown.Item>
        )
    });
    const ageEl = ages.map(timeUnit => {
        return (
            <Dropdown.Item key={timeUnit.id} className={style['analysis-item']}
            onClick={() => {
                setselectedAge(timeUnit.name)
                setAgeList(ages.map(age => age.name))
            }}
            >
                {timeUnit.name}
            </Dropdown.Item>
        )
    });
    const genderEl = genders.map(timeUnit => {
        return (
            <Dropdown.Item key={timeUnit.id} className={style['analysis-item']}
                onClick={() => setGender(timeUnit.name)}
            >
                {timeUnit.name}
            </Dropdown.Item>
        )
    });
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };
    const inquery = async () => {
        const body = {
            "startDate": startDate,
            "endDate": endDate,
            "timeUnit": timeUnit,
            "category": categoryList,
            "device": device,
            "ages": ageList,
            "gender": gender
        }
        const data: any = await getData(body);
  
        console.log(data);

        if (data && data.data.results && data.data.results[0].data.length > 0) {
            let dateArr = [];
            const len = data.data.results[0].data.length;
            const startDateStr = data.data.results[0].data[0].period;//data.data.startDate.substring(0,10);
            let endDateStr =  data.data.results[0].data[len - 1].period;//data.data.endDate.substring(0,10);
            const startDate = new Date(startDateStr);
            const endDate = new Date(endDateStr);
            let date = startDate;
            dateArr.push(startDateStr)
            let curDateStr = startDateStr;
            let timeInterval = 1;
            if (timeUnit === 'date') {
                timeInterval = 1;
            } else if (timeUnit === 'week') {
                timeInterval = 7;
            } else if (timeUnit === 'month') {
                endDate.setDate(1);
                let month:number | string = endDate.getMonth() + 1;
                let dateStr:number | string = endDate.getDate();
                if (month < 10) {
                    month = '0' + month;
                }
                if (dateStr < 10) {
                    dateStr = '0' + dateStr;
                }
                endDateStr = `${date.getFullYear()}-${month}-${dateStr}`;
                // endDateStr = curDateStr;
            }

            let cnt = 0;
            if (timeUnit === 'week') {
                cnt = 1;
            }
            for (let i = 0; i < 100 && curDateStr !== endDateStr; i++) {
                if (timeUnit === 'date' || timeUnit === 'week') {
                    date.setDate(date.getDate() + 1);
                    let month:number | string = date.getMonth() + 1;
                    let dateStr:number | string = date.getDate();
                    if (month < 10) {
                        month = '0' + month;
                    }
                    if (dateStr < 10) {
                        dateStr = '0' + dateStr;
                    }
                    curDateStr = `${date.getFullYear()}-${month}-${dateStr}`;
                    if (timeUnit === 'date') {
                        dateArr.push(curDateStr);
                    }
                    else if (timeUnit === 'week' && cnt % 7 === 0) {
                        dateArr.push(curDateStr);
                    }
                    cnt++;
                } else if (timeUnit === 'month') {
                    date.setDate(1);
                    date.setMonth(date.getMonth() + 1);
                    let month:number | string = date.getMonth() + 1;
                    let dateStr:number | string = date.getDate();
                    if (month < 10) {
                        month = '0' + month;
                    }
                    if (dateStr < 10) {
                        dateStr = '0' + dateStr;
                    }
                    curDateStr = `${date.getFullYear()}-${month}-${dateStr}`;
                    dateArr.push(curDateStr);
                }
            }
            // dateArr.push(endDateStr);
            console.log(dateArr);
            const datasets = data.data.results.map((res, i) => {
                return {
                    label: res.title,
                    data: res.data.map(data=> data.ratio),
                    backgroundColor: colorList[i % colorList.length]
                }
            });
            const res = {
                labels: dateArr,//[data.data.results[0].data[0].period], //데이터 여러 개
                datasets: datasets
                // [
                //     {
                //     label: data.data.results[0].title,
                //     data: [data.data.results[0].data[0].ratio],// chartData.results[0].data[1].ratio],
                //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
                //     },
                //     {
                //     label: data.data.results[1].title,
                //     data: [data.data.results[1].data[0].ratio],// chartData.results[1].data[1].ratio],
                //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
                //     },
                // ],
            }; 
            setChartData(res);
        } else {
            const res = {
                labels: [],//[data.data.results[0].data[0].period], //데이터 여러 개
                datasets: []
            }
            setChartData(res);
        }
    }

        // {
    //     "startDate": "2017-08-01",
    //     "endDate": "2017-09-30",
    //     "timeUnit": "month",
    //     "results": [
    //       {
    //         "title": "패션의류",
    //         "category": ["50000000"],
    //         "data": [
    //           {
    //             "period": "2017-08-01",
    //             "ratio": 84.01252
    //           },
    //           {
    //             "period": "2017-09-01",
    //             "ratio": 100
    //           }
    //         ]
    //       },
    //       {
    //         "title": "화장품/미용",
    //         "category": ["50000002"],
    //         "data": [
    //           {
    //             "period": "2017-08-01",
    //             "ratio": 22.21162
    //           },
    //           {
    //             "period": "2017-09-01",
    //             "ratio": 21.54278
    //           }
    //         ]
    //       }
    //     ]
    //   }
 
      
    return (
        <div>
            <div>
                <span className={styles.category}>
                    <span className={styles['category-title']}>조회 대상 </span>
                    <Dropdown className={styles.dropdown}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">    
                            {analysisCategory.name? analysisCategory.name: '선택'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {analysisListEl}
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
                <span className={styles.category}>
                    <span className={styles['category-title']}>시작시간</span>
                    <DatePickerEl />
                </span>
                <span className={styles.category}>
                    <span className={styles['category-title']}>종료시간</span>
                    <EndDatePickerEl />
                </span>
                <span className={styles.category}>
                    <span className={styles['category-title']}>시간 단위</span>
                    <Dropdown className={styles.dropdown}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">    
                            {timeUnit}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {timeListEl}
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
                <span className={styles.category}>
                    <span className={styles['category-title']}>카테고리</span> 
                    <Dropdown className={styles.dropdown}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">    
                            {selectedCategory}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {categoryListEl}
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
                <span className={styles.category}>
                    <span className={styles['category-title']}>장치</span>
                    <Dropdown className={styles.dropdown}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">    
                            {device}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {deviceEl}
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
                <span className={styles.category}>
                    <span className={styles['category-title']}>나이</span>
                    <Dropdown className={styles.dropdown}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">    
                            {selectedAge}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {ageEl}
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
                <span className={styles.category}>
                    <span className={styles['category-title']}>성별</span>
                    <Dropdown className={styles.dropdown}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">    
                            {gender}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {genderEl}
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
                <span className={styles.category}>
                    <Button variant="primary" onClick={() => inquery()}>조회</Button>
                </span>
            </div>
            <div>
            {chartData.datasets ? 
            <Chart
                type={'bar'}
                options={options}
                data={chartData}
            />: null
            }
            </div>
        </div>
    )
};
const getData = async (request_body) => {
    var client_id = 'r_C5RfXuikZPQwwcCuBz';
    var client_secret = 'hggJMrYzZg';
    var api_url = '/v1/datalab/shopping/categories'; //분야별 트렌드

    // var request_body = {
    //     "startDate": "2017-08-01",
    //     "endDate": "2017-09-30",
    //     "timeUnit": "month",
    //     "category": [
    //         {"name": "패션의류", "param": ["50000000"]},
    //         {"name": "화장품/미용", "param": ["50000002"]}
    //     ],
    //     "device": "pc",
    //     "ages": ["20", "30"],
    //     "gender": "f"
    // };
    // response url cat_id
    // {
    //     "startDate": "2017-08-01",
    //     "endDate": "2017-09-30",
    //     "timeUnit": "month",
    //     "results": [
    //       {
    //         "title": "패션의류",
    //         "category": ["50000000"],
    //         "data": [
    //           {
    //             "period": "2017-08-01",
    //             "ratio": 84.01252
    //           },
    //           {
    //             "period": "2017-09-01",
    //             "ratio": 100
    //           }
    //         ]
    //       },
    //       {
    //         "title": "화장품/미용",
    //         "category": ["50000002"],
    //         "data": [
    //           {
    //             "period": "2017-08-01",
    //             "ratio": 22.21162
    //           },
    //           {
    //             "period": "2017-09-01",
    //             "ratio": 21.54278
    //           }
    //         ]
    //       }
    //     ]
    //   }

    let analysisData = await getAnalysisData(client_id, client_secret, api_url, request_body);
    return analysisData;
}
const getAnalysisData = async (client_id, client_secret, api_url, request_body) => {
    return axios.post(api_url,{
        ...request_body
        }, {
            headers: {
                'X-Naver-Client-Id': client_id,
                'X-Naver-Client-Secret': client_secret,
                'Content-Type': 'application/json'
            }
        })
}