import { Fab } from "@mui/material"
import CheckIcon from '@mui/icons-material/Check';

const SelectStationButton = ({ handleStationChoice, handleStationUnselect, chosen }) => {
    return (
        chosen ? <Fab size="small" sx={{ backgroundColor: 'green' }} onClick={handleStationUnselect} ><CheckIcon sx={{ color: 'white' }} /></Fab> : <button onClick={handleStationChoice} className="select-station-button">Select station</button>
    );
}

export default SelectStationButton