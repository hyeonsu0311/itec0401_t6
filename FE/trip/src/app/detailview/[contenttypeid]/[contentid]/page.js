'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import TravelDestinationInfo from '@/components/detailview/TravelDestinationInfo';
import MapComponent from '@/components/detailview/MapComponent';
import DetailedInfoComponent from '@/components/detailview/DetailedInfo';
import ImageComponent from '@/components/detailview/imageComponent';
import axios from 'axios';
import './info.css';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from '@mui/material';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const DetailView = () => {
  // const params = useParams();
  // const [contentID, setContentID] = useState(null);
  // const [contentTypeID, setContentTypeID] = useState(null);
  // const [data, setData] = useState(null);
  // const [data2, setData2] = useState(null);

  // const serviceKey = 'MxCOQ22stboV1W9Px3ultal2Q5BlUSuU5rxscVl7utf7MFjlUn2f%2BzMcu3LfWnneDEIvZW%2FoWabom5yRyF9EUQ%3D%3D';

  // useEffect(() => {
  //   setContentID(params['contentid'])
  //   setContentTypeID(params['contenttypeid'])

  //   const fetchData = async () => {
  //     try {
  //       const url = `https://apis.data.go.kr/B551011/KorService1/detailCommon1?MobileOS=ETC&MobileApp=EX&_type=json&contentId=${contentID}&contentTypeId=${contentTypeID}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=10&pageNo=1&serviceKey=${serviceKey}`;
  //         const response = await axios.get(url);
  //         setData(response.data.response.body.items.item[0]);
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };

  //     const fetchData2 = async () => {
  //       try {
  //         const url2 = `https://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=${serviceKey}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentID}&contentTypeId=${contentTypeID}&numOfRows=10&pageNo=1`;
  //         const response2 = await axios.get(url2);
  //         setData2(response2.data.response.body.items.item[0]);
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };

  //     fetchData();
  //     fetchData2();
  //   });
  const params = useParams();
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (status === 'loading') return (
    <Box className={styles.loadingContainer}>
      <CircularProgress />
      <Typography variant="body1" mt={2}>Loading...</Typography>
    </Box>
  );

  useEffect(() => {
    const contentID = params['contentid'];
    const contentTypeID = params['contenttypeid'];

    const hardCodedData = [
      {
        contentID: '1013527',
        contentTypeID: '38',
        title: '광장시장',
        firstimage: ['/images/광장시장.jpg', '/images/수성못.png', '/images/동화사.png'],
        mapy: 37.5703,
        mapx: 126.9997,
        addr1: '서울특별시 종로구 창경궁로 88 ',
        overview: 'One of the oldest and largest traditional markets in South Korea.',
        detail: '구한말 국내 정세가 혼미를 거듭하던 중 일본, 중국 등 열강세력의 각축장으로 국운은 풍전등화격이었다. 1905년 고종 42년 을사조약 체결 후 실질적으로 주권행사는 일본이 장악했고 따라서 경제침략 정책을 기도한 바 그 한 예로서 남대문시장 경영권 장악하였고 경제적인 돌파구로 새롭게 문을 연 것이 종로의 광장시장이다. 1905년 우리 나라 최초의 상설 시장 이 탄생한 순간이다. 원래 광장시장은 광교(너른 다리)와 장교(긴 다리) 사이를 복개하여 만들려고 했기 때문에 그 다리 이름의 첫머리를 따서 ‘너르고 긴’이라는 뜻의 광장(廣長)시장이라 이름 지었으나 배오개로 터를 옮기며 이전 이름의 한글 발음은 그대로 둔 채 ‘널리 모아 간직한다’는 뜻을 새로 담아 현재의 광장(廣藏)시장이 되었다. 시장개설시 주요 거래 상품으로는 주로 농수산물, 신탄 등인데 가평·뚝섬 이천, 철원 등지에서 우마차로 반입하는 소규모의 단조로운 원시적인 시장 기능일 뿐이었으나 100년이 훌쩍 넘은 현재의 주거래 품목으로는 주단, 포목(한복), 직물(양복,양장지), 여성의류제품, 커텐지, 침구, 수예, 나전칠기, 주방용품, 수입품코너, 청과, 건어물, 제수용품, 생선, 정육, 야채 등으로 상당량 거래 규모를 자랑하는 종합적인 면모를 갖춘 시장이 되었다. 또한 광장시장에서 가장 번화한 곳은 동문과 북2문, 남1문이 만나는 거리에 형성된 먹거리장터이다. 광장시장의 먹거리장터는 학생, 중장년층, 연세 지긋한 어르신까지 모든 연령을 아우른다. 현재 세계 관광코스로 지정되어 우리나라를 여행하는 많은 외국 관광객들의 경유지로 되어 있음을 자랑할 수 있다.',
        infocenter: '02-123-4567',
        restdate: '일요일(먹자골목 제외)',
        homepage: 'http://jkm.or.kr/home/home/sijang/',
        tel: '광장시장',
        zipcode: '03195'
      },
      {
        contentID: '1029885',
        contentTypeID: '28',
        title: 'Ttukseom Park',
        firstimage: ['/images/ttukseom_park1.jpg', '/images/ttukseom_park2.jpg', '/images/ttukseom_park3.jpg'],
        mapy: 37.5301,
        mapx: 127.0669,
        addr1: '139 Gangbyeonbuk-ro, Gwangjin-gu, Seoul',
        overview: 'A popular riverside park along the Han River.',
        detail: 'Ttukseom Park is known for its water sports facilities, bike trails, and scenic picnic spots. The park also features the Ttukseom Hangang Park Swimming Pool, an outdoor swimming pool open during the summer.'
      },
      // 더 많은 하드코딩된 데이터 추가 가능
    ];

    const selectedData = hardCodedData.find(
      item => item.contentID === contentID && item.contentTypeID === contentTypeID
    );

    if (selectedData) {
      setData(selectedData);
      setData2({
        infocenter: selectedData.infocenter,
        restdate: selectedData.restdate,
        homepage: selectedData.homepage,
        tel: selectedData.tel,
        zipcode: selectedData.zipcode,
        addr1: selectedData.addr1
      });
    }
  }, [params]);

  return (
    <div>
      {data && data2 ? (
        <div className="size">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                {data.title}
              </Typography>
            </Toolbar>
          </AppBar>
          
          <Box sx={{ width: '100%', bgcolor: 'background.paper', marginTop: 2 }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="상세정보" />
              <Tab label="사진보기" />
              <Tab label="위치정보" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <DetailedInfoComponent overview={data.detail} detail={data2} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ImageComponent firstimage={data.firstimage} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <MapComponent latitude={data.mapy} longitude={data.mapx} address={data.addr1} />
            </TabPanel>
          </Box>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default DetailView;
