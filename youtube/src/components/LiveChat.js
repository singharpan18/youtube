import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const ChatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
          // API Polling
          dispatch(
            addMessages({
              name: generateRandomName(),
              message: makeRandomMessage(20) + " 🚀",
            })
          );
        }, 2000);
    
        return () => clearInterval(i);
      }, []);
    
  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-blue-200 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // Disclaimer: Don't use indexes as keys
            ChatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
    </div>
  )
}

export default LiveChat