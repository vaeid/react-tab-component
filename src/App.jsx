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
let activeTab = 2;
export default function App() {
  return (
    <div className='tab'>
      <div className='tab__header'>
        {tabData.map((tab) => {
          return (
            <button key={tab.id} className={tab.id == activeTab ? 'active' : ''}>
              <span>{tab.title}</span>
              <span className='tab-indicator'></span>
            </button>
          );
        })}
      </div>
      <div className='tab__content'>{tabData[activeTab - 1].content}</div>
    </div>
  );
}
