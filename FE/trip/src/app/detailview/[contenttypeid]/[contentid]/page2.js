'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import TravelDestinationInfo from '@/components/detailview/TravelDestinationInfo';
import MapComponent from '@/components/detailview/MapComponent';
import DetailedInfoComponent from '@/components/detailview/DetailedInfo';
import ImageComponent from '@/components/detailview/imageComponent';
import axios from 'axios';
import './info.css';

const DetailView = () => {
  const params = useParams();
  const [contentID, setContentID] = useState(null);
  const [contentTypeID, setContentTypeID] = useState(null);
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);

  const serviceKey = 'MxCOQ22stboV1W9Px3ultal2Q5BlUSuU5rxscVl7utf7MFjlUn2f%2BzMcu3LfWnneDEIvZW%2FoWabom5yRyF9EUQ%3D%3D';

  useEffect(() => {
    const contentid = params['contentid'];
    const contenttypeid = params['contenttypeid'];
    setContentID(contentid);
    setContentTypeID(contenttypeid);

    const fetchData = async () => {
      try {
        const url = `https://apis.data.go.kr/B551011/KorService1/detailCommon1?MobileOS=ETC&MobileApp=EX&_type=json&contentId=${contentid}&contentTypeId=${contenttypeid}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=10&pageNo=1&serviceKey=${serviceKey}`;
        const response = await axios.get(url);
        setData(response.data.response.body.items.item[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchData2 = async () => {
      try {
        const url2 = `https://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=${serviceKey}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentid}&contentTypeId=${contenttypeid}&numOfRows=10&pageNo=1`;
        const response2 = await axios.get(url2);
        setData2(response2.data.response.body.items.item[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (contentid && contenttypeid) {
      fetchData();
      fetchData2();
    }
  }, [params]);

  return (
    <div>
      {data && data2 ? (
        <div className="size">
          <TravelDestinationInfo info={data.title} />
          <ImageComponent firstimage={data.firstimage} />
          <MapComponent latitude={data.mapy} longitude={data.mapx} address={data.addr1} />
          <DetailedInfoComponent overview={data.overview} detail={data2} />
        </div>
      ) : (
        <p>Loading...zz</p>
      )}
    </div>
  );
};

export default DetailView;
