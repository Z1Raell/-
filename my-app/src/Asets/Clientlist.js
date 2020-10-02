import React from 'react';
import { connect } from 'react-redux';

const Clientlist = ({ clients }) => {
    if (!clients.length) {
        return <p className="text-centre">Клиентов пока нету</p>
    }
    
}

const mapStatetoProps = state => {
    console.log(state);
    return state;
}

export default connect(mapStatetoProps, null)(Clientlist);   
