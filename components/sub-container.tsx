import { cn } from "@/lib/utils"

const SubContainer = ({ children, className } : { children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("max-w-6xl mx-auto w-full h-auto", className)}>
      {children}
    </div>
  )
}
export default SubContainer