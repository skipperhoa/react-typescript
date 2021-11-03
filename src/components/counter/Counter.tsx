import React, { useState } from 'react'
import ItemCounter from './ItemCounter';
const Counter: React.FC = () => {
    const [value, setValue] = useState<number>(0);
    return (
        <div>
            <ItemCounter
                title="Counter"
                count={value}
                fc_decrement={() => setValue(value - 1)}
                fc_increment={() => setValue(value + 1)}
            />
        </div>
    )
}

export default Counter;