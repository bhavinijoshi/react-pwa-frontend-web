import React from 'react'
import DropdownTreeSelect from 'react-dropdown-tree-select'
import _ from 'lodash'

class DropDownTreeSelectComponent extends React.Component {
    shouldComponentUpdate(nextProps) {
        return !_.isEqual(nextProps.data, this.props.data)
    }
    render() {
        return <DropdownTreeSelect
            {...this.props}
        />
    }
}

export default DropDownTreeSelectComponent;