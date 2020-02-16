import React from 'react';

class WithoutHooks extends React.Component<{}, {name:string;type:string}>{
    constructor(props:{}){
        super(props);
        this.state = {name: 'serval', type: 'friends' };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeRace = this.handleChangeRace.bind(this);
    }

    componentDidMount(){
        document.title = `${this.state.name} is ${this.state.type}`
    }

    componentDidUpdate(){
        document.title = `${this.state.name} is ${this.state.type}`
    }

    handleChangeName(e: React.ChangeEvent<HTMLInputElement>){
        this.setState({ name: e.target.value });
    }

    handleChangeRace(e: React.ChangeEvent<HTMLInputElement>){
        this.setState({ type: e.target.value });
    }

    render(){
        return (
            <div>
                <input value={this.state.name} onChange={this.handleChangeName} />
                <input value={this.state.type} onChange={this.handleChangeRace} />
            </div>
        );
    }
}

export default WithoutHooks;