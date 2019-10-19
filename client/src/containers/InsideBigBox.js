import React from 'react';


class InsideBigBox extends React.Component {
    render() {
        return (
            <div className="width-md thin-border border-r-sm padding-xxl fw">
                {this.props.children}
            </div>
        );
    }
};

export default InsideBigBox;