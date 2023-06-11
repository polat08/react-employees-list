import './app-info.css';

const AppInfo = ({increased, employees}) => {
  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании ООО</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h2>Премия сотрудникам: {increased}</h2>
    </div>
  )
}

export default AppInfo;