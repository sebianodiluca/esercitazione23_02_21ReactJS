import logo from './logo.svg';
import LogoImg from './components/LogoImg';
import Product from './components/Product'
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
function App() {
  
  const data = {
    name: 'HappyShoes',
    logo: 'https://logoipsum.com/logo/logo-16.svg',
    company: 'SZH Inc.',
    cover: 'https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Welcome to our brand new HappyShoes website!',
    description: 'Lorem ipsum velit cillum excepteur adipisicing voluptate mollit. Laboris deserunt reprehenderit commodo id id minim non voluptate irure pariatur nulla.',
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <LogoImg alternativeText="React Header Logo" imageSrc={logo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
       {data.name}
        <ul>
        <Product name="Red Shoe" price={23.5} />
         <Body link="Red Shoe" price={23.5} />
         <Header logo ="www.sebiano.it" nome ="sebiano co"/>
         <Footer name="Black Shoe" price={52.7} />
        </ul>
      </main>
      <footer><LogoImg alternativeText="Edgemony Footer Logo" imageSrc="https://edgemony.com/wp-content/uploads/2020/03/cropped-Logo-edgemony_TeBIANCO-04.png" /></footer>
    </div>
  );
}

export default App;
// function App() {
//   return (
    

//     <div className="App">
      
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <main className="main_class" >  ciao </main>
//       <footer className="footer_class"> copyright by Me</footer>
//     </div>
//   );
// }

// export default App;
