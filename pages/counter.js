import { useCallback } from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; 
import * as counterActions from '../store/modules/counter'; 

import axios from 'axios'
var client_id = 'r_C5RfXuikZPQwwcCuBz';
var client_secret = 'hggJMrYzZg';
var api_url = '/v1/datalab/search';
var request_body = {
    "startDate": "2017-01-01",
    "endDate": "2017-04-30",
    "timeUnit": "month",
    "keywordGroups": [
        {
            "groupName": "한글",
            "keywords": [
                "한글",
                "korean"
            ]
        },
        {
            "groupName": "영어",
            "keywords": [
                "영어",
                "english"
            ]
        }
    ],
    "device": "pc",
    "ages": [
        "1",
        "2"
    ],
    "gender": "f"
};

axios.post(api_url,{
        ...request_body
    }, {
        headers: {
            'X-Naver-Client-Id': client_id,
            'X-Naver-Client-Secret': client_secret,
            'Content-Type': 'application/json'
        },
        proxy: true,
    })
    .then((res) => {
        console.log(res);
    }
);


var api_url = '/v1/datalab/shopping/categories';
var request_body = {
    "startDate": "2017-08-01",
    "endDate": "2017-09-30",
    "timeUnit": "month",
    "category": [
        {"name": "패션의류", "param": ["50000000"]},
        {"name": "화장품/미용", "param": ["50000002"]}
    ],
    "device": "pc",
    "ages": ["20", "30"],
    "gender": "f"
};
axios.post(api_url,{
    ...request_body
    }, {
        headers: {
            'X-Naver-Client-Id': client_id,
            'X-Naver-Client-Secret': client_secret,
            'Content-Type': 'application/json'
        }
    })
    .then((res) => {
        console.log(res);
    }
);
var api_url = '/v1/search/blog?query=' + encodeURI('코로나'); // json 결과
var headers= {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}

axios.get(api_url,{
    headers: headers,
    // proxy: {
    //     protocol: 'https',
    //     host: 'openapi.naver.com',
    //     port: 80,
    //   },
}).then((res) => {
    console.log(res);
})

export default function Test() { 
    const dispatch = useDispatch(); 
    const value = useSelector(({ counter }) => counter.value); 
    const plus = useCallback(({ value }) => { 
        dispatch(counterActions.increment({ value })); 
    }, [dispatch]); 
    const minus = useCallback(({ value }) => { 
        dispatch(counterActions.decrement({ value })); 
    }, [dispatch]); 
    return ( 
    <div> 
        <h1>Counter</h1> 
        <button onClick={() => minus({ value })}>-</button> 
        <span>{value}</span> 
        <button onClick={() => plus({ value })}>+</button> 
    </div> 
    ); 
}