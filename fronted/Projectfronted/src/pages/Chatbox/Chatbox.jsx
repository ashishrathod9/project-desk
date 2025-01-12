import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatByProject, sendMessage } from "../../Redux/Chat/Action";
import { useParams } from "react-router-dom";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const { auth, chat } = useSelector((store) => store);
  const { id } = useParams();
  const dispatch = useDispatch();

  
  // Fetch chat data only when `id` changes
  useEffect(() => {
    if (id) {
      dispatch(fetchChatByProject(id));
      
    }
  }, [id, dispatch]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value); // Only updates the input field's state
  };

  const handleSendMessage = () => {
    
    if (message.trim() === "") return; // Prevent sending empty messages

    dispatch(
      sendMessage({
        senderId: auth.username?.id,
        projectid: id,
        content: message,
      })
    );

    setMessage(""); // Clear the input field after sending the message
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Chat Header */}
      <div className="border rounded-lg flex-grow flex flex-col">
        <h1 className="border-b p-5 font-semibold">Chat Box</h1>

        {/* Messages Area */}
        <ScrollArea className="flex-grow p-5">
          <div className="flex flex-col gap-3">
            {chat.messages?.map((item, index) =>
              item.sender.id!=auth.username.id ? (
                // Left-aligned message
                <div className="flex gap-2 mb-2 justify-start" key={index}>
                  <Avatar>
                    <AvatarFallback> {item.sender?.username[0]} </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                    <p className="font-medium">{item.sender?.username}</p>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ) : (
                // Right-aligned message
                <div className="flex gap-2 mb-2 justify-end" key={index}>
                  <Avatar>
                    <AvatarFallback> A </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                    <p className="font-medium">{auth.username?.username}</p>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </ScrollArea>

        {/* Input and Send Button */}
        <div className="relative p-0">
          <Input
            placeholder="Type message..."
            className="py-7 border-t outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
            value={message}
            onChange={handleMessageChange} // Only updates local state
          />
          <Button
            onClick={handleSendMessage} // Sends the message only on click
            className="absolute right-2 top-3 rounded-full"
            size="icon"
            variant="ghost"
          >
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
