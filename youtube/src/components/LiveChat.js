import React from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
  return (
    <div className="w-full h-[600px] ml-2 p-2 border border-blue-200 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <ChatMessage
            name="arpan singh"
            message="This is namaste video!"
        />
        <ChatMessage
            name="arpan singh"
            message="This is namaste video!"
        />
    </div>
  )
}

export default LiveChat