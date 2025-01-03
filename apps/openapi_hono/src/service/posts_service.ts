import type { Post } from '@prisma/client'
import prisma from '../infra/index.js'

export async function postPosts(post: string): Promise<Post> {
  return await prisma.post.create({
    data: {
      post,
    },
  })
}

export async function getPosts(limit: number, offset: number): Promise<Post[]> {
  return await prisma.post.findMany({
    take: limit,
    skip: offset,
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export async function putPostsId(id: string, post: string): Promise<Post> {
  return await prisma.post.update({
    where: { id },
    data: { post },
  })
}

export async function deletePostsId(id: string): Promise<Post> {
  return await prisma.post.delete({
    where: { id },
  })
}
