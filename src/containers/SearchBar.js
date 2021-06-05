
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../actions/index'
import {bindActionCreators} from 'redux'
class SearchBar extends Component {

constructor(props) {
    super(props);

    this.state={
        term:''
    } 
this.onInputChange=this.onInputChange.bind(this)
this.onFormSubmit=this.onFormSubmit.bind(this)
}
    onInputChange(event){

        
       
 

this.setState(
           {term: event.target.value}
           )
            }

            onFormSubmit(event){
                event.preventDefault()

                this.props.fetchWeather(this.state.term);
                this.setState({term:''})
            }
   
render() {
        return(
            <div>
               <form onSubmit={this.onFormSubmit} className="input-group">

                <input type='text' placeholder='Get a five day forcast of your city' 
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
                />  
                <span className="input-group-button">
                    <button className="btn btn-danger">Enter</button>
                    </span> 
               </form>
            </div>
            
        )
    }




}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch)
}
export default connect(null,mapDispatchToProps)(SearchBar)