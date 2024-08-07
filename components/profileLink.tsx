'use client';
import { PieChart } from 'react-minimal-pie-chart';
import Link from 'next/link';
import { useUserContext } from '@/context/userContext';

const ProfileLink = () => {
  const userContext = useUserContext();
  const { user } = userContext.state;
  const score = user.score || 0;
  const unused = 100 - score;
  const graphData = [
    { title: 'Score', value: score, color: '#78cb5f' },
    { title: 'Unused', value: unused, color: '#333333' },
  ];
  return (
    <Link href="/profile" className="m-1 w-10">
      <PieChart data={graphData} startAngle={270} lengthAngle={-360} />
    </Link>
  );
};

export default ProfileLink;
