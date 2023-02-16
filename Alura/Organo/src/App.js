import Form from './Components/Form';
import Banner from './Components/Banner';
import Team from './Components/Team';
import Footer from './Components/Footer'
import { useState } from 'react';

function App() {

  const teams = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
        nome: 'Data Sciense',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2',
    },
    {
        nome: 'Devops',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8'
    },
    {
        nome: 'UX e Design',
        corPrimaria: '#D86EBF',
        corSecundaria: '#FAE5F5',
    },
    {
        nome: 'Mobile',
        corPrimaria: '#FEBA05',
        corSecundaria: '#FFF5D9',
    },
    {
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29',
        corSecundaria: '#FFEEDF',
    }]

  const [colaboradores, setColaboradores] = useState([])

  const onColaboradorAdd = (colaborador) => {
    debugger
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Form team={teams.map(team => team.nome)} onColaboradorCreated={colaborador => onColaboradorAdd(colaborador)}/>
      {teams.map(team => <Team name={team.nome} key={team.nome} corPrimaria={team.corPrimaria} corSecundaria={team.corSecundaria} colab={colaboradores.filter(colaborador => colaborador.time === team.nome)}></Team>)}
      <Footer/>
    </div>
  );
}

export default App;
