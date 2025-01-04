'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { comments as initialComments, Comment } from '@/app/lib/data'

export default function CommentSection({ blogId }: { blogId: string }) {
  const [comments, setComments] = useState<Comment[]>(
    initialComments.filter((c) => c.blogId === blogId)
  )
  const [newComment, setNewComment] = useState('')
  const [username, setUsername] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      blogId,
      author: username || 'Anonymous', // Use the entered username or 'Anonymous' if empty
      content: newComment,
      date: new Date().toISOString().split('T')[0],
    }

    setComments([...comments, comment])
    setNewComment('')
    setUsername('')
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <div className="space-y-4 mb-8">
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardHeader>
              <CardTitle className="text-lg">{comment.author}</CardTitle>
              <p className="text-sm text-gray-500">{comment.date}</p>
            </CardHeader>
            <CardContent>
              <p>{comment.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your name (optional)"
          className="w-full mb-2"
        />
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full"
        />
        <Button type="submit">Post Comment</Button>
      </form>
    </div>
  )
}

