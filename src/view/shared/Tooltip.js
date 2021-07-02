import React from 'react'
// import '../../styles/App.css';
class Tooltip extends React.Component {
    render() {
        return (
            <div
                id="tooltip"
                className="mySvgTooltip"
                style={{
                    position: 'absolute',
                    display: 'none',
                }}
            ></div>
        )
    }
}

export default Tooltip;