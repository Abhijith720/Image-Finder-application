import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../Image-results/ImageResults';

class Search extends Component {
  state={
      searchtext:'',
      ammount:15,
      apiUrl:'https://pixabay.com/api',
      apiKey:'17996494-88c4f5ff08aaa7b0a2b81e296',
      images:[]
      

  }

  onTextChange = (e) =>{
    const val=e.target.value;
    this.setState({[e.target.name] : val} , ()=>{
      if(val==""){
        this.setState({images:[]})

      }
      else{
        axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchtext}&image_type=photo&per_page=${this.state.ammount}&safesearch=true`)
        .then(res=> this.setState({images : res.data.hits}))
        .catch(err => console.log(err));
      }
      

    });

  };

  onAmmountChange = (e, index , value) => this.setState({ammount : value});
     


  

    render() {
        console.log(this.state.images);
        return (
            <div>
                <TextField
                 name="searchtext"
                 value={this.state.searchtext}
                 onChange={this.onTextChange}
                 floatingLabelText="Search For Images"
                 fullWidth={true}
                />
                <br/>

                <SelectField
                   name="ammount"
                   floatingLabelText="Ammount"
                   value={this.state.ammount}
                   onChange={this.onAmmountChange}
                  
                >
                <MenuItem  value={5} primaryText="5"/>
                <MenuItem  value={10} primaryText="10"/>
                <MenuItem  value={15} primaryText="15"/>
                <MenuItem  value={30} primaryText="30"/>
                <MenuItem  value={50} primaryText="50"/>
                </SelectField>
                <br/>

                {this.state.images.length > 0 ? (<ImageResults images = {this.state.images}/>) : null}

            </div>
        )
    }
}
export default Search;
