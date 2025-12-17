import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-4 text-center">
            <h1 className="text-9xl font-bold text-primary/20">404</h1>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground max-w-md">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild size="lg" className="rounded-2xl">
                <Link href="/">Go back home</Link>
                </Button>
            </div>
        </div>
    );
}
