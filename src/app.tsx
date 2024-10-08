import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FC, ReactNode, useRef } from 'react'
import { Input, InputProps } from './components/ui/input'
import { cn } from './lib/utils'

export const App = () => (
  <Card>
    <CardHeader>
      <CardTitle>Input Example</CardTitle>
    </CardHeader>
    <CardContent className="grid gap-6">
      Normal input
      <Input />
      Custom input
      <CustomInput startElement={'Precentage'} endElement={'%'} />
    </CardContent>
  </Card>
)

export const CustomInput: FC<
  InputProps & {
    startElement?: ReactNode
    endElement?: ReactNode
    className?: string
    inputClassName?: string
  }
> = ({ startElement, endElement, className, inputClassName, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <label
      className={cn(
        'flex gap-2 items-center flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
    >
      {startElement}
      <input ref={inputRef} className={cn('flex-gorw w-full py-2 focus:outline-none', inputClassName)} {...props} />
      {endElement}
    </label>
  )
}
