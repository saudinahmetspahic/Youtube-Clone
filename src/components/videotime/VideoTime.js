import React, { useState, useEffect } from 'react'

function VideoTime({time}) {
    const [outPut, setOutPut] = useState("")    

    useEffect(() => {
        let timeToSet = new Date(time);
        let today = new Date();
        
        if(today.getFullYear() === timeToSet.getFullYear()){
            if(today.getMonth() === timeToSet.getMonth()){
                if(today.getDay() === timeToSet.getDay()){
                    if(today.getHours() === timeToSet.getHours()){
                        setOutPut("Prije " + (today.getMinutes() - timeToSet.getMinutes()) + " min.")
                    }
                    else setOutPut("Prije " + (today.getHours() - timeToSet.getHours()) + " sati.");
                }
                else setOutPut("Prije " + (today.getDay() - timeToSet.getDay()) + " dana.");
            }
            else setOutPut("Prije " + (today.getMonth() - timeToSet.getMonth()) + " mj.");
        }
        else setOutPut("Prije " + (today.getFullYear() - timeToSet.getFullYear()) + " god.");

    }, []);

    return (
        <div>
            {outPut}
        </div>
    )
}

export default VideoTime
