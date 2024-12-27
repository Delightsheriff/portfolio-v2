import { Code2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface EmptyStateProps {
  message?: string
  ctaText?: string
  ctaHref?: string
}

export function EmptyState({
  message = "No projects to showcase yet",
  ctaText = "Check out my GitHub",
  ctaHref = "https://github.com/Delightsheriff"
}: EmptyStateProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        <Code2 className="w-12 h-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">{message}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          I&apos;m currently working on exciting projects. 
          They&apos;ll appear here once they&apos;re ready to be showcased.
        </p>
        <Button asChild>
          <a href={ctaHref} target="_blank" rel="noopener noreferrer">
            {ctaText}
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

