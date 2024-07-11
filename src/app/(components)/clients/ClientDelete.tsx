import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const gigDelete = () => {
    return (
        <FontAwesomeIcon
            icon={faX}
            className="icon hover:cursor-pointer hover:text-xButtonRed"
        />
    );
};

export default gigDelete;
