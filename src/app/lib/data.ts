export interface Blog {
  id: string;
  title: string;
  content: string;
  image:string;
  des:string;
}

export interface Comment {
  id: string;
  blogId: string;
  author: string;
  content: string;
  date: string;
}

export const blogs: Blog[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    content: 'Next.js is a powerful React framework that enables developers to build scalable, performant, and production-ready web applications with minimal configuration. Developed by Vercel, Next.js has become a popular choice for developers looking to enhance their workflow with features like server-side rendering (SSR), static site generation (SSG), and API routes In this blog, well walk you through the basics of getting started with Next.js, from setting up a project to deploying it.key features of Next.js, and how to get started with your first Next.js project', 
    image: '/images-v2/nextjs.png',
    des:""
  },
  {
    id: '2',
    title: 'Introduction to Payload CMS',
    content: 'Payload CMS is a modern, self-hosted content management system (CMS) built with JavaScript and TypeScript. Designed for developers, it offers full control over content modeling, extensibility, and performance while providing an intuitive admin interface for non-technical users. Whether youe building a blog, e-commerce platform, or a custom application, Payload CMS empowers you to manage content effectively.',
    image: '/images-v2/paylod.png',
    des:" Why Choose Payload CMS?Payload CMS stands out for several reasons: Headless Architecture: Provides APIs to access content, making it ideal for modern web applications."
  },
  {
    id: '3',
    title: 'Introduction to Sanity',
    content: 'Sanity is a modern, headless content management system (CMS) designed to give developers and content creators unparalleled flexibility and control. Built with a focus on structured content, Sanity allows you to manage and deliver content across multiple platforms and devices with ease. With its real-time collaboration features, powerful APIs, and customizable interface, Sanity has become a popular choice for building scalable and dynamic web applications.',
    image: '/images-v2/sanity.png',
    des:"Why Choose Sanity? Sanity offers a host of features that make it stand out in the crowded CMS space:Structured Content: Create reusable and structured content that can be easily delivered to multiple platforms."
  },
  
];

export const comments: Comment[] = [
  {
    id: '1',
    blogId: '1',
    author: 'Alice',
    content: 'Great introduction to Next.js!',
    date: '2023-01-16',
  },
  {
    id: '2',
    blogId: '1',
    author: 'Bob',
    content: 'I found this very helpful. Thanks!',
    date: '2023-01-17',
  },
 
];

