import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }
  }

  handleBitrate = () => {
    this.setState({
        settings: {
            ...this.state.settings, 
            bitrate: 12
        }
    })
  }

  handleRes = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            video: {
                resolution: '720p'
            }
        }
    })
  }


  render() {
    return (
        <div>
            <button className="bitrate" onClick={this.handleBitrate}>Change Bitrate to 12</button>
            <button className="resolution" onClick={this.handleRes}>Change Res to 720p</button>

        </div>
        
    );
  }
}

export default YouTubeDebugger;

