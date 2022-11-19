import { useState } from 'react';
import axios from 'axios';

const Request = () => {
    const [state, setState] = useState({
        address: "",
        auth: "",
        token1: 0,
        token2: 0,
        token3: 0
    }), { token1, token2, token3 } = state;

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${state.auth}`
        };

        const postData = {
            "challengeIds": [token1, token2, token3]
        };

        try{
            const res = await axios.post(`${state.address}/lol-challenges/v1/update-player-preferences/`, postData, {
                headers: headers
            })
            console.log(res.data)
        } catch(err) {
            console.log(err)
        }
    }

    return(
        <div>
            <input
                type="text"
                name="address"
                placeholder="address"
                value={state.address}
                onChange={handleChange}
            />
            <input
                type="text"
                name="auth"
                placeholder="authorization code"
                value={state.auth}
                onChange={handleChange}
            />
            <input
                type="text"
                name="token1"
                placeholder="token ID 1"
                value={state.token1}
                onChange={handleChange}
            />
            <input
                type="text"
                name="token2"
                placeholder="token ID 2"
                value={state.token2}
                onChange={handleChange}
            />
            <input
                type="text"
                name="token3"
                placeholder="token ID 3"
                value={state.token3}
                onChange={handleChange}
            />
            <button
                onClick={handleSubmit}
            >Submit</button>
        </div>
    );
};

export default Request;