import React, { useState } from 'react'
import Logo from '../../components/Logo/Logo'
import Search from '../../components/Search/Search'
// import { getUser } from '../../api/users'

import './style.css'

const Home = () => {
    const [ value, setValue ] = useState('')
    const [ error, setError ] = useState('')
    const [ user, setUser ] = useState({})

    console.log(value)

    return (
        <>
            <Logo 
                font='Github-Search'
                fontSpan='text-style-1'
            />
            <Search
                takeInputValue={(event) => setValue(event.target.value)}
                // click={() => this.search(this.state.value)
                // }
            />
        </>
    )
    
}

export default Home