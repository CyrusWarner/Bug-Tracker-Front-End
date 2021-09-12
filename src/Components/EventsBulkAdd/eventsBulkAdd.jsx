import React, {useState} from 'react'

const EventsBulkAdd = () => {
  const [csvFile, setCsvFile] = useState();

    return (
        <div>
                <input type="file" accept=".csv" id="csvfile" onChange={(e) => setCsvFile(e.target.files[0])}></input>
        </div>
    )
}

export default EventsBulkAdd
