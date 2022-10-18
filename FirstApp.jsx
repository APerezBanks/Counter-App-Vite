import PropTypes from 'prop-types';
 
// const getResult = (a, b) => {
//     return a + b;
// }

// const newMessage = {
//     message: 'Hola Mundo',
//     tittle: 'Hasomo'
// };                  
            

export const FirstApp = ( { title, subTitle, name} ) => {

//  console.log (props);

    return (
    <>  
     <h1>{ title }</h1>
     {/* <code> { JSON.stringify ( newMessage ) } </code> */}
     <p> { subTitle } </p>
     <p> { name } </p>
    </>
    );
  }

  FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
  }

  FirstApp.defaultProps = {
    name: 'Alex Perreo Bankero',
    subTitle:'Aqui tendria que aparecer 139120-3',
    title:' Aqui no hay un titulo',

  }

    // para reorganizar por orden alfabetico cmd + p luego escribe ">" y selecciona ordern ascendente

