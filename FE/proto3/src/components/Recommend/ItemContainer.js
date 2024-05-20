import React from 'react';
import RecommendItem from './RecommendItem';
import styles from './ItemContainer.module.css';

const ItemContainer = () => {

    const places = [
        {
            addr:"경상남도 통영시 해평5길 142-16",
            image:"http://tong.visitkorea.or.kr/cms/resource/22/2367622_image2_1.jpg",
            title:"김춘수 유품전시관",
            contentid:"1000981"
        },
        {
            addr:"대구광역시 수성구 신천동로86안길 14-6",
            image:"http://tong.visitkorea.or.kr/cms/resource/28/1970128_image2_1.jpg",
            title:"[대구올레 팔공산 3코스] 부인사 도보길",
            contentid:"1008532",
        }
    ]

    return (
        <div className = {styles.container}>
            <RecommendItem place={places[0]}/>
            <RecommendItem place={places[1]}/>
        </div>
    );
}

export default ItemContainer;