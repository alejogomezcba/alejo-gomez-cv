import './styles.scss';

const Footer = () => {
  const getCurrentYear = (locale = "es-ES") => new Date().toLocaleDateString(locale, { year: "numeric" });

  return (
    <div className='footer-container'>
      <p>© {getCurrentYear()} Todos los derechos reservados.</p>
      <p>Realizado por Crab Designs</p>
    </div>
  )
}

export default Footer
