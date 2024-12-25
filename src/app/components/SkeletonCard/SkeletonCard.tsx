import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function SkeletonCard() {
  return (
    <>
        <Card className='p-5 flex flex-col items-center gap-3'>
            <Skeleton className='w-64 h-6 mb-10'></Skeleton>
            <Skeleton className='w-40 h-36 mb-5'></Skeleton>
            
            <Skeleton className='w-96 h-3'></Skeleton>
            <Skeleton className='w-96 h-3'></Skeleton>
            <Skeleton className='w-96 h-3 mb-5'></Skeleton>
            <div className='flex items-center justify-between w-96'>
                <Skeleton className='w-14 h-8'></Skeleton>
                <Skeleton className='w-20 h-8'></Skeleton>
                <Skeleton className='w-40 h-8'></Skeleton>
            </div>
        </Card>
    </>
  )
}
