import React from 'react';

const Filter = ({ filter, setFilter }) => {
    return (
        <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('incomplete')}>Incomplete</button>
        </div>
    );
};

export default Filter;