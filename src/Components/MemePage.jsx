import React, { Component } from 'react'

const memeAPI = "https://api.imgflip.com/get_memes"

class MemePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            defaultImg: 'http://i.imgflip.com/1bij.jpg',
            topText: '',
            bottomText: '',
            allMemes: [],
            fontColor: 'white'
        }
    }
    componentDidMount() {
        fetch(memeAPI)
            .then(res => res.json())
            .then(res => {
                this.setState({ allMemes: res.data.memes})
            })
            .catch((error) => console.log(error))
    }
    handleTopForm = (e) => {
        this.setState({
            topText: e.target.value
        })
    }

    handleBottomText = e => {
        this.setState({
            bottomText: e.target.value
        })
    }
    handleBlackColorClick = ()=>{
        this.setState({
            fontColor:'black'
        })
        this.divStyle ={
            color: this.state.fontColor
          }
    }
    handleWhiteColorClick =()=>{
        this.setState({
            fontColor:'white'
        })
        this.divStyle ={
            color: this.state.fontColor
          }
    }
    handleSubmit = e => {
        e.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemes.length)
        this.setState({ defaultImg: this.state.allMemes[randNum].url})    
    }

    render() {
        const { topText, bottomText } = this.state
        return (
            <div>
                <div className="col-md-3"></div>
                <div className="col-md-7">
                    <div className="col-md-7">
                        <div className='meme'>
                            <h2 className='top' style={this.divStyle}>{topText}</h2>
                            <img src={this.state.defaultImg} alt='random meme' />
                            <h2 className='bottom' style={this.state.color}>{bottomText}</h2>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group col-md-8">
                                <input type='text' className="form-control" placeholder='Top Text' value={topText} onChange={this.handleTopForm} />
                            </div>
                            <button onClick={this.handleBlackColorClick} className='col-md-2 col-bnt col-btn1'></button>
                            <button onClick={this.handleWhiteColorClick} className='col-md-2 col-bnt col-btn2'></button>
                            <div className="form-group col-md-8">
                                <input type='text' className="form-control" placeholder='Bottom Text' value={bottomText} onChange={this.handleBottomText} />
                            </div>
                            <button onClick={this.handleBlackColorClick} className='col-md-2 col-bnt col-btn1'></button>
                            <button onClick={this.handleWhiteColorClick} className='col-md-2 col-bnt col-btn2'></button>
                            <br />
                            <center>
                                <div>
                                    <button className="btn btn-default gen-btn" type='submit'>Generate</button>
                                </div>
                            </center>
                        </form>

                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        )
    }
}

export default MemePage
