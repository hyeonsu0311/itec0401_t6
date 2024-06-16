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
        firstimage: ['/images/광장시장.jpg', '/images/광장시장1.jpg','/images/광장시장2.jpg','/images/광장시장3.jpg', '/images/광장시장4.jpg'],
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
        contentID: '1162240',
        contentTypeID: '12',
        title: '제주도 국가지질공원',
        firstimage: ['/images/지질공원1.jpg', '/images/지질공원2.jpg', '/images/지질공원3.jpg'],
        mapy: 33.4569,
        mapx: 126.7143,
        addr1: '제주특별자치도 제주시 조천읍 선교로 569-36 ',
        overview: 'A popular riverside park along the Han River.',
        detail: '제주도는 한반도 서남단에서 남쪽으로 약 90㎞ 떨어져 있는 대륙붕 위의 화산섬으로 화산분출물로 형성되었다. 화산지형이 원형 그대로 잘 보존돼 지구과학적 가치가 크고, 경관도 아름답다. 제주도는 이 가운데 경관이 뛰어난 명소 9곳(한라산, 성산일출봉, 만장굴, 서귀포층, 산방산과 용머리해안, 수월봉, 중문 대포해안 주상절리대, 천지연폭포)을 유네스코 세계지질공원 네트워크(GGN)에 세계지질공원으로 인증받았다. 유네스코가 지원하는 세계지질공원은 지질학적으로 가치가 있고, 희귀하며 경관이 아름다운 지역으로 교육과 지질관광이 활발히 이루어져 지역 경제 발전에 기여하는 곳을 말한다. 제주도는 유네스코가 인정하는 지질공원, 생물권 보전지역, 세계 자연유산을 보유함으로써 세계적인 자연관광지로서 거듭나고 있다. * 한라산국립공원 [유네스코 세계 자연유산] 한라산은 제주도 순상화산의 중심 봉우리이며, 1,950m의 해발고도로 세계 자연유산이 자 남한에서 가장 높은 산이다. 한라산은 제주도의 상징이자 한반도와 주변 해역에서 일어난 제4기 화산활동의 대표적인 산물이기도 하다. 정상부에 깊이 108m, 너비 550m의 화구호인 백록담 분화구가 있으며, 영실기암의 가파른 암벽과 약 40여 개의 오름 등 여러 화산지형을 갖고 있다. 풍화와 침식에 의해 순상화산의 원래 지형이 파괴되지 않은 상태로 남아있는 한라산은 2002년과 2007년에는 각각 유네스코 생물권 보전지역과 유네스코 세계 자연유산으로 등재되었다. * 성산일출봉 [유네스코 세계 자연유산] 전형적인 수성화산으로 높이 179m로 제주도 동쪽 해안에 거대한 고대의 성곽처럼 우뚝 솟아있다. 성산일출봉 응회구는 수심이 얕은 해저에서 분출하여 해수면 위로 성장한 섯치형 화산의 탄생과 성장과정을 잘 보여주고 있다. 2000년과 2007년에 각각 천연기념물과 유네스코 세계 자연유산으로 지정되었다. * 만장굴 [유네스코 세계 자연유산] 거문 오름에서 흘러나온 용암이 땅 위를 흐르다 만들어진 용암동굴로, 전체 길이 약 7,400m, 최대 높이 약 25m, 최대 폭 약 18m로서 제주 세계 자연유산의 한 부분인 거문 오름 용암 동굴계에 속하는 용암동굴이다. * 서귀포층 수성화산 활동으로 생긴 화산재(火山灰)가 해양 퇴적물과 함께 쌓이기를 반복해 생겨난 약 100m 두께의 퇴적층으로 천연기념물로 지정되어 있다. * 산방산 산방산은 제주도의 남서부 해안에 위치하고 있으며, 395m의 높이를 지닌 거대한 용암 돔이다. 밝은 회색을 띠고 있는 산방산 용암 돔은 주상절리가 잘 발달한 조면암으로 구성되어 있다. * 용머리 해안 산방산 용암돔의 남쪽 해안에 있는 용머리는 제주에서 가장 오래된 화산 지형으로 수성화산 활동으로 만들어진 응회환의 일부이다. 용머리는 작은 돌기처럼 돌출해 있는 형상을 하고 있으며, 바닷속으로 들어가는 용의 머리를 닮았다하여 ‘용머리’로 불리며, 해안경관이 뛰어나다. * 수월봉 수월봉은 제주도의 서쪽 가장자리에 위치하고 있는 기복이 낮은 언덕 형태의 화산 쇄설성 퇴적층이다. 땅속에서 올라온 마그마가 지하수를 만나 격렬하게 폭발하면서 뿜어져 나온 화산재들이 쌓여 형성된 응회암의 일부로 높이가 77m이다. * 중문·대포해안 주상절리대 대포동의 주상절리 용암은 인근에 있는 ‘녹하지악’이라는 오름에서 분출된 용암이 해안으로 흘러와 굳으면서 생겨났다. 주상절리의 기둥이 두껍게 잘 만들어져 있는 아랫부분과 주상절리의 기둥이 가늘고 복잡하게 만들어져 있는 윗부분의 수평과 수직 단면에서 잘 발달되어 있다. * 천지연폭포 천지연폭포는 높이는 22m, 폭은 12m이며, 폭포 아래에는 수심 20m의 호수가 형성되어 있다. 폭포의 하류는 서귀포항까지 약 1km 정도의 계곡을 형성하는데, 이곳에 서식하는 무태장어, 담팔수나무 및 난대림은 천연기념물로 지정되어 있다.',
        infocenter: '	064-710-6657',
        restdate: '없음',
        homepage: 'http://www.jeju.go.kr/geopark/index.htm',
        tel: '국가지질공원',
        zipcode: '03195'
      },
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
