import { faCoffee, faCalculator, faSackDollar, faBalanceScaleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <div className='row align-items-center mt-5'>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="d-flex justify-content-center">
            <h3>Bem vindo ao <b>CalculeMe</b> <FontAwesomeIcon icon={faCalculator} /></h3>
          </div>
          <p className="text-center text-justify">Aqui você encontrará uma ampla variedade de calculadoras, conversores e funções matemáticas gratuitamente. 
            Caso tenha alguma dúvida sobre nossas calculadoras ou deseja algum cálculo que ainda não se encontra aqui no site, 
            por favor, entre em contato nas opções disponíveis do rodapé.
          </p>
        </div>
      </div>
      <div className='row align-items-center mt-5'>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <FontAwesomeIcon icon={faCalculator} className="fa-3x mt-2" />
                <div className="card-body">
                  <h5 className="card-title text-center">Cálculos Matemáticos</h5>
                  <p className="card-text text-center justify-content-center">
                    Aqui você encontrará diversos cálculos e funções matemáticas.
                  </p>
                </div>
                <div className="d-flex justify-content-center mb-1">
                  <a href="#" className="btn btn-primary">Clique aqui</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Ultima atualização a um dia</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <FontAwesomeIcon icon={faSackDollar} className="fa-3x mt-2" />
                <div className="card-body">
                  <h5 className="card-title text-center">Cálculos Financeiros</h5>
                  <p className="card-text text-center justify-content-center">
                    Problemas nos cálculos financeiros ? Acesse aqui que te ajudo.
                  </p>
                </div>
                <div className="d-flex justify-content-center mb-1">
                  <a href="#" className="btn btn-primary">Clique aqui</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Ultima atualização a um dia</small>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <FontAwesomeIcon icon={faBalanceScaleRight} className="fa-3x mt-2"/>
                <div className="card-body">
                  <h5 className="card-title text-center">Cálculos Ficais</h5>
                  <p className="card-text text-center justify-content-center">
                    Complicado ne 😅 ? Relaxa, vamos nessa juntos.
                  </p>
                </div>
                <div className="d-flex justify-content-center mb-1">
                  <a href="#" className="btn btn-primary">Clique aqui</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Ultima atualização a um dia</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
