import { useState } from 'react';
import './App.css';
const tabData = [
  {
    id: 1,
    title: 'ITEM 1',
    content: 'Authorize the user data ✅',
  },
  {
    id: 2,
    title: 'ITEM 2',
    content: 'Redirect user to cart page 🛒',
  },
  {
    id: 3,
    title: 'ITEM 3',
    content: 'Create new payment for the user 💰',
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const handelActiveTab = (id) => setActiveTab(id);

  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>❌</button>
      {isShow ? (
        <div className='tab'>
          <div className='tab__header'>
            {tabData.map((tab) => {
              return (
                <button
                  onClick={() => handelActiveTab(tab.id)}
                  key={tab.id}
                  className={tab.id == activeTab ? 'active' : ''}
                >
                  <span>{tab.title}</span>
                  <span className='tab-indicator'></span>
                </button>
              );
            })}
          </div>
          <div className='tab__content'>{tabData[activeTab - 1].content}</div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
