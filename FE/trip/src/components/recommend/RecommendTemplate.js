'use client'

import * as React from 'react'
import Title from '@/components/common/Title';
import ItemContainer from '@/components/recommend/ItemContainer';
import styles from './RecommendTemplate.module.css';

const RecommendTemplate = () => {

    return (
        <div className={styles.RecommendTemplate}>
            <Title title="맞춤 여행지: "/>
            <ItemContainer />
            <Title title="인기 여행지: "/>
            <ItemContainer />
            <Title title="근처 여행지: "/>
            <ItemContainer />
            <Title title="조회수: "/>
            <ItemContainer />
            <Title title="최근 등록된 여행지: "/>
            <ItemContainer />
        </div>
    )
};

export default RecommendTemplate;