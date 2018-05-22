import React from 'react';

class Forma extends React.Component {
    constructor(props) {
        super(props);
        this.state = {term:'' }
    }
    enEntradaCambio = (term) => {
        this.setState({ term });
        this.props.FormaCambio(term);
    }
    render() { 
        return (
        <div className='barra-buscadora'>
            <center>
            <input
            value={this.state.term}
            onChange={e => this.enEntradaCambio(e.target.value)}
            placeholder='busca un video'
            />
            </center>
        </div> 
        )
    }
}
 
export default Forma;