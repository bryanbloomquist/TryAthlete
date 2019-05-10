import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import YouTube from "react-youtube";

class Home extends Component {
    _onReady(event) {
        // access to player in all event handlers via event.target
        // event.target.mute();
    }

    _onEnd(event) {
        event.target.playVideo();
    }

    render() {
        const videoOptions = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls: 0,
                rel: 0,
                showinfo: 0,
                mute: 1
            }
        };

        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <div className="video-background">
                            <div className="video-foreground">
                                <YouTube
                                    videoId={"OpiDGvgQ7bs"}
                                    opts={videoOptions}
                                    className="video-iframe"
                                    onReady={this._onReady}
                                    onEnd={this._onEnd}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default Home;
