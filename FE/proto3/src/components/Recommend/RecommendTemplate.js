import * as React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Title from '../Common/Title';
import ItemContainer from './ItemContainer';
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