'use client'

import * as React from 'react';
import Title from '@/components/common/Title';
import ItemContainer from '@/components/recommend/ItemContainer';
import styles from './RecommendTemplate.module.css';

const RecommendTemplate = () => {
    const places = [
        
        {
            addr: "대구광역시 수성구 무학로 78",
            image: "/images/감영공원.jpg"
        },
        {
            addr: "대구광역시 수성구 무학로 78",
            image: "/images/송해공원.jpg"
        },
        {
            addr: "대구광역시 수성구 무학로 78",
            image: "/images/아양교.png"
        },
        {
            addr: "대구광역시 수성구 무학로 78",
            image: "/images/앞산.jpg"
        }
        ,
        {
            addr: "대구광역시 수성구 무학로 78",
            image: "/images/수성못.png"
        },
        {
            addr: "대구광역시 수성구 무학로 78",
            image: "/images/대구수목원.png"
        },
        {
            addr: "대구광역시 수성구 무학로 78",
            image: "/images/라이온즈파크.jpg"
        },
       
        
        {
            addr: "대구광역시 수성구 무학로 78",
            image: "/images/아쿠아리움.jpg"
        },
        
        {
            addr: "대구광역시 수성구 무학로 78",
            image: "/images/이월드.jpg"
        }
        ,
        {
            addr: "대구광역시 수성구 무학로 78",
            image: "/images/팔공산.png"
        },
        {
            addr: "대구광역시 수성구 무학로 78",
            image: "/images/근대역사.png"
        },
        {
            addr: "대구광역시 수성구 무학로 78",
            image: "/images/동화사.png"
        },
        {
            addr: "대구광역시 수성구 무학로 78",
            image: "/images/스파크랜드.png"
        }
    ];

    return (
        <div className={styles.RecommendTemplate}>
            <Title title="맞춤 여행지: "/>
            <ItemContainer places={places.slice(0, 6)} />
            <Title title="인기 여행지: "/>
            <ItemContainer places={places.slice(4, 10)} />
            <Title title="조회수: "/>
            <ItemContainer places={places.slice(1, 4 + 8, 12)} />
        </div>
    );
};

export default RecommendTemplate;
