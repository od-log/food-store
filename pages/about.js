import { Typography } from '@mui/material';
import Image from 'next/image';
import Seo from '../components/Seo';

export default function Potato() {
  return (
    <div>
      <Seo title='About' />
      <Typography variant='h3'>About</Typography>
      <Typography variant='body'>
        9개의 식당으로 구성된 국내 최고 푸드 스토어. <br />
        국내외 식당 브랜드와 젊고 역량있는 신진 쉐프들의 음식 뿐만 아니라
        데코스타일, 음료 등 다양한 음식의 새로운 미각을 제시합니다.
      </Typography>
    </div>
  );
}
