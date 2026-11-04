import { Button } from '@/shared/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router'

const GoBackBtn = () => {
  const navigate = useNavigate()
  return (
    <Button onClick={() => navigate(-1)} variant={'ghost'} size={'sm'} className={'mb-4 text-muted-foreground flex items-center gap-2'}><ArrowLeft />Back</Button>
  )
}

export default GoBackBtn