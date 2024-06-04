import { RatingProps } from '@/types/product'
import { Container } from './styled'
import StarIcon from '@mui/icons-material/Star'

export const Rating = ({ ratingNumber }: RatingProps) => {
  return (
    <Container>
      {Array(ratingNumber)
        .fill(<StarIcon className="product__star" />)
        .map((item, key) => (
          <p key={key}>{item}</p>
        ))}
    </Container>
  )
}
