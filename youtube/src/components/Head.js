import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const searchCache = useSelector((store) => store.search);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

    /**
   *  searchCache = {
   *     "iphone": ["iphone 11", "iphone 14"]
   *  }
   *  searchQuery = iphone
   */

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
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
    console.log("API CALL - " + searchQuery);
    setSuggestions([
    {
        "id": "XaiDLr6utKI",
        "title": "vbvbv 1",
        "link": "https://youtu.be/XaiDLr6utKI",
        "thumbnail": "https://i.ytimg.com/vi/XaiDLr6utKI/hqdefault.jpg",
        "channel": {
            "id": "UCWVqH8WfgnzHU9e-nqKBBEg",
            "name": "sattan",
            "link": "https://www.youtube.com/@sattan30",
            "handle": "@sattan30",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_mo3g6cSXpMY2chk4O6xEnTVxdwX1U4OlP8WDmP6QjSU40=s0?imgmax=0"
        },
        "description": "My first 3D using Adobe After Efect.",
        "views": 25,
        "uploaded": "vor 10 Jahren",
        "duration": 2,
        "durationString": "0:02"
    },
    {
        "id": "hW1yjMfFr68",
        "title": "vbvbv",
        "link": "https://youtu.be/hW1yjMfFr68",
        "thumbnail": "https://i.ytimg.com/vi/hW1yjMfFr68/hqdefault.jpg",
        "channel": {
            "id": "UC_J6-BRT4kCuctzZ7IhpSIg",
            "name": "Jarmane Jarmane",
            "link": "https://www.youtube.com/@jarmanejarmane8236",
            "handle": "@jarmanejarmane8236",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_nbdc5AzjivOkOVFs1t3A1g2QWi7OLsMZHV2ihZTqZmqltNd7G5En2x7TJbw2Ac3mb2Bw=s0?imgmax=0"
        },
        "description": "",
        "views": 9,
        "uploaded": "vor 2 Jahren",
        "duration": 5,
        "durationString": "0:05"
    },
    {
        "id": "DwZ2mkHxSMQ",
        "title": "vbvbv",
        "link": "https://youtu.be/DwZ2mkHxSMQ",
        "thumbnail": "https://i.ytimg.com/vi/DwZ2mkHxSMQ/hqdefault.jpg",
        "channel": {
            "id": "UC87AG4wZY6jMibfhUt05ndg",
            "name": "MOlekata M103",
            "link": "https://www.youtube.com/@molekatam1038",
            "handle": "@molekatam1038",
            "verified": false,
            "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_k1tvuTtgKI2_KoZXxZ5RLcZvsrAP8oHlgD1x4eKnA=s0?imgmax=0"
        },
        "description": "",
        "views": 23,
        "uploaded": "vor 8 Jahren",
        "duration": 8,
        "durationString": "0:08"
    }
    ]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: [
          {
              "id": "XaiDLr6utKI",
              "title": "vbvbv 1",
              "link": "https://youtu.be/XaiDLr6utKI",
              "thumbnail": "https://i.ytimg.com/vi/XaiDLr6utKI/hqdefault.jpg",
              "channel": {
                  "id": "UCWVqH8WfgnzHU9e-nqKBBEg",
                  "name": "sattan",
                  "link": "https://www.youtube.com/@sattan30",
                  "handle": "@sattan30",
                  "verified": false,
                  "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_mo3g6cSXpMY2chk4O6xEnTVxdwX1U4OlP8WDmP6QjSU40=s0?imgmax=0"
              },
              "description": "My first 3D using Adobe After Efect.",
              "views": 25,
              "uploaded": "vor 10 Jahren",
              "duration": 2,
              "durationString": "0:02"
          },
          {
              "id": "hW1yjMfFr68",
              "title": "vbvbv",
              "link": "https://youtu.be/hW1yjMfFr68",
              "thumbnail": "https://i.ytimg.com/vi/hW1yjMfFr68/hqdefault.jpg",
              "channel": {
                  "id": "UC_J6-BRT4kCuctzZ7IhpSIg",
                  "name": "Jarmane Jarmane",
                  "link": "https://www.youtube.com/@jarmanejarmane8236",
                  "handle": "@jarmanejarmane8236",
                  "verified": false,
                  "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_nbdc5AzjivOkOVFs1t3A1g2QWi7OLsMZHV2ihZTqZmqltNd7G5En2x7TJbw2Ac3mb2Bw=s0?imgmax=0"
              },
              "description": "",
              "views": 9,
              "uploaded": "vor 2 Jahren",
              "duration": 5,
              "durationString": "0:05"
          },
          {
              "id": "DwZ2mkHxSMQ",
              "title": "vbvbv",
              "link": "https://youtu.be/DwZ2mkHxSMQ",
              "thumbnail": "https://i.ytimg.com/vi/DwZ2mkHxSMQ/hqdefault.jpg",
              "channel": {
                  "id": "UC87AG4wZY6jMibfhUt05ndg",
                  "name": "MOlekata M103",
                  "link": "https://www.youtube.com/@molekatam1038",
                  "handle": "@molekatam1038",
                  "verified": false,
                  "thumbnail": "https://yt3.ggpht.com/ytc/AIdro_k1tvuTtgKI2_KoZXxZ5RLcZvsrAP8oHlgD1x4eKnA=s0?imgmax=0"
              },
              "description": "",
              "views": 23,
              "uploaded": "vor 8 Jahren",
              "duration": 8,
              "durationString": "0:08"
          }
          ],
      })
    );
  };  


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
        <div>
          <input
            className='w-3/4 border border-gray-400 rounded-l-full p-2'
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            />
            <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>
            🔍
            </button>
        </div>
      </div>
      {
        showSuggestions && (
          <div className="fixed bg-white py-2 px-2 col-span-10 ml-[26rem] w-96 mt-10 shadow-lg rounded-lg border border-gray-100">
            <ul>
                {suggestions.map((s) => (
                  <li key={s.id} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                    🔍 {s.title}
                  </li>
                ))}
            </ul>
          </div>    
        )
      }
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

