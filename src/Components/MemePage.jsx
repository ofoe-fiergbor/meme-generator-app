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
            topFontColor: 'white',
            bottomFontColor: 'white'

        }
    }
    componentDidMount() {
        fetch(memeAPI)
            .then(res => res.json())
            .then(res => {
                this.setState({ allMemes: res.data.memes })
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
    blackColorClick = () => {
        this.setState({
            topFontColor: 'black'
        })
        this.topFontStyle = {
            color: this.state.topFontColor
        }
    }
    whiteColorClick = () => {
        this.setState({
            topFontColor: 'white'
        })
        this.topFontStyle = {
            color: this.state.topFontColor
        }
    }
    blackColorClick2 = () => {
        this.setState({
            bottomFontColor: 'black'
        })
        this.bottomFontStyle = {
            color: this.state.bottomFontColor
        }
    }
    whiteColorClick2 = () => {
        this.setState({
            bottomFontColor: 'white'
        })
        this.bottomFontStyle = {
            color: this.state.bottomFontColor
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemes.length)
        this.setState({ defaultImg: this.state.allMemes[randNum].url })
    }

    render() {
        const { topText, bottomText } = this.state
        return (
            <div>
                <div className="col-md-3"></div>
                <div className="col-md-7">
                    <div className="col-md-7">
                        <div className='meme'>
                            <h2 className='top' style={this.topFontStyle}>{topText}</h2>
                            <img src={this.state.defaultImg} alt='random meme' />
                            <h2 className='bottom' style={this.bottomFontStyle}>{bottomText}</h2>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className='form' >
                            <div className="form-group col-md-8">
                                <input type='text' className="form-control" placeholder='Top Text' value={topText} onChange={this.handleTopForm} />
                            </div>
                            <button onClick={this.blackColorClick} className='col-md-2 col-bnt col-btn1'></button>
                            <button onClick={this.whiteColorClick} className='col-md-2 col-bnt col-btn2'></button>
                            <div className="form-group col-md-8">
                                <input type='text' className="form-control" placeholder='Bottom Text' value={bottomText} onChange={this.handleBottomText} />
                            </div>
                            <button onClick={this.blackColorClick2} className='col-md-2 col-bnt col-btn1'></button>
                            <button onClick={this.whiteColorClick2} className='col-md-2 col-bnt col-btn2'></button>
                            <br />
                            <center>
                                <div>
                                    <button className="btn btn-default gen-btn" onClick={this.handleSubmit}>Generate</button>
                                </div>
                            </center>
                        </div>

                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        )
    }
}

export default MemePage
