import React from 'react';

//Stateful
class SearchBar extends React.Component{
    state = {input: ""};

    getQuery = (e) =>{
        e.preventDefault();
        alert(this.state.input);
        // console.log("It worked");
    }

    render(){
        return(
            <div>
                <form onSubmit={this.getQuery}>
                    <input type='text' onChange={(e)=>{
                        this.setState({input: e.target.value});
                        console.log(this.state.input);
                    }} value={this.state.input}/>
                    <button>Search</button>
                </form>

                <h1>
                    {this.state.input}
                </h1>
            </div>

        );
    }
}

export default SearchBar;