function getRender({props, responses}){

    function render() {
        if(props === 'posts'){
            {responses.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <p>{item.id}</p>
              </div>
            ))}
          } else if(props === 'comments'){
            {responses.map((item) => (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.email}</p>
                <p>{item.body}</p>
                <p>{item.id}</p>
              </div>
            ))}
          }else if(props === 'photos'){
            {responses.map((item) => (
              <div key={item.id}>
                <h3>{responses.title}</h3>
                <img scr={responses.url} alt='img'/>
              </div>
            ))}
          }else {console.log('erro')}
    }
    return(
        <>
            {render()}
        </>
    );
  }

export default getRender