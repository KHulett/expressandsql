import React, {Component} from 'react';

class Rowdycrew extends Component {
    constructor() {
        super();
        this.state = {
            rowdycrew: []
        }
    }

    async componentDidMount () {
        const res = await fetch('/api/rowdycrew');
        const data = await res.json();
        this.setState({
            rowdycrew: data
        })

    }

    render(){
        return(
            <div>
                just some stuff
            </div>
        )
    }
}

export default Rowdycrew;