import Colab from '../Colab'
import './Team.css'

export const Team = (props) => {
    return(
        (props.colab.length > 0) ?
        <section className="team" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.name}</h3>
            <div className='colabs'>
                {props.colab.map(colaborador => <Colab name={colaborador.nome} corDeFundo={props.corPrimaria} key={colaborador.nome}cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section> : ''
    )
}