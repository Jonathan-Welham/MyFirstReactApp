import React from 'react';
import Header from './Header'
import SearchBar from "./Searchbar";



const App = () =>{
    //Variables have to be defined in the component
    // const url = 'https://www.telegraph.co.uk/content/dam/news/2016/09/08/107667228_beech-tree-NEWS_trans_NvBQzQNjv4BqplGOf-dgG3z4gg9owgQTXEmhb5tXCQRHAvHRWfzHzHk.jpg'
    return (
        //Div is used to wrap multiple elements
        <div>
            <Header text='Jon' lastName='W'/>
            {/*<Header text='Alex'lastName='H' imgUrl={url}/>*/}
            <Header text='Alex'lastName='H'/>

            <SearchBar/>

        </div>
    );

}

// const Hero = () =>{
//     return (
//         <Header/>
//     );
// }



export default App;