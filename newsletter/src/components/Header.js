import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiSearch } from 'react-icons/bi';

const Header = () => {

    const [data, setdata] = useState([]);
    const [news,setnews] = useState('india')
    const[inp,setinp] = useState('')

    const fetch = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?q=${news}&apiKey=4d8c10936fac439d948cc92202f6e384`).then((res) => {
            setdata(res.data.articles);
        })
    }

    const fetch2 = () =>{
        axios.get(`https://newsapi.org/v2/top-headlines?q=${news}&apiKey=4d8c10936fac439d948cc92202f6e384`).then((res) => {
            setdata(res.data.articles);
        })
    }

    const handleKeys = (e) =>{
        setnews(inp)
            if(e.key === 'Enter'){
                fetch2();
                setinp("")
            }
    }

    const handleSubmit = () =>{
        setnews(inp)
        fetch2()
        setinp("")
    }

    const handleChange = (e) =>{
        setinp(e.target.value);
        
    }

    useEffect(() => {
        fetch()
        console.log(data)
    }, [])


    return (
        <div className='text-center'>
            <h1>Fake News APi </h1>
            <hr className='text-danger'></hr>

            <div className='container mt-5'>
                <div className='mb-5'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <h4>Search By {news}</h4>
                            <hr></hr>
                        </div>
                        <div className='col-md-8'>
                            <div className='d-flex align-items-center'>
                                <input className="form-control" value={inp} onChange={handleChange} placeholder="search here...." onKeyPress={handleKeys}/>
                                <BiSearch className='icon0' onClick={handleSubmit}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {data.map((e, index) => {
                        return (
                            <div className='col-md-4 mb-4' key={index}>
                                <div className='box-shadow'>
                                    <img src={e.urlToImage} className="fluid" />
                                    <a href={e.url} target="_blank"><h6 className='font'>{e.title.substring(0, 50)} <strong>Read More...</strong></h6>
                                        <p>{e.description.substring(0, 100)} {e.content}</p>
                                    </a>
                                    <hr></hr>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <small><strong>{e.publishedAt.substring(0, 10)}</strong></small>
                                        <small><strong>published By:</strong>{e.source.name}</small>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Header;