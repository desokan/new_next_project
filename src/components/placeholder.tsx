import { LucideMessageSquareWarning } from 'lucide-react'
import { cloneElement } from 'react'

type PlaceholderProps = {
  label: string
  // Explicitly declare that icon and button can accept a className prop.
  // The icon and button props are generic React.ReactElement types, but TypeScript needs confirmation that these elements can accept className as a valid prop.
  icon?: React.ReactElement<{ className?: string }> // Add className type
  button?: React.ReactElement<{ className?: string }> // Add className type
}

const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon, {
        // If the original icon/button already has a className, your code will replace it instead of merging classes (e.g., Tailwind styles might conflict).
        // Preserve existing classes (if any) and append new ones.
        className: `${icon.props.className || ''} w-16 h-16`, // Merge classes
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: `${button.props.className || ''} h-10`, // Merge classes
      })}
    </div>
  )
}

export { Placeholder }

// ORIGINAL CODE FROM THE COURSE
// import { LucideMessageSquareWarning } from 'lucide-react'
// import { cloneElement } from 'react'

// type PlaceholderProps = {
//   label: string
//   icon?: React.ReactElement
//   button?: React.ReactElement
// }

// const Placeholder = ({
//   label,
//   icon = <LucideMessageSquareWarning />,
//   button = <div />,
// }: PlaceholderProps) => {
//   return (
//     <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
//       {cloneElement(icon, { className: 'w-16 h-16' })}
//       <h2 className="text-lg text-center">{label}</h2>
//       {cloneElement(button, { className: 'h-10' })}
//     </div>
//   )
// }

// export { Placeholder }
