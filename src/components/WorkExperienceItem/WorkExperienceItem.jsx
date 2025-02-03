
import './styles.scss';


const WorkExperienceItem = ({data}) => {

  const { startYear, endYear, company, position, jobDescription} = data  

  return (
    <div className="item-container">
      <h4 className='item-years'> { `${startYear} / ${endYear}` } </h4>
      <h3> {position}: <span>{company} </span></h3>
      <p>Tareas desempeñadas: <span>{jobDescription}</span> </p>
    </div>
  )
}

export default WorkExperienceItem
