import React, { Component } from 'react'
import randomMeme from '../img/IMG_20200116_130709.jpg'

const memeAPI = '"https://api.imgflip.com/get_memes"'

class MemePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            defaultImg: randomMeme,
            topText: '',
            bottomText: '',
            allMemeImgs: []
        }
    }
    componentDidMount() {
        fetch(memeAPI)
          .then(res => res.json())
          .then(res => {
        const { memes } = res.data
        this.setState({ allMemeImgs: memes })
        })
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
    handleSubmit = () => {
        alert('it works')
    }

    handleSubmit = e => {
        e.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ defaultImg: randMemeImg })
    }
    render() {
        const { topText, bottomText } = this.state
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-7">
                    <div className="col-md-7">
                        <div className='meme'>
                            <h2 className='top'>{topText}</h2>
                            <img src={this.state.defaultImg} alt='random meme' />
                            <h2 className='bottom'>{bottomText}</h2>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type='text' className="form-control" placeholder='Top Text' value={topText} onChange={this.handleTopForm} />
                            </div>
                            <div className="form-group">
                                <input type='text' className="form-control" placeholder='Bottom Text' value={bottomText} onChange={this.handleBottomText} />
                            </div>

                            <br />
                            <center>
                                <button className="btn btn-default btn-cus" type='submit'>Generate</button>
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
