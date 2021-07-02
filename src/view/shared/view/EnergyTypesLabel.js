import { Avatar } from '@material-ui/core';
import React from 'react';

export const EnergyTypesLabel = prop => {
    const { record } = prop
    return <span key={record.id || record._id} style={{ display: 'flex' }}>
        {record.icon?.[0]?.publicUrl && <Avatar
            component='span'
            style={{ height: "25px", width: "25px" }}
            variant="square"
            src={record.icon[0].publicUrl}
            alt="icon"
        />}
        <span style={{ marginLeft: "5px", lineHeight: "26px" }}>{record.code} - {record.label || record.name}</span>
    </span>
}