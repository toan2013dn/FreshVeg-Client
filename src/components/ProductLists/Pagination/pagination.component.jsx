import "./pagination.styles.scss";
import Pagination from '@mui/material/Pagination';

function PaginationComponent() {
    return ( 
        <Pagination count={5} size="large" />
     );
}

export default PaginationComponent;