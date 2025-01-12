import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@components/ui/card'
import React from 'react'

export default function Page() {
  return (
    <section className='layout flex flex-1 flex-col items-center justify-center py-12 text-center'>
      <h1 className='mb-4 text-4xl font-bold'>
        Welcome to Codemelt Starter Kit
      </h1>
      <p className='text-muted-foreground mb-8 text-xl'>
        A powerful foundation for your Next.js projects
      </p>

      <div className='mb-12 grid grid-cols-1 gap-6 md:grid-cols-2'>
        <FeatureCard
          title='Next.js 14'
          description='Built on the latest version of Next.js for optimal performance and developer experience.'
        />
        <FeatureCard
          title='TypeScript'
          description='Fully typed codebase for better maintainability and fewer runtime errors.'
        />
        <FeatureCard
          title='Tailwind CSS'
          description='Rapidly build modern websites without ever leaving your HTML.'
        />
        <FeatureCard
          title='Shadcn UI'
          description='Beautiful and accessible components for your Next.js applications.'
        />
      </div>
    </section>
  )
}

function FeatureCard({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
