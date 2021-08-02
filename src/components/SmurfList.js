import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux'

 const SmurfList = (props)=> {
     cons { smurf, loading} = props;

    if (loading) {
        return <h2> Please waite while we load the smurfs!</h2>
    }

    return( <div className="listContainer">
        {
            smurf.map((smurf,id)=> {
                return <Smurf key={id} smurf={smurf} />
            })
        }
    </div>)
 }
 const mapStateToProps = state => {
     return {
         smurf: state.smurf,
         loading: state.loading
     }
 }

export default SmurfList;

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.