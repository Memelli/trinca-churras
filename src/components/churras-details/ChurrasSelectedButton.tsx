import clsx from 'clsx'

export default function ChurrasSelectedButton({
  isSelected,
}: {
  isSelected: boolean
}) {
  return (
    <button
      className={clsx(
        'h-[20px] w-[20px] rounded-full',
        isSelected ? 'bg-[#FFD836]' : 'border-[#998220] border-[3px]',
      )}
    />
  )
}
