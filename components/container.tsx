import { cn } from "@/lib/utils"

const Container = ({ children, className } : { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("max-w-screen-2xl w-full mx-auto h-auto", className )}>
        {children}
    </div>
  )
}
export default Container