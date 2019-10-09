import React from 'react';

class Segment extends React.Component {
    render() {
        return (
            <div className="header container-flex">
                <div className="a-s-center">
                    {this.props.children}
                </div>
            </div>
        );
    };
};

export default Segment;