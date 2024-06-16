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

  //const serviceKey = 'MxCOQ22stboV1W9Px3ultal2Q5BlUSuU5rxscVl7utf7MFjlUn2f%2BzMcu3LfWnneDEIvZW%2FoWabom5yRyF9EUQ%3D%3D';
  const serviceKey = 'XUwyR/mV8IUBoZtsh7NeDQG18pmA1/UY40IWuP1MZt3A+/s+xihFUEsy7bMXZ66sNmDVWxcTRu/jbm8Gu0r8qw=='

  useEffect(() => {
    if (params['contentid'] && params['contenttypeid']) {
      setContentID(params['contentid']);
      setContentTypeID(params['contenttypeid']);
    }
  }, [params]);

  useEffect(() => {
    if (contentID && contentTypeID) {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://apis.data.go.kr/B551011/KorService1/detailCommon1', {
            params: {
              MobileOS: 'ETC',
              MobileApp: 'trip',
              _type: 'json',
              contentId: contentID,
              contentTypeId: contentTypeID,
              defaultYN: 'Y',
              firstImageYN: 'Y',
              areacodeYN: 'Y',
              catcodeYN: 'Y',
              addrinfoYN: 'Y',
              mapinfoYN: 'Y',
              overviewYN: 'Y',
              numOfRows: 10,
              pageNo: 1,
              serviceKey: serviceKey
            }
          });
          setData(response.data.response.body.items.item[0]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const fetchData2 = async () => {
        try {
          const response2 = await axios.get('https://apis.data.go.kr/B551011/KorService1/detailIntro1', {
            params: {
              serviceKey: serviceKey,
              MobileOS: 'ETC',
              MobileApp: 'trip',
              _type: 'json',
              contentId: contentID,
              contentTypeId: contentTypeID,
              numOfRows: 10,
              pageNo: 1
            }
          });
          setData2(response2.data.response.body.items.item[0]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      

      fetchData();
      fetchData2();
    }
  }, [contentID, contentTypeID]);

  return (
    <div>
      {data && data2 ? (
        <div className="size">
          <TravelDestinationInfo info={data.title} />
          <ImageComponent firstimage={data.firstimage} />
          <DetailedInfoComponent overview={data.overview} detail={data2} />
          <MapComponent latitude={data.mapy} longitude={data.mapx} address={data.addr1} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailView;
