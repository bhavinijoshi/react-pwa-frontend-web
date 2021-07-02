import React from "react";
import { Box, Tab, Tabs } from "@material-ui/core";
import PropTypes from 'prop-types';

export const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export const a11yProps = (index) => {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

export const MUITabs = (props) => {
    const { onChange, selectedIndex, tabNames, ...other } = props;

    return (
        <Tabs
            value={selectedIndex}
            onChange={onChange}
            indicatorColor="primary"
            textColor="primary"
            {...other}
        >
            {
                tabNames.map((tab, index) => <Tab
                    label={tab}
                    {...a11yProps(index)}
                    key={index}
                />)
            }
        </Tabs>)
}