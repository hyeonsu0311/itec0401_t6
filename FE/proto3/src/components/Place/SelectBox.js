import React from 'react';
import {useState} from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import TagCheckbox from './TagCheckBox';
import { useDispatch } from 'react-redux';
import { setSelectedArea } from './placeSlice';

function SelectBox() {
  const dispatch = useDispatch();

  const areas = [
    { code: "1", name: "서울" },
    { code: "2", name: "인천" },
    { code: "3", name: "대전" },
    { code: "4", name: "대구" },
    { code: "5", name: "광주" },
    { code: "6", name: "부산" },
    { code: "7", name: "울산" },
    { code: "8", name: "세종특별자치시" },
    { code: "31", name: "경기도" },
    { code: "32", name: "강원특별자치도" },
    { code: "33", name: "충청북도" },
    { code: "34", name: "충청남도" },
    { code: "35", name: "경상북도" },
    { code: "36", name: "경상남도" },
    { code: "37", name: "전북특별자치도" },
    { code: "38", name: "전라남도" },
    { code: "39", name: "제주도" }
  ];

  const feature = [
    '관광지', '자연', '문화시설', '숙박', '체험'
  ];

  const [selected, setSelected] = useState('');

  const handleSelectionChange = (area) => {
    setSelected(area.code);
    dispatch(setSelectedArea(area));
  }

  return (
    <Box sx={{ 
      position: 'relative',
      display: 'grid',
      placeItems: 'center',
      width: 800,
      margin: '20px'}}>
      <div role="group" aria-labelledby="">
        <List
          orientation="horizontal"
          wrap
          sx={{
            '--List-gap': '8px',
            '--ListItem-radius': '20px',
          }}
        >
          {areas.map((area) => (
            <TagCheckbox key={area.code} item={area.name} checked={selected === area.code} onChange={() => handleSelectionChange(area)}/>
          ))}
        </List>
      </div>
    </Box>
  );
}

export default SelectBox;
