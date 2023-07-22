import React, { useContext } from 'react';
import ComponentF from './ComponentF';
import { UserContext, JobContext } from '../App';

const ComponentE = () => {

    // const user = useContext(UserContext);
    // const job = useContext(JobContext);

    return (
        <>
            <ComponentF />
            {/* <div>
                {job} - {user} test
            </div> */}
        </>
    )
}

export default ComponentE