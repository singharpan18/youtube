import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 3000);

    return() => {
      clearTimeout(timer);
    };
  },[searchQuery]);

  const getSearchSuggestion = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '80e7f163b6mshe2369a0b17418a7p1120efjsn6c90df702ab7',
        'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
      }
    };
    console.log("API CALL - " + searchQuery);
    const data = await fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${searchQuery}`, options);
    const json = await data.json();
    console.log(json.videos);
  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img onClick={() => toggleMenuHandler()}
        className='h-8 cursor-pointer'
        alt="menu"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <img
        className='h-8 mx-2'
        alt="youtube-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className='col-span-10 ml-36'>
        <input
        className='w-3/4 border border-gray-400 rounded-l-full p-2'
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>
        🔍
        </button>
      </div>
      <div className="fixed bg-white py-2 px-2 col-span-10 ml-[26rem] w-96 mt-10 shadow-lg rounded-lg border border-gray-100">
          <ul>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100">go</li>
            <li className="py-2 px-3 shadow-sm hover:bg-gray-100">dhow</li>
          </ul>
      </div>
      <div className='col-span-1'>
        <img
        className='h-8'
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
      </div>
    </div>
  )
}

export default Head

