import {Link, Outlet} from "react-router-dom"

function America (){

    return (
        <div className="america">
            <nav>
                <Link to="bizon">Bisons</Link>
                <Link to="eagle">Eagle</Link>
                <Link to="grizli">Grizzli</Link> 

            </nav>
            <Outlet> </Outlet>

        </div>

    )
}
export default America