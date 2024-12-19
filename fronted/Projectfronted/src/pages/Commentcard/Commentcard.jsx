import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Trash2 } from 'lucide-react'

const CommentCard = () => {
  return (
    <div className="flex items-start justify-between p-4 rounded-lg shadow-sm border">
      <div className="flex items-start gap-4">
        <Avatar className="w-10 h-10">
          <AvatarFallback> A </AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p className="font-medium text-sm text-gray-400">Code with zosh</p>
          <p className="text-sm text-gray-500">How much work is pending?</p>
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        className="rounded-full hover:bg-red-100 hover:text-red-600 transition-colors"
        aria-label="Delete comment"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default CommentCard

