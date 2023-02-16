import './Colab.css'

export const Colab = (props) => {
    return(
        <div className='colab'>
            <div className='header' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt='Foto de perfil'/>
            </div>
            <div className='test'>
                <h4>{props.name}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}