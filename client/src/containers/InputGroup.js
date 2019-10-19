import React from 'react';

class InputGroup extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default InputGroup;