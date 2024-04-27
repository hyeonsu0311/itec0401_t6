import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming React Router for navigation
import styles from "./PlannerFrame.moudle.css";

const fetchPlans = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      //db에서 불러오기
      const plans = [
        { id: 1, name: 'Plan1'},
        { id: 2, name: 'Plan2'}];
      resolve(plans);
    }, 1000);
  });
};

function Planner() {
  const [plans, setPlans] = useState(null);

  useEffect(() => {
    fetchPlans().then(data => {
      setPlans(data);
    });
  }, []);

return (
    <div className={styles.frameWrapperParent}>
      {plans ? (
        <div>
          <h2>현재 일정</h2>
          <ul>
            {plans.map((plan) => (
              <li key={plan.id}>{plan.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>일정이 없습니다.</p> // 데이터가 없거나 로딩 중일 때 표시
      )}
      <Link to="/create-plan">일정 만들기</Link>
    </div>
  );
}

export default Planner