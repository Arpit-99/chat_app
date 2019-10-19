import React from 'react';

class BigBox extends React.Component {

    render() {
        return (
            <div className="container-flex vh j-c-center a-i-center">
                {this.props.children}
            </div>
        );
    }
}

export default BigBox;