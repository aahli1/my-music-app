import * as React from "react"
import Image from "next/image"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export function SecondCard() {
  return (
    <div className="flex justify-center gap-4">
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <Card key={index} className="w-[175px]"> {/* 50% of 350px */}
          <Image
            src="/img2.jpg" // replace with the correct path
            alt="Project Thumbnail"
            width={175} // Adjusted width
            height={100} // Adjusted height
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