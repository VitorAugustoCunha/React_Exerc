import ContentText from "../ContentText"
import ListSuspesed  from "../ListSuspesed"
import Button from "../Button"
import './Form.css'
import { useState } from "react"

export const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const onSave = (e) =>{
        e.preventDefault()
        props.onColaboradorCreated({nome, cargo, imagem, time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return(
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o contribuidor</h2>
                <ContentText required={true} name="Nome" placeholder="Digite seu nome" value={nome} on_Changed={value => setNome(value)}/>
                <ContentText required={true} name="Cargo" placeholder="Digite seu cargo" value={cargo} on_Changed={value => setCargo(value)}/>
                <ContentText required={true} name="Imagem" placeholder="Informe o endereço da imagem" value={imagem} on_Changed={value => setImagem(value)}/>
                <ListSuspesed required={true} name="Time" itens={props.team} value={time} onAlter={value => setTime(value)}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}