import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Login";
import User from "./User";

export default function(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/redirect" element={<User />}/>
            </Routes>
        </BrowserRouter>
    )
}