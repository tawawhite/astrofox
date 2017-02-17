import React from 'react';

import UIComponent from '../UIComponent';
import { events } from '../../core/Global';
import CanvasWave from '../../canvas/CanvasWave';
import WaveParser from '../../audio/WaveParser';

export default class Oscilloscope extends UIComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.display = new CanvasWave(
            this.props,
            this.refs.canvas
        );

        events.on('render', this.updateCanvas);
    }

    componentWillUnmount() {
        events.off('render', this.updateCanvas);
    }

    updateCanvas(data) {
        let points = WaveParser.parseTimeData(data.td, 854, 0);

        this.display.render(points);
    }

    render() {
        let style = {};

        if (!this.props.visible) {
            style.display = 'none';
        }

        return (
            <div className="oscilloscope" style={style}>
                <canvas
                    ref="canvas"
                    className="canvas"
                    width="854"
                    height="100"
                />
            </div>
        );
    }
}

Oscilloscope.defaultProps = {
    width: 854,
    height: 75,
    color: '#927FFF'
};