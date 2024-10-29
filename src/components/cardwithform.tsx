import * as React from "react"
import Image from "next/image"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export function CardWithImageOnly() {
  return (
    <div className="flex justify-center gap-4">
      {[1, 2, 3].map((item, index) => (
        <Card key={index} className="w-[350px]">
          <Image
            src="/img1.jpg" // replace with the correct path
            alt="Project Thumbnail"
            width={350}
            height={200}
            className="rounded-t-lg"
          />
          <CardHeader>
            <CardTitle>Project {item}</CardTitle>
            <CardDescription>A brief project description.</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
