import Link from 'next/link'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { blogs } from '@/app/lib/data'

export default function BlogList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <Card key={blog.id} className="flex flex-col hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="relative w-full h-48 mb-4">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <CardTitle className="line-clamp-2">{blog.title}</CardTitle>

          </CardHeader>
          <CardContent className="flex-grow">
            <p className="line-clamp-3">{blog.content}</p>
          </CardContent>
          <CardFooter>
            <Link href={`/blog/${blog.id}`} passHref>
              <Button>Read More</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

